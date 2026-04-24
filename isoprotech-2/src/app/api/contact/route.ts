// src/app/api/contact/route.ts
// Contact form API handler — validates, rate-limits, sends email

import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/form";

// In production: import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (use Redis in production)
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 3; // max submissions per IP
const RATE_WINDOW = 600_000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const history = submissions.get(ip) || [];
  const recent = history.filter((t) => now - t < RATE_WINDOW);
  submissions.set(ip, recent);
  return recent.length >= RATE_LIMIT;
}

function recordSubmission(ip: string) {
  const history = submissions.get(ip) || [];
  history.push(Date.now());
  submissions.set(ip, history);
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Te veel aanvragen. Probeer het later opnieuw." },
        { status: 429 }
      );
    }

    // 2. Parse body
    const body = await request.json();

    // 3. Honeypot check
    if (body.website && body.website.length > 0) {
      // Bot detected — return fake success
      return NextResponse.json({ success: true });
    }

    // 4. Server-side validation
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

    // 5. Send email
    // In production with Resend:
    //
    // await resend.emails.send({
    //   from: 'website@isoprotech.be',
    //   to: 'info@isoprotech.be',
    //   subject: `Nieuwe aanvraag: ${data.service} — ${data.name}`,
    //   html: `
    //     <h2>Nieuwe offerte-aanvraag via isoprotech.be</h2>
    //     <p><strong>Naam:</strong> ${data.name}</p>
    //     <p><strong>Telefoon:</strong> ${data.phone}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Dienst:</strong> ${data.service}</p>
    //     <p><strong>Bericht:</strong></p>
    //     <p>${data.message || '(geen bericht)'}</p>
    //     <hr>
    //     <p><small>Verzonden via het contactformulier op isoprotech.be</small></p>
    //   `,
    // });

    // 6. Record submission for rate limiting
    recordSubmission(ip);

    // 7. Log for debugging (replace with proper logging in production)
    console.log("[Contact Form]", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
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
