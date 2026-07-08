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
  alternates: { canonical: `${BRAND.url}/diensten/dakisolatie` },
  keywords: [
    "dakisolatie antwerpen",
    "dak isoleren",
    "plat dak isolatie",
    "hellend dak isolatie",
  ],
  openGraph: {
    title: "Dakisolatie Antwerpen en omgeving | ISOPROTECH",
    description:
      "Professionele dakisolatie in Antwerpen en omgeving. Platte en hellende daken.",
    url: `${BRAND.url}/diensten/dakisolatie`,
    type: "website",
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
    question: "Welke premies kan ik krijgen?",
    answer:
      "Via Mijn VerbouwPremie kunt u in Vlaanderen premies aanvragen voor dak- en gevelisolatie. Het bedrag hangt af van het type werken, de bereikte isolatiewaarde en uw gezinsinkomen. Wij checken uw situatie en helpen u bij de aanvraag.",
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
  return (
    <>
      {/* JSON-LD */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BRAND.url },
          { name: "Diensten", url: `${BRAND.url}/diensten` },
          { name: "Dakisolatie", url: `${BRAND.url}/diensten/dakisolatie` },
        ])}
      />
      <JsonLd
        data={faqSchema([
          {
            question: "Hoeveel bespaar ik met dakisolatie?",
            answer:
              "Met een goed geïsoleerd dak bespaart u gemiddeld 25 tot 30% op uw verwarmingskosten.",
          },
          {
            question: "Hoeveel kost dakisolatie?",
            answer:
              "De prijs hangt af van het type dak (plat of hellend), de gekozen materialen en of er ook een nieuwe bedekking nodig is. Voor een plat dak rekent u gemiddeld op €30 tot €50/m² voor isolatie alleen.",
          },
          {
            question: "Is mijn dak geschikt voor isolatie?",
            answer:
              "Vrijwel elk dak kan worden geïsoleerd. Wij bekijken uw specifieke situatie tijdens een gratis dakcontrole.",
          },
          {
            question:
              "Kan ik gelijktijdig dakisolatie en gevelisolatie laten uitvoeren?",
            answer:
              "Ja — en dat is aan te raden. Door beide ingrepen te combineren, bespaart u op stellingwerk en coördinatie.",
          },
          {
            question: "Bieden jullie garantie op dakisolatie?",
            answer:
              "Ja — 10 jaar schriftelijke garantie op alle uitgevoerde werken.",
          },
        ])}
      />

      <main>
        {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
        <section className="bg-teal-800 text-white section-padding">
          <div className="container-wide">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li>
                  <Link
                    href="/diensten"
                    className="hover:text-white transition-colors"
                  >
                    Diensten
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li>
                  <span className="text-white/90">Dakisolatie</span>
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl mb-6 leading-tight">
                Dakisolatie: stop het warmteverlies via uw dak
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                Via een ongeïsoleerd dak verliest u tot 30% van uw
                verwarmingskosten. ISOPROTECH isoleert platte en hellende daken
                vakkundig — met vaste prijs, 10 jaar garantie en begeleiding
                bij premie-aanvraag.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Bel voor gratis dakcontrole
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors"
                >
                  Vraag offerte aan
                </Link>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Tot 30% besparing op energiekosten",
                  "10 jaar garantie",
                  "Gratis dakcontrole",
                ].map((stat) => (
                  <span
                    key={stat}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold text-white/90"
                  >
                    <svg
                      className="w-4 h-4 text-orange-400 shrink-0"
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
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WAT IS DAKISOLATIE? ─────────────────────────────── */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="section-heading mb-6">
                  Wat is dakisolatie en waarom is het zo belangrijk?
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-5">
                  Dakisolatie is het aanbrengen van een isolatielaag op of
                  onder uw dak om warmteverlies te beperken. Warmte stijgt —
                  en ontsnapt bij voorkeur via het dak. In een woning zonder
                  goede dakisolatie kan dat oplopen tot 25 à 30% van uw totale
                  verwarmingskosten.
                </p>
                <p className="text-stone-600 text-lg leading-relaxed">
                  De technische uitvoering verschilt sterk naargelang het type
                  dak: een plat dak vraagt een andere aanpak dan een hellend
                  dak. ISOPROTECH heeft ervaring met beide.
                </p>
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
        <section className="bg-stone-50 section-padding">
          <div className="container-wide">
            <h2 className="section-heading mb-10 text-center">
              Plat dak of hellend dak isoleren: wat zijn de opties?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Plat dak */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 flex flex-col gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-800/10 shrink-0">
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-teal-800">
                  Plat dak isoleren
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Bij een plat dak wordt de isolatie bovenop de bestaande
                  dakstructuur aangebracht, vóór de nieuwe waterdichte laag.
                  Wij werken met PIR-isolatieplaten (polyisocyanuraat) die een
                  hoge isolatiewaarde bieden bij beperkte dikte.
                </p>
                <ul className="flex flex-col gap-3">
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
                        <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
                        <path
                          d="M6 10l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-stone-600 text-sm leading-relaxed">{adv}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/diensten/dakrenovatie"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-teal-800 hover:text-orange-400 transition-colors"
                >
                  → Combineert perfect met dakrenovatie
                </Link>
              </div>

              {/* Hellend dak */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 flex flex-col gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 shrink-0">
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
                <h3 className="text-2xl font-extrabold text-teal-800">
                  Hellend dak isoleren
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Een hellend dak kan worden geïsoleerd tussen of boven de
                  dakspanten, of aan de binnenzijde vanuit de zolder. De meest
                  voorkomende aanpak in Belgische woningen is isolatie tussen de
                  dakspanten (Sarking) of buitenisolatie bij renovatie.
                </p>
                <ul className="flex flex-col gap-3">
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
                        <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
                        <path
                          d="M6 10l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-stone-600 text-sm leading-relaxed">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: COMBINEREN MET DAKRENOVATIE ──────────────────────── */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-6">
                Wanneer dakisolatie combineren met dakrenovatie?
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-5">
                Dakisolatie en dakrenovatie zijn logische partners. Als uw dak
                verouderd is — lekke bedekking, versleten pannen, verouderde
                goten — is het zinvol beide tegelijk aan te pakken. Zo betaalt
                u slechts één keer voor stellingwerk en coördinatie.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Wij bekijken uw situatie eerlijk: als het dak nog 10–15 jaar
                meegaat, voeren wij alleen de isolatie uit. Als renovatie
                nakende is, adviseren wij dat direct.
              </p>
              <Link
                href="/diensten/dakrenovatie"
                className="inline-flex items-center gap-2 font-bold text-teal-800 hover:text-orange-400 transition-colors"
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
        <section className="bg-stone-50 section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading mb-4">Wat kost dakisolatie?</h2>
              <p className="text-stone-600 text-lg mb-8">
                De prijs voor dakisolatie hangt af van:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {[
                  {
                    n: 1,
                    title: "Type dak",
                    desc: "Plat of hellend? Dit bepaalt de isolatiemethode en de benodigde materialen.",
                  },
                  {
                    n: 2,
                    title: "Dakoppervlak",
                    desc: "Grotere oppervlakken kosten meer in totaal, maar de prijs per m² daalt.",
                  },
                  {
                    n: 3,
                    title: "Gekozen isolatiedikte en -materiaal",
                    desc: "Meer isolatie = hogere prijs, maar ook hogere besparing en grotere premie.",
                  },
                  {
                    n: 4,
                    title: "Staat van de bestaande bedekking",
                    desc: "Als de dakbedekking ook wordt vernieuwd, telt dat mee in de totaalprijs.",
                  },
                  {
                    n: 5,
                    title: "Toegankelijkheid",
                    desc: "Hoogte, stellingwerk en complexe details beïnvloeden de uitvoeringstijd.",
                  },
                ].map(({ n, title, desc }) => (
                  <div
                    key={n}
                    className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm flex gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-sm font-extrabold text-orange-400">
                      {n}
                    </span>
                    <div>
                      <p className="font-bold text-teal-800 mb-1">{title}</p>
                      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-stone-600 mb-6">
                Gebruik onze dakcalculator of vraag een gratis dakcontrole aan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/calculator/dak" className="btn-primary text-center">
                  Dakcalculator
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-teal-800 px-6 py-3 font-bold text-teal-800 hover:bg-teal-800 hover:text-white transition-colors"
                >
                  Gratis dakcontrole
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: VOCHTPROBLEMEN ───────────────────────────────────── */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-6">
                Dakisolatie en vochtproblemen
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-5">
                Een dak zonder isolatie is niet alleen koud — het is ook een
                broedplaats voor vochtproblemen. Condensatie tussen
                dakconstructie en binnenzijde leidt tot schimmel, houtrot en op
                termijn structurele schade.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Goede dakisolatie inclusief dampremmende laag voorkomt
                condensatie in de dakconstructie. De investering beschermt niet
                alleen uw comfort, maar ook de structurele integriteit van uw
                woning.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: ZOMERCOMFORT ─────────────────────────────────────── */}
        <section className="bg-stone-50 section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-6">
                Dakisolatie en comfort in de zomer
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-5">
                De meeste mensen denken bij dakisolatie aan warmte in de
                winter. Maar een goed geïsoleerd dak werkt ook als hitteschild
                in de zomer. Het vertraagt de warmteoverdracht van het opgehitte
                dak naar uw leefruimtes.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Het resultaat: uw slaapkamers blijven aangenamer in de zomer,
                zonder dat u een airconditioning nodig heeft. Dit wordt steeds
                relevanter met de toenemende hittegolven in België.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: EPC IMPACT ───────────────────────────────────────── */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-6">
                Impact van dakisolatie op uw EPC-score
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-5">
                Dakisolatie is één van de meest impactvolle ingrepen om uw
                EPC-score te verbeteren. Voor woningen met een laag label (E of
                F) kan dakisolatie alleen al één of meerdere labels verschil
                maken.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Met de Vlaamse renovatieplicht worden woningen met EPC-label E
                of F verplicht te renoveren bij overdracht. Dakisolatie is vaak
                de eerste stap — kosteneffectief en relatief snel uitvoerbaar.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: PREMIES ──────────────────────────────────────────── */}
        <section className="bg-stone-50 section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <p className="section-label mb-2">Premies &amp; subsidies</p>
              <h2 className="section-heading mb-10">
                Premies voor dakisolatie in Vlaanderen
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {/* Mijn VerbouwPremie */}
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 flex flex-col gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800/10">
                    <svg
                      className="h-5 w-5 text-teal-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-teal-800">
                    Mijn VerbouwPremie
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    Premie voor dakisolatie op basis van de Rd-waarde van de
                    isolatie en uw inkomenscategorie. Wij dienen de aanvraag
                    in voor u.
                  </p>
                </div>

                {/* 6% BTW */}
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 flex flex-col gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800/10">
                    <svg
                      className="h-5 w-5 text-teal-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-teal-800">
                    6% BTW
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    Het verlaagd btw-tarief van 6% geldt voor renovatiewerken
                    aan woningen ouder dan 10 jaar — inclusief dakisolatie en
                    dakrenovatie.
                  </p>
                </div>

                {/* Asbestverwijderingsbonus */}
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 flex flex-col gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800/10">
                    <svg
                      className="h-5 w-5 text-teal-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-teal-800">
                    Asbestverwijderingsbonus
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    Als uw dak asbestmateriaal bevat (asbest-cementgolfplaten,
                    asbestleien), kunt u een extra premie ontvangen voor de
                    verwijdering vóór de renovatie. ISOPROTECH begeleidt u ook
                    hierbij.
                  </p>
                  <Link
                    href="/diensten/asbestverwijdering"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-teal-800 hover:text-orange-400 transition-colors"
                  >
                    Meer over asbestverwijdering
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
            </div>
          </div>
        </section>

        {/* ── SECTION 10: VEELGEMAAKTE FOUTEN ────────────────────────────── */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-8">
                Veelgemaakte fouten bij dakisolatie
              </h2>
              <ol className="flex flex-col gap-6">
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
                  <li
                    key={item.nr}
                    className="flex items-start gap-5 rounded-2xl bg-stone-50 border border-stone-100 p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-800/10 text-sm font-extrabold text-teal-800">
                      {item.nr}
                    </span>
                    <div>
                      <p className="font-bold text-teal-800 mb-1">{item.title}</p>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── SECTION 11: FAQ ─────────────────────────────────────────────── */}
        <section className="bg-stone-50 section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-8">
                Veelgestelde vragen over dakisolatie
              </h2>
              <div className="flex flex-col gap-3">
                {pageFaqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white rounded-2xl border border-stone-100 overflow-hidden"
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
                    <div className="px-6 pb-6 pt-1 text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 12: INTERNE LINKS ───────────────────────────────────── */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <h2 className="section-heading mb-8">Ontdek ook</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { label: "Dakrenovatie", href: "/diensten/dakrenovatie" },
                { label: "Gevelisolatie", href: "/diensten/gevelisolatie" },
                { label: "Dakkapellen", href: "/diensten/dakkapellen" },
                {
                  label: "Asbestverwijdering",
                  href: "/diensten/asbestverwijdering",
                },
                { label: "Onze realisaties", href: "/realisaties" },
                {
                  label: "Dakisolatie Antwerpen",
                  href: "/dakisolatie-antwerpen",
                },
                { label: "Dakisolatie Edegem", href: "/regio/edegem" },
                { label: "Dakcalculator", href: "/calculator/dak" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-semibold text-teal-800 hover:border-orange-200 hover:bg-orange-50 transition-colors"
                >
                  <span>{label}</span>
                  <svg
                    className="w-4 h-4 text-stone-400 shrink-0 group-hover:text-orange-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 13: CTA + FORM ──────────────────────────────────────── */}
        <section className="bg-teal-800 section-padding">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl mb-4">
                Laat uw dak controleren en ontvang een duidelijke offerte
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                Onze vakman komt ter plaatse, beoordeelt uw dak en geeft u een
                eerlijke offerte met vaste prijs.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm defaultService="dakwerken" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
