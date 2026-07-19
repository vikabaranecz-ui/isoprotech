import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND, PHOTOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gevelisolatie Dikte — 14 of 18 cm EPS? Advies",
  description:
    "Welke dikte gevelisolatie is optimaal voor uw woning? Vergelijking 10–14–18 cm EPS: Rd-waarden, meerprijs, terugverdientijd en EPB-eisen in Vlaanderen.",
  keywords: [
    "gevelisolatie dikte",
    "EPS 14 cm gevel",
    "EPS 18 cm gevel",
    "isolatiedikte gevel",
    "Rd waarde gevel",
    "gevelisolatie Antwerpen",
    "optimale isolatiedikte",
    "EPB eis gevel",
  ],
  alternates: { canonical: `${BRAND.url}/gevelisolatie/dikte` },
  openGraph: {
    title: "Gevelisolatie Dikte — 14 of 18 cm EPS? Advies",
    description: "Vergelijking isolatiedikte gevel: 10–14–18–20 cm EPS. Rd-waarden, EPB-eisen en terugverdientijd.",
    url: `${BRAND.url}/gevelisolatie/dikte`,
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
      name: "Hoeveel centimeter gevelisolatie is verplicht in Vlaanderen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij renovatie geldt een minimale Rd-waarde van 1,5 m²K/W voor de gevel (EPB-eis Vlaanderen). Met 10 cm EPS grijs (λ 0,031) haalt u al Rd 3,2, wat ruim boven het minimum ligt. Bij een ingrijpende energetische renovatie (IER) geldt Rd ≥ 3,5 m²K/W. Bron: VEKA, geraadpleegd juni 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is de terugverdientijd van extra isolatiedikte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De meerprijs van 14 naar 18 cm EPS bedraagt indicatief €15–20/m². Het extra energievoordeel (Rd 4,5 → 5,8) is kleiner in verhouding dan de eerste centimeters isolatie. Terugverdientijden variëren sterk naargelang het energietarief en het gebruik. Een EPB-berekening door een EPB-verslaggever geeft u een realistisch beeld.",
      },
    },
    {
      "@type": "Question",
      name: "Mag gevelisolatie over de perceelsgrens uitsteken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ETICS vergroot de geveldikte met 14–22 cm (isolatie + pleister). Bij rijwoningen met geringe afstand tot de perceelsgrens of de openbare weg moet dit worden gecheckt bij de gemeente. In veel Vlaamse steden is een beperkte overschrijding toegestaan als het een energetische renovatie betreft.",
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
    { "@type": "ListItem", position: 3, name: "Isolatiedikte gevel", item: `${BRAND.url}/gevelisolatie/dikte` },
  ],
};

export default function GevelisolatieKtePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.gevelCrepiMeiseNa.src}
            alt="Gevelisolatie dikte vergelijking"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/80" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-4">
            Technisch advies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Welke Dikte Gevelisolatie is Optimaal?
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
            Vergelijking van 10, 14, 18 en 20 cm EPS: Rd-waarden, EPB-eisen,
            meerprijs en rendement van elke extra centimeter.
          </p>
          <a
            href="#offerte"
            className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            Advies op maat aanvragen
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Gevelisolatie", href: "/diensten/gevelisolatie" },
            { label: "Isolatiedikte gevel", href: "/gevelisolatie/dikte" },
          ]}
        />
      </div>

      {/* Why thickness matters */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Waarom dikte telt
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            De logica achter de isolatiedikte
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De warmteweerstand (Rd) van een isolatielaag stijgt lineair met de dikte:
            Rd = dikte (m) ÷ lambda (W/mK). Voor EPS grijs met λ 0,031 W/mK geldt:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6 ml-4">
            <li>10 cm → Rd 3,2 m²K/W</li>
            <li>14 cm → Rd 4,5 m²K/W</li>
            <li>18 cm → Rd 5,8 m²K/W</li>
            <li>20 cm → Rd 6,5 m²K/W</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Elke extra centimeter levert hetzelfde absolute Rd-voordeel (0,32 m²K/W), maar het
            <em> relatieve</em> voordeel daalt: van 10 naar 14 cm is +40% Rd, van 14 naar 18 cm
            is slechts +29%. Vanuit kosten-batenoogpunt geldt dat de eerste 12–14 cm het meeste
            rendement geven — daarna wordt elke extra centimeter minder kostenefficiënt.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Vergelijkingstabel
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            10, 14, 18 of 20 cm EPS — wat kiest u?
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="py-3 px-4 text-center">Dikte</th>
                  <th className="py-3 px-4 text-center">Rd (m²K/W)</th>
                  <th className="py-3 px-4 text-left">EPB-status</th>
                  <th className="py-3 px-4 text-left">Aanbevolen voor</th>
                  <th className="py-3 px-4 text-center">Meerprijs vs. 10 cm</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["10 cm", "3,2", "Ruim boven renovatie-minimum", "Budgetgerichte renovatie", "—"],
                  ["14 cm", "4,5", "Voldoet aan IER (Rd ≥ 3,5)", "ISOPROTECH standaard", "+€10–15 /m²"],
                  ["18 cm", "5,8", "Hoge-prestatierenovatie", "Bijna-nulenergie renovatie", "+€20–30 /m²"],
                  ["20 cm", "6,5", "Richting passiefhuis", "Passiefhuis / NZEB", "+€28–40 /m²"],
                ].map(([d, rd, epb, reco, mp], i) => (
                  <tr key={i} className={i === 1 ? "bg-teal-50 font-medium" : i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="py-3 px-4 text-center font-bold text-teal-700">{d}</td>
                    <td className="py-3 px-4 text-center">{rd}</td>
                    <td className="py-3 px-4 text-gray-700">{epb}</td>
                    <td className="py-3 px-4 text-gray-700">{reco}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{mp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            EPB-eisen Vlaanderen: renovatie Rd ≥ 1,5; IER Rd ≥ 3,5 m²K/W.
            Bron: VEKA, geraadpleegd juni 2026. EPS grijs: λ 0,031 W/mK.
          </p>
        </div>
      </section>

      {/* When 14 vs 18 */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            14 of 18 cm?
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Wanneer kiest u 14 cm, wanneer 18 cm?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
              <h3 className="font-bold text-teal-800 text-xl mb-4">14 cm EPS — de standaard keuze</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Voldoet aan EPB-renovatie én IER-eis (Rd ≥ 3,5)",
                  "Optimale prijs-prestatieverhouding",
                  "Minder risico op vochtopbouw in de gevel bij dampopen systemen",
                  "Beperkte geveluitsprong: makkelijker bij smalle gevels of perceelsgrenzen",
                  "ISOPROTECH-standaard voor de meeste Antwerpse rijwoningen",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-teal-600 font-bold mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <h3 className="font-bold text-teal-800 text-xl mb-4">18 cm EPS — wanneer zinvol?</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Wanneer u richting BEN of NZEB wilt renoveren",
                  "Als u zonnepanelen en warmtepomp combineert (totaalrenovatie)",
                  "Bij woningen met grote beglazing of ongunstige oriëntatie",
                  "Wanneer EPC-label A of B een specifieke Rd-eis stelt via de EPB-verslaggever",
                  "Als extra dikke gevels geen ruimtelijk probleem vormen",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-orange-500 font-bold mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EPB context */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Regelgeving
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            EPB-eisen gevel in Vlaanderen
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In Vlaanderen worden de energieprestaties van gebouwen geregeld via de{" "}
              <strong>EPB-regelgeving</strong> (Energie-Prestatie Gebouwen), beheerd door{" "}
              <a href="https://www.veka.be" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">VEKA</a>{" "}
              (Vlaams Energie- en Klimaatagentschap).
            </p>
            <div className="rounded-xl bg-white border border-gray-100 p-5">
              <h3 className="font-bold text-teal-700 mb-3">Gevelisolatie: minimumeisen</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3">
                  <span className="font-semibold text-teal-700 w-48 shrink-0">Vergunningsplichtige renovatie:</span>
                  <span>Rd ≥ 1,5 m²K/W (10 cm EPS is al voldoende)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-teal-700 w-48 shrink-0">IER (ingrijpende energetische renovatie):</span>
                  <span>Rd ≥ 3,5 m²K/W (vereist min. 12–14 cm EPS grijs)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-teal-700 w-48 shrink-0">Nieuwbouw:</span>
                  <span>Rd ≥ 3,5 m²K/W (onderdeel globale EPB-berekening)</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">Bron: VEKA, EPB-regelgeving Vlaanderen, geraadpleegd juni 2026.</p>
            </div>
            <p>
              Let op: de minimumeis is een ondergrens. Voor Mijn VerbouwPremie (premie voor isolatie) geldt
              ook een minimale Rd, maar de exacte drempelwaarden worden regelmatig herzien. Raadpleeg steeds{" "}
              <a href="https://www.vlaanderen.be/mijn-verbouwpremie" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
                vlaanderen.be/mijn-verbouwpremie
              </a>{" "}
              voor de meest actuele informatie.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Veelgestelde vragen
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">FAQ — Gevelisolatie dikte</h2>
          <div className="space-y-5">
            {[
              {
                q: "Hoeveel centimeter gevelisolatie is verplicht in Vlaanderen?",
                a: "Bij renovatie geldt een minimale Rd-waarde van 1,5 m²K/W. Met 10 cm EPS grijs (λ 0,031) haalt u al Rd 3,2, wat ruimschoots boven het minimum ligt. Bij IER geldt Rd ≥ 3,5. Bron: VEKA, geraadpleegd juni 2026.",
              },
              {
                q: "Maakt de dikte verschil voor Mijn VerbouwPremie?",
                a: "De premie wordt berekend op basis van het type isolatiemaatregel, niet de precieze Rd. U moet wel voldoen aan een minimumdrempel (doorgaans Rd ≥ 1,5 m²K/W voor de gevel). Controleer vlaanderen.be voor de actuele premiedrempels.",
              },
              {
                q: "Mogen we vanwege de dikte problemen krijgen met de rooilijn?",
                a: "ETICS vergroot de geveldikte met 14–22 cm (isolatie + pleister). Bij smalle trottoirs of bij aangrenzende buren moet u dit vooraf checken bij uw gemeente. In veel Vlaamse steden is een beperkte uitsprong voor energetische renovatie toegestaan.",
              },
              {
                q: "Welke dikte raadt ISOPROTECH aan?",
                a: "Voor de meeste Antwerpse renovatieprojecten werken wij met 14 cm EPS grijs (Rd 4,5 m²K/W) als standaard. Dit biedt de beste verhouding tussen prijs, EPB-prestatie en terugverdientijd. Bij totaalrenovatieprojecten naar BEN-standaard adviseren wij 18 cm.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-teal-800 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">Meer over gevelisolatie</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Crepi met isolatie", href: "/gevelisolatie/crepi-met-isolatie", desc: "ETICS met structuurpleister" },
              { label: "Steenstrips met isolatie", href: "/gevelisolatie/steenstrips-met-isolatie", desc: "Bakstenen uitstraling + ETICS" },
              { label: "Gevelisolatie prijs", href: "/gevelisolatie/prijs", desc: "Indicatieve prijsranges per systeem" },
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
              Persoonlijk advies
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welke dikte is optimaal voor uw woning?
            </h2>
            <p className="text-teal-200 max-w-xl mx-auto">
              ISOPROTECH bekijkt uw situatie ter plaatse en adviseert u op basis van uw energiedoelstellingen,
              budget en de EPB-eisen voor uw specifieke project.
            </p>
          </div>
          <ContactForm defaultService="gevelwerken" />
        </div>
      </section>
    </>
  );
}
