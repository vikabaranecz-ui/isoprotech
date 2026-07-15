// src/app/partners/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Onze Partners",
  description: "ISOPROTECH werkt samen met betrouwbare partners in de bouwsector. Ontdek onze partnerbedrijven voor isolatie, steigers en renovatie.",
  alternates: { canonical: `${BRAND.url}/partners` },
  openGraph: {
    title: "Onze Partners | ISOPROTECH",
    description: "ISOPROTECH werkt samen met betrouwbare partners in de bouwsector. Ontdek onze partnerbedrijven.",
  },
};

const partners = [
  {
    id: "klimmax",
    name: "Klimmax",
    tagline: "Verhuur van steigers & bouwstelling",
    description:
      "Klimmax is gespecialiseerd in de verhuur van steigers en bouwstellingen voor renovatie- en bouwprojecten. Als vaste partner van ISOPROTECH zorgt Klimmax voor de veilige en snelle plaatsing van steigers bij elk dak- of gevelproject. Dankzij deze samenwerking kunnen wij onze werven efficiënt en professioneel uitvoeren — van de eerste dag tot de laatste afwerking.",
    website: "https://www.klimmax.be",
    logoFallback: "K",
    logoColor: "bg-orange-600",
    services: [
      "Verhuur van steigers",
      "Bouwstellingen voor renovatie",
      "Plaatsing & afbraak steigers",
      "Gevels & daken bereikbaar maken",
    ],
    why: "Bij gevel- en dakisolatie is een degelijke stelling onmisbaar. ISOPROTECH werkt vast samen met Klimmax voor een vlotte en veilige steigerbouw op elke werf in de regio Antwerpen.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300 border border-orange-400/20">
            Partners
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-5">
            Onze partners
          </h1>
          <p className="text-lg text-white/65 max-w-xl mx-auto leading-relaxed">
            ISOPROTECH werkt samen met gespecialiseerde bedrijven die onze
            diensten aanvullen. Zo bieden wij u een compleet antwoord op uw
            renovatiebehoeften.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb items={[{ label: "Partners", href: "/partners" }]} />
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-gray-600 leading-relaxed text-lg">
          Een geslaagde renovatie vraagt meer dan isolatie alleen. Wij hebben
          een netwerk van betrouwbare vakbedrijven waarmee wij nauw samenwerken.
          Zo kunt u bij ISOPROTECH terecht voor isolatie en worden u de beste
          specialisten aanbevolen voor aanvullende werken.
        </p>
      </section>

      {/* Partner cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-1 max-w-4xl">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-stone-50 border-b border-gray-100 px-8 py-6 flex items-center gap-6">
                {/* Logo */}
                <div className={`shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl ${partner.logoColor} text-white text-2xl font-extrabold`}>
                  {partner.logoFallback}
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-teal-800">
                    {partner.name}
                  </h2>
                  <p className="text-sm text-orange-500 font-semibold mt-0.5">
                    {partner.tagline}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="px-8 py-8 grid gap-8 md:grid-cols-2">
                {/* Description */}
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-3">
                    Over {partner.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {partner.description}
                  </p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-teal-700 transition-colors"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16A8 8 0 0010 2zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                    Bezoek {partner.name}
                  </a>
                </div>

                {/* Services + why */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-3">
                      Specialisaties
                    </h3>
                    <ul className="space-y-2">
                      {partner.services.map((s) => (
                        <li key={s} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <svg className="h-4 w-4 shrink-0 text-orange-400" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
                            <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5">
                    <h3 className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
                      Waarom deze samenwerking?
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {partner.why}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA — become a partner */}
      <section className="bg-stone-100 py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-teal-800 mb-3">
            Partner worden van ISOPROTECH?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Bent u actief in een aanverwante sector en wilt u samenwerken met
            ISOPROTECH? Neem contact op en wij bespreken de mogelijkheden.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-800 px-7 py-3.5 font-bold text-white hover:bg-teal-700 transition-colors"
          >
            Contacteer ons
          </Link>
        </div>
      </section>
    </>
  );
}
