import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: `DiMNDev <${fromEmail}>`,
      to: [email],
      bcc: [toEmail],
      subject: subject || "Hello World",
      react: (
        <>
          <h1>{subject || "Good Morning World!"}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message || "This is a test!"}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
