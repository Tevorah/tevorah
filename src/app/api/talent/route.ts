import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM ?? "noreply@tevorah.com";
const TO = "support@tevorah.com";

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:6px 12px;font-weight:600;color:#707887;white-space:nowrap;vertical-align:top;font-size:13px;">${label}</td>
      <td style="padding:6px 12px;color:#090B10;font-size:13px;">${value}</td>
    </tr>`;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const get = (k: string) => (formData.get(k) as string | null) ?? "";
    const name = get("fullName");
    const email = get("email");
    const phone = get("phone");
    const currentPosition = get("currentPosition");
    const yearsExperience = get("yearsExperience");
    const primaryArea = get("primaryArea");
    const technologies = get("technologies");
    const linkedInUrl = get("linkedInUrl");
    const portfolioUrl = get("portfolioUrl");
    const opportunityPreference = get("opportunityPreference");

    const cvBlob = formData.get("cv") as File | null;

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F5F7FA;font-family:system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;border:1px solid #E5E7EB;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#7C5CFF,#45DDF5);padding:24px 32px;">
            <p style="margin:0;color:#fff;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;opacity:0.8;">Tevorah</p>
            <h1 style="margin:6px 0 0;color:#fff;font-size:20px;font-weight:700;">New Talent Registration</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${[
                row("Name", name),
                row("Email", email),
                row("Phone / WhatsApp", phone),
                row("Current position", currentPosition),
                row("Years of experience", yearsExperience),
                row("Primary area", primaryArea),
                row("Technologies / Skills", technologies),
                row("LinkedIn", linkedInUrl || "—"),
                row("Portfolio / GitHub", portfolioUrl || "—"),
                row("Opportunity preference", opportunityPreference || "—"),
                row("CV attached", cvBlob ? cvBlob.name : "No"),
              ].join("")}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px;background:#F5F7FA;border-top:1px solid #E5E7EB;">
            <p style="margin:0;font-size:11px;color:#A6ADBB;">Sent automatically from the Tevorah website · <a href="https://tevorah.com" style="color:#7C5CFF;">tevorah.com</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const attachments: { filename: string; content: Buffer }[] = [];
    if (cvBlob) {
      const arrayBuffer = await cvBlob.arrayBuffer();
      attachments.push({
        filename: cvBlob.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New Talent Registration — ${name}`,
      html,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Talent API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
