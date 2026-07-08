// src/app/diensten/gevelisolatie/page.tsx
// Static route — overrides /diensten/[slug] for gevelisolatie with a richer page

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { getFaqsByIds } from "@/content/faqs";
import { BRAND, PHOTOS } from "@/lib/constants";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Gevelisolatie Antwerpen en omgeving — Buitengevelisolatie | ISOPROTECH",
  description:
    "Buitengevelisolatie in Antwerpen en omgeving. EPS-isolatie met crepi, spuitkurk of steenstrips. Warmer huis, lagere energiekosten, betere EPC-score. Gratis gevelcheck.",
  alternates: {
    canonical: BRAND.url + "/diensten/gevelisolatie",
  },
  keywords: [
    "gevelisolatie",
    "buitengevelisolatie antwerpen",
    "gevel isoleren",
    "gevelisolatie prijs",
    "crepi antwerpen",
  ],
  openGraph: {
    title: "Gevelisolatie Antwerpen en omgeving — Buitengevelisolatie | ISOPROTECH",
    description:
      "Buitengevelisolatie in Antwerpen en omgeving. EPS-isolatie met crepi, spuitkurk of steenstrips. Warmer huis, lagere energiekosten, betere EPC-score. Gratis gevelcheck.",
    url: BRAND.url + "/diensten/gevelisolatie",
    siteName: BRAND.name,
    locale: "nl_BE",
    type: "website",
    images: [
      {
        url: `${BRAND.url}/images/og-isoprotech.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ─── STATIC FAQ DATA (for JSON-LD schema — hardcoded as instructed) ──────────

const faqSchemaItems = [
  {
    question: "Hoeveel kost gevelisolatie per m²?",
    answer:
      "De prijs voor gevelisolatie met afwerking ligt in Antwerpen gemiddeld tussen €80 en €170 per m² (excl. btw), afhankelijk van het isolatietype, de dikte en de afwerking. Voor een exacte prijs op maat van uw woning: gebruik onze gevelcalculator of vraag een gratis inspectie aan.",
  },
  {
    question: "Hoe lang duren gevelisolatiewerken?",
    answer:
      "Voor een gemiddelde woning rekent u op 2 tot 4 weken, afhankelijk van de oppervlakte, de staat van de gevel en de weersomstandigheden. Wij plannen alles duidelijk in — u weet op voorhand wat u kunt verwachten.",
  },
  {
    question: "Is gevelisolatie geschikt voor elke woning?",
    answer:
      "Buitengevelisolatie is geschikt voor de meeste woningen. Bij massieve muren of ongeïsoleerde spouwmuren is het de meest effectieve oplossing. Wij bekijken uw woning eerlijk tijdens de gratis inspectie en adviseren alleen wat technisch en financieel zinvol is.",
  },
  {
    question: "Welke premies kan ik krijgen voor isolatie?",
    answer:
      "Via Mijn VerbouwPremie kunt u in Vlaanderen premies aanvragen voor dak- en gevelisolatie. Het bedrag hangt af van het type werken, de bereikte isolatiewaarde en uw gezinsinkomen. Wij checken uw situatie en helpen u bij de aanvraag — zodat u het maximale uit uw investering haalt.",
  },
  {
    question: "Heb ik een vergunning nodig voor gevelisolatie?",
    answer:
      "Voor standaard buitengevelisolatie is in de meeste gevallen geen stedenbouwkundige vergunning nodig in Antwerpen en omgeving, tenzij uw woning in een beschermd stadsgezicht ligt. Wij controleren dit voor u tijdens de gratis inspectie.",
  },
  {
    question: "Kan ik gevelisolatie combineren met dakrenovatie?",
    answer:
      "Ja — en dat is vaak aan te raden. Door dak- en gevelwerken samen te plannen, bespaart u op stellingwerk en coördinatie. Wij voeren beide uit en bewaken de samenhang.",
  },
  {
    question: "Hoelang gaat gevelisolatie mee?",
    answer:
      "Een correct uitgevoerd ETICS-systeem met minerale crepi gaat 25 tot 40 jaar mee. Wij werken uitsluitend met ATG- en BENOR-goedgekeurde systemen die aan de Belgische kwaliteitsnormen voldoen.",
  },
  {
    question: "Kan ik binnenshuis blijven tijdens de werken?",
    answer:
      "Ja. Gevelisolatiewerken worden volledig aan de buitenzijde uitgevoerd. U hoeft uw woning niet te verlaten en de hinder voor de bewoners is minimaal.",
  },
];

// ─── EXTRA FAQS (not in faqs.ts) — used in accordion ────────────────────────

const extraFaqs = [
  {
    id: "vergunning",
    question: "Heb ik een vergunning nodig voor gevelisolatie?",
    answer:
      "Voor standaard buitengevelisolatie is in de meeste gevallen geen stedenbouwkundige vergunning nodig in Antwerpen en omgeving, tenzij uw woning in een beschermd stadsgezicht ligt. Wij controleren dit voor u tijdens de gratis inspectie.",
  },
  {
    id: "combineren-dakrenovatie",
    question: "Kan ik gevelisolatie combineren met dakrenovatie?",
    answer:
      "Ja — en dat is vaak aan te raden. Door dak- en gevelwerken samen te plannen, bespaart u op stellingwerk en coördinatie. Wij voeren beide uit en bewaken de samenhang.",
  },
  {
    id: "levensduur",
    question: "Hoelang gaat gevelisolatie mee?",
    answer:
      "Een correct uitgevoerd ETICS-systeem met minerale crepi gaat 25 tot 40 jaar mee. Wij werken uitsluitend met ATG- en BENOR-goedgekeurde systemen die aan de Belgische kwaliteitsnormen voldoen.",
  },
  {
    id: "bewoonbaar",
    question: "Kan ik binnenshuis blijven tijdens de werken?",
    answer:
      "Ja. Gevelisolatiewerken worden volledig aan de buitenzijde uitgevoerd. U hoeft uw woning niet te verlaten en de hinder voor de bewoners is minimaal.",
  },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function GevelisolatiePage() {
  const matchedFaqs = getFaqsByIds([
    "gevelisolatie-prijs",
    "gevelisolatie-duur",
    "gevelisolatie-geschikt",
    "premies",
  ]);

  const allAccordionFaqs = [
    ...matchedFaqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer })),
    ...extraFaqs,
  ];

  return (
    <>
      {/* ── JSON-LD structured data ── */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BRAND.url },
          { name: "Diensten", url: `${BRAND.url}/diensten` },
          { name: "Gevelisolatie", url: `${BRAND.url}/diensten/gevelisolatie` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Buitengevelisolatie",
          description:
            "Buitengevelisolatie in Antwerpen en omgeving. EPS-isolatie met crepi, spuitkurk of steenstrips. Warmer huis, lagere energiekosten, betere EPC-score.",
          url: `${BRAND.url}/diensten/gevelisolatie`,
        })}
      />
      <JsonLd data={faqSchema(faqSchemaItems)} />

      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-teal-800 section-padding">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-white/50"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg
              className="h-3.5 w-3.5 text-white/30"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="/diensten" className="hover:text-white transition-colors">
              Diensten
            </Link>
            <svg
              className="h-3.5 w-3.5 text-white/30"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white/70" aria-current="page">
              Gevelisolatie
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="section-label text-orange-400">Dienst</span>
            <h1 className="mt-2 text-3xl font-extrabold text-white leading-tight md:text-5xl mb-6">
              Gevelisolatie: warmer huis, lagere energiekosten en een gevel als nieuw
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
              Via uw ongeïsoleerde buitenmuren verliest een gemiddeld huis 25 tot 35% van zijn
              warmte. ISOPROTECH stopt dat verlies structureel — met buitengevelisolatie die
              technisch correct is, esthetisch sterk en jarenlang meegaat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BRAND.phone}`} className="btn-primary">
                Gratis gevelcheck aanvragen
              </a>
              <Link
                href="/calculator"
                className="btn-outline-light"
              >
                Prijs berekenen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2 — WAT IS GEVELISOLATIE?
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Text */}
            <div>
              <span className="section-label">Introductie</span>
              <h2 className="section-heading mt-2 mb-6">Wat is gevelisolatie?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gevelisolatie — ook buitengevelisolatie of ETICS (External Thermal Insulation
                Composite System) genoemd — is het aanbrengen van een isolatielaag aan de
                buitenzijde van uw bestaande gevel. De isolatieplaten (meestal EPS of minerale
                wol) worden verlijmd en vastgezet, waarna een nieuwe afwerklaag wordt aangebracht.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                In tegenstelling tot spouwmuurisolatie of binnenisolatie verliest u geen centimeter
                binnenruimte. Uw gevel krijgt tegelijk een nieuwe, frisse uitstraling. En omdat u
                aan de buitenkant werkt, blijft het bewoonbaar tijdens de werken.
              </p>
              <ul className="space-y-3">
                {[
                  "Geen binnenruimte verlies — werkt van buitenaf",
                  "Gevel en isolatie in één ingreep",
                  "Thermische brug sterk verminderd vs. spouwmuurisolatie",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
                      <path
                        d="M6 10l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <Image
                src={PHOTOS.gevelInProgress.src}
                alt={PHOTOS.gevelInProgress.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 3 — VOOR WELKE WONINGEN?
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50 section-padding">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="section-heading mb-3">
              Voor welke woningen is buitengevelisolatie geschikt?
            </h2>
            <p className="text-gray-600 text-lg">Buitengevelisolatie is de ideale oplossing voor:</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Woningen met massieve gevels (geen spouw)",
                desc: "De meest voorkomende situatie in oudere Belgische woningen. Buitenisolatie is hier vrijwel de enige effectieve optie.",
              },
              {
                title: "Woningen met een verouderde spouwvulling",
                desc: "Als uw spouwisolatie verouderd of onvolledig is, geeft buitengevelisolatie een betere isolatiewaarde.",
              },
              {
                title: "Woningen met gevelreparatiebehoefte",
                desc: "Scheuren, vochtplekken of afbladdering? Gevelisolatie pakt de oorzaak aan en geeft de gevel een compleet nieuwe bescherming.",
              },
              {
                title: "Woningen vóór 1990",
                desc: "De meeste woningen gebouwd vóór 1990 hebben onvoldoende of geen gevelisolatie. Precies hier is de winst het grootst.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-hover p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10">
                  <svg
                    className="h-5 w-5 text-orange-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-teal-800 leading-snug">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-orange-400/8 border border-orange-200 p-5 text-sm text-gray-700">
            <strong className="text-teal-800">Twijfelt u of uw woning geschikt is?</strong>{" "}
            Vraag een gratis gevelcheck aan — onze vakman kijkt het ter plaatse na.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 4 — KOSTPRIJS
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Text + list */}
            <div>
              <span className="section-label">Kostprijs</span>
              <h2 className="section-heading mt-2 mb-6">Wat kost gevelisolatie?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                De prijs voor buitengevelisolatie hangt af van verschillende factoren. Een exacte
                prijs is pas mogelijk na een inspectie ter plaatse. Wat wij u vooraf kunnen zeggen:
              </p>
              <ul className="space-y-5 mb-8">
                {[
                  {
                    label: "Geveloppervlak",
                    desc: "Grotere gevels betekenen meer materiaal en meer werktijd — maar ook een betere prijs per m².",
                  },
                  {
                    label: "Isolatiedikte",
                    desc: "14 cm of 18 cm EPS maakt een verschil in prijs én in isolatiewaarde (Rd-waarde).",
                  },
                  {
                    label: "Staat van de bestaande gevel",
                    desc: "Vochtproblemen, scheuren of afbladdering vereisen voorbereiding en sanering vóór de isolatiewerken.",
                  },
                  {
                    label: "Gekozen afwerking",
                    desc: "Crepi is de meest betaalbare optie. Steenstrips en premium texturen liggen hoger in prijs.",
                  },
                  {
                    label: "Toegankelijkheid",
                    desc: "Stellingwerk, hoogte en complexe daklijsten beïnvloeden de uitvoeringstijd en -kost.",
                  },
                  {
                    label: "Aanwezigheid van ramen, deuren en details",
                    desc: "Hoeveel aansluitwerk is er nodig? Dat telt mee.",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-800/6">
                      <svg
                        className="h-4 w-4 text-teal-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-teal-800 text-sm">{item.label}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mb-5">
                Gebruik onze gratis calculator voor een eerste indicatie of vraag een gratis
                inspectie aan.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/calculator" className="btn-primary">
                  Bereken mijn prijs
                </Link>
                <Link href="/contact" className="btn-outline">
                  Gratis inspectie
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] lg:sticky lg:top-8">
              <Image
                src={PHOTOS.gevelCrepiProject.src}
                alt={PHOTOS.gevelCrepiProject.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 5 — 14 CM OF 18 CM
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50 section-padding">
        <div className="container-wide">
          <span className="section-label">Isolatiedikte</span>
          <h2 className="section-heading mt-2 mb-8">
            14 cm of 18 cm isolatie: wat is het verschil?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
            {/* 14 cm */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-800/8 text-teal-800 font-extrabold text-base">
                  14
                </span>
                <div>
                  <h3 className="font-bold text-teal-800 text-lg leading-tight">14 cm EPS</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Rd ≈ 3,75 m²K/W</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Voldoet aan de minimumeisen voor de Vlaamse renovatieplicht. Ideaal voor woningen
                met een redelijke basiswaarde.
              </p>
            </div>
            {/* 18 cm */}
            <div className="relative rounded-2xl border-2 border-orange-400 bg-white p-8">
              <span className="absolute -top-3 left-6 rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-white">
                Aanbevolen
              </span>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-500 font-extrabold text-base">
                  18
                </span>
                <div>
                  <h3 className="font-bold text-teal-800 text-lg leading-tight">18 cm EPS</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Rd ≈ 5,00 m²K/W</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Hogere isolatiewaarde, grotere premie mogelijk, betere langetermijnbesparing.
                Aanbevolen voor woningen met een slechte beginsituatie of woningen met EPC-label E/F.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl rounded-xl bg-white border border-gray-100 p-4 text-sm text-gray-500">
            Wij adviseren u tijdens de gratis inspectie welke dikte het beste past bij uw woning
            en uw doelstellingen.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 6 — ZOMERHITTE
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Text */}
            <div>
              <span className="section-label">Zomercomfort</span>
              <h2 className="section-heading mt-2 mb-6">
                Beschermt gevelisolatie ook tegen zomerhitte?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ja — en dit wordt vaak onderschat. Een goed geïsoleerde gevel vertraagt de
                warmteoverdracht van buiten naar binnen. In de zomer betekent dit dat uw muren
                overdag geen warmte opslaan en &apos;s avonds niet afgeven in uw leefruimtes. Het
                resultaat: een aangenamer binnenklimaat zonder airconditioning.
              </p>
              <div className="rounded-xl bg-teal-800/5 border border-teal-800/10 p-4 text-sm text-teal-800">
                De combinatie van{" "}
                <Link
                  href="/diensten/dakisolatie"
                  className="font-semibold underline underline-offset-2 hover:text-orange-500 transition-colors"
                >
                  dakisolatie
                </Link>{" "}
                en gevelisolatie heeft het grootste effect op zomercomfort.
              </div>
            </div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
              <Image
                src={PHOTOS.gevelAfter1.src}
                alt={PHOTOS.gevelAfter1.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 7 — VOCHT EN CONDENSATIE
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50 section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] order-2 lg:order-1">
              <Image
                src={PHOTOS.gevelBefore1.src}
                alt={PHOTOS.gevelBefore1.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="section-label">Vochtwering</span>
              <h2 className="section-heading mt-2 mb-6">
                Gevelisolatie tegen vocht, condensatie en schimmel
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Een ongeïsoleerde buitenmuur is koud aan de binnenkant. Wanneer warme, vochtige
                lucht deze koude muur raakt, condenseert het vocht — en verschijnt er schimmel.
                Dit is niet alleen esthetisch vervelend, maar ook ongezond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Buitengevelisolatie verplaatst het dauwpunt naar buiten. Uw binnenmuren worden
                warmer, de condensatiekans daalt drastisch en schimmel heeft geen kans meer. Een
                vochtprobleem verdwijnt niet vanzelf — maar gevelisolatie pakt de oorzaak aan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 8 — AFWERKING
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <span className="section-label">Afwerkingen</span>
          <h2 className="section-heading mt-2 mb-10">
            Afwerking na gevelisolatie: crepi, spuitkurk of steenstrips
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Crepi */}
            <div className="group card-hover overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={PHOTOS.crepiService.src}
                  alt={PHOTOS.crepiService.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-teal-800 mb-2">Crepi</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  De meest populaire keuze. Minerale pleisterafwerking, beschikbaar in tientallen
                  kleuren en texturen. Duurzaam, onderhoudsvriendelijk, bewezen technologie.
                </p>
                <Link
                  href="/diensten/crepi"
                  className="text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Meer over crepi →
                </Link>
              </div>
            </div>

            {/* Spuitkurk */}
            <div className="group card-hover overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={PHOTOS.spuitkurk.src}
                  alt={PHOTOS.spuitkurk.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-teal-800 mb-2">Spuitkurk</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Naadloze, elastische coating op basis van natuurlijke kurk. Ideaal voor gevels
                  met bewegingsrisico. Waterafstotend en toch dampopen.
                </p>
                <Link
                  href="/diensten/spuitkurk"
                  className="text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Meer over spuitkurk →
                </Link>
              </div>
            </div>

            {/* Steenstrips */}
            <div className="group card-hover overflow-hidden">
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                {/* Illustrative brick pattern */}
                <svg
                  className="h-20 w-20 text-stone-400"
                  fill="none"
                  viewBox="0 0 80 64"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="30" height="14" rx="2" fill="currentColor" opacity="0.4" />
                  <rect x="40" y="2" width="38" height="14" rx="2" fill="currentColor" opacity="0.35" />
                  <rect x="2" y="22" width="20" height="14" rx="2" fill="currentColor" opacity="0.35" />
                  <rect x="28" y="22" width="28" height="14" rx="2" fill="currentColor" opacity="0.4" />
                  <rect x="62" y="22" width="16" height="14" rx="2" fill="currentColor" opacity="0.35" />
                  <rect x="2" y="42" width="36" height="14" rx="2" fill="currentColor" opacity="0.4" />
                  <rect x="44" y="42" width="34" height="14" rx="2" fill="currentColor" opacity="0.35" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-teal-800 mb-2">Steenstrips</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  De uitstraling van baksteen met de voordelen van isolatie. Geschikt voor wie het
                  karakter van zijn gevel wil bewaren of een authentiek uiterlijk wil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 9 — EPC IMPACT
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="section-label">Energieprestatie</span>
            <h2 className="section-heading mt-2 mb-6">Mogelijke impact op uw EPC-score</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gevelisolatie heeft een directe impact op uw EPC-score — de energieprestatiemeter
              die steeds belangrijker wordt bij verkoop, verhuur en renovatieverplichting.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              De exacte verbetering hangt af van uw beginsituatie: een woning met EPC G die
              volledig wordt geïsoleerd, kan meerdere labels stijgen. Een al redelijk geïsoleerde
              woning boekt een kleinere maar nog steeds relevante vooruitgang.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Wij geven u tijdens de inspectie een eerlijke inschatting van het effect op uw EPC
              — zonder overdreven beloften.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 10 — PREMIES
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <span className="section-label">Premies &amp; subsidies</span>
          <h2 className="section-heading mt-2 mb-4">Premies voor gevelisolatie in Vlaanderen</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            In Vlaanderen zijn verschillende premies beschikbaar voor buitengevelisolatie.
            De belangrijkste:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Mijn VerbouwPremie",
                desc: "Via het Energiehuis kunt u een premie aanvragen voor gevelisolatie. Het bedrag hangt af van het type werken, de Rd-waarde van de isolatie en uw inkomenscategorie. Wij helpen u de aanvraag in orde te maken.",
              },
              {
                title: "6% BTW",
                desc: "Op renovatiewerken aan woningen ouder dan 10 jaar geldt het verlaagd btw-tarief van 6% in plaats van 21% — een onmiddellijke besparing op uw factuur.",
              },
              {
                title: "Gemeentelijke premies",
                desc: "Sommige gemeenten in de Antwerpse regio bieden bijkomende ondersteuning. Wij checken uw situatie en informeren u over alle mogelijkheden.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-stone-50 border border-gray-100 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10">
                  <svg
                    className="h-5 w-5 text-orange-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-teal-800">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl bg-teal-800/5 border border-teal-800/10 p-4 text-sm text-teal-800">
            <strong>Premie-begeleiding is inbegrepen in onze samenwerking</strong> — zonder extra kost.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 11 — VEELGEMAAKTE FOUTEN
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50 section-padding">
        <div className="container-wide">
          <span className="section-label">Opgelet</span>
          <h2 className="section-heading mt-2 mb-10">Veelgemaakte fouten bij gevelisolatie</h2>
          <div className="grid gap-4 max-w-3xl">
            {[
              {
                num: "01",
                title: "Te dunne isolatie kiezen om te besparen",
                desc: "Een dunne isolatielaag verlaagt de uitvoeringskosten iets, maar betaalt zich nooit terug. Kies voor voldoende dikte en haal de maximale premie op.",
              },
              {
                num: "02",
                title: "Geen aandacht voor aansluitdetails",
                desc: "Rondom ramen, deuren, dakgoten en hoeken moet de isolatie perfect aansluiten. Koudebruggen op die plekken neutraliseren de winst van de rest.",
              },
              {
                num: "03",
                title: "Vochtproblemen negeren vóór de werken",
                desc: "Isoleren over een vochtige gevel drijft het vocht verder het muurwerk in. Vochtproblemen moeten eerst worden aangepakt.",
              },
              {
                num: "04",
                title: "Onvoldoende opvolging van droogtijd en weersomstandigheden",
                desc: "Crepi en spuitkurk moeten onder de juiste temperatuur en droogte worden aangebracht. Haast leidt tot kwaliteitsproblemen.",
              },
              {
                num: "05",
                title: "Kiezen voor de goedkoopste offerte zonder referenties",
                desc: "Gevelisolatie is een langetermijninvestering. Een slechte uitvoering kost u meer geld dan u bespaart. Check altijd referenties en garantievoorwaarden.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-5 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-xs font-extrabold text-orange-400">
                  {item.num}
                </span>
                <div>
                  <p className="font-bold text-teal-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 12 — FAQ
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <span className="section-label">FAQ</span>
          <h2 className="section-heading mt-2 mb-10">Veelgestelde vragen over gevelisolatie</h2>
          <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 overflow-hidden">
            {allAccordionFaqs.map((faq) => (
              <details key={faq.id} className="group">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-teal-800 hover:bg-stone-50 transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className="h-5 w-5 shrink-0 text-orange-400 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed">
                  {faq.id === "combineren-dakrenovatie" ? (
                    <p>
                      Ja — en dat is vaak aan te raden. Door dak- en gevelwerken samen te plannen,
                      bespaart u op stellingwerk en coördinatie. Wij voeren beide uit en bewaken de
                      samenhang.{" "}
                      <Link
                        href="/diensten/dakrenovatie"
                        className="font-semibold text-teal-700 underline underline-offset-2 hover:text-orange-500 transition-colors"
                      >
                        Meer over dakrenovatie
                      </Link>
                      .
                    </p>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 13 — INTERNAL LINKS
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50 section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-extrabold text-teal-800 mb-8">Ontdek ook</h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { label: "Crepi gevelafwerking", href: "/diensten/crepi" },
              { label: "Spuitkurk", href: "/diensten/spuitkurk" },
              { label: "Dakisolatie", href: "/diensten/dakisolatie" },
              { label: "Onze realisaties", href: "/realisaties" },
              { label: "Gevelisolatie Antwerpen", href: "/gevelisolatie-antwerpen" },
              { label: "Gevelisolatie Schilde", href: "/regio/schilde" },
              { label: "Gevelisolatie Brasschaat", href: "/regio/brasschaat" },
              { label: "Premies renovatie 2026", href: "/blog/premies-renovatie-2026" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-xl bg-white border border-gray-100 px-4 py-3 text-sm font-semibold text-teal-800 shadow-sm transition-all hover:border-orange-200 hover:text-orange-500 hover:-translate-y-0.5 hover:shadow-md"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-orange-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 14 — CTA + CONTACT FORM
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-teal-800 section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left: heading + trust signals */}
            <div>
              <h2 className="text-3xl font-extrabold text-white leading-tight md:text-4xl mb-4">
                Wilt u weten wat gevelisolatie voor uw woning kost?
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-8">
                Vraag een gratis gevelcheck aan. Onze vakman komt ter plaatse, beoordeelt uw
                situatie en geeft u een eerlijke offerte met vaste prijs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Gratis en vrijblijvend",
                  "Vaste prijs — geen verrassingen achteraf",
                  "Premie-begeleiding inbegrepen",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                    <svg
                      className="h-5 w-5 shrink-0 text-orange-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white shadow-md shadow-orange-400/20 transition-all hover:bg-orange-300 hover:-translate-y-0.5"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {BRAND.phoneDisplay}
                </a>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            {/* Right: contact form */}
            <ContactForm defaultService="gevelwerken" />
          </div>
        </div>
      </section>
    </>
  );
}
