// src/app/diensten/dakisolatie/page.tsx
// Static route — overrides /diensten/[slug] for dakisolatie

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo";
import { BRAND, PHOTOS } from "@/lib/constants";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Dakisolatie Antwerpen en omgeving — Plat & Hellend Dak | ISOPROTECH",
  description:
    "Professionele dakisolatie in Antwerpen en omgeving. Platte en hellende daken. Tot 30% besparing op energiekosten. Advies over premies. Gratis dakcontrole.",
  keywords: [
    "dakisolatie antwerpen",
    "dak isoleren",
    "plat dak isolatie",
    "hellend dak isolatie",
  ],
  alternates: {
    canonical: BRAND.url + "/diensten/dakisolatie",
  },
  openGraph: {
    title: "Dakisolatie Antwerpen en omgeving — Plat & Hellend Dak | ISOPROTECH",
    description:
      "Professionele dakisolatie in Antwerpen en omgeving. Platte en hellende daken. Tot 30% besparing op energiekosten. Advies over premies. Gratis dakcontrole.",
    url: BRAND.url + "/diensten/dakisolatie",
    siteName: BRAND.name,
    locale: "nl_BE",
    type: "website",
    images: [{ url: `${BRAND.url}/images/og-isoprotech.png`, width: 1200, height: 630 }],
  },
};

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────

const pageFaqs = [
  {
    question: "Hoeveel bespaar ik met dakisolatie?",
    answer:
      "Met een goed geïsoleerd dak bespaart u gemiddeld 25 tot 30% op uw verwarmingskosten. De exacte besparing hangt af van uw huidige isolatiesituatie en het type verwarming. De meeste klanten zien het verschil al op de eerste verwarmingsrekening.",
  },
  {
    question: "Hoeveel kost dakisolatie?",
    answer:
      "De prijs hangt af van het type dak (plat of hellend), de gekozen materialen en of er ook een nieuwe bedekking nodig is. Voor een plat dak rekent u gemiddeld op €30 tot €50/m² voor isolatie alleen. Gebruik onze dakcalculator voor een volledige indicatieve prijs, of vraag een gratis inspectie aan.",
  },
  {
    question: "Welke premies kan ik krijgen voor dakisolatie?",
    answer:
      "Via Mijn VerbouwPremie kunt u in Vlaanderen premies aanvragen voor dak- en gevelisolatie. Het bedrag hangt af van het type werken, de bereikte isolatiewaarde en uw gezinsinkomen. Wij checken uw situatie en helpen u bij de aanvraag — zodat u het maximale uit uw investering haalt.",
  },
  {
    question: "Hoe lang duurt een dakrenovatie?",
    answer:
      "Een volledige dakrenovatie duurt gemiddeld 1 tot 3 weken, afhankelijk van de grootte en het type werken. Wij plannen efficiënt en houden u op de hoogte — zodat de overlast minimaal is.",
  },
  {
    question: "Is mijn dak geschikt voor isolatie?",
    answer:
      "Vrijwel elk dak kan worden geïsoleerd. De vraag is welke methode het meest geschikt is: boven of onder de dakstructuur, gecombineerd met vernieuwing of niet. Wij bekijken uw specifieke situatie tijdens een gratis dakcontrole.",
  },
  {
    question: "Kan ik gelijktijdig dakisolatie en gevelisolatie laten uitvoeren?",
    answer:
      "Ja — en dat is aan te raden. Door beide ingrepen te combineren, bespaart u op stellingwerk en coördinatie. Wij voeren dak- en gevelwerken in één werf uit.",
  },
  {
    question: "Wat is het verschil tussen PIR en EPS voor dakisolatie?",
    answer:
      "PIR (polyisocyanuraat) heeft een hogere isolatiewaarde per centimeter dan EPS — ideaal als de ruimte beperkt is. EPS is goedkoper per m³ isolatiewaarde. Wij adviseren u welk materiaal het beste past bij uw dak en budget.",
  },
  {
    question: "Bieden jullie garantie op dakisolatie?",
    answer:
      "Ja — 10 jaar schriftelijke garantie op alle uitgevoerde werken. Wij werken uitsluitend met ATG- en BENOR-gekeurde systemen die voldoen aan de Belgische kwaliteitsnormen. Geen mooie woorden — een document dat u kunt opbergen.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function DakisolatiePage() {
  const breadcrumbItems = [
    { name: "Home", url: BRAND.url },
    { name: "Diensten", url: `${BRAND.url}/diensten` },
    { name: "Dakisolatie", url: `${BRAND.url}/diensten/dakisolatie` },
  ];

  return (
    <>
      {/* JSON-LD */}
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqSchema(pageFaqs)} />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="bg-teal-800 py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                /
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="hover:text-white transition-colors"
                >
                  Diensten
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                /
              </li>
              <li>
                <span className="text-orange-400 font-medium">Dakisolatie</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
              Dakisolatie Antwerpen
            </span>
            <h1 className="text-3xl font-extrabold text-white md:text-5xl leading-tight mb-6">
              Dakisolatie: stop het warmteverlies via uw dak
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Via een ongeïsoleerd dak verliest u tot 30% van uw
              verwarmingskosten. ISOPROTECH isoleert platte en hellende daken
              vakkundig — met vaste prijs, 10 jaar garantie en begeleiding bij
              premie-aanvraag.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${BRAND.phone}`}
                className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-300 transition-colors"
              >
                Bel {BRAND.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-white/40 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors"
              >
                Gratis dakcontrole
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WAT IS DAKISOLATIE? ─────────────────────────────── */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
                Waarom isoleren
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
                Wat is dakisolatie en waarom is het zo belangrijk?
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Dakisolatie is het aanbrengen van een isolatielaag op of onder
                uw dak om warmteverlies te beperken. Warmte stijgt — en ontsnapt
                bij voorkeur via het dak. In een woning zonder goede dakisolatie
                kan dat oplopen tot 25 à 30% van uw totale verwarmingskosten.
              </p>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                De technische uitvoering verschilt sterk naargelang het type dak:
                een plat dak vraagt een andere aanpak dan een hellend dak.
                ISOPROTECH heeft ervaring met beide.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Tot 30% besparing", sub: "op verwarmingskosten" },
                  { label: "10 jaar", sub: "schriftelijke garantie" },
                  { label: "Plat & hellend", sub: "alle daktypen" },
                  { label: "Premies", sub: "wij helpen bij aanvraag" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-stone-50 p-4 border border-stone-100"
                  >
                    <p className="text-xl font-extrabold text-teal-800">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={PHOTOS.dakisolatieTeam.src}
                alt={PHOTOS.dakisolatieTeam.alt}
                width={PHOTOS.dakisolatieTeam.width}
                height={PHOTOS.dakisolatieTeam.height}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PLAT DAK OF HELLEND DAK ─────────────────────────── */}
      <section className="bg-stone-50 py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
              Daktypen
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
              Plat dak of hellend dak isoleren: wat zijn de opties?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Plat dak */}
            <div className="rounded-3xl bg-white border border-stone-100 p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-800/10">
                <svg
                  className="h-6 w-6 text-teal-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9h18"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-teal-800 mb-3">
                Plat dak isoleren
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Bij een plat dak wordt de isolatie bovenop de bestaande
                dakstructuur aangebracht, vóór de nieuwe waterdichte laag. Wij
                werken met PIR-isolatieplaten (polyisocyanuraat) die een hoge
                isolatiewaarde bieden bij beperkte dikte.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Gecombineerd met dakrenovatie voor maximale efficiëntie",
                  "Hoge Rd-waarde bij beperkte dikte",
                  "Geschikt voor zowel nieuwe als bestaande daken",
                ].map((adv) => (
                  <li key={adv} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="10"
                        fill="currentColor"
                        opacity="0.15"
                      />
                      <path
                        d="M6 10l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {adv}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/diensten/dakrenovatie"
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-orange-400 transition-colors"
              >
                Combineert perfect met dakrenovatie
                <svg
                  className="h-4 w-4"
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
              </Link>
            </div>

            {/* Hellend dak */}
            <div className="rounded-3xl bg-white border border-stone-100 p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10">
                <svg
                  className="h-6 w-6 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l9-9 9 9v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-teal-800 mb-3">
                Hellend dak isoleren
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Een hellend dak kan worden geïsoleerd tussen of boven de
                dakspanten, of aan de binnenzijde vanuit de zolder. De meest
                voorkomende aanpak in Belgische woningen is isolatie tussen de
                dakspanten (Sarking) of buitenisolatie bij renovatie.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Warme zolder of slaapkamer direct bruikbaar",
                  "Vermindert het risico op ijs- en vorstschade",
                  "Combineerbaar met nieuwe dakpannen",
                ].map((adv) => (
                  <li key={adv} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="10"
                        fill="currentColor"
                        opacity="0.15"
                      />
                      <path
                        d="M6 10l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {adv}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: COMBINEREN MET DAKRENOVATIE ──────────────────────── */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
            Slim combineren
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
            Wanneer dakisolatie combineren met dakrenovatie?
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            Dakisolatie en dakrenovatie zijn logische partners. Als uw dak
            verouderd is — lekke bedekking, versleten pannen, verouderde goten —
            is het zinvol beide tegelijk aan te pakken. Zo betaalt u slechts één
            keer voor stellingwerk en coördinatie.
          </p>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Wij bekijken uw situatie eerlijk: als het dak nog 10–15 jaar meegaat,
            voeren wij alleen de isolatie uit. Als renovatie nakende is, adviseren
            wij dat direct.
          </p>
          <div className="mt-8">
            <Link
              href="/diensten/dakrenovatie"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-800 px-6 py-3 font-bold text-white hover:bg-teal-700 transition-colors"
            >
              Meer over dakrenovatie
              <svg
                className="h-4 w-4"
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
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: KOSTPRIJS ────────────────────────────────────────── */}
      <section className="bg-stone-50 py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
                Kostprijs
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
                Wat kost dakisolatie?
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                De prijs voor dakisolatie hangt af van:
              </p>
              <ol className="mt-6 space-y-5">
                {[
                  {
                    nr: "1",
                    title: "Type dak",
                    desc: "Plat of hellend? Dit bepaalt de isolatiemethode en de benodigde materialen.",
                  },
                  {
                    nr: "2",
                    title: "Dakoppervlak",
                    desc: "Grotere oppervlakken kosten meer in totaal, maar de prijs per m² daalt.",
                  },
                  {
                    nr: "3",
                    title: "Gekozen isolatiedikte en -materiaal",
                    desc: "Meer isolatie = hogere prijs, maar ook hogere besparing en grotere premie.",
                  },
                  {
                    nr: "4",
                    title: "Staat van de bestaande bedekking",
                    desc: "Als de dakbedekking ook wordt vernieuwd, telt dat mee in de totaalprijs.",
                  },
                  {
                    nr: "5",
                    title: "Toegankelijkheid",
                    desc: "Hoogte, stellingwerk en complexe details beïnvloeden de uitvoeringstijd.",
                  },
                ].map((item) => (
                  <li key={item.nr} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-sm font-extrabold text-orange-400">
                      {item.nr}
                    </span>
                    <div>
                      <p className="font-bold text-teal-800">{item.title}</p>
                      <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl bg-white border border-stone-100 p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-teal-800 mb-3">
                Bereken uw prijs of vraag een gratis dakcontrole aan
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Gebruik onze dakcalculator voor een indicatieve prijs op maat,
                of vraag een gratis dakcontrole aan. Onze vakman beoordeelt ter
                plaatse uw dak en bezorgt u een duidelijke offerte met vaste prijs.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/calculator/dak"
                  className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-white text-center hover:bg-orange-300 transition-colors"
                >
                  Dakcalculator
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border-2 border-teal-800 px-6 py-3 font-bold text-teal-800 text-center hover:bg-teal-800 hover:text-white transition-colors"
                >
                  Gratis dakcontrole
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                Vrijblijvend. Geen verborgen kosten. Vaste prijs in de offerte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: VOCHTPROBLEMEN ───────────────────────────────────── */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
            Vocht en schimmel
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
            Dakisolatie en vochtproblemen
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            Een dak zonder isolatie is niet alleen koud — het is ook een
            broedplaats voor vochtproblemen. Condensatie tussen dakconstructie
            en binnenzijde leidt tot schimmel, houtrot en op termijn structurele
            schade.
          </p>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Goede dakisolatie inclusief dampremmende laag voorkomt condensatie
            in de dakconstructie. De investering beschermt niet alleen uw
            comfort, maar ook de structurele integriteit van uw woning.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "💧", label: "Geen condensatie", sub: "met correcte dampremmende laag" },
              { icon: "🏚️", label: "Geen houtrot", sub: "door droge dakconstructie" },
              { icon: "🌡️", label: "Minder schimmel", sub: "comfortabel en gezond binnenklimaat" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-stone-50 p-5 border border-stone-100"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="mt-2 font-bold text-teal-800">{item.label}</p>
                <p className="text-sm text-gray-500 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: ZOMERCOMFORT ─────────────────────────────────────── */}
      <section className="bg-stone-50 py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
            Comfort het hele jaar
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
            Dakisolatie en comfort in de zomer
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            De meeste mensen denken bij dakisolatie aan warmte in de winter.
            Maar een goed geïsoleerd dak werkt ook als hitteschild in de zomer.
            Het vertraagt de warmteoverdracht van het opgehitte dak naar uw
            leefruimtes.
          </p>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Het resultaat: uw slaapkamers blijven aangenamer in de zomer, zonder
            dat u een airconditioning nodig heeft. Dit wordt steeds relevanter
            met de toenemende hittegolven in België.
          </p>
        </div>
      </section>

      {/* ── SECTION 8: EPC IMPACT ───────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
                EPC en renovatieplicht
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
                Impact van dakisolatie op uw EPC-score
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Dakisolatie is één van de meest impactvolle ingrepen om uw
                EPC-score te verbeteren. Voor woningen met een laag label (E of
                F) kan dakisolatie alleen al één of meerdere labels verschil
                maken.
              </p>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Met de Vlaamse renovatieplicht worden woningen met EPC-label E
                of F verplicht te renoveren bij overdracht. Dakisolatie is vaak
                de eerste stap — kosteneffectief en relatief snel uitvoerbaar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  letter: "E→C",
                  label: "Mogelijke sprong",
                  sub: "bij dakisolatie alleen",
                  highlight: true,
                },
                {
                  letter: "25–30%",
                  label: "Energiebesparing",
                  sub: "gemiddeld op verwarmingskosten",
                  highlight: false,
                },
                {
                  letter: "2026",
                  label: "Renovatieplicht",
                  sub: "label E & F bij overdracht",
                  highlight: false,
                },
                {
                  letter: "1e stap",
                  label: "Dakisolatie",
                  sub: "meest kosteneffectief",
                  highlight: true,
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className={`rounded-2xl p-5 ${
                    card.highlight
                      ? "bg-teal-800 text-white"
                      : "bg-stone-50 border border-stone-100"
                  }`}
                >
                  <p
                    className={`text-2xl font-extrabold ${
                      card.highlight ? "text-orange-400" : "text-teal-800"
                    }`}
                  >
                    {card.letter}
                  </p>
                  <p
                    className={`font-bold mt-1 ${
                      card.highlight ? "text-white" : "text-teal-800"
                    }`}
                  >
                    {card.label}
                  </p>
                  <p
                    className={`text-sm mt-0.5 ${
                      card.highlight ? "text-white/60" : "text-gray-500"
                    }`}
                  >
                    {card.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: PREMIES ──────────────────────────────────────────── */}
      <section className="bg-stone-50 py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
              Premies &amp; subsidies
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
              Premies voor dakisolatie in Vlaanderen
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Wij begeleiden u van A tot Z bij de premie-aanvraag. Zo haalt u het
              maximale rendement uit uw investering.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Mijn VerbouwPremie",
                body: "Premie voor dakisolatie op basis van de Rd-waarde van de isolatie en uw inkomenscategorie. Wij dienen de aanvraag in voor u.",
                icon: "🏠",
              },
              {
                title: "6% BTW",
                body: "Het verlaagd btw-tarief van 6% geldt voor renovatiewerken aan woningen ouder dan 10 jaar — inclusief dakisolatie en dakrenovatie.",
                icon: "💶",
              },
              {
                title: "Asbestverwijderingsbonus",
                body: "Als uw dak asbestmateriaal bevat (asbest-cementgolfplaten, asbestleien), kunt u een extra premie van €8/m² ontvangen voor de verwijdering vóór de renovatie.",
                icon: "🔬",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-white border border-stone-100 p-8 shadow-sm"
              >
                <span className="text-3xl" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-teal-800">
                  {card.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-400">
            Premies en voorwaarden kunnen wijzigen. Wij checken uw actuele situatie
            tijdens de gratis dakcontrole.
          </p>
        </div>
      </section>

      {/* ── SECTION 10: VEELGEMAAKTE FOUTEN ────────────────────────────── */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
                Valkuilen
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
                Veelgemaakte fouten bij dakisolatie
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Een dakisolatie die niet correct uitgevoerd is, levert minder
                besparing op en kan op termijn schade veroorzaken. Wij zetten de
                meest voorkomende fouten op een rij.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  nr: "01",
                  title: "Onvoldoende isolatiedikte",
                  desc: "De minimale Rd-waarde voor premies en renovatieplicht is 4,5 m²K/W voor daken. Minder isoleren is investeren zonder de maximale return.",
                },
                {
                  nr: "02",
                  title: "Dampremmende laag vergeten",
                  desc: "Zonder correcte dampremmende laag condenseert vocht in de isolatie — met schimmel en houtrot tot gevolg.",
                },
                {
                  nr: "03",
                  title: "Aansluitdetails aan dakrand en dakkapellen negeren",
                  desc: "Koudebruggen rondom dakdoorbrekingen, dakkapellen en dakgoten neutraliseren een groot deel van de isolatiewinst.",
                },
                {
                  nr: "04",
                  title: "Isoleren over een verouderde bedekking",
                  desc: "Als de dakbedekking al over tien jaar aan vervanging toe is, isoleert u beter tegelijk. Twee keer stellingwerk plaatsen kost meer.",
                },
                {
                  nr: "05",
                  title: "Combinatie met ventilatie niet bekijken",
                  desc: "Goed isoleren en dan ventilatie vergeten is een gemiste kans. Wij bekijken ook uw ventilatiesituatie en adviseren indien nodig.",
                },
              ].map((item) => (
                <div
                  key={item.nr}
                  className="flex items-start gap-4 rounded-2xl bg-stone-50 border border-stone-100 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-800/10 text-sm font-extrabold text-teal-800">
                    {item.nr}
                  </span>
                  <div>
                    <p className="font-bold text-teal-800">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FAQ ─────────────────────────────────────────────── */}
      <section className="bg-stone-50 py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
              Veelgestelde vragen
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
              Veelgestelde vragen over dakisolatie
            </h2>
          </div>
          <div className="space-y-3">
            {pageFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-stone-100 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-bold text-teal-800 hover:text-orange-400 transition-colors list-none">
                  <span>{faq.question}</span>
                  <svg
                    className="h-5 w-5 shrink-0 text-orange-400 transition-transform group-open:rotate-180"
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
                <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                  {i === 5 ? (
                    <>
                      Ja — en dat is aan te raden. Door beide ingrepen te
                      combineren, bespaart u op stellingwerk en coördinatie. Wij
                      voeren dak- en gevelwerken in één werf uit.{" "}
                      <Link
                        href="/diensten/gevelisolatie"
                        className="font-semibold text-teal-700 underline underline-offset-2 hover:text-orange-400 transition-colors"
                      >
                        Meer over gevelisolatie
                      </Link>
                      .
                    </>
                  ) : (
                    faq.answer
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: INTERNE LINKS ───────────────────────────────────── */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
              Verder lezen
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-teal-800 md:text-4xl">
              Ontdek ook
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              {
                label: "Dakrenovatie",
                href: "/diensten/dakrenovatie",
                sub: "Dienst",
              },
              {
                label: "Gevelisolatie",
                href: "/diensten/gevelisolatie",
                sub: "Dienst",
              },
              {
                label: "Onze realisaties",
                href: "/realisaties",
                sub: "Portfolio",
              },
              {
                label: "Dakisolatie Antwerpen",
                href: "/dakisolatie-antwerpen",
                sub: "Locatie",
              },
              {
                label: "Dakisolatie Edegem",
                href: "/regio/edegem",
                sub: "Locatie",
              },
              {
                label: "Blog dakisolatie",
                href: "/blog/dakisolatie-plat-hellend",
                sub: "Artikel",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center justify-center gap-1 rounded-2xl border border-stone-100 bg-stone-50 p-5 text-center transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-sm"
              >
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  {link.sub}
                </span>
                <span className="font-bold text-teal-800 text-sm group-hover:text-orange-400 transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: CTA + FORM ──────────────────────────────────────── */}
      <section className="bg-teal-800 py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
                Gratis dakcontrole
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Laat uw dak controleren en ontvang een duidelijke offerte
              </h2>
              <p className="mt-5 text-white/70 text-lg leading-relaxed">
                Onze vakman komt ter plaatse, beoordeelt uw dak en geeft u een
                eerlijke offerte met vaste prijs.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2" />
                    <path
                      d="M6 10l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Gratis inspectie ter plaatse</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2" />
                    <path
                      d="M6 10l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Offerte met vaste prijs — geen verrassingen</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2" />
                    <path
                      d="M6 10l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>10 jaar schriftelijke garantie</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2" />
                    <path
                      d="M6 10l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Begeleiding bij premie-aanvraag</span>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-300 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {BRAND.phoneDisplay}
                </a>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-orange-400 px-6 py-3 font-bold text-orange-400 hover:bg-orange-400/10 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <ContactForm defaultService="dakwerken" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
