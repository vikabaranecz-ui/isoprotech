// src/app/dakisolatie/hellend-dak/page.tsx
// Hellend dak isoleren — diepgaande commerciële pillar pagina

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND, PHOTOS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Hellend Dak Isoleren Antwerpen — Sarking, Binnenin of Buitenuit",
  description:
    "Hellend dak isoleren in Antwerpen. Buitenisolatie (sarking), binnenisolatie of combinatie. PIR 18 cm, dampscherm, onderdak. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
  keywords: [
    "hellend dak isoleren antwerpen",
    "schuin dak isoleren",
    "hellend dak isolatie",
    "sarkingdak antwerpen",
    "dak isoleren langs buiten",
    "dak isoleren langs binnen",
    "hellend dak isolatie prijs",
  ],
  alternates: {
    canonical: `${BRAND.url}/dakisolatie/hellend-dak`,
  },
  openGraph: {
    title: "Hellend Dak Isoleren Antwerpen — Sarking, Binnen of Buiten",
    description:
      "Hellend dak isoleren in Antwerpen. Sarking (buitenisolatie), binnenisolatie of combinatie. PIR, dampscherm, vakkundige uitvoering. Gratis inspectie.",
    url: `${BRAND.url}/dakisolatie/hellend-dak`,
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
      name: "Wat is de beste methode om een hellend dak te isoleren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De beste methode hangt af van de situatie. Bij een dakrenovatie (nieuwe dakpannen) is buitenisolatie (sarking) de beste keuze: het geeft de hoogste thermische prestatie, geen koude spanten en geen verlies van zolderruimte. Als het dak in goede staat is maar u de zolderruimte wil isoleren, kan binnenisolatie tussen de gordingen aangevuld met een dampscherm een goede optie zijn. Wij adviseren u op basis van uw specifieke situatie.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel isolatie is nodig voor een hellend dak in Vlaanderen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De Vlaamse EPB-norm vereist bij renovatie minimaal Rd 4,5 m²K/W. Met PIR (lambda ≈ 0,022 W/mK) is dat circa 10–12 cm. Voor optimale energieprestatie en EPC-verbetering raden wij 16–20 cm aan (sarking) of de combinatie van 10 cm + 8 cm (binnen + buiten). Bij nieuwbouw geldt Rd 6,0 m²K/W.",
      },
    },
    {
      "@type": "Question",
      name: "Heb ik een bouwvergunning nodig om mijn hellend dak te isoleren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enkel binnenisolatie (op de zolder zelf) vereist doorgaans geen vergunning. Buitenisolatie (sarking) waarbij de dakvorm of -hoogte verandert, kan in sommige gevallen wel een vergunning vereisen. Wij adviseren u dit vooraf te checken bij uw gemeente, zeker in beschermde of erfgoedgebieden.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is een dampscherm en waarom is het nodig bij hellend dakisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Een dampscherm (dampremmer) is een luchtdichte laag die verhindert dat vochtige binnenlucht door de dakconstructie trekt en condenseert in of achter de isolatie. Bij binnenisolatie van een hellend dak is een correct aangebracht dampscherm essentieel om condensatie, rot en schimmel te voorkomen. Het dampscherm wordt aangebracht op de warme zijde (binnenkant) van de isolatie.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hellend dak isoleren",
  description:
    "Isolatie van hellende daken in Antwerpen en omgeving. Buitenisolatie (sarking), binnenisolatie en combinatiesystemen.",
  provider: {
    "@type": "LocalBusiness",
    name: BRAND.name,
    url: BRAND.url,
    telephone: BRAND.phone,
  },
  areaServed: { "@type": "City", name: "Antwerpen" },
  url: `${BRAND.url}/dakisolatie/hellend-dak`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BRAND.url },
    { "@type": "ListItem", position: 2, name: "Dakisolatie", item: `${BRAND.url}/diensten/dakisolatie` },
    { "@type": "ListItem", position: 3, name: "Hellend dak isoleren", item: `${BRAND.url}/dakisolatie/hellend-dak` },
  ],
};

export default function HellendDakPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.hellendDakEdegemAfter.src}
            alt="Hellend dak gerenoveerd en geïsoleerd door ISOPROTECH Antwerpen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/75" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300 border border-orange-400/30">
            Dakisolatie — Hellend dak
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-6">
            Hellend dak isoleren in Antwerpen
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Een niet-geïsoleerd hellend dak verliest 20–25% van uw warmte. Wij isoleren langs buiten (sarking) of langs binnen — de juiste methode voor uw situatie.
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
            { label: "Hellend dak isoleren", href: "/dakisolatie/hellend-dak" },
          ]}
        />
      </div>

      {/* Methodes vergelijking */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
          Methodes
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-4">
          Drie manieren om een hellend dak te isoleren
        </h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed mb-10">
          Er zijn drie technieken, elk met andere voordelen, kosten en toepassingsgebieden. Welke methode het beste past, hangt af van de staat van uw dak, uw plannen en uw budget.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              nr: "1",
              title: "Buitenisolatie — Sarking",
              badge: "Beste prestatie",
              badgeColor: "bg-orange-400",
              desc: "Isolatieplaten (PIR) worden aangebracht op de bestaande sporenpaar, bovenop het onderdak. Dit is de thermisch beste methode: geen koudebruggen via de spanten, geen verlies van binnenruimte, volledige luchtdichtheid.",
              when: "Bij dakrenovatie (nieuwe dakpannen) of bij dak zonder onderdak",
              thickness: "18–20 cm PIR",
              ideal: true,
            },
            {
              nr: "2",
              title: "Binnenisolatie — Tussen de gordingen",
              badge: "Bij intact dak",
              badgeColor: "bg-teal-600",
              desc: "Isolatie wordt aangebracht tussen of onder de spanten, gevolgd door een dampscherm en afwerking (plaat of gipskarton). Eenvoudiger en goedkoper, maar de spanten vormen koudebruggen. Minder efficiënt dan sarking.",
              when: "Als het dak in goede staat is en er geen renovatie nodig is",
              thickness: "10–14 cm + dampscherm",
              ideal: false,
            },
            {
              nr: "3",
              title: "Combinatiesysteem",
              badge: "Maximale waarde",
              badgeColor: "bg-teal-800",
              desc: "Buitenisolatie op de spanten gecombineerd met een dunne laag binnenisolatie. Alle koudebruggen worden geëlimineerd. De beste thermische prestatie maar ook de meest complexe en duurste uitvoering.",
              when: "Bij volledig ingrijpende dakrenovatie met hoge EPC-ambities",
              thickness: "12 cm buiten + 6 cm binnen",
              ideal: false,
            },
          ].map((method) => (
            <div key={method.nr} className={`rounded-2xl border p-6 shadow-sm ${method.ideal ? "border-orange-300 bg-orange-50" : "border-gray-100 bg-white"}`}>
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl font-extrabold text-orange-100">{method.nr}</span>
                <span className={`${method.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                  {method.badge}
                </span>
              </div>
              <h3 className="font-extrabold text-teal-800 mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{method.desc}</p>
              <div className="space-y-2 text-xs">
                <div className="rounded-lg bg-teal-50 px-3 py-2">
                  <span className="font-semibold text-teal-700">Wanneer: </span>
                  <span className="text-gray-600">{method.when}</span>
                </div>
                <div className="rounded-lg bg-orange-50 px-3 py-2">
                  <span className="font-semibold text-orange-600">Aanbevolen dikte: </span>
                  <span className="text-gray-600">{method.thickness}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technische opbouw sarking */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
                Sarking — technische opbouw
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-6">
                Opbouw van een sarkingdak van buiten naar binnen
              </h2>
              <ol className="space-y-5">
                {[
                  { nr: "1", t: "Dakpannen of leien", d: "Nieuwe keramische pannen, betonpannen of leien op panlatten. De keuze beïnvloedt het gewicht, de uitstraling en de duurzaamheid." },
                  { nr: "2", t: "Panlatten en tegenlatten", d: "Zorgen voor ventilatie onder de pannen en dienen als bevestiging voor de dakpannen." },
                  { nr: "3", t: "PIR-sarking platen", d: "Doorgaans 18–20 cm in één laag of 2 × 10 cm met gekruiste naden. Platen worden op de spanten genageld of geschroefd en de naden worden afgedicht met aluminiumtape." },
                  { nr: "4", t: "Onderdak (waterdicht maar dampdoorlatend)", d: "Flexibele waterdichte laag die regen buiten houdt maar vochtige lucht van binnenuit laat ontsnappen. Verplicht bij sarking en bepaalt mee de luchtdichtheid." },
                  { nr: "5", t: "Spanten/gordingen", d: "De bestaande houten dakconstructie blijft behouden. Bij sarking zijn koudebruggen via de spanten volledig geëlimineerd." },
                  { nr: "6", t: "Binnenafwerking", d: "Gipskartonplaat, houten lattenwerk of zichtbare constructie naar keuze. Geen dampscherm nodig bij een correct sarkingsysteem." },
                ].map((step) => (
                  <li key={step.nr} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-400/15 text-sm font-extrabold text-orange-400">
                      {step.nr}
                    </span>
                    <div>
                      <h3 className="font-bold text-teal-800">{step.t}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
                Kritieke details
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-6">
                Waar gaat het mis bij hellend dakisolatie?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: "🌡️",
                    title: "Koudebruggen via de spanten",
                    desc: "Bij binnenisolatie zijn de houten spanten een koudebrug: ze leiden warmte naar buiten. Dit zorgt voor plaatselijke condensatie op de nok van de spanten en op termijn rot. Sarking elimineert dit volledig.",
                  },
                  {
                    icon: "💧",
                    title: "Onvoldoende dampscherm bij binnenisolatie",
                    desc: "Warme binnenlucht stijgt op en dringt door de isolatie. Zonder een correct dampscherm condenseert het vocht achter de isolatie — onzichtbaar maar destructief. Het dampscherm moet volledig luchtdicht zijn: alle naden geplakt, doorvoeringen afgedicht.",
                  },
                  {
                    icon: "🔧",
                    title: "Aansluiting bij de gevelisolatie",
                    desc: "Waar het dakisolatiepakket aansluit op de gevelisolatie, kan een koudebrug ontstaan. Wij zorgen voor een continue isolatielaag: dakisolatie en gevelisolatie lopen naadloos in elkaar over.",
                  },
                  {
                    icon: "🏠",
                    title: "Dakkapellen, schoorstenen en dakvensters",
                    desc: "Dakkapellen en dakvensters zijn thermische zwakke plekken. De aansluiting van het isolatiesysteem rondom dakkapellen vereist nauwkeurig vakwerk om koudebruggen en lekkage te vermijden.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-teal-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materialen en diktes */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
          Isolatiematerialen en diktes
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-10">
          Hoeveel isolatie hebt u nodig?
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-bold text-teal-800 mb-4">Wettelijke normen Vlaanderen (bijgewerkt juli 2026)</h3>
            <div className="rounded-2xl bg-teal-50 border border-teal-200 p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-teal-700 text-xs font-bold">
                    <th className="pb-3">Situatie</th>
                    <th className="pb-3 text-right">Rd-min</th>
                    <th className="pb-3 text-right">PIR dikte</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-100 text-gray-600">
                  <tr>
                    <td className="py-2.5">Renovatie (EPB)</td>
                    <td className="py-2.5 text-right font-semibold">4,5 m²K/W</td>
                    <td className="py-2.5 text-right">≈ 10–12 cm</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">Ingrijpende renovatie</td>
                    <td className="py-2.5 text-right font-semibold">6,0 m²K/W</td>
                    <td className="py-2.5 text-right">≈ 14–16 cm</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">ISOPROTECH standaard sarking</td>
                    <td className="py-2.5 text-right font-semibold">7,0+ m²K/W</td>
                    <td className="py-2.5 text-right">18–20 cm</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-teal-600 mt-3">
                Bron: Vlaamse EPB-regelgeving. Raadpleeg{" "}
                <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie/bouwen-en-verbouwen/energieprestatie-van-gebouwen-epb" className="underline" target="_blank" rel="noopener noreferrer">
                  vlaanderen.be
                </a>{" "}
                voor de meest actuele normen.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-teal-800 mb-4">Materiaalvergelijking</h3>
            <div className="space-y-3">
              {[
                {
                  name: "PIR — standaard voor sarking",
                  lambda: "0,022–0,025 W/mK",
                  desc: "Dunste platen per Rd-waarde, brandvertragend, dampgesloten buitenlaag. Ons standaard isolatiemateriaal voor sarkingdaken.",
                  badge: "Aanbevolen",
                },
                {
                  name: "Houtvezel — alternatief voor binnenisolatie",
                  lambda: "0,038–0,045 W/mK",
                  desc: "Dampdoorlatend, reguleert vocht, beter akoestisch. Vereist meer plaatsruimte maar ecologischer dan PIR. Toepasbaar bij binnenisolatie met een dampopen systeem.",
                  badge: "Ecologisch",
                },
                {
                  name: "Glaswol / steenwol",
                  lambda: "0,032–0,040 W/mK",
                  desc: "Goedkoper maar vereist meer dikte en strikte dampschermafwerking. Brandveilig. Enkel toepasbaar bij binnenisolatie met goede damprem.",
                  badge: "Budget",
                },
              ].map((mat) => (
                <div key={mat.name} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-teal-800 text-sm">{mat.name}</h4>
                    <span className="text-[10px] font-bold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">{mat.badge}</span>
                  </div>
                  <p className="text-xs text-orange-500 font-semibold mb-1">λ = {mat.lambda}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{mat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Realisaties */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Realisaties</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-8">
            Hellend dak projecten in onze regio
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                photo: PHOTOS.hellendDakEdegemAfter,
                beforePhoto: PHOTOS.hellendDakEdegemBefore,
                title: "Hellend dak Edegem — sarking 18 cm PIR",
                details: "Nieuwe pannen, sarking PIR 18 cm, nieuwe goten",
                href: "/realisaties/hellend-dak-edegem",
              },
              {
                photo: PHOTOS.hellendDakEdegemAfter1,
                beforePhoto: PHOTOS.hellendDakEdegemBefore2,
                title: "Hellend dak Edegem — tweede zijde",
                details: "Sarking + nieuwe keramische dakpannen",
                href: "/realisaties/hellend-dak-edegem",
              },
              {
                photo: PHOTOS.dakrenovatieWorker,
                beforePhoto: PHOTOS.dakSchouw,
                title: "Hellend dak renovatie met isolatie",
                details: "Sarking, nieuwe leien, luchtdichte afwerking",
                href: "/realisaties",
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
        </div>
      </section>

      {/* Prijs */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Prijsindicatie</span>
        <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-4">
          Wat kost het isoleren van een hellend dak?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mb-10">
          De prijs hangt sterk af van de gekozen methode, de dakoppervlakte, de complexiteit en de staat van het bestaande dak. De onderstaande indicaties geven een realistisch beeld.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-teal-50 border border-teal-200 p-6">
            <h3 className="font-bold text-teal-800 mb-4">Indicatieve prijsrange (incl. btw 6%)</h3>
            <div className="space-y-3 text-sm">
              {[
                ["Binnenisolatie 10 cm PIR + dampscherm + plaat", "€55–85/m²"],
                ["Binnenisolatie 14 cm glaswol + dampscherm", "€45–70/m²"],
                ["Sarking 16 cm PIR + onderdak + latten", "€80–110/m²"],
                ["Sarking 18 cm PIR + onderdak + latten", "€90–125/m²"],
                ["Sarking 20 cm PIR + onderdak + latten", "€100–140/m²"],
                ["Combinatie (sarking + binnenisolatie)", "€120–180/m²"],
              ].map(([omschrijving, prijs]) => (
                <div key={omschrijving} className="flex justify-between items-center border-b border-teal-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-gray-600">{omschrijving}</span>
                  <span className="font-bold text-teal-800 tabular-nums shrink-0 ml-3">{prijs}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-teal-600 mt-4">
              Exclusief nieuwe dakpannen, leien of andere dakbedekking. Prijzen bijgewerkt: juli 2026. Btw-tarief 6% geldt voor woningen ouder dan 10 jaar.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-teal-800 mb-4">Factoren die de prijs beïnvloeden</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                ["Dakoppervlak (m²)", "Hoe groter, hoe gunstiger per m²"],
                ["Gekozen methode", "Sarking is duurder maar geeft de beste prestatie"],
                ["Isolatiedikte", "Elke 2 cm extra kost ca. €8–15/m²"],
                ["Type dakbedekking", "Keramische pannen vs. leien vs. andere"],
                ["Dakkapellen en doorvoeringen", "Extra detailwerk per element"],
                ["Toegankelijkheid", "Stellingen of hoogtewerker bij moeilijk bereik"],
                ["Bestaande dakconstructie", "Eventuele herstellingen of verstevigingen"],
                ["Verwijdering asbesthoudende materialen", "Vereist gecertificeerde verwijdering"],
              ].map(([factor, toelichting]) => (
                <li key={factor} className="flex gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-teal-800">{factor}:</strong> {toelichting}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-200 p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-teal-800">Mijn VerbouwPremie:</strong> Voor dakisolatie die voldoet aan de minimale Rd-waarde kunt u via de Vlaamse overheid een premie aanvragen. Raadpleeg de actuele voorwaarden op{" "}
                <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie/bouwen-en-verbouwen/premies-voor-renovatie/mijn-verbouwpremie/mijn-verbouwpremie-voor-dak" className="underline text-orange-600" target="_blank" rel="noopener noreferrer">
                  vlaanderen.be
                </a>.
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
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Veelgestelde vragen</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-10">
            Vragen over hellend dakisolatie
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Wat is de beste methode om een hellend dak te isoleren?",
                a: "Bij een dakrenovatie is sarking (buitenisolatie) de beste keuze: geen koudebruggen via de spanten, geen ruimteverlies binnen en de hoogste thermische prestatie. Als uw dak in goede staat is en u alleen de zolderruimte isoleerbaar wil maken, biedt binnenisolatie tussen de gordingen een goede en betaalbare oplossing. Wij adviseren u op basis van uw specifieke situatie.",
              },
              {
                q: "Hoeveel isolatie is nodig voor een hellend dak in Vlaanderen?",
                a: "De Vlaamse EPB-norm vereist bij renovatie minimaal Rd 4,5 m²K/W. Met PIR (lambda ≈ 0,022 W/mK) bereikt u dat met circa 10–12 cm. Voor optimale prestatie en EPC-verbetering raden wij 16–20 cm sarking aan. Wij werken standaard met 18 cm voor een maximaal energetisch resultaat.",
              },
              {
                q: "Heb ik een bouwvergunning nodig voor hellend dakisolatie?",
                a: "Binnenisolatie vereist doorgaans geen vergunning. Sarking waarbij de dakvorm of nok-hoogte wijzigt, kan in sommige gevallen wel een vergunning vereisen. In beschermde stadsgezichten of bij erfgoedpanden zijn vaak bijkomende regels van toepassing. Wij adviseren u dit vooraf te checken bij uw gemeente.",
              },
              {
                q: "Wat is een dampscherm en waarom is het nodig?",
                a: "Een dampscherm is een luchtdichte folie die verhindert dat warme, vochtige binnenlucht door de dakconstructie dringt en condenseert op koude vlakken. Bij binnenisolatie is het dampscherm cruciaal: alle naden moeten perfect geplakt zijn en doorvoeringen (leidingen, balken) volledig afgedicht. Zonder correct dampscherm ontstaat condensatie achter de isolatie, wat leidt tot rotting en schimmel.",
              },
              {
                q: "Kan ik tijdens de zomer koelen met dakisolatie?",
                a: "Dakisolatie werkt in beide richtingen: in de winter houdt het warmte binnen, in de zomer houdt het warmte buiten. Een goed geïsoleerd dak met voldoende thermische massa vertraagt de opwarming van de leefruimte significant. In de praktijk merken eigenaren dat de bovenverdieping 5 tot 10 °C koeler blijft in de zomer na dakisolatie.",
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
            { href: "/dakisolatie/sarkingdak", label: "Sarkingdak", desc: "Alles over buitenisolatie van hellend dak" },
            { href: "/dakisolatie/plat-dak", label: "Plat dak isoleren", desc: "Warm dak, PIR en EPDM" },
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
              <h2 className="text-3xl font-extrabold text-white mb-4">Hellend dak laten isoleren?</h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Vraag een gratis inspectie aan. Wij beoordelen uw dak en adviseren de beste methode voor uw situatie — met een heldere prijs, zonder verplichtingen.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Gratis inspectie bij u thuis",
                  "Advies op maat: sarking of binnenisolatie?",
                  "Vaste prijs — geen verborgen kosten",
                  "10 jaar garantie op dakisolatie",
                  "Begeleiding bij premie-aanvraag",
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
