// src/app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/content/faqs";
import { faqSchema } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

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

      <section className="bg-teal-800 py-14">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Nog vragen?
          </h2>
          <p className="text-white/60 mb-6">
            Neem gerust contact op. Wij helpen u graag verder.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact opnemen
          </Link>
        </div>
      </section>
    </>
  );
}
