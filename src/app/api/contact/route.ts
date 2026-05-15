import { Resend } from "resend";
import { NextResponse } from "next/server";

const getContactEnv = () => {
  const { RESEND_API_KEY, CONTACT_EMAIL } = process.env;

  if (!RESEND_API_KEY || !CONTACT_EMAIL) {
    return null;
  }

  return { RESEND_API_KEY, CONTACT_EMAIL };
}

export const POST = async (req: Request) => {
  try {
    const env = getContactEnv();

    if (!env) {
      return NextResponse.json(
        { message: "메일 설정이 누락되었습니다." },
        { status: 500 }
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "필수 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: env.CONTACT_EMAIL,
      subject: `[Portfolio] ${name}님 문의`,
      replyTo: email,
      text: `
이름: ${name}
이메일: ${email}

문의 내용:
${message}
      `,
    });

    return NextResponse.json({ message: "메일이 전송되었습니다." });
  } catch {
    return NextResponse.json(
      { message: "메일 전송에 실패했습니다." },
      { status: 500 }
    );
  }
};
