import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bedankt voor uw aanvraag",
  description: "We hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op.",
  alternates: { canonical: `${BRAND.url}/bedankt` },
  robots: { index: false, follow: false },
};

export default function BedanktPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-stone-50 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="h-11 w-11 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-teal-800 mb-3">
          Bedankt voor uw aanvraag!
        </h1>
        <p className="text-gray-600 leading-relaxed mb-2">
          We hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op —
          normaal <span className="font-semibold text-teal-700">binnen 24 uur</span>.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          U ontvangt ook een bevestiging per e-mail.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Contact info */}
        <p className="text-sm text-gray-500 mb-4">Dringende vragen? Bel of stuur een bericht:</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-800 text-white font-bold text-sm hover:bg-teal-700 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {BRAND.phoneDisplay}
          </a>
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <Link href="/" className="text-sm text-teal-700 hover:text-orange-400 transition-colors font-medium">
          ← Terug naar de homepage
        </Link>
      </div>
    </section>
  );
}
