// src/app/regio/[city]/page.tsx
// City/location page — unique content per city, no thin templates

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getNearbyCities } from "@/content/cities";
import { services } from "@/content/services";
import { BRAND } from "@/lib/constants";
import { localBusinessSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return {
    title: city.seo.title,
    description: city.seo.description,
    alternates: {
      canonical: `${BRAND.url}/regio/${city.slug}`,
    },
    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      url: `${BRAND.url}/regio/${city.slug}`,
    },
  };
}

export default function CityPage({
  params,
}: {
  params: { city: string };
}) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const nearby = getNearbyCities(city.id, 8);
  const generalFaqs = [
    { question: "Bieden jullie garantie op de werken?", answer: "Ja, ISOPROTECH biedt 10 jaar garantie op alle uitgevoerde werken. Wij gebruiken uitsluitend ATG- en BENOR-gekeurde systemen." },
    { question: "Hoe vraag ik een offerte aan?", answer: "Neem contact op via telefoon, WhatsApp of ons contactformulier. Wij plannen een gratis inspectie en bezorgen u nadien een vrijblijvende offerte." },
  ];
  const allFaqs = [
    ...city.localFaqs.map((f) => ({ question: f.q, answer: f.a })),
    ...generalFaqs,
  ];

  // Custom LocalBusiness schema with this city as areaServed
  const citySchema = {
    ...localBusinessSchema(),
    areaServed: { "@type": "City", name: city.name },
  };

  return (
    <>
      <JsonLd data={citySchema} />
      {allFaqs.length > 0 && <JsonLd data={faqSchema(allFaqs)} />}

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300 border border-orange-400/20">
            {city.name} ({city.zip})
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-6">
            Dak- en gevelisolatie in {city.name}
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            {city.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            { label: "Werkgebied", href: "/regio" },
            { label: city.name, href: `/regio/${city.slug}` },
          ]}
        />
      </div>

      {/* Local context — unique content that makes this page different */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-extrabold text-teal-800 mb-4">
          ISOPROTECH in {city.name}
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          {city.localContext}
        </p>
      </section>

      {/* Services grid */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-extrabold text-teal-800 mb-8">
            Onze diensten in {city.name}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((sv) => (
              <a
                key={sv.id}
                href={`/diensten/${sv.slug}`}
                className="group block rounded-2xl bg-white p-6 border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-bold text-teal-800 group-hover:text-orange-400 transition-colors">
                  {sv.name} in {city.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {sv.shortDesc}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-orange-400">
                  Meer info →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      {allFaqs.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-extrabold text-teal-800 mb-8">
            Veelgestelde vragen — {city.name}
          </h2>
          <div className="space-y-0 divide-y divide-gray-100">
            {allFaqs.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-teal-800">
                  <span>{faq.question}</span>
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
                <p className="mt-3 text-gray-600 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Nearby cities */}
      <section className="bg-stone-100 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-lg font-bold text-teal-800 mb-4">
            Ook actief in de regio
          </h2>
          <div className="flex flex-wrap gap-3">
            {nearby.map((c) => (
              <a
                key={c.id}
                href={`/regio/${c.slug}`}
                className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-teal-700 border border-gray-100 transition hover:border-orange-300 hover:text-orange-400"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Klaar voor isolatie in {city.name}?
            </h2>
            <p className="text-white/60 leading-relaxed">
              Vraag vandaag nog een gratis inspectie en vrijblijvende offerte aan.
              Wij nemen binnen 24 uur contact met u op.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
