import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const forwardUrl = process.env.CONTACT_FORWARD_URL;

  if (forwardUrl) {
    try {
      await fetch(forwardUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, source: "pallavi-portfolio-site" }),
      });
    } catch (err) {
      console.error("[contact] failed to forward submission", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
  } else {
    // No forwarding URL configured — log so the submission isn't silently
    // dropped during local development or before CONTACT_FORWARD_URL is set.
    console.log("[contact] submission (not forwarded, CONTACT_FORWARD_URL unset):", {
      name,
      email,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
