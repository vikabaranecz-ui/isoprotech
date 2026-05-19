"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie_consent";

type ConsentValue = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function pushConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "cookie_consent_update",
    cookie_consent: value,
  });
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    pushConsent("accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    pushConsent("rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-8"
      >
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
          🍪
        </div>

        <h2
          id="cookie-banner-title"
          className="mb-2 text-xl font-extrabold text-gray-900"
        >
          Wij gebruiken cookies
        </h2>

        <p className="mb-1 text-sm text-gray-600 leading-relaxed">
          We gebruiken cookies om uw ervaring te verbeteren en het websiteverkeer
          te analyseren. Analytische en marketing&shy;cookies worden alleen
          geplaatst met uw toestemming.
        </p>

        <p className="mb-6 text-xs text-gray-400">
          Meer informatie:{" "}
          <Link
            href="/cookies"
            className="underline text-teal-700 hover:text-teal-900"
            onClick={reject}
          >
            cookiebeleid
          </Link>
          .
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={accept}
            className="flex-1 rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Alles accepteren
          </button>
          <button
            onClick={reject}
            className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Alleen noodzakelijk
          </button>
        </div>
      </div>
    </div>
  );
}
