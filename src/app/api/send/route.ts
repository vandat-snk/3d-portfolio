import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email("Invalid email address!"),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, message } = EmailSchema.parse(body);

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["youremail@example.com"], // 👉 đổi thành email thật của bạn
      subject: `New message from ${fullName}`,
      reply_to: email,
      text: message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
