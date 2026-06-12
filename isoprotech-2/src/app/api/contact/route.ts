// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/form";

const MONDAY_API = "https://api.monday.com/v2";
const BOARD_ID = process.env.MONDAY_BOARD_ID ?? "5094302330";

const SERVICE_TO_MONDAY: Record<string, string> = {
  gevelwerken: "gevelwerken",
  dakwerken: "dakwerken",
  asbestverwijdering: "asbestverwijdering",
};

const submissions = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 600_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW);
  submissions.set(ip, recent);
  return recent.length >= RATE_LIMIT;
}

function recordSubmission(ip: string) {
  const history = submissions.get(ip) ?? [];
  history.push(Date.now());
  submissions.set(ip, history);
}

async function createMondayLead(data: {
  name: string;
  email: string;
  phone: string;
  region: string;
  service: string;
  message: string;
}) {
  const token = process.env.MONDAY_API_TOKEN;
  if (!token) throw new Error("MONDAY_API_TOKEN not set");

  const mondayService = SERVICE_TO_MONDAY[data.service];
  const today = new Date().toISOString().split("T")[0];

  const columnValues: Record<string, unknown> = {
    lead_email: { email: data.email, text: data.email },
    lead_phone: { phone: data.phone, countryShortName: "BE" },
    text_mm27fswx: data.region,
    text_mm27ak9k: data.message || "",
    date_mm2ez375: { date: today },
    color_mkyb8krc: { index: 105 },
  };

  if (mondayService) {
    columnValues.dropdown_mm27rsb6 = { labels: [mondayService] };
  }

  const query = `
    mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
      create_item(board_id: $boardId, item_name: $itemName, column_values: $columnValues) {
        id
      }
    }
  `;

  const variables = {
    boardId: BOARD_ID,
    itemName: data.name,
    columnValues: JSON.stringify(columnValues),
  };

  const res = await fetch(MONDAY_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "API-Version": "2024-01",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data.create_item.id;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Te veel aanvragen. Probeer het later opnieuw." },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (body.website && body.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    const result = validateContactForm(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validatiefout", fieldErrors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    await createMondayLead({
      name: data.name,
      email: data.email,
      phone: data.phone,
      region: data.region ?? "",
      service: data.service,
      message: data.message ?? "",
    });

    recordSubmission(ip);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact] Monday error:", err);
    return NextResponse.json(
      { error: "Er is een fout opgetreden. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
