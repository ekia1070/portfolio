import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export const POST = async (request: Request) => {
  const body = await request.json()
  const { name, email, message } = body as { name: string; email: string; message: string }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: '모든 필드를 입력해주세요.' }, { status: 400 })
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return NextResponse.json({ error: '입력값이 너무 깁니다.' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email) || /[<>\r\n]/.test(email)) {
    return NextResponse.json({ error: '유효한 이메일 주소를 입력해주세요.' }, { status: 400 })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message)

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    subject: `[Portfolio] ${safeName}님의 메시지`,
    replyTo: email,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">새 문의가 도착했습니다</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555; width: 80px;">이름</td>
            <td style="padding: 8px 0;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">이메일</td>
            <td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
        <h3 style="color: #555; margin-bottom: 8px;">메시지</h3>
        <p style="line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: '이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
