import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND, PHOTOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Steenstrips met Isolatie Antwerpen — Bakstenen Look + ETICS",
  description:
    "Steenstrips met isolatie in Antwerpen: dezelfde ETICS-opbouw als crepi, maar afgewerkt met dunne keramieken steenstrips. Authentieke bakstenen look met Rd tot 5,8 m²K/W.",
  keywords: [
    "steenstrips met isolatie",
    "gevelisolatie steenstrips",
    "baksteen look isolatie",
    "steenstrips gevel Antwerpen",
    "ETICS steenstrips",
    "gevelisolatie buiten",
    "buitengevelisolatie Antwerpen",
  ],
  alternates: { canonical: `${BRAND.url}/gevelisolatie/steenstrips-met-isolatie` },
  openGraph: {
    title: "Steenstrips met Isolatie Antwerpen — Bakstenen Look + ETICS",
    description:
      "Gevelisolatie met steenstrips: EPS-isolatieplaten 14–18 cm + keramieken steenstrips. Authentiek baksteenaspect zonder verlies van woonoppervlak.",
    url: `${BRAND.url}/gevelisolatie/steenstrips-met-isolatie`,
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
      name: "Wat zijn steenstrips bij gevelisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steenstrips zijn dunne keramieken of betonnen tegels (5–15 mm dik) die op een ETICS-isolatiesysteem worden verlijmd. Ze geven de gevel een authentiek baksteenaspect zonder het gewicht van een traditionele baksteenspouw. Het isolatieprincipe is identiek aan crepi met isolatie.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het gewicht van steenstrips op de gevel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keramieken steenstrips wegen doorgaans 12–25 kg/m², afhankelijk van de dikte (8–15 mm). Dat is significant lichter dan een traditionele bakstenen spouw (±200 kg/m²), maar zwaarder dan een crepibekleding (±4–6 kg/m²). Het gevelmetselwerk moet in goede staat zijn en de dybels moeten dit extra gewicht aankunnen.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ik kiezen tussen verschillende baksteenkleuren en -formaten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, steenstrips zijn beschikbaar in tientallen kleuren (rood, geel, gesinterd, genuanceerd) en formaten (Waalformaat 21×7 cm, Kortrijks formaat 29×9 cm, muurformaat). U kunt ook de voegkleur kiezen. ISOPROTECH adviseert u over de lokale stedenbouwkundige vereisten voor gevelmateriaal.",
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
    { "@type": "ListItem", position: 3, name: "Steenstrips met isolatie", item: `${BRAND.url}/gevelisolatie/steenstrips-met-isolatie` },
  ],
};

export default function SteenstripsMetIsolatiePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.gevelCrepiMeiseNa.src}
            alt="Steenstrips met isolatie Antwerpen"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/78" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-4">
            Buitengevelisolatie
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Steenstrips met Isolatie in Antwerpen
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
            Dezelfde ETICS-isolatieprestatie als crepi, maar met een authentiek baksteenaspect.
            EPS 14–18 cm + keramieken steenstrips — koudebrug-vrij en duurzaam.
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
            { label: "Steenstrips met isolatie", href: "/gevelisolatie/steenstrips-met-isolatie" },
          ]}
        />
      </div>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Wat zijn steenstrips?
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Bakstenen uitstraling met buitenisolatie
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Steenstrips zijn dunne keramieken of betonnen tegels (8–15 mm) die de voorkant
            van een traditionele baksteen nabootsen. Bij gevelisolatie worden ze verlijmd op hetzelfde
            ETICS-systeem als crepi — EPS-isolatieplaten op de bestaande gevel, wapeningslaag, en
            vervolgens de steenstrips met voegmortel.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het resultaat: een gevel die eruitziet als een traditionele baksteenspouw, maar in werkelijkheid
            is voorzien van 14–18 cm buitenisolatie. Ideaal voor woningen waarvan de bestaande gevel er
            verouderd of beschadigd uitziet, of voor eigenaren die een andere gevelkleur willen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tegenover crepi zijn steenstrips duurder (€40–60/m² meerprijs) en iets meer bewerkelijk in
            plaatsing. Het voordeel is een langere esthetische levensduur en een hogere weerstand
            tegen mechanische beschadiging op begane grond.
          </p>
        </div>
      </section>

      {/* Comparison: steenstrips vs crepi */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Vergelijking
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Steenstrips vs. crepi — wanneer kiest u wat?
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="py-3 px-4 text-left">Criterium</th>
                  <th className="py-3 px-4 text-center">Steenstrips</th>
                  <th className="py-3 px-4 text-center">Crepi (structuurpleister)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Uitstraling", "Authentiek baksteenaspect", "Modern/klassiek pleister"],
                  ["Isolatiewaarde", "Identiek (Rd bepaald door EPS-dikte)", "Identiek"],
                  ["Prijs (indicatief)", "€130–170 /m²", "€85–125 /m²"],
                  ["Gewicht", "12–25 kg/m² (zwaarder)", "4–6 kg/m² (licht)"],
                  ["Onderhoud", "Weinig — af en toe voegen controleren", "Beperkt — overschilderen na 15–20 j."],
                  ["Scheurrisico", "Laag (keramiek is rigide)", "Laag bij correct systeem"],
                  ["Kleurkeuze", "Beperkt tot baksteenpalet", "Vrijwel onbeperkt (RAL)"],
                  ["Aanbevolen bij", "Bakstenen esthetiek vereist; hoeken en plint gevoelig", "Budget-georiënteerd; vrije kleurkeuze"],
                ].map(([crit, strips, crepi], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="py-3 px-4 font-medium text-gray-700">{crit}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{strips}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{crepi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Build-up */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Systeemopbouw
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Opbouw steenstrips-isolatiesysteem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "1", title: "Voorbereiding gevel", desc: "Reiniging, herstel van loszittende ondergrond en scheuren. Indien nodig wordt een egalisatielaag aangebracht." },
              { num: "2", title: "EPS-isolatieplaat 14–18 cm", desc: "Grijs EPS (λ 0,031) wordt in vlakke lagen gelijmd. Plaatstoten worden versprongen. Hoeken worden bijgeknipt met specifiek hoekprofiel." },
              { num: "3", title: "Mechanische verankering", desc: "Minimum 6 thermische dybels per m² voor het extra gewicht van de steenstrips (vs. 4 dybels voor crepi). Speciale kopdybels met geringe warmtegeleiding." },
              { num: "4", title: "Wapeningslaag + net", desc: "Basiscoat met glasvezelnet (200 g/m² voor strips vs. 160 g/m² voor crepi) — zwaarder net vanwege hogere hechtspanningen door strips." },
              { num: "5", title: "Steenstrips verlijmen", desc: "Steenstrips worden met een speciale C2S1-lijm op de wapeningslaag geplakt in baksteenverband. Correcte spatiëring voor voegen." },
              { num: "6", title: "Voegen", desc: "Na 24 uur uitharding worden de voegen gevuld met voegmortel in de gewenste kleur. Voegtype kan vlak of verdiept zijn." },
            ].map((step, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-sm">
                    {step.num}
                  </span>
                  <h3 className="font-bold text-teal-800">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Indicatieve prijs
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Prijs steenstrips met isolatie (incl. 6% BTW)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="py-3 px-4 text-left">Systeem</th>
                  <th className="py-3 px-4 text-center">EPS-dikte</th>
                  <th className="py-3 px-4 text-center">Rd</th>
                  <th className="py-3 px-4 text-center">Prijs /m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["EPS 14 cm + standaard steenstrip", "14 cm", "4,5 m²K/W", "€130–155"],
                  ["EPS 18 cm + standaard steenstrip", "18 cm", "5,8 m²K/W", "€145–170"],
                  ["EPS 14 cm + Waalformaat premium strip", "14 cm", "4,5 m²K/W", "€155–175"],
                ].map(([sys, dikte, rd, prijs], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="py-3 px-4 font-medium text-gray-700">{sys}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{dikte}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{rd}</td>
                    <td className="py-3 px-4 text-center font-semibold text-teal-700">{prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Prijzen zijn exclusief steigerkosten (€8–15/m²) en schilderwerken aan aangrenzende elementen.
            Meerprijs t.o.v. crepi: gemiddeld €40–60/m². Mijn VerbouwPremie is ook van toepassing op
            steenstrips met isolatie — zie{" "}
            <a
              href="https://www.vlaanderen.be/mijn-verbouwpremie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              vlaanderen.be
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Veelgestelde vragen
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">FAQ — Steenstrips met isolatie</h2>
          <div className="space-y-5">
            {[
              {
                q: "Kan ik steenstrips combineren met crepi op dezelfde gevel?",
                a: "Ja, het is gebruikelijk om de begane grond (vandalismebestendig, esthetisch) in steenstrips af te werken en de verdiepingen in crepi. Dit beperkt de meerprijs terwijl de kwaliteitsuitstraling op ooghoogte behouden blijft.",
              },
              {
                q: "Zijn steenstrips bestand tegen vorst?",
                a: "Keramieken buitenstrips zijn vorstbestendig (kwaliteitsklasse F2 of F3 voor buitengebruik). Controleer altijd de technische fiche van de leverancier op vorstklasse en waterabsorptie (< 3% is aanbevolen voor onze klimaatzone).",
              },
              {
                q: "Hoe lang duurt de plaatsing?",
                a: "Een gemiddelde rijwoning (50–70 m² gevel) is in 10–14 werkdagen klaar, inclusief steigeropbouw, isolatieplaten, wapeningslaag en steenstrips. De exacte doorlooptijd hangt af van de weersomstandigheden voor het voegen.",
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
          <h2 className="text-2xl font-bold text-teal-800 mb-6">Verwante pagina&apos;s</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Crepi met isolatie", href: "/gevelisolatie/crepi-met-isolatie", desc: "Volledige uitleg ETICS-systeem met pleister" },
              { label: "Gevelisolatie prijs", href: "/gevelisolatie/prijs", desc: "Vergelijkende prijsoverzicht alle systemen" },
              { label: "Isolatiedikte gevel", href: "/gevelisolatie/dikte", desc: "14 cm of 18 cm — wat is de beste keuze?" },
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Vraag een offerte aan voor steenstrips
            </h2>
            <p className="text-teal-200 max-w-xl mx-auto">
              ISOPROTECH begeleidt u van materiaalkeuze tot plaatsing en premieaanvraag.
              Stuur ons uw gevelfotos en we bezorgen u een offerte op maat.
            </p>
          </div>
          <ContactForm defaultService="gevelwerken" />
        </div>
      </section>
    </>
  );
}
