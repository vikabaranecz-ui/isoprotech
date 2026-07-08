import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo";
import { BRAND, PHOTOS } from "@/lib/constants";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Gevelisolatie Antwerpen en omgeving — Buitengevelisolatie | ISOPROTECH",
  description:
    "Buitengevelisolatie in Antwerpen en omgeving. EPS-isolatie met crepi, spuitkurk of steenstrips. Warmer huis, lagere energiekosten, betere EPC-score. Gratis gevelcheck.",
  alternates: { canonical: `${BRAND.url}/diensten/gevelisolatie` },
  keywords: [
    "gevelisolatie",
    "buitengevelisolatie antwerpen",
    "gevel isoleren",
    "gevelisolatie prijs",
    "crepi antwerpen",
  ],
  openGraph: {
    title: "Gevelisolatie Antwerpen en omgeving | ISOPROTECH",
    description:
      "Buitengevelisolatie in Antwerpen en omgeving. EPS-isolatie met crepi, spuitkurk of steenstrips.",
    url: `${BRAND.url}/diensten/gevelisolatie`,
    type: "website",
  },
};

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function GevelisolatiePage() {
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
        data={faqSchema([
          {
            question: "Hoeveel kost gevelisolatie per m²?",
            answer:
              "De prijs voor gevelisolatie met afwerking ligt in Antwerpen gemiddeld tussen €80 en €170 per m² (excl. btw), afhankelijk van het isolatietype, de dikte en de afwerking. Voor een exacte prijs op maat van uw woning: gebruik onze gevelcalculator of vraag een gratis inspectie aan.",
          },
          {
            question: "Hoe lang duren gevelisolatiewerken?",
            answer:
              "Voor een gemiddelde woning rekent u op 2 tot 4 weken, afhankelijk van de oppervlakte, de staat van de gevel en de weersomstandigheden.",
          },
          {
            question: "Is gevelisolatie geschikt voor elke woning?",
            answer:
              "Buitengevelisolatie is geschikt voor de meeste woningen. Bij massieve muren of ongeïsoleerde spouwmuren is het de meest effectieve oplossing. Wij bekijken uw woning eerlijk tijdens de gratis inspectie.",
          },
          {
            question: "Heb ik een vergunning nodig voor gevelisolatie?",
            answer:
              "Voor standaard buitengevelisolatie is in de meeste gevallen geen stedenbouwkundige vergunning nodig, tenzij uw woning in een beschermd stadsgezicht ligt.",
          },
          {
            question: "Hoelang gaat gevelisolatie mee?",
            answer:
              "Een correct uitgevoerd ETICS-systeem met minerale crepi gaat 25 tot 40 jaar mee.",
          },
          {
            question: "Kan ik binnenshuis blijven tijdens de werken?",
            answer:
              "Ja. Gevelisolatiewerken worden volledig aan de buitenzijde uitgevoerd. U hoeft uw woning niet te verlaten.",
          },
        ])}
      />

      <main>
        {/* ════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-teal-800 text-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span aria-hidden="true">&gt;</span>
              <Link href="/diensten" className="hover:text-white transition-colors">
                Diensten
              </Link>
              <span aria-hidden="true">&gt;</span>
              <span className="text-white" aria-current="page">
                Gevelisolatie
              </span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold leading-tight md:text-5xl mb-6">
                Gevelisolatie: warmer huis, lagere energiekosten en een gevel als nieuw
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                Via uw ongeïsoleerde buitenmuren verliest een gemiddeld huis 25 tot 35% van zijn
                warmte. ISOPROTECH stopt dat verlies structureel — met buitengevelisolatie die
                technisch correct is, esthetisch sterk en jarenlang meegaat.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-300 transition-colors"
                >
                  Bel voor gratis gevelcheck
                </a>
                <Link
                  href="/contact"
                  className="rounded-xl border-2 border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-teal-800 transition-colors"
                >
                  Vraag offerte aan
                </Link>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "25–35% warmteverlies gestopt",
                  "10 jaar garantie",
                  "Vaste prijs — geen verrassingen",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold text-white"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 2 — WAT IS GEVELISOLATIE?
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <p className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase mb-4">
              Introductie
            </p>
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-10">
              Wat is gevelisolatie?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Text column */}
              <div className="space-y-5 text-stone-700 leading-relaxed">
                <p>
                  Gevelisolatie — ook buitengevelisolatie of ETICS (External Thermal Insulation
                  Composite System) genoemd — is het aanbrengen van een isolatielaag aan de
                  buitenzijde van uw bestaande gevel. De isolatieplaten (meestal EPS of minerale
                  wol) worden verlijmd en vastgezet, waarna een nieuwe afwerklaag wordt aangebracht.
                </p>
                <p>
                  In tegenstelling tot spouwmuurisolatie of binnenisolatie verliest u geen centimeter
                  binnenruimte. Uw gevel krijgt tegelijk een nieuwe, frisse uitstraling. En omdat u
                  aan de buitenkant werkt, blijft het bewoonbaar tijdens de werken.
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "Geen binnenruimteverlies — werkt van buitenaf",
                    "Gevel en isolatie in één ingreep",
                    "Thermische brug sterk verminderd vs. spouwmuurisolatie",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-400">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image column */}
              <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={PHOTOS.gevelInProgress.src}
                  alt="Gevelisolatie in uitvoering — ISOPROTECH Antwerpen"
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
        <section className="bg-stone-50 py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-4">
              Voor welke woningen is buitengevelisolatie geschikt?
            </h2>
            <p className="text-stone-600 text-lg mb-10">
              Buitengevelisolatie is de ideale oplossing voor:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Woningen met massieve gevels (geen spouw)",
                  body: "De meest voorkomende situatie in oudere Belgische woningen. Buitenisolatie is hier vrijwel de enige effectieve optie.",
                },
                {
                  title: "Woningen met een verouderde spouwvulling",
                  body: "Als uw spouwisolatie verouderd of onvolledig is, geeft buitengevelisolatie een betere isolatiewaarde.",
                },
                {
                  title: "Woningen met gevelreparatiebehoefte",
                  body: "Scheuren, vochtplekken of afbladdering? Gevelisolatie pakt de oorzaak aan en geeft de gevel een compleet nieuwe bescherming.",
                },
                {
                  title: "Woningen vóór 1990",
                  body: "De meeste woningen gebouwd vóór 1990 hebben onvoldoende of geen gevelisolatie. Precies hier is de winst het grootst.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="border-l-4 border-orange-400 rounded-xl bg-white p-6 shadow-sm"
                >
                  <h3 className="font-bold text-teal-800 text-lg mb-2">{card.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-500 italic text-sm">
              Twijfelt u of uw woning geschikt is? Vraag een gratis gevelcheck aan — onze vakman
              kijkt het ter plaatse na.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 4 — KOSTPRIJS
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-6">
              Wat kost gevelisolatie?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-10 max-w-2xl">
              De prijs voor buitengevelisolatie hangt af van verschillende factoren. Een exacte
              prijs is pas mogelijk na een inspectie ter plaatse. Wat wij u vooraf kunnen zeggen:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  num: 1,
                  title: "Geveloppervlak",
                  body: "Grotere gevels betekenen meer materiaal en meer werktijd — maar ook een betere prijs per m².",
                },
                {
                  num: 2,
                  title: "Isolatiedikte",
                  body: "14 cm of 18 cm EPS maakt een verschil in prijs én in isolatiewaarde (Rd-waarde).",
                },
                {
                  num: 3,
                  title: "Staat van de bestaande gevel",
                  body: "Vochtproblemen, scheuren of afbladdering vereisen voorbereiding en sanering vóór de isolatiewerken.",
                },
                {
                  num: 4,
                  title: "Gekozen afwerking",
                  body: "Crepi is de meest betaalbare optie. Steenstrips en premium texturen liggen hoger in prijs.",
                },
                {
                  num: 5,
                  title: "Toegankelijkheid",
                  body: "Stellingwerk, hoogte en complexe daklijsten beïnvloeden de uitvoeringstijd en -kost.",
                },
                {
                  num: 6,
                  title: "Aanwezigheid van ramen, deuren en details",
                  body: "Hoeveel aansluitwerk is er nodig? Dat telt mee.",
                },
              ].map((factor) => (
                <div key={factor.num} className="rounded-xl bg-stone-50 p-6">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 text-sm font-bold text-white">
                    {factor.num}
                  </div>
                  <h3 className="font-bold text-teal-800 mb-2">{factor.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 mb-6">
              Gebruik onze gratis calculator voor een eerste indicatie of vraag een gratis inspectie
              aan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/calculator"
                className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-300 transition-colors"
              >
                Bereken mijn prijs
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-teal-800 px-6 py-3 font-bold text-teal-800 hover:bg-teal-800 hover:text-white transition-colors"
              >
                Gratis inspectie
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 5 — 14 CM OF 18 CM
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-10">
              14 cm of 18 cm isolatie: wat is het verschil?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mb-8">
              {/* Card 14 cm */}
              <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-teal-800 mb-1">14 cm EPS</h3>
                <p className="text-orange-400 font-semibold text-sm mb-4">Rd ≈ 3,75 m²K/W</p>
                <p className="text-stone-600 leading-relaxed text-sm">
                  Voldoet aan de minimumeisen voor de Vlaamse renovatieplicht. Ideaal voor woningen
                  met een redelijke basiswaarde.
                </p>
              </div>

              {/* Card 18 cm — highlighted */}
              <div className="relative rounded-xl border-2 border-orange-400 bg-white p-8 shadow-md">
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-white">
                    Aanbevolen
                  </span>
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-1">18 cm EPS</h3>
                <p className="text-orange-400 font-semibold text-sm mb-4">Rd ≈ 5,00 m²K/W</p>
                <p className="text-stone-600 leading-relaxed text-sm">
                  Hogere isolatiewaarde, grotere premie mogelijk, betere langetermijnbesparing.
                  Aanbevolen voor woningen met een slechte beginsituatie of woningen met
                  EPC-label E/F.
                </p>
              </div>
            </div>

            <p className="text-stone-500 italic text-sm">
              Wij adviseren u tijdens de gratis inspectie welke dikte het beste past bij uw woning
              en uw doelstellingen.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 6 — ZOMERHITTE
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-6">
                Beschermt gevelisolatie ook tegen zomerhitte?
              </h2>
              <p className="text-stone-600 leading-relaxed mb-5">
                Ja — en dit wordt vaak onderschat. Een goed geïsoleerde gevel vertraagt de
                warmteoverdracht van buiten naar binnen. In de zomer betekent dit dat uw muren
                overdag geen warmte opslaan en &apos;s avonds niet afgeven in uw leefruimtes. Het
                resultaat: een aangenamer binnenklimaat zonder airconditioning.
              </p>
              <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 text-sm text-teal-800">
                De combinatie van dakisolatie en gevelisolatie heeft het grootste effect op
                zomercomfort.{" "}
                <Link
                  href="/diensten/dakisolatie"
                  className="font-semibold underline underline-offset-2 hover:text-orange-500 transition-colors"
                >
                  → Meer over dakisolatie
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 7 — VOCHT EN CONDENSATIE
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-6">
                Gevelisolatie tegen vocht, condensatie en schimmel
              </h2>
              <div className="space-y-5 text-stone-600 leading-relaxed">
                <p>
                  Een ongeïsoleerde buitenmuur is koud aan de binnenkant. Wanneer warme, vochtige
                  lucht deze koude muur raakt, condenseert het vocht — en verschijnt er schimmel.
                  Dit is niet alleen esthetisch vervelend, maar ook ongezond.
                </p>
                <p>
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
        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <p className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase mb-4">
              Afwerkingen
            </p>
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-10">
              Afwerking na gevelisolatie: crepi, spuitkurk of steenstrips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Crepi",
                  body: "De meest populaire keuze. Minerale pleisterafwerking, beschikbaar in tientallen kleuren en texturen. Duurzaam, onderhoudsvriendelijk, bewezen technologie.",
                  link: "/diensten/crepi",
                  linkLabel: "→ Meer over crepi",
                },
                {
                  title: "Spuitkurk",
                  body: "Naadloze, elastische coating op basis van natuurlijke kurk. Ideaal voor gevels met bewegingsrisico. Waterafstotend en toch dampopen.",
                  link: "/diensten/spuitkurk",
                  linkLabel: "→ Meer over spuitkurk",
                },
                {
                  title: "Steenstrips",
                  body: "De uitstraling van baksteen met de voordelen van isolatie. Geschikt voor wie het karakter van zijn gevel wil bewaren of een authentiek uiterlijk wil.",
                  link: null,
                  linkLabel: null,
                },
              ].map((card) => (
                <div key={card.title} className="flex flex-col rounded-xl bg-stone-50 p-7">
                  <h3 className="text-xl font-bold text-teal-800 mb-3">{card.title}</h3>
                  <p className="flex-1 text-stone-600 leading-relaxed text-sm">{card.body}</p>
                  {card.link && card.linkLabel && (
                    <Link
                      href={card.link}
                      className="mt-4 text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors"
                    >
                      {card.linkLabel}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 9 — EPC IMPACT
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-6">
                Mogelijke impact op uw EPC-score
              </h2>
              <div className="space-y-5 text-stone-600 leading-relaxed">
                <p>
                  Gevelisolatie heeft een directe impact op uw EPC-score — de
                  energieprestatiemeter die steeds belangrijker wordt bij verkoop, verhuur en
                  renovatieverplichting.
                </p>
                <p>
                  De exacte verbetering hangt af van uw beginsituatie: een woning met EPC G die
                  volledig wordt geïsoleerd, kan meerdere labels stijgen. Een al redelijk
                  geïsoleerde woning boekt een kleinere maar nog steeds relevante vooruitgang.
                </p>
                <p>
                  Wij geven u tijdens de inspectie een eerlijke inschatting van het effect op uw
                  EPC — zonder overdreven beloften.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 10 — PREMIES
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <p className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase mb-4">
              Premies &amp; subsidies
            </p>
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-6">
              Premies voor gevelisolatie in Vlaanderen
            </h2>
            <p className="text-stone-600 leading-relaxed mb-10 max-w-2xl">
              In Vlaanderen zijn verschillende premies beschikbaar voor buitengevelisolatie.
              De belangrijkste:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: "🏠",
                  title: "Mijn VerbouwPremie",
                  body: "Via het Energiehuis kunt u een premie aanvragen voor gevelisolatie. Het bedrag hangt af van het type werken, de Rd-waarde van de isolatie en uw inkomenscategorie. Wij helpen u de aanvraag in orde te maken.",
                },
                {
                  icon: "📋",
                  title: "6% BTW",
                  body: "Op renovatiewerken aan woningen ouder dan 10 jaar geldt het verlaagd btw-tarief van 6% in plaats van 21% — een onmiddellijke besparing op uw factuur.",
                },
                {
                  icon: "🏛️",
                  title: "Gemeentelijke premies",
                  body: "Sommige gemeenten in de Antwerpse regio bieden bijkomende ondersteuning. Wij checken uw situatie en informeren u over alle mogelijkheden.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl bg-stone-50 p-7">
                  <div className="mb-4 text-3xl" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-teal-800 text-lg mb-3">{card.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
              <p className="text-sm font-semibold text-teal-800">
                Premie-begeleiding is inbegrepen in onze samenwerking — zonder extra kost.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 11 — VEELGEMAAKTE FOUTEN
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-10">
              Veelgemaakte fouten bij gevelisolatie
            </h2>

            <ol className="max-w-3xl space-y-4">
              {[
                {
                  title: "Te dunne isolatie kiezen om te besparen",
                  body: "Een dunne isolatielaag verlaagt de uitvoeringskosten iets, maar betaalt zich nooit terug. Kies voor voldoende dikte en haal de maximale premie op.",
                },
                {
                  title: "Geen aandacht voor aansluitdetails",
                  body: "Rondom ramen, deuren, dakgoten en hoeken moet de isolatie perfect aansluiten. Koudebruggen op die plekken neutraliseren de winst van de rest.",
                },
                {
                  title: "Vochtproblemen negeren vóór de werken",
                  body: "Isoleren over een vochtige gevel drijft het vocht verder het muurwerk in. Vochtproblemen moeten eerst worden aangepakt.",
                },
                {
                  title: "Onvoldoende opvolging van droogtijd en weersomstandigheden",
                  body: "Crepi en spuitkurk moeten onder de juiste temperatuur en droogte worden aangebracht. Haast leidt tot kwaliteitsproblemen.",
                },
                {
                  title: "Kiezen voor de goedkoopste offerte zonder referenties",
                  body: "Gevelisolatie is een langetermijninvestering. Een slechte uitvoering kost u meer geld dan u bespaart. Check altijd referenties en garantievoorwaarden.",
                },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className="flex items-start gap-5 rounded-xl bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-800 text-lg font-bold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-teal-800 mb-1">{item.title}</p>
                    <p className="text-stone-600 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 12 — FAQ
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-10">
              Veelgestelde vragen over gevelisolatie
            </h2>

            <div className="max-w-3xl space-y-3">
              {[
                {
                  q: "Hoeveel kost gevelisolatie per m²?",
                  a: "De prijs voor gevelisolatie met afwerking ligt in Antwerpen gemiddeld tussen €80 en €170 per m² (excl. btw), afhankelijk van het isolatietype, de dikte en de afwerking. Voor een exacte prijs op maat van uw woning: gebruik onze gevelcalculator of vraag een gratis inspectie aan.",
                },
                {
                  q: "Hoe lang duren gevelisolatiewerken?",
                  a: "Voor een gemiddelde woning rekent u op 2 tot 4 weken, afhankelijk van de oppervlakte, de staat van de gevel en de weersomstandigheden. Wij plannen alles duidelijk in — u weet op voorhand wat u kunt verwachten.",
                },
                {
                  q: "Is gevelisolatie geschikt voor elke woning?",
                  a: "Buitengevelisolatie is geschikt voor de meeste woningen. Bij massieve muren of ongeïsoleerde spouwmuren is het de meest effectieve oplossing. Wij bekijken uw woning eerlijk tijdens de gratis inspectie en adviseren alleen wat technisch en financieel zinvol is.",
                },
                {
                  q: "Welke premies kan ik krijgen?",
                  a: "Via Mijn VerbouwPremie kunt u in Vlaanderen premies aanvragen voor dak- en gevelisolatie. Het bedrag hangt af van het type werken, de bereikte isolatiewaarde en uw gezinsinkomen. Wij checken uw situatie en helpen u bij de aanvraag — zodat u het maximale uit uw investering haalt.",
                },
                {
                  q: "Heb ik een vergunning nodig voor gevelisolatie?",
                  a: "Voor standaard buitengevelisolatie is in de meeste gevallen geen stedenbouwkundige vergunning nodig in Antwerpen en omgeving, tenzij uw woning in een beschermd stadsgezicht ligt. Wij controleren dit voor u tijdens de gratis inspectie.",
                },
                {
                  q: "Kan ik gevelisolatie combineren met dakrenovatie?",
                  a: "Ja — en dat is vaak aan te raden. Door dak- en gevelwerken samen te plannen, bespaart u op stellingwerk en coördinatie. Wij voeren beide uit en bewaken de samenhang.",
                },
                {
                  q: "Hoelang gaat gevelisolatie mee?",
                  a: "Een correct uitgevoerd ETICS-systeem met minerale crepi gaat 25 tot 40 jaar mee. Wij werken uitsluitend met ATG- en BENOR-goedgekeurde systemen die aan de Belgische kwaliteitsnormen voldoen.",
                },
                {
                  q: "Kan ik binnenshuis blijven tijdens de werken?",
                  a: "Ja. Gevelisolatiewerken worden volledig aan de buitenzijde uitgevoerd. U hoeft uw woning niet te verlaten en de hinder voor de bewoners is minimaal.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group overflow-hidden rounded-xl border border-stone-200"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-teal-800 transition-colors hover:bg-stone-50">
                    <span>{faq.q}</span>
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-teal-800 font-bold text-lg leading-none text-teal-800 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-stone-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-stone-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 13 — INTERNAL LINKS
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-3xl font-extrabold text-teal-800 md:text-4xl mb-10">
              Ontdek ook
            </h2>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { label: "Crepi gevelafwerking", href: "/diensten/crepi" },
                { label: "Spuitkurk", href: "/diensten/spuitkurk" },
                { label: "Dakisolatie", href: "/diensten/dakisolatie" },
                { label: "Dakrenovatie", href: "/diensten/dakrenovatie" },
                { label: "Onze realisaties", href: "/realisaties" },
                { label: "Gevelisolatie Antwerpen", href: "/gevelisolatie-antwerpen" },
                { label: "Gevelisolatie Schilde", href: "/regio/schilde" },
                { label: "Gevelisolatie Brasschaat", href: "/regio/brasschaat" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-teal-800 transition-colors hover:border-orange-400 hover:text-orange-500"
                >
                  <span className="text-orange-400" aria-hidden="true">
                    →
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 14 — CTA + CONTACT FORM
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-teal-800 py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl mb-4">
                Wilt u weten wat gevelisolatie voor uw woning kost?
              </h2>
              <p className="text-lg leading-relaxed text-white/80">
                Vraag een gratis gevelcheck aan. Onze vakman komt ter plaatse, beoordeelt uw
                situatie en geeft u een eerlijke offerte met vaste prijs.
              </p>
            </div>
            <ContactForm defaultService="gevelwerken" />
          </div>
        </section>
      </main>
    </>
  );
}
