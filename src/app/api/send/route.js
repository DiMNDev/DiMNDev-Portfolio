import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;
const webFormEmail = process.env.WEB_FORM_EMAIL;

export async function POST(req, res) {
  const { firstName, email, subject, message } = await req.json();

  try {
    // Thank you email
    const thankYou = await resend.emails.send({
      from: `DiMNDev <${fromEmail}>`,
      to: [email],
      subject: "Thank You!",
      react: (
        <>
          <h1>{`Hello ${firstName ? firstName : "friend"},`}</h1>
          <p>I am excited to hear from you!</p>
          <p>I have recieved your message and will get back to you soon!</p>
          <p>Thank you!</p>
          <p>Joshua Arnold</p>
        </>
      ),
    });
    // Web form email
    const data = await resend.emails.send({
      from: `Web Form <${webFormEmail}>`,
      to: [toEmail],
      subject: subject,
      react: (
        <>
          <h1>{`From: ${firstName}`}</h1>
          <h3>{email}</h3>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
