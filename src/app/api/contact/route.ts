import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "support@tevorah.com";

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:6px 12px;font-weight:600;color:#707887;white-space:nowrap;vertical-align:top;font-size:13px;">${label}</td>
      <td style="padding:6px 12px;color:#090B10;font-size:13px;">${value}</td>
    </tr>`;
}

function emailHtml(title: string, rows: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F5F7FA;font-family:system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;border:1px solid #E5E7EB;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#7C5CFF,#45DDF5);padding:24px 32px;">
            <p style="margin:0;color:#fff;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;opacity:0.8;">Tevorah</p>
            <h1 style="margin:6px 0 0;color:#fff;font-size:20px;font-weight:700;">${title}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${rows}
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
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const FROM = process.env.RESEND_FROM ?? "noreply@tevorah.com";
    const body = await req.json();
    const { formType, ...data } = body as { formType: string; [k: string]: string };

    let subject: string;
    let html: string;

    if (formType === "build-team") {
      subject = `New Team Build Request — ${data.name || "unknown"}`;
      html = emailHtml("New Team Build Request", [
        row("Name", data.name),
        row("Email", data.email),
        row("Company", data.company || "—"),
        row("Role hiring for", data.role),
        row("Timeline", data.timeline || "—"),
        row("Additional notes", data.notes || "—"),
      ].join(""));
    } else if (formType === "partner") {
      subject = `New Partner Application — ${data.company || data.name}`;
      html = emailHtml("New Partner Application", [
        row("Name", data.name),
        row("Email", data.email),
        row("Organisation", data.company),
        row("Website", data.website || "—"),
        row("Partner type", data.partnerType),
        row("About their org", data.description),
      ].join(""));
    } else {
      return NextResponse.json({ error: "Unknown formType" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
