import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return Response.json({ error: "Please complete the required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000 || service.length > 100) {
      return Response.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      return Response.json({ error: "Email service is not configured yet." }, { status: 503 });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Mutegi Alex Portfolio <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `New portfolio enquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service || "Not specified")}</p>
          <h3>Project details</h3>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error: "Unable to send your message right now." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
