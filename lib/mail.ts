import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
};

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendContactEmail(payload: ContactPayload) {
  const to = process.env.MAIL_TO || process.env.SMTP_USER;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  if (!to || !from) {
    throw new Error("MAIL_TO or MAIL_FROM is not configured.");
  }

  const transporter = getTransporter();

  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : null,
    payload.projectType ? `Project type: ${payload.projectType}` : null,
    payload.budget ? `Budget: ${payload.budget}` : null,
    "",
    "Message:",
    payload.message,
  ].filter(Boolean);

  await transporter.sendMail({
    from: `"INSPIROIN Contact" <${from}>`,
    to,
    replyTo: payload.email,
    subject: `New inquiry from ${payload.name}${payload.company ? ` (${payload.company})` : ""}`,
    text: lines.join("\n"),
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
      ${payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : ""}
      ${payload.projectType ? `<p><strong>Project type:</strong> ${escapeHtml(payload.projectType)}</p>` : ""}
      ${payload.budget ? `<p><strong>Budget:</strong> ${escapeHtml(payload.budget)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
