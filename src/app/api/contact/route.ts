import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const getContactEnv = () => {
  const { RESEND_API_KEY, CONTACT_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_EMAIL) return null
  return { RESEND_API_KEY, CONTACT_EMAIL }
}

export const POST = async (req: Request) => {
  try {
    const env = getContactEnv()

    if (!env) {
      return NextResponse.json({ error: '메일 설정이 누락되었습니다.' }, { status: 500 })
    }

    const { name, email, message } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: '모든 필드를 입력해주세요.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '유효한 이메일 주소를 입력해주세요.' }, { status: 400 })
    }

    const resend = new Resend(env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: env.CONTACT_EMAIL,
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
    console.log(e)
    return NextResponse.json({ error: '이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 500 })
  }
}
