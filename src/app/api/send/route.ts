import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { success, data, error } = Email.safeParse(body);

    if (!success) {
      return Response.json({ error: error?.message }, { status: 400 });
    }

    const { fullName, email, message } = data;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({ fullName, email, message }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
