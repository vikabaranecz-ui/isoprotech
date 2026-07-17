import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND, PHOTOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dakisolatie Prijs 2026 — Wat Kost Dakisolatie in Antwerpen?",
  description:
    "Indicatieve prijzen voor dakisolatie in Antwerpen: plat dak €80–170/m², sarking €75–140/m², binnenisolatie €45–90/m². Inclusief BTW 6%, premies en prijsfactoren.",
  keywords: [
    "dakisolatie prijs",
    "dakisolatie kosten",
    "plat dak isoleren prijs",
    "sarking prijs",
    "hellend dak isoleren kosten",
    "dakisolatie Antwerpen",
    "prijs per m2 dakisolatie",
    "dakisolatie offerte",
  ],
  alternates: { canonical: `${BRAND.url}/dakisolatie/prijs` },
  openGraph: {
    title: "Dakisolatie Prijs 2026 — Wat Kost Dakisolatie in Antwerpen?",
    description:
      "Indicatieve prijzen voor dakisolatie in Antwerpen: plat dak €80–170/m², sarking €75–140/m², binnenisolatie €45–90/m².",
    url: `${BRAND.url}/dakisolatie/prijs`,
    type: "website",
    images: [{ url: PHOTOS.platDakAfter.src, width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat kost plat dak isoleren per m²?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De prijs voor plat dak isoleren ligt indicatief tussen €80 en €170 per m², inclusief 6% BTW. De kostprijs hangt af van de isolatiedikte, de afwerkingslaag (EPDM of bitumen), de staat van de bestaande dakbedekking en de bereikbaarheid.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel kost een sarkingdak per m²?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sarking (buitenisolatie hellend dak) kost indicatief €75–140 per m², inclusief BTW 6%. De prijs stijgt bij hogere isolatiedikte (18–22 cm PIR), leien- of tegeldekking, en dakkapellen of dakramen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is de minimale projectkost voor dakisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Door verplaatsing, steiger en minimum materiaalkosten werken de meeste dakisolatiebedrijven met een minimumfactuur van €2.500–€4.000, ongeacht de dakoppervlakte.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel premie kan ik krijgen voor dakisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Via Mijn VerbouwPremie (Vlaanderen) ontvangt u tot €3.000 voor dakisolatie van een woning gebouwd vóór 2006, op voorwaarde dat u een erkend aannemer inschakelt en het minimumaanvraagbedrag van €3.000 (BTW incl.) bereikt. Controleer altijd de actuele bedragen op vlaanderen.be.",
      },
    },
    {
      "@type": "Question",
      name: "Betaal ik 6% of 21% BTW op dakisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voor woningen ouder dan 10 jaar geldt 6% BTW op het arbeidsloon en materialen, mits de opdrachtgever de woning uitsluitend privé gebruikt. Op een nieuwe woning of gebouw jonger dan 10 jaar is 21% BTW van toepassing.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BRAND.url },
    { "@type": "ListItem", position: 2, name: "Dakisolatie", item: `${BRAND.url}/diensten/dakisolatie` },
    { "@type": "ListItem", position: 3, name: "Prijs dakisolatie", item: `${BRAND.url}/dakisolatie/prijs` },
  ],
};

export default function DakisopatiePrijsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.platDakAfter.src}
            alt="Dakisolatie prijs Antwerpen"
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
            Dakisolatie Prijs in Antwerpen
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
            Indicatieve prijsranges per daksysteem — zonder verborgen kosten.
            Vraag een gedetailleerde offerte aan voor uw specifieke situatie.
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
            { label: "Dakisolatie", href: "/diensten/dakisolatie" },
            { label: "Prijs dakisolatie", href: "/dakisolatie/prijs" },
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
            Wat bepaalt de prijs van dakisolatie?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kostprijs van dakisolatie verschilt sterk naargelang het daktype, de gekozen methode en de isolatiedikte.
            Hieronder vindt u indicatieve ranges per systeem, inclusief de meest voorkomende prijsbepalende factoren.
            <strong> Alle prijzen zijn inclusief 6% BTW</strong> (voor woningen ouder dan 10 jaar).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Prijzen hangen altijd af van de situatie ter plaatse: dakoppervlakte, bereikbaarheid, staat van het bestaande dak
            en de vereiste Rd-waarde. Een offerte op maat geeft u pas zekerheid. Gebruik onderstaande ranges als
            eerste oriëntatie.
          </p>
        </div>
      </section>

      {/* Price tables per method */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3 text-center">
            Per daktype
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-10 text-center">
            Indicatieve prijsranges 2026
          </h2>

          {/* Flat roof */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-teal-700 mb-1">
              Plat dak isoleren
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Warm-dak systeem met PIR/PUR-isolatie en nieuwe EPDM- of bitumendakbedekking
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="py-3 px-4 text-left font-semibold">Uitvoering</th>
                    <th className="py-3 px-4 text-center font-semibold">Isolatiedikte</th>
                    <th className="py-3 px-4 text-center font-semibold">Rd-waarde</th>
                    <th className="py-3 px-4 text-center font-semibold">Prijs incl. 6% BTW</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Basisisolatie + bitumen", "10 cm PIR", "~4,5 m²K/W", "€80–110 /m²"],
                    ["Standaard warm dak + EPDM", "14 cm PIR", "~6,3 m²K/W", "€110–140 /m²"],
                    ["Comfortisolatie + EPDM", "18 cm PIR", "~8,1 m²K/W", "€140–160 /m²"],
                    ["Premiumisolatie + groendak", "22 cm PIR", "~9,9 m²K/W", "€150–170 /m²"],
                  ].map(([label, dikte, rd, prijs], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="py-3 px-4 font-medium text-gray-800">{label}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{dikte}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{rd}</td>
                      <td className="py-3 px-4 text-center font-semibold text-teal-700">{prijs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Exclusief sloopwerken bestaande dakbedekking (€8–18/m²) en steigers indien nodig.
              Minimaal project: ±€3.500 incl. BTW.
            </p>
          </div>

          {/* Sarking */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-teal-700 mb-1">
              Sarkingdak (buitenisolatie hellend dak)
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              PIR-isolatieplaten boven de gordingen, onder nieuwe dakbedekking (leien, tegels of EPDM)
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="py-3 px-4 text-left font-semibold">Uitvoering</th>
                    <th className="py-3 px-4 text-center font-semibold">Isolatiedikte</th>
                    <th className="py-3 px-4 text-center font-semibold">Rd-waarde</th>
                    <th className="py-3 px-4 text-center font-semibold">Prijs incl. 6% BTW</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sarking + bitumenschingel", "12 cm PIR", "~5,4 m²K/W", "€75–95 /m²"],
                    ["Sarking + leien (kunstleien)", "16 cm PIR", "~7,2 m²K/W", "€95–115 /m²"],
                    ["Sarking + Vlaamse pan", "18 cm PIR", "~8,1 m²K/W", "€105–125 /m²"],
                    ["Sarking + Vlaamse leien", "22 cm PIR", "~9,9 m²K/W", "€120–140 /m²"],
                  ].map(([label, dikte, rd, prijs], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="py-3 px-4 font-medium text-gray-800">{label}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{dikte}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{rd}</td>
                      <td className="py-3 px-4 text-center font-semibold text-teal-700">{prijs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Inclusief verwijdering oude dakbedekking en OSB-onderdak. Dakkapellen, dakramen en nok-/gordingdetails
              worden apart begroot. Minimaal project: ±€4.000 incl. BTW.
            </p>
          </div>

          {/* Inner insulation */}
          <div>
            <h3 className="text-xl font-bold text-teal-700 mb-1">
              Binnenisolatie hellend dak (tussen de gordingen)
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Glaswol of PIR tussen de kepers, dampscherm en nieuwe binnenafwerking
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="py-3 px-4 text-left font-semibold">Uitvoering</th>
                    <th className="py-3 px-4 text-center font-semibold">Isolatiedikte</th>
                    <th className="py-3 px-4 text-center font-semibold">Rd-waarde</th>
                    <th className="py-3 px-4 text-center font-semibold">Prijs incl. 6% BTW</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Glaswol tussen kepers + dampscherm", "12–14 cm", "~3,5–4,0 m²K/W", "€45–65 /m²"],
                    ["PIR tussen kepers + dampscherm", "14 cm", "~6,3 m²K/W", "€65–80 /m²"],
                    ["PIR tussen + onder kepers", "14+4 cm", "~8,1 m²K/W", "€75–90 /m²"],
                  ].map(([label, dikte, rd, prijs], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="py-3 px-4 font-medium text-gray-800">{label}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{dikte}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{rd}</td>
                      <td className="py-3 px-4 text-center font-semibold text-teal-700">{prijs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Exclusief binnenafwerking (gipskarton, pleister of hout). Binnenisolatie levert een lagere
              Rd-waarde door koudebruggen ter hoogte van de kepers. Minimaal project: ±€2.500 incl. BTW.
            </p>
          </div>
        </div>
      </section>

      {/* Price factors */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Waarop let u
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Factoren die de prijs beïnvloeden
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Dakoppervlakte",
                desc: "Hoe groter het dak, hoe lager de vaste kosten (steiger, verplaatsing) per m². Op kleine daken weegt het minimumkostenplaatje zwaarder door.",
              },
              {
                title: "Staat bestaand dak",
                desc: "Moet de bestaande dakbedekking worden verwijderd? Zijn de dakspanten in goede staat? Onverwachte rot of houtaantasting verhogen de prijs.",
              },
              {
                title: "Isolatiedikte en Rd-vereiste",
                desc: "Elke extra centimeter PIR kost ±€3–5/m². Voor de Mijn VerbouwPremie moet u minimaal Rd 4,5 m²K/W halen — dat vergt doorgaans 10–12 cm PIR.",
              },
              {
                title: "Bereikbaarheid en hoogte",
                desc: "Een steiger (€8–15/m²) of kraan is noodzakelijk voor hogere daken of als de buren niet wensen dat we via hun tuin werken.",
              },
              {
                title: "Dakbedekking (sarking)",
                desc: "Leien kosten aanzienlijk meer dan bitumenshingels of kunstleien. De keuze van afwerking maakt €20–50/m² verschil.",
              },
              {
                title: "Bijkomende details",
                desc: "Dakramen (Velux, Fakro), dakkapellen, dakrandafwerking en geveldoorvoeringen worden apart begroot en kunnen €300–1.500 per item kosten.",
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

      {/* BTW section */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Belasting & premies
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            BTW 6% en Mijn VerbouwPremie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
              <h3 className="text-xl font-bold text-teal-700 mb-4">BTW 6%</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Voor <strong>renovatie van een woning ouder dan 10 jaar</strong> die uitsluitend privé wordt
                gebruikt, geldt het verlaagde BTW-tarief van 6% op loon én materialen. Dit geldt ook voor
                dakisolatie als onderdeel van een dakrenovatie.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold mt-0.5">✓</span>
                  Woning ouder dan 10 jaar → 6% BTW
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold mt-0.5">✓</span>
                  Privégebruik (geen verhuur als bedrijf)
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">✗</span>
                  Woning jonger dan 10 jaar → 21% BTW
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Mijn VerbouwPremie</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Het Vlaamse gewest kent een premie voor dakisolatie via <strong>Mijn VerbouwPremie</strong>.
                U werkt met een erkend aannemer en het project kost minstens €3.000 incl. BTW.
                Controleer steeds de actuele bedragen op{" "}
                <a
                  href="https://www.vlaanderen.be/mijn-verbouwpremie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 underline"
                >
                  vlaanderen.be/mijn-verbouwpremie
                </a>{" "}
                (geraadpleegd juni 2026).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold mt-0.5">✓</span>
                  Woning gebouwd vóór 2006
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold mt-0.5">✓</span>
                  Erkend aannemer (ISOPROTECH is erkend)
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold mt-0.5">✓</span>
                  Minimale Rd-waarde 4,5 m²K/W
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-teal-50 border border-teal-100 p-5 text-sm text-teal-800">
            <strong>Let op:</strong> Premieregels en -bedragen worden door de Vlaamse overheid regelmatig herzien.
            Controleer altijd de actuele informatie op{" "}
            <a
              href="https://www.vlaanderen.be/premies-en-subsidies-voor-een-energiezuinig-huis"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              vlaanderen.be
            </a>{" "}
            vóór u een aanvraag indient. ISOPROTECH kan u begeleiden bij de premieaanvraag.
          </div>
        </div>
      </section>

      {/* Example budget */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Concreet voorbeeld
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">
            Wat kost een gemiddeld dakproject?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: "Rijwoning — plat dak",
                opp: "55 m² plat dak",
                sys: "Warm dak PIR 14 cm + EPDM",
                prijs: "€6.000–€7.700",
                rd: "Rd 6,3 m²K/W",
                premie: "Premie mogelijk",
                bg: "bg-stone-50",
              },
              {
                type: "Halfopen bebouwing — sarking",
                opp: "90 m² hellend dak",
                sys: "Sarking PIR 18 cm + Vlaamse pan",
                prijs: "€9.400–€11.200",
                rd: "Rd 8,1 m²K/W",
                premie: "Premie mogelijk",
                bg: "bg-teal-50",
                highlight: true,
              },
              {
                type: "Vrijstaande woning — volledig dak",
                opp: "160 m² hellend dak",
                sys: "Sarking PIR 22 cm + leien",
                prijs: "€19.000–€22.500",
                rd: "Rd 9,9 m²K/W",
                premie: "Premie mogelijk",
                bg: "bg-stone-50",
              },
            ].map((ex, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${ex.highlight ? "border-teal-200" : "border-gray-100"} shadow-sm p-6 ${ex.bg}`}
              >
                <h3 className="font-bold text-teal-800 text-lg mb-3">{ex.type}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <span className="text-gray-500">Oppervlakte:</span> {ex.opp}
                  </li>
                  <li>
                    <span className="text-gray-500">Systeem:</span> {ex.sys}
                  </li>
                  <li>
                    <span className="text-gray-500">Rd-waarde:</span> {ex.rd}
                  </li>
                </ul>
                <p className="mt-4 text-2xl font-extrabold text-teal-700">{ex.prijs}</p>
                <p className="text-xs text-gray-500 mt-1">incl. 6% BTW — {ex.premie}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Bovenstaande budgetten zijn indicatief en exclusief eventuele sloopwerken, steigerwerken en
            afbraak van bestaande dakbedekking. Een exacte prijs ontvang u na inspectie ter plaatse.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-stone-50">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-3">
            Veelgestelde vragen
          </p>
          <h2 className="text-3xl font-bold text-teal-800 mb-8">FAQ — Dakisolatie prijs</h2>
          <div className="space-y-5">
            {[
              {
                q: "Zijn jullie prijzen all-in?",
                a: "Onze offertes zijn inclusief BTW 6%, materialen, arbeid en standaard opkuis. Sloopwerken (verwijdering oude dakbedekking), steigers en onverwachte herstellingen worden apart begroot na inspectie.",
              },
              {
                q: "Kan ik subsidie combineren met een energielening?",
                a: "Ja, de Mijn VerbouwPremie is combineerbaar met de Mijn VerbouwLening (0% voor bepaalde doelgroepen). Vraag bij ISOPROTECH naar onze premie-begeleiding.",
              },
              {
                q: "Hoe snel krijg ik een offerte?",
                a: "Na een plaatsbezoek bezorgen wij u binnen 5 werkdagen een gedetailleerde offerte met materiaalspecificaties, Rd-berekening en prijs per post.",
              },
              {
                q: "Geeft u garantie op de werken?",
                a: "ISOPROTECH biedt 10 jaar garantie op de plaatsing. De materiaalgaranties van fabrikanten (PIR-platen, EPDM-membraan) bedragen doorgaans 15–25 jaar.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-teal-800 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">Meer over dakisolatie</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Plat dak isoleren", href: "/dakisolatie/plat-dak", desc: "Technische uitleg warm-daksysteem" },
              { label: "Hellend dak isoleren", href: "/dakisolatie/hellend-dak", desc: "Sarking, binnenisolatie & combinatie" },
              { label: "Sarkingdak", href: "/dakisolatie/sarkingdak", desc: "Buitenisolatie hellend dak stap voor stap" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="rounded-xl border border-gray-100 shadow-sm p-5 hover:border-teal-200 hover:shadow-md transition-all group"
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
              Vraag een offerte aan voor uw dak
            </h2>
            <p className="text-teal-200 max-w-xl mx-auto">
              Na een bezoek ter plaatse ontvangt u een gedetailleerde offerte met exacte prijs,
              Rd-berekening en informatie over beschikbare premies.
            </p>
          </div>
          <ContactForm defaultService="dakwerken" />
        </div>
      </section>
    </>
  );
}
