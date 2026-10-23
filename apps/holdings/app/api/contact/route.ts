import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact";

/**
 * Validates contact-form submissions and forwards them to CONTACT_WEBHOOK_URL.
 * Without a configured webhook it answers 503 so the form can tell the visitor
 * to email or call instead of claiming the message was delivered.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if ("company_website" in body && (body as { company_website?: unknown }).company_website) {
    return NextResponse.json({ ok: false, error: "rejected" }, { status: 400 });
  }

  const { data, errors } = validateContact(body as Record<string, unknown>);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", errors }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "arismile-holdings-website", submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
