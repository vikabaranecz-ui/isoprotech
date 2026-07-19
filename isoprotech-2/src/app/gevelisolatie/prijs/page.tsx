import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND, PHOTOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gevelisolatie Prijs 2026 — Kosten per m² in Antwerpen",
  description:
    "Indicatieve prijzen gevelisolatie Antwerpen: crepi met EPS 14 cm €85–110/m², steenstrips €130–170/m². Inclusief 6% BTW, Mijn VerbouwPremie info en prijsfactoren.",
  keywords: [
    "gevelisolatie prijs",
    "gevelisolatie kosten",
    "crepi isolatie prijs",
    "steenstrips isolatie prijs",
    "buitengevelisolatie prijs",
    "ETICS prijs",
    "gevelisolatie Antwerpen",
    "prijs per m2 gevelisolatie",
  ],
  alternates: { canonical: `${BRAND.url}/gevelisolatie/prijs` },
  openGraph: {
    title: "Gevelisolatie Prijs 2026 — Kosten per m² in Antwerpen",
    description:
      "Indicatieve prijzen voor gevelisolatie: crepi €85–110/m², steenstrips €130–170/m², incl. 6% BTW.",
    url: `${BRAND.url}/gevelisolatie/prijs`,
    type: "website",
    images: [{ url: PHOTOS.gevelCrepiMeiseNa.src, width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat kost gevelisolatie per m² in België?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gevelisolatie met crepi (ETICS, EPS 14 cm) kost indicatief €85–110 per m² inclusief 6% BTW. Met steenstrips als afwerking stijgt dit naar €130–170/m². Prijzen variëren naargelang de isolatiedikte, steigerkosten, oppervlakte en staat van de bestaande gevel.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel premie krijg ik voor gevelisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Via Mijn VerbouwPremie (Vlaanderen) kunt u premie ontvangen voor gevelisolatie van woningen gebouwd vóór 2006. De exacte bedragen wijzigen jaarlijks — controleer steeds de actuele informatie op vlaanderen.be. ISOPROTECH helpt u bij de aanvraag.",
      },
    },
    {
      "@type": "Question",
      name: "Is er 6% of 21% BTW op gevelisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Op renovatiewerken aan woningen ouder dan 10 jaar die uitsluitend privé worden gebruikt, geldt het verlaagde BTW-tarief van 6% op arbeid én materialen. Op nieuwbouw of woningen jonger dan 10 jaar is 21% BTW van toepassing.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BRAND.url },
    { "@type": "ListItem", position: 2, name: "Gevelisolatie", item: `${BRAND.url}/diensten/gevelisolatie` },
    { "@type": "ListItem", position: 3, name: "Prijs gevelisolatie", item: `${BRAND.url}/gevelisolatie/prijs` },
  ],
};

export default function GevelisopatiePrijsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.gevelCrepiMeiseNa.src}
            alt="Gevelisolatie prijs Antwerpen"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/80" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-4">
            Prijsgids 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Gevelisolatie Prijs in Antwerpen
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
            Indicatieve prijsranges voor crepi met isolatie en steenstrips met isolatie —
            inclusief BTW 6%, premie-info en prijsfactoren.
          </p>
          <a
            href="#offerte"
            className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            Gratis offerte aanvragen
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Gevelisolatie", href: "/diensten/gevelisolatie" },
            { label: "Prijs gevelisolatie", href: "/gevelisolatie/prijs" },
          ]}
        />
      </div>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Eerlijke prijstransparantie
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Wat bepaalt de prijs van gevelisolatie?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kostprijs van gevelisolatie hangt af van het gekozen systeem (crepi of steenstrips),
            de isolatiedikte, de oppervlakte en de staat van de bestaande gevel. Hieronder vindt u
            indicatieve ranges per systeem. <strong>Alle prijzen zijn inclusief 6% BTW</strong> voor
            woningen ouder dan 10 jaar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Een exacte prijs kunt u alleen ontvangen na een plaatsbezoek: de toestand van de bestaande
            ondergrond, de steigerkosten en eventuele herstellingen verschillen per woning.
          </p>
        </div>
      </section>

      {/* Price tables */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3 text-center">
            Per systeem
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-10 text-center">
            Indicatieve prijsranges 2026
          </h2>

          {/* Crepi */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-teal-700 mb-1">Crepi met isolatie (ETICS)</h3>
            <p className="text-gray-500 text-sm mb-4">EPS grijze platen + wapeningslaag + structuurpleister</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="py-3 px-4 text-left">Systeem</th>
                    <th className="py-3 px-4 text-center">Dikte EPS</th>
                    <th className="py-3 px-4 text-center">Rd</th>
                    <th className="py-3 px-4 text-center">Prijs incl. 6% BTW</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["EPS grijs + fijn crepi K15", "10 cm", "3,2 m²K/W", "€75–90 /m²"],
                    ["EPS grijs + structuurcrepi K20", "14 cm", "4,5 m²K/W", "€85–110 /m²"],
                    ["EPS grijs + structuurcrepi K20", "18 cm", "5,8 m²K/W", "€100–125 /m²"],
                    ["Minerale wol + crepi", "14 cm", "3,5–4,0 m²K/W", "€110–145 /m²"],
                  ].map(([sys, dikte, rd, prijs], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="py-3 px-4 font-medium text-gray-800">{sys}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{dikte}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{rd}</td>
                      <td className="py-3 px-4 text-center font-semibold text-teal-700">{prijs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Steenstrips */}
          <div>
            <h3 className="text-xl font-bold text-teal-700 mb-1">Steenstrips met isolatie</h3>
            <p className="text-gray-500 text-sm mb-4">EPS + wapeningslaag + keramieken steenstrips + voegen</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="py-3 px-4 text-left">Systeem</th>
                    <th className="py-3 px-4 text-center">Dikte EPS</th>
                    <th className="py-3 px-4 text-center">Rd</th>
                    <th className="py-3 px-4 text-center">Prijs incl. 6% BTW</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["EPS 14 cm + standaard steenstrip", "14 cm", "4,5 m²K/W", "€130–155 /m²"],
                    ["EPS 18 cm + standaard steenstrip", "18 cm", "5,8 m²K/W", "€145–170 /m²"],
                    ["EPS 14 cm + premium Waalformaat", "14 cm", "4,5 m²K/W", "€155–180 /m²"],
                  ].map(([sys, dikte, rd, prijs], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="py-3 px-4 font-medium text-gray-800">{sys}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{dikte}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{rd}</td>
                      <td className="py-3 px-4 text-center font-semibold text-teal-700">{prijs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Price factors */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Prijsbepalende factoren
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">Wat beïnvloedt de kostprijs?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Geveloppervlakte",
                desc: "Grotere gevels profiteren van lagere vaste kosten per m² (steigeropbouw, verplaatsing). Kleine projecten dragen een hogere eenheidsprijs door het minimumkostplaatje.",
              },
              {
                title: "Staat van de bestaande gevel",
                desc: "Loszittende pleister, vochtschade of scheuren vereisen herstelwerk vóór de isolatie. Dit wordt apart aangerekend, typisch €15–40/m².",
              },
              {
                title: "Steigers",
                desc: "Steigerkosten bedragen €8–15/m² afhankelijk van de hoogte en het type steiger. Voor rijwoningen tot 2 bouwlagen kan een rolsteiger volstaan.",
              },
              {
                title: "Isolatiedikte",
                desc: "Elk extra centimeter EPS kost ±€2–4/m². De sprong van 14 naar 18 cm verbetert de Rd met 1,3 m²K/W — financieel verantwoord bij een langetermijnvisie.",
              },
              {
                title: "Afwerking (crepi vs. steenstrips)",
                desc: "Steenstrips kosten gemiddeld €40–60/m² meer dan crepi. Combinaties zijn mogelijk: steenstrips op de begane grond en crepi daarboven.",
              },
              {
                title: "Vensterbanken en aansluitingen",
                desc: "Uitbouwen of vervangen van vensterbanken (€80–200 per raam), lijstwerken en dakrandafwerking worden per stuk begroot.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-teal-700 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BTW & premies */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Fiscaal voordeel
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">BTW 6% en Mijn VerbouwPremie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
              <h3 className="text-xl font-bold text-teal-700 mb-4">BTW 6%</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Gevelisolatiewerken op een woning ouder dan 10 jaar die privé wordt gebruikt,
                vallen onder het verlaagde BTW-tarief van 6% (loon + materialen samen).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-teal-600 font-bold">✓</span> Woning &gt; 10 jaar oud → 6% BTW</li>
                <li className="flex gap-2"><span className="text-teal-600 font-bold">✓</span> Privégebruik vereist</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">✗</span> Nieuwbouw / &lt; 10 jaar → 21% BTW</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Mijn VerbouwPremie</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Het Vlaamse gewest biedt premies voor gevelisolatie via{" "}
                <strong>Mijn VerbouwPremie</strong>. Controleer steeds de actuele bedragen op{" "}
                <a href="https://www.vlaanderen.be/mijn-verbouwpremie" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
                  vlaanderen.be
                </a>{" "}
                (geraadpleegd juni 2026).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-teal-600 font-bold">✓</span> Woning gebouwd vóór 2006</li>
                <li className="flex gap-2"><span className="text-teal-600 font-bold">✓</span> Erkend aannemer</li>
                <li className="flex gap-2"><span className="text-teal-600 font-bold">✓</span> Min. Rd 1,5 m²K/W vereist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example budgets */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Concreet voorbeeld
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">Wat kost een gemiddeld gevelproject?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: "Rijwoning — crepi",
                opp: "60 m² voorgevel",
                sys: "EPS 14 cm + crepi",
                prijs: "€5.100–€6.600",
                rd: "Rd 4,5 m²K/W",
                highlight: false,
              },
              {
                type: "Rijwoning — steenstrips",
                opp: "60 m² voorgevel",
                sys: "EPS 14 cm + steenstrip",
                prijs: "€7.800–€9.300",
                rd: "Rd 4,5 m²K/W",
                highlight: true,
              },
              {
                type: "Halfopen bebouwing",
                opp: "120 m² gevel",
                sys: "EPS 18 cm + crepi",
                prijs: "€12.000–€15.000",
                rd: "Rd 5,8 m²K/W",
                highlight: false,
              },
            ].map((ex, i) => (
              <div key={i} className={`rounded-2xl border shadow-sm p-6 ${ex.highlight ? "border-teal-200 bg-teal-50" : "border-gray-100 bg-stone-50"}`}>
                <h3 className="font-bold text-teal-800 text-lg mb-3">{ex.type}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><span className="text-gray-500">Oppervlakte:</span> {ex.opp}</li>
                  <li><span className="text-gray-500">Systeem:</span> {ex.sys}</li>
                  <li><span className="text-gray-500">Rd-waarde:</span> {ex.rd}</li>
                </ul>
                <p className="mt-4 text-2xl font-extrabold text-teal-700">{ex.prijs}</p>
                <p className="text-xs text-gray-500 mt-1">incl. 6% BTW — premie mogelijk</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Exclusief steigerkosten (€8–15/m²) en herstelwerken aan de bestaande ondergrond.
            Exacte prijs na plaatsbezoek.
          </p>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">Meer over gevelisolatie</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Crepi met isolatie", href: "/gevelisolatie/crepi-met-isolatie", desc: "ETICS-systeem volledig uitgelegd" },
              { label: "Steenstrips met isolatie", href: "/gevelisolatie/steenstrips-met-isolatie", desc: "Bakstenen look + ETICS-isolatie" },
              { label: "Isolatiedikte gevel", href: "/gevelisolatie/dikte", desc: "14 cm of 18 cm — wat is optimaal?" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="rounded-xl border border-gray-100 shadow-sm p-5 hover:border-teal-200 hover:shadow-md transition-all group bg-white"
              >
                <p className="font-semibold text-teal-700 group-hover:text-teal-600 mb-1">{link.label}</p>
                <p className="text-sm text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="offerte" className="py-20 bg-teal-800">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
              Gratis en vrijblijvend
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">Vraag een offerte aan voor uw gevel</h2>
            <p className="text-teal-200 max-w-xl mx-auto">
              Na een bezoek ter plaatse ontvangt u een gedetailleerde offerte met materiaalspecificaties,
              Rd-berekening en informatie over beschikbare premies.
            </p>
          </div>
          <ContactForm defaultService="gevelwerken" />
        </div>
      </section>
    </>
  );
}
