// src/app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/content/faqs";
import { faqSchema } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen — Dak- & Gevelisolatie",
  description:
    "Antwoorden op de meest gestelde vragen over dakisolatie, gevelisolatie, crepi, spuitkurk, premies en onze werkwijze. ISOPROTECH Antwerpen.",
  alternates: { canonical: `${BRAND.url}/faq` },
};

export default function FAQPage() {
  const schemaFaqs = faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  // Group by category
  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <>
      <JsonLd data={faqSchema(schemaFaqs)} />

      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-400/15 border border-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300">
            FAQ
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">
            Veelgestelde vragen
          </h1>
          <p className="text-lg text-white/60">
            Antwoorden op de meest gestelde vragen over dak- en gevelisolatie,
            premies en onze werkwijze.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "FAQ", href: "/faq" }]} />
      </div>

      <section className="container-narrow py-12">
        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-lg font-bold text-teal-800 mb-4 pb-2 border-b border-gray-100">
              {cat}
            </h2>
            <div className="divide-y divide-gray-100">
              {faqs
                .filter((f) => f.category === cat)
                .map((faq) => (
                  <details key={faq.id} className="group py-5">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-teal-800 select-none">
                      <span className="pr-8">{faq.question}</span>
                      <svg
                        className="h-5 w-5 shrink-0 text-orange-400 transition-transform group-open:rotate-45"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 4v12M4 10h12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed pr-10">
                      {faq.answer}
                    </p>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Inline contact form — no redirect needed, converts directly from FAQ page */}
      <section className="section-padding bg-teal-800">
        <div className="container-wide max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Nog vragen? Of klaar voor een gratis offerte?
            </h2>
            <p className="text-white/60">
              Vul het formulier in — wij nemen binnen 48u contact op. Gratis, vrijblijvend.
            </p>
          </div>
          <ContactForm />
          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm mb-3">Of neem direct contact op:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${BRAND.phone}`} className="btn-outline-light text-sm px-5 py-2.5">{BRAND.phoneDisplay}</a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline-light text-sm px-5 py-2.5 inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.1-1.13l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
