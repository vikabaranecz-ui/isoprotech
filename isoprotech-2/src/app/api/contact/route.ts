// src/app/api/contact/route.ts
// Contact form API handler — validates, rate-limits, sanitises, sends email

import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/form";

// ── Rate limiter ──────────────────────────────────────────────────────────
// Uses an in-memory Map for single-instance deployments.
// For multi-instance / serverless: replace with Redis (e.g. Upstash):
//   import { Redis } from '@upstash/redis'
//   const redis = Redis.fromEnv()
//
const submissions = new Map<string, number[]>();
const RATE_LIMIT  = 3;           // max submissions per key per window
const RATE_WINDOW = 600_000;     // 10 minutes in ms

/**
 * Build a rate-limit key that is harder to spoof than a bare IP.
 * Combines the IP with a coarse-grained User-Agent bucket so that
 * an attacker who rotates IPs is still slowed by the UA component.
 *
 * NOTE: This is a defence-in-depth measure, not a cryptographic guarantee.
 * For stronger protection add Cloudflare Turnstile / hCaptcha on the form.
 */
function buildRateLimitKey(request: NextRequest): string {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Coarse UA bucket: just the first 40 chars avoids fingerprinting while
  // still providing a secondary signal.
  const ua = (request.headers.get("user-agent") || "").slice(0, 40);

  return `contact:${ip}:${ua}`;
}

function isRateLimited(key: string): boolean {
  const now    = Date.now();
  const history = submissions.get(key) || [];
  const recent  = history.filter((t) => now - t < RATE_WINDOW);
  submissions.set(key, recent);
  return recent.length >= RATE_LIMIT;
}

function recordSubmission(key: string): void {
  const history = submissions.get(key) || [];
  history.push(Date.now());
  submissions.set(key, history);
}

// Prevent the Map from growing unboundedly between deploys
// (in-memory state survives hot-reloads in dev but resets in production).
setInterval(() => {
  const cutoff = Date.now() - RATE_WINDOW;
  for (const [key, times] of submissions.entries()) {
    const trimmed = times.filter((t) => t > cutoff);
    if (trimmed.length === 0) submissions.delete(key);
    else submissions.set(key, trimmed);
  }
}, RATE_WINDOW);

// ── HTML sanitisation for email template ─────────────────────────────────
// Zod already validates length and format, but we still escape HTML
// special characters before embedding values in the email body to prevent
// HTML injection through the message field.
function escHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ── POST handler ──────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // 1. Content-type guard
    const ct = request.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return NextResponse.json({ error: "Ongeldig verzoekformaat." }, { status: 415 });
    }

    // 2. Rate limiting — checked BEFORE parsing body to resist DoS
    const rlKey = buildRateLimitKey(request);
    if (isRateLimited(rlKey)) {
      return NextResponse.json(
        { error: "Te veel aanvragen. Probeer het later opnieuw." },
        { status: 429 }
      );
    }

    // 3. Parse body (with size guard — Next.js default body limit is 1 MB)
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Ongeldig JSON-formaat." }, { status: 400 });
    }

    // 4. Honeypot check (must come after parse, before validation)
    if (
      body !== null &&
      typeof body === "object" &&
      "website" in body &&
      typeof (body as { website: unknown }).website === "string" &&
      (body as { website: string }).website.length > 0
    ) {
      // Silently succeed — bots should not know they were detected
      return NextResponse.json({ success: true });
    }

    // 5. Server-side schema validation (Zod)
    const result = validateContactForm(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validatiefout",
          fieldErrors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // 6. Record submission BEFORE sending email to prevent replay under load
    recordSubmission(rlKey);

    // 7. Send email via Resend (uncomment and set RESEND_API_KEY in .env)
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'noreply@isoprotech.be',
    //   to:   'info@isoprotech.be',
    //   replyTo: data.email,
    //   subject: `Nieuwe aanvraag: ${data.service} — ${data.name}`,
    //   html: `
    //     <h2>Nieuwe offerte-aanvraag via isoprotech.be</h2>
    //     <table>
    //       <tr><td><strong>Naam:</strong></td>    <td>${escHtml(data.name)}</td></tr>
    //       <tr><td><strong>Telefoon:</strong></td><td>${escHtml(data.phone)}</td></tr>
    //       <tr><td><strong>E-mail:</strong></td>  <td>${escHtml(data.email)}</td></tr>
    //       <tr><td><strong>Dienst:</strong></td>  <td>${escHtml(data.service)}</td></tr>
    //     </table>
    //     <p><strong>Bericht:</strong><br>${escHtml(data.message || '(geen bericht)').replace(/\n/g, '<br>')}</p>
    //     <hr>
    //     <p><small>Verzonden via het contactformulier op isoprotech.be</small></p>
    //   `,
    // });

    // 8. Structured log — intentionally omits the message body (privacy)
    console.log("[Contact Form]", {
      service:   data.service,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return NextResponse.json(
      { error: "Er is een fout opgetreden. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
