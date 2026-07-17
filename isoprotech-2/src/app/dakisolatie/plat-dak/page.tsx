// src/app/dakisolatie/plat-dak/page.tsx
// Plat dak isolatie — diepgaande commerciële pillar pagina

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND, PHOTOS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Plat Dak Isoleren Antwerpen — Warm Dak, PIR & EPDM",
  description:
    "Plat dak isoleren in Antwerpen en omgeving. Warm dak met PIR-isolatie en EPDM of roofing. Gratis inspectie, transparante prijs, 10 jaar garantie. ISOPROTECH.",
  keywords: [
    "plat dak isoleren antwerpen",
    "plat dak isolatie",
    "warm dak isolatie",
    "PIR dakisolatie",
    "EPDM met isolatie",
    "roofing met isolatie",
    "plat dak isoleren prijs",
  ],
  alternates: {
    canonical: `${BRAND.url}/dakisolatie/plat-dak`,
  },
  openGraph: {
    title: "Plat Dak Isoleren Antwerpen — Warm Dak, PIR & EPDM",
    description:
      "Plat dak isoleren in Antwerpen. Warm dak met PIR-isolatie en EPDM of bitumen roofing. Gratis inspectie, 10 jaar garantie.",
    url: `${BRAND.url}/dakisolatie/plat-dak`,
    type: "website",
    images: [{ url: `${BRAND.url}/images/og-isoprotech.png`, width: 1080, height: 1080 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hoeveel PIR-isolatie is nodig op een plat dak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De Vlaamse EPB-wetgeving vereist minimaal Rd 4,5 m²K/W voor dakisolatie bij renovatie. Met PIR (lambda ≈ 0,022–0,025 W/mK) bereikt u dat met circa 10–12 cm. Voor een optimaal energetisch resultaat en een hogere bijdrage aan uw EPC-score raden wij 14–18 cm PIR aan. Bij nieuwbouw geldt Rd 6,0 m²K/W.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen een warm dak en een koud dak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij een warm dak ligt de isolatie direct op de dakconstructie, onder de waterdichte laag (EPDM of roofing). De dakruimte blijft warm, er is geen ventilatiespouw nodig en condensatierisico is minimaal. Bij een koud dak ligt de isolatie op een lagere positie (bv. op plafondniveau) met een geventileerde spouw erboven. Wij bouwen standaard warm daken omdat dit de meest stabiele, duurzame en energetisch beste constructie is voor platte daken in ons klimaat.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ik mijn bestaand plat dak isoleren zonder de dakopbouw te verwijderen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In de meeste gevallen wel. Wij werken bovenop de bestaande constructie: isolatieplaten worden op het dakbeton of dakplaten gelegd, gevolgd door een nieuwe waterdichte laag. Alleen als de bestaande bedekking in slechte staat is of als er vochtige isolatie aanwezig is, moet de oude opbouw (deels) worden verwijderd. Dit bepalen wij bij de gratis inspectie.",
      },
    },
    {
      "@type": "Question",
      name: "Heb ik een bouwvergunning nodig om mijn plat dak te isoleren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In de meeste gevallen is geen stedenbouwkundige vergunning nodig voor het isoleren en herbekleden van een plat dak, zolang de vorm en hoogte van het dak niet wijzigen. Wij adviseren u altijd om dit vooraf te bevestigen bij uw gemeente, want in sommige beschermde stadsgezichten gelden aanvullende regels.",
      },
    },
    {
      "@type": "Question",
      name: "Welke premies zijn er voor het isoleren van een plat dak in Vlaanderen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Via de Mijn VerbouwPremie van de Vlaamse overheid kunt u een premie aanvragen voor dakisolatie. Het premiebedrag hangt af van uw inkomen, het type woning en de behaalde isolatiewaarde. Wij helpen u bij de aanvraag. Raadpleeg altijd de actuele info op vlaanderen.be voor de meest recente bedragen en voorwaarden, want die kunnen jaarlijks wijzigen.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plat dak isoleren",
  description:
    "Professionele isolatie van platte daken in Antwerpen en omgeving. Warm dak systeem met PIR-isolatie en EPDM of bitumen roofing.",
  provider: {
    "@type": "LocalBusiness",
    name: BRAND.name,
    url: BRAND.url,
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: BRAND.address.city,
      addressCountry: "BE",
    },
  },
  areaServed: { "@type": "City", name: "Antwerpen" },
  url: `${BRAND.url}/dakisolatie/plat-dak`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BRAND.url },
    { "@type": "ListItem", position: 2, name: "Dakisolatie", item: `${BRAND.url}/diensten/dakisolatie` },
    { "@type": "ListItem", position: 3, name: "Plat dak isoleren", item: `${BRAND.url}/dakisolatie/plat-dak` },
  ],
};

export default function PlatDakPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.platDakAfter.src}
            alt="Plat dak gerenoveerd en geïsoleerd door ISOPROTECH Antwerpen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/75" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300 border border-orange-400/30">
            Dakisolatie — Plat dak
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-6">
            Plat dak isoleren in Antwerpen
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Een plat dak zonder isolatie verliest tot 30% van uw warmte. Wij isoleren met PIR-platen en een nieuwe waterdichte laag — warm dak systeem dat decennia meegaat.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-500 transition-colors"
            >
              Gratis inspectie aanvragen
            </a>
            <a
              href="#offerte"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            { label: "Dakisolatie", href: "/diensten/dakisolatie" },
            { label: "Plat dak isoleren", href: "/dakisolatie/plat-dak" },
          ]}
        />
      </div>

      {/* Intro — wanneer is dit relevant */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
              Wanneer nodig?
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800 leading-tight">
              Wanneer is uw plat dak aan isolatie toe?
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Een plat dak zonder isolatie, of met verouderde isolatie, is een van de grootste energielekken in een woning. Via het dak verliest een gemiddelde rijtjeswoning met een ongeïsoleerd plat dak 20 tot 30% van de warmte — elke dag, elk verwarmingsseizoen opnieuw.
              </p>
              <p>
                Typische signalen dat uw plat dak aandacht nodig heeft:
              </p>
              <ul className="space-y-2 mt-2">
                {[
                  "De bovenste verdieping is zomers ondraaglijk warm en winterkoud",
                  "Er zijn vochtplekken of condensatie op het plafond",
                  "Uw energiefactuur blijft hoog ondanks andere isolatiemaatregelen",
                  "Het dak is ouder dan 20 jaar en nooit gerenoveerd",
                  "De dakbedekking vertoont scheuren, blaren of lekken",
                  "U plant een EPC-verbetering bij verkoop of verhuur",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src={PHOTOS.dakisolatieTeam.src}
              alt="ISOPROTECH team plaatst PIR-isolatieplaten op plat dak Antwerpen"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
          </div>
        </div>
      </section>

      {/* Systemen: warm vs koud vs omgekeerd */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
            Constructietypes
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-3">
            Warm dak, koud dak of omgekeerd dak?
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed mb-10">
            Er bestaan drie basisconstructies voor een plat dak. De keuze bepaalt de isolatieprestatie, het vochtgedrag en de levensduur van uw dak.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Warm dak (aanbevolen)",
                badge: "Meest gebruikt",
                badgeColor: "bg-orange-400",
                desc: "De isolatie ligt boven de dakconstructie, onder de waterdichte laag. De draagstructuur blijft warm, geen koude voegen, geen condensatierisico. Dit is de standaard bij alle ISOPROTECH renovaties van platte daken.",
                pros: ["Geen ventilatiespouw nodig", "Minimaal condensatierisico", "Eenvoudig na te isoleren bovenop", "Langste levensduur dakbedekking"],
              },
              {
                title: "Koud dak",
                badge: "Wordt afgeraden",
                badgeColor: "bg-gray-400",
                desc: "Isolatie zit op plafondniveau, met een geventileerde spouw tussen isolatie en dakbedekking. Risico op condensatie als de ventilatie onvoldoende is. Enkel geschikt in specifieke situaties met correcte details.",
                pros: ["Goedkoper in uitvoering", "Geschikt als het plafond al geïsoleerd is"],
              },
              {
                title: "Omgekeerd dak",
                badge: "Specifieke toepassingen",
                badgeColor: "bg-teal-600",
                desc: "De waterdichte laag ligt onder de isolatie. De membraan is beschermd tegen UV en temperatuurschommelingen, maar heeft hogere eisen aan het isolatiemateriaal (XPS). Geschikt voor daken met veel mechanische belasting of groendaken.",
                pros: ["Membraan beschermd tegen UV", "Geschikt voor groendaken en terras", "Ideaal bij hoge mechanische belasting"],
              },
            ].map((sys) => (
              <div key={sys.title} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-extrabold text-teal-800">{sys.title}</h3>
                  <span className={`${sys.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                    {sys.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{sys.desc}</p>
                <ul className="space-y-1.5">
                  {sys.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technische opbouw warm dak */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
              Technische opbouw
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-6">
              Hoe ziet een warm dak eruit van binnen naar buiten?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Bij een typische warm dak renovatie op een betonnen dakconstructie werken wij van onder naar boven als volgt:
            </p>
            <ol className="space-y-5">
              {[
                {
                  nr: "1",
                  title: "Dakconstructie",
                  desc: "Betonnen plaat, houten gordingen of staalconstructie. Bestaande constructie blijft behouden als die stabiel en droog is.",
                },
                {
                  nr: "2",
                  title: "Damprem of dampscherm (indien nodig)",
                  desc: "Bij een houten constructie of bij bestaand koud dak wordt een damprem aangebracht om condensatie van binnenuit te voorkomen.",
                },
                {
                  nr: "3",
                  title: "PIR-isolatieplaten",
                  desc: "Polyisocyanuraat (PIR) met lambda ≈ 0,022–0,025 W/mK — de beste thermische prestatie per cm dikte. Dikte 12–18 cm, afhankelijk van gewenste Rd-waarde en dakhoogte. Platen worden verlijmd of mechanisch bevestigd met min. 10 mm overlapping op de naden.",
                },
                {
                  nr: "4",
                  title: "Waterdichte laag",
                  desc: "EPDM (synthetisch rubber, levensduur 40–50 jaar), bitumen roofing (2-lagen systeem, levensduur 25–35 jaar) of kunststof membraan (PVC/TPO). Keuze afhankelijk van dakhelling, belasting en esthetische wensen.",
                },
                {
                  nr: "5",
                  title: "Detailwerk",
                  desc: "Opstaande randen (borstweringen), dakdoorvoeringen (schoorstenen, ventilatiepijpen), dakramen, goten en regenpijpen worden vakkundig aangeloten. Hier zit 80% van alle lekken in een slecht uitgevoerd dak.",
                },
              ].map((step) => (
                <li key={step.nr} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-400/15 text-sm font-extrabold text-orange-400">
                    {step.nr}
                  </span>
                  <div>
                    <h3 className="font-bold text-teal-800">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Materialen */}
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
              Isolatiematerialen
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-6">
              Welke isolatiematerialen gebruiken wij?
            </h2>
            <div className="space-y-4">
              {[
                {
                  name: "PIR (polyisocyanuraat)",
                  lambda: "0,022–0,025 W/mK",
                  desc: "Ons standaard isolatiemateriaal voor platte daken. Beste thermische prestatie per cm, brandvertragend, beperkte dampopname. Recticel, Kingspan en Hunter zijn de merken die wij gebruiken — ATG-gecertificeerd.",
                  best: true,
                },
                {
                  name: "EPS (geëxpandeerd polystyreen)",
                  lambda: "0,031–0,038 W/mK",
                  desc: "Goedkoper alternatief maar minder performant per cm dikte. Vereist meer bouwruimte voor dezelfde Rd-waarde. Toepasbaar bij omgekeerd dak in combinatie met XPS.",
                  best: false,
                },
                {
                  name: "XPS (geëxtrudeerd polystyreen)",
                  lambda: "0,030–0,033 W/mK",
                  desc: "Waterbestendig en geschikt voor het omgekeerd dak of groendaken. Hogere drukweerstand dan EPS. Duurdere maar robuuste optie voor terras- of groendaken.",
                  best: false,
                },
              ].map((mat) => (
                <div
                  key={mat.name}
                  className={`rounded-2xl border p-5 ${mat.best ? "border-orange-300 bg-orange-50" : "border-gray-100 bg-white"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-teal-800">{mat.name}</h3>
                    {mat.best && (
                      <span className="text-[10px] font-bold bg-orange-400 text-white px-2 py-0.5 rounded-full">
                        Ons standaard
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-orange-500 font-semibold mb-2">λ = {mat.lambda}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{mat.desc}</p>
                </div>
              ))}
            </div>

            {/* Rd values */}
            <div className="mt-6 rounded-2xl bg-teal-50 border border-teal-200 p-5">
              <h3 className="font-bold text-teal-800 mb-2">Wettelijke Rd-waarden (Vlaanderen)</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-teal-700 text-xs font-bold">
                    <th className="pb-2">Situatie</th>
                    <th className="pb-2 text-right">Rd-min</th>
                    <th className="pb-2 text-right">PIR dikte</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-100 text-gray-600">
                  <tr>
                    <td className="py-2">Renovatie (EPB)</td>
                    <td className="py-2 text-right font-semibold">4,5 m²K/W</td>
                    <td className="py-2 text-right">≈ 12 cm</td>
                  </tr>
                  <tr>
                    <td className="py-2">Nieuwbouw / ingrijpende renovatie</td>
                    <td className="py-2 text-right font-semibold">6,0 m²K/W</td>
                    <td className="py-2 text-right">≈ 16 cm</td>
                  </tr>
                  <tr>
                    <td className="py-2">ISOPROTECH aanbeveling</td>
                    <td className="py-2 text-right font-semibold">5,5–7,0 m²K/W</td>
                    <td className="py-2 text-right">14–18 cm</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-teal-600 mt-3">
                Bron: Vlaamse EPB-wetgeving. Controleer altijd de actuele normen via{" "}
                <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie/bouwen-en-verbouwen/energieprestatie-van-gebouwen-epb" className="underline" target="_blank" rel="noopener noreferrer">
                  vlaanderen.be
                </a>. Bijgewerkt: juli 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vocht, condensatie en koudebruggen */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
            Bouwtechnische details
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-10">
            Vocht, condensatie en koudebruggen — waar gaat het mis?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "💧",
                title: "Condensatie van binnenuit",
                desc: "Warme, vochtige binnenlucht stijgt op en kan door de dakconstructie trekken. Als die lucht afkoelt tot onder het dauwpunt, condenseert het vocht in of op de isolatie. Bij een warm dak is dit risico minimaal omdat de isolatie de constructie warm houdt. Wij voegen een damprem toe als de vochtbelasting hoog is (bv. badkamers, zwembaden, keukens).",
              },
              {
                icon: "🌡️",
                title: "Koudebruggen bij randen en opstanden",
                desc: "De borstweringen (opstaande randen rondom het dak) en dakdoorvoeringen zijn de zwakste plekken. Als de isolatie hier niet correct doorloopt of aansluit, ontstaat een koudebrug — plaatselijk warmteverlies, condensatie en soms schimmel op het plafond net bij de muur. Wij isoleren de opstaande randen altijd over de volledige hoogte.",
              },
              {
                icon: "🔧",
                title: "Details rondom dakramen en schoorstenen",
                desc: "Dakramen, ventilatiepijpen, schoorstenen en regenpijpen vereisen nauwkeurig detailwerk voor de waterdichting. 80% van alle daklekkages ontstaat hier — niet in de vlakken. Wij gebruiken prefab aansluitmanchetten en verzegelen alle doorvoeringen met aangepast afdichtingsmateriaal.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-teal-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uitvoering stap per stap */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
          Uitvoering
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-10">
          Hoe verloopt de uitvoering van uw plat dak?
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              nr: "01",
              title: "Inspectie",
              desc: "Wij beoordelen de bestaande toestand: dakstructuur, huidige bedekking, aanwezige isolatie, goten en opstanden. U ontvangt een eerlijk rapport.",
            },
            {
              nr: "02",
              title: "Voorbereiding",
              desc: "Reinigen van het bestaand dakoppervlak. Herstel van eventuele schades aan de dakrand of goten. Verwijdering van oude bedekking indien nodig.",
            },
            {
              nr: "03",
              title: "Isolatie plaatsen",
              desc: "PIR-platen worden verlijmd of mechanisch bevestigd. Naden worden overlapping gelegd en geplakt. Opstanden worden mee-geïsoleerd.",
            },
            {
              nr: "04",
              title: "Waterdichte laag",
              desc: "EPDM-membraan of bitumen roofing wordt aangebracht. Alle details — dakranden, regenpijpen, doorvoeringen — worden vakkundig afgewerkt en getest.",
            },
          ].map((step) => (
            <div key={step.nr} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <span className="text-4xl font-extrabold text-orange-100">{step.nr}</span>
              <h3 className="mt-2 font-bold text-teal-800">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-teal-50 border border-teal-200 p-6">
          <h3 className="font-bold text-teal-800 mb-2">Doorlooptijd</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Een standaard plat dak van 40–80 m² wordt doorgaans in <strong>2 tot 4 werkdagen</strong> afgerond. Grotere daken (100–200 m²) of complexere situaties (meerdere dakdoorvoeren, terrassen, helling) vereisen 4 tot 8 werkdagen. U ontvangt voor de start een duidelijke planning. Wij werken enkel bij droog weer om kwaliteitsrisico's te vermijden.
          </p>
        </div>
      </section>

      {/* Project voorbeelden */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
            Realisaties
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-8">
            Plat dak projecten in Antwerpen en omgeving
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                photo: PHOTOS.platDakAfter,
                beforePhoto: PHOTOS.platDakBefore,
                title: "Plat dak Antwerpen — 65 m²",
                details: "PIR 14 cm, bitumen 2-lagen, nieuwe goten",
                href: "/realisaties/plat-dak-voor-na-1",
              },
              {
                photo: PHOTOS.platDak2After,
                beforePhoto: PHOTOS.platDak2Before,
                title: "Plat dak renovatie Berchem — 80 m²",
                details: "PIR 16 cm, EPDM membraan, opstand-isolatie",
                href: "/realisaties/plat-dak-voor-na-2",
              },
              {
                photo: PHOTOS.lozanastraatNa,
                beforePhoto: PHOTOS.lozanastraatVoor,
                title: "Plat dak Lozanastraat Antwerpen",
                details: "Volledige renovatie — nieuwe dakbedekking en isolatie",
                href: "/realisaties/plat-dak-renovatie-lozanastraat-antwerpen",
              },
            ].map((proj) => (
              <Link
                key={proj.title}
                href={proj.href}
                className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all hover:-translate-y-1"
              >
                <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                  <div className="relative aspect-[3/4]">
                    <Image src={proj.beforePhoto.src} alt={proj.beforePhoto.alt} fill className="object-cover" sizes="20vw" />
                    <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">VOOR</span>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <Image src={proj.photo.src} alt={proj.photo.alt} fill className="object-cover" sizes="20vw" />
                    <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">NA</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-teal-800 text-sm group-hover:text-orange-500 transition-colors">{proj.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{proj.details}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/realisaties" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-orange-500 transition-colors">
              Alle realisaties bekijken
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Prijs indicaties */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
          Prijsindicatie
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-4">
          Wat kost het isoleren van een plat dak?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mb-10">
          Een exacte prijs is pas mogelijk na inspectie, maar de onderstaande indicaties geven u een realistisch beeld. De totaalprijs hangt af van meerdere factoren.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold text-teal-800 mb-4">Factoren die de prijs bepalen</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                ["Dakoppervlak (m²)", "Hoe groter, hoe gunstiger de prijs per m²"],
                ["Isolatiedikte", "14 cm PIR vs. 18 cm PIR verschilt ca. €15–25/m²"],
                ["Type waterdichte laag", "EPDM (premium, duurder) vs. bitumen roofing (standaard)"],
                ["Verwijdering bestaande bedekking", "Ja/nee — sloping kost €8–15/m²"],
                ["Aantal dakdoorvoeringen", "Elke doorvoer vereist apart detailwerk"],
                ["Toegankelijkheid", "Stellingen of hoogtewerker verhogen de kostprijs"],
                ["Afvoer van dakranden en goten", "Vervanging goten of regenpijpen"],
                ["Complexiteit borstweringen", "Hoge of complexe opstanden = meer tijd"],
              ].map(([factor, toelichting]) => (
                <li key={factor} className="flex gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-teal-800">{factor}:</strong> {toelichting}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-2xl bg-teal-50 border border-teal-200 p-6 mb-4">
              <h3 className="font-bold text-teal-800 mb-4">Indicatieve prijsrange (incl. btw 6%)</h3>
              <div className="space-y-3 text-sm">
                {[
                  ["PIR 12 cm + bitumen roofing", "€80–110/m²"],
                  ["PIR 14 cm + bitumen roofing", "€90–125/m²"],
                  ["PIR 16 cm + EPDM membraan", "€110–150/m²"],
                  ["PIR 18 cm + EPDM (premium)", "€125–170/m²"],
                ].map(([omschrijving, prijs]) => (
                  <div key={omschrijving} className="flex justify-between items-center border-b border-teal-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{omschrijving}</span>
                    <span className="font-bold text-teal-800 tabular-nums">{prijs}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-teal-600 mt-4">
                Bovenstaande prijzen zijn richtprijzen exclusief slopen van oude dakbedekking, vervanging van goten en stellingenkosten. Bij vermelde btw-tarief van 6% gelden de voorwaarden van het renovatietarief (woning ouder dan 10 jaar, privéwoning). Prijzen bijgewerkt: juli 2026.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 border border-orange-200 p-5">
              <h3 className="font-bold text-teal-800 mb-2">Mijn VerbouwPremie</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Via de Vlaamse Mijn VerbouwPremie kunt u een premie aanvragen voor dakisolatie die voldoet aan de minimale Rd-waarde. De hoogte van de premie hangt af van uw inkomen en gezinssituatie. Wij helpen u bij de aanvraag. Raadpleeg de meest actuele info op{" "}
                <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie/bouwen-en-verbouwen/premies-voor-renovatie/mijn-verbouwpremie/mijn-verbouwpremie-voor-dak" className="underline text-orange-600" target="_blank" rel="noopener noreferrer">
                  vlaanderen.be
                </a>{" "}
                — premies kunnen wijzigen.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/dakisolatie/prijs" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-orange-500 transition-colors underline underline-offset-2">
            Gedetailleerde prijspagina dakisolatie →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
            Veelgestelde vragen
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-10">
            Vragen over plat dak isolatie
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Hoeveel PIR-isolatie is nodig op een plat dak?",
                a: "De Vlaamse EPB-wetgeving vereist minimaal Rd 4,5 m²K/W voor dakisolatie bij renovatie. Met PIR (lambda ≈ 0,022–0,025 W/mK) bereikt u dat met circa 10–12 cm. Voor een optimaal energetisch resultaat en hogere bijdrage aan uw EPC-score raden wij 14–18 cm PIR aan. Bij nieuwbouw of ingrijpende renovatie geldt Rd 6,0 m²K/W.",
              },
              {
                q: "Wat is het verschil tussen een warm dak en een koud dak?",
                a: "Bij een warm dak ligt de isolatie direct op de dakconstructie, onder de waterdichte laag. De dakruimte blijft warm, er is geen ventilatiespouw nodig en condensatierisico is minimaal. Bij een koud dak ligt de isolatie op een lagere positie met een geventileerde spouw erboven — minder stabiel en hoger risico op condensatieproblemen.",
              },
              {
                q: "Kan ik mijn plat dak isoleren zonder de bestaande dakbedekking te verwijderen?",
                a: "In de meeste gevallen ja. Als de bestaande bedekking nog intact en droog is, werken wij bovenop: isolatieplaten op het bestaand dak, gevolgd door een nieuwe waterdichte laag. Enkel bij lekken, natte isolatie of slechte toestand moet de oude opbouw (deels) worden verwijderd.",
              },
              {
                q: "Heb ik een bouwvergunning nodig voor plat dak isolatie?",
                a: "Doorgaans niet, zolang de vorm en hoogte van het dak niet wijzigen. In beschermde stadsgezichten of voor bepaalde historische panden kunnen aanvullende regels gelden. Wij adviseren u dit vooraf te bevestigen bij uw gemeente.",
              },
              {
                q: "Welke premies zijn er voor plat dak isolatie in Vlaanderen?",
                a: "Via de Mijn VerbouwPremie van de Vlaamse overheid kunt u een premie aanvragen voor dakisolatie. De hoogte hangt af van uw inkomen, het type woning en de behaalde Rd-waarde. Raadpleeg altijd de actuele info op vlaanderen.be, want premiebedragen kunnen jaarlijks wijzigen. Wij helpen bij de aanvraag.",
              },
              {
                q: "Hoe lang gaat een plat dak met EPDM mee?",
                a: "Een correct geplaatste EPDM-laag heeft een levensduur van 40 tot 50 jaar. Bitumen roofing (2 lagen) gaat 25 tot 35 jaar mee. Beide producten worden geleverd met fabrieksgaranties. ISOPROTECH geeft 10 jaar garantie op het volledige systeem.",
              },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl bg-white border border-gray-100 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-teal-800">
                  {item.q}
                  <svg className="h-5 w-5 shrink-0 text-orange-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Interne links */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-extrabold text-teal-800 mb-6">Meer over dakisolatie</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/dakisolatie/hellend-dak", label: "Hellend dak isoleren", desc: "Sarking, binnen- en buitenisolatie" },
            { href: "/dakisolatie/sarkingdak", label: "Sarkingdak", desc: "Buitenisolatie van hellend dak" },
            { href: "/dakisolatie/prijs", label: "Dakisolatie prijs", desc: "Prijsindicaties per methode" },
            { href: "/diensten/dakrenovatie", label: "Dakrenovatie", desc: "Volledig nieuw dak" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="group block rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:border-orange-200 hover:shadow-md transition-all">
              <h3 className="font-bold text-teal-800 group-hover:text-orange-500 transition-colors text-sm">{link.label}</h3>
              <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="offerte" className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Plat dak laten isoleren?
              </h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Vraag een gratis inspectie en vrijblijvende offerte aan. Wij beoordelen uw dak ter plaatse en geven u een eerlijke, gedetailleerde prijsopgave — zonder verplichtingen.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Gratis inspectie bij u thuis",
                  "Duidelijke offerte binnen 48 uur",
                  "Vaste prijs — geen verrassingen",
                  "10 jaar garantie op alle dakwerken",
                  "Begeleiding bij premie-aanvraag inbegrepen",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/80 text-sm">
                    <svg className="h-5 w-5 text-orange-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-500 transition-colors">
                  Bel {BRAND.phoneDisplay}
                </a>
                <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-orange-400 px-6 py-3 font-bold text-orange-400 hover:bg-orange-400/10 transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            <ContactForm defaultService="dakwerken" />
          </div>
        </div>
      </section>
    </>
  );
}
