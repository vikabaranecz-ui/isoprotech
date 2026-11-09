// src/app/regio/[city]/page.tsx
// City/location page — unique content per city, no thin templates

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getNearbyCities } from "@/content/cities";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
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
      type: "website",
      images: [{ url: `${BRAND.url}/images/og-isoprotech.png`, width: 1080, height: 1080 }],
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
  const cityProjects = city.projectRefs
    .map((ref) => projects.find((p) => p.id === ref))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
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

      {/* Local project proof — real completed projects in this city */}
      {cityProjects.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <h2 className="text-2xl font-extrabold text-teal-800 mb-8">
            Onze projecten in {city.name}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cityProjects.map((pr) => (
              <a
                key={pr.id}
                href={`/realisaties/${pr.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-orange-200"
              >
                {pr.beforePhoto ? (
                  <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                    <div className="relative">
                      <Image
                        src={pr.beforePhoto.src}
                        alt={pr.beforePhoto.alt}
                        width={pr.beforePhoto.width}
                        height={pr.beforePhoto.height}
                        className="w-full h-auto object-cover"
                        sizes="20vw"
                      />
                      <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">VOOR</span>
                    </div>
                    <div className="relative">
                      <Image
                        src={pr.photo.src}
                        alt={pr.photo.alt}
                        width={pr.photo.width}
                        height={pr.photo.height}
                        className="w-full h-auto object-cover"
                        sizes="20vw"
                      />
                      <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">NA</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={pr.photo.src}
                    alt={pr.photo.alt}
                    width={pr.photo.width}
                    height={pr.photo.height}
                    className="w-full h-auto"
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-bold text-teal-800 text-sm mb-1 group-hover:text-orange-500 transition-colors">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{pr.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-500 group-hover:gap-2 transition-all">
                    Bekijk case study
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

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
                href={
                  sv.landingPage && sv.landingPage.endsWith(`-${city.slug}`)
                    ? sv.landingPage
                    : `/diensten/${sv.slug}`
                }
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
