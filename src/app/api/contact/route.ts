import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { checkRateLimit } from '@/lib/rateLimit'

const contactSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.').max(100),
  email: z.string().email('유효한 이메일 주소를 입력해주세요.'),
  message: z.string().min(10, '메시지를 10자 이상 입력해주세요.').max(2000),
  // honeypot — must be empty
  website: z.string().max(0),
  turnstileToken: z.string().min(1),
})

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return false

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, response: token }),
  })

  const data = await res.json() as { success: boolean }
  return data.success
}

export const POST = async (req: Request) => {
  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  const { allowed, retryAfterSec } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: `요청이 너무 많습니다. ${Math.ceil(retryAfterSec / 60)}분 후에 다시 시도해주세요.` },
      { status: 429, headers: { 'Retry-After': String(retryAfterSec) } }
    )
  }

  // Parse & Zod validate
  const body = await req.json().catch(() => null)
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? '입력값을 확인해주세요.'
    return NextResponse.json({ error: message }, { status: 400 })
  }

  const { name, email, message, website, turnstileToken } = parsed.data

  // Honeypot check
  if (website !== '') {
    // Silently accept to not tip off bots
    return NextResponse.json({ success: true })
  }

  // Turnstile verification
  const turnstileOk = await verifyTurnstile(turnstileToken)
  if (!turnstileOk) {
    return NextResponse.json({ error: '보안 인증에 실패했습니다. 다시 시도해주세요.' }, { status: 400 })
  }

  // Send email
  const { RESEND_API_KEY, CONTACT_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_EMAIL) {
    return NextResponse.json({ error: '메일 설정이 누락되었습니다.' }, { status: 500 })
  }

  try {
    const resend = new Resend(RESEND_API_KEY)

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      subject: `[Portfolio] ${name}님의 메시지`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">새 문의가 도착했습니다</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 80px;">이름</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">이메일</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <h3 style="color: #555; margin-bottom: 8px;">메시지</h3>
          <p style="line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: '이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 500 })
  }
}
