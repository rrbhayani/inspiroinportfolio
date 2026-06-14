import { NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/mail";

function parseBody(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();

  if (!name || !email || !message) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (message.length < 10) return null;

  return {
    name,
    email,
    message,
    company: String(data.company || "").trim() || undefined,
    projectType: String(data.projectType || "").trim() || undefined,
    budget: String(data.budget || "").trim() || undefined,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseBody(body);

    if (!payload) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    await sendContactEmail(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
