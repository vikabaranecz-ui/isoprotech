// src/app/dakisolatie/sarkingdak/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND, PHOTOS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Sarkingdak Antwerpen — Buitenisolatie Hellend Dak met PIR",
  description:
    "Sarkingdak in Antwerpen: buitenisolatie van hellend dak met PIR-platen. Geen koudebruggen, geen binnenruimteverlies. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
  keywords: [
    "sarkingdak antwerpen",
    "sarking dak isolatie",
    "sarkingdak prijs",
    "hellend dak isoleren langs buiten",
    "buitenisolatie dak antwerpen",
    "sarking PIR",
  ],
  alternates: { canonical: `${BRAND.url}/dakisolatie/sarkingdak` },
  openGraph: {
    title: "Sarkingdak Antwerpen — Buitenisolatie Hellend Dak met PIR",
    description: "Sarkingdak in Antwerpen. Buitenisolatie van hellend dak met PIR. Geen koudebruggen, geen binnenruimteverlies. Gratis inspectie.",
    url: `${BRAND.url}/dakisolatie/sarkingdak`,
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
      name: "Wat is een sarkingdak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Een sarkingdak is een hellend dak waarbij de isolatie langs de buitenkant van de dakconstructie wordt aangebracht — boven op de dakconstructie, onder de panlatten en dakbedekking. De isolatieplaten (doorgaans PIR) worden rechtstreeks op de gordingen of op het bestaande onderdak bevestigd. Dit elimineert koudebruggen via de spanten en geeft de hoogste thermische prestatie per cm dikte.",
      },
    },
    {
      "@type": "Question",
      name: "Wanneer kies je voor een sarkingdak in plaats van binnenisolatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Een sarkingdak is de betere keuze wanneer: (1) het dak sowieso wordt gerenoveerd (nieuwe pannen of leien), (2) u geen ruimte wil verliezen op de bovenverdieping, (3) u koudebruggen via de spanten volledig wil elimineren, of (4) u de hoogst mogelijke energieprestatie wil behalen. Binnenisolatie is goedkoper maar minder efficiënt en vereist een correct dampscherm.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel cm PIR is aanbevolen voor een sarkingdak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wij werken standaard met 18 cm PIR (Rd ≈ 7,2 m²K/W), wat ruim boven de Vlaamse EPB-norm van Rd 4,5 bij renovatie ligt. Dit geeft een maximale energiebesparing en de beste score bij een EPC-berekening. In sommige gevallen (hoge borstwering, dakkapellen) kan de keuze beperkt zijn tot 14 of 16 cm.",
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
    { "@type": "ListItem", position: 3, name: "Sarkingdak", item: `${BRAND.url}/dakisolatie/sarkingdak` },
  ],
};

export default function SarkingdakPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[440px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.hellendDakEdegemAfter.src}
            alt="Sarkingdak uitgevoerd door ISOPROTECH Antwerpen — buitenisolatie hellend dak"
            fill className="object-cover" priority sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/75" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300 border border-orange-400/30">
            Dakisolatie — Sarkingdak
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-6">
            Sarkingdak in Antwerpen
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Buitenisolatie van uw hellend dak met PIR-platen. Geen koudebruggen, geen verlies van ruimte — de technisch meest correcte oplossing bij dakrenovatie.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white hover:bg-orange-500 transition-colors">
              Gratis inspectie aanvragen
            </a>
            <a href="#offerte" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
              Offerte aanvragen
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            { label: "Dakisolatie", href: "/diensten/dakisolatie" },
            { label: "Hellend dak isoleren", href: "/dakisolatie/hellend-dak" },
            { label: "Sarkingdak", href: "/dakisolatie/sarkingdak" },
          ]}
        />
      </div>

      {/* Wat is sarking */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Wat is een sarkingdak?</span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-6">
              Buitenisolatie van uw hellend dak
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                Bij een <strong className="text-teal-800">sarkingdak</strong> wordt de isolatie aangebracht aan de buitenkant van de dakconstructie — boven op de spanten of gordingen, onder de nieuwe dakbedekking. De isolatieplaten (doorgaans stijve PIR of sarkingplaten) worden mechanisch bevestigd op de dakconstructie en vormen een continue thermische laag.
              </p>
              <p>
                Dit is fundamenteel anders dan binnenisolatie, waarbij de isolatie tussen de gordingen zit en de spanten zelf koudebruggen vormen. Bij sarking blijft de hele constructie binnen de thermische schil — het dak "ademt" thermisch als één geheel.
              </p>
              <p>
                Sarking is de technisch correcte methode wanneer een dak sowieso wordt gerenoveerd: de dakbedekking gaat er toch af, dus de extra kostprijs voor buitenisolatie is dan gering en het resultaat is structureel beter.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src={PHOTOS.dakrenovatieWorker.src}
              alt="ISOPROTECH vakman werkt aan sarkingdak Antwerpen"
              fill className="object-cover" sizes="(max-width:1024px)100vw,50vw"
            />
          </div>
        </div>
      </section>

      {/* Voordelen sarking vs binnenisolatie */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Vergelijking</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-10">
            Sarking vs. binnenisolatie — wat is het verschil?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-800 text-white">
                  <th className="p-4 text-left rounded-tl-xl">Criterium</th>
                  <th className="p-4 text-center">Sarking (buiten)</th>
                  <th className="p-4 text-center rounded-tr-xl">Binnenisolatie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Koudebruggen via spanten", "Geen — volledige laag", "Ja — spanten zijn koudebrug"],
                  ["Verlies van binnenruimte", "Geen", "Ja (5–20 cm per spant)"],
                  ["Dampscherm nodig?", "Niet altijd — afhankelijk van systeem", "Altijd verplicht"],
                  ["Uitvoering", "Bij dakrenovatie — dak gaat open", "Zonder dakrenovatie mogelijk"],
                  ["Thermische prestatie", "Uitstekend", "Goed (met beperkingen)"],
                  ["Kostprijs per m²", "Hoger", "Lager"],
                  ["Levensduur isolatie", "40–60 jaar", "30–50 jaar"],
                ].map(([criterium, sarking, binnen], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="p-4 font-semibold text-teal-800">{criterium}</td>
                    <td className="p-4 text-center text-green-700 font-medium">{sarking}</td>
                    <td className="p-4 text-center text-gray-500">{binnen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technische opbouw */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Technische opbouw</span>
        <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-10">
          Hoe wordt een sarkingdak opgebouwd?
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { nr: "1", t: "Verwijdering bestaande dakbedekking", d: "Pannen, leien of andere dakbedekking wordt verwijderd. Bestaand onderdak wordt beoordeeld: is het nog functioneel of moet het vervangen worden?" },
            { nr: "2", t: "Controle en herstel dakconstructie", d: "Spanten, gordingen en nokbalk worden gecontroleerd op rot, insecten en mechanische stabiliteit. Eventuele herstellingen worden uitgevoerd voor de isolatie geplaatst wordt." },
            { nr: "3", t: "Sarking / PIR-platen bevestigen", d: "Stijve PIR-sarkingplaten (18 cm, lambda 0,022 W/mK) worden mechanisch bevestigd op de gordingen. Naden worden minimaal 100 mm overlapping gelegd en afgedicht met aluminiumtape." },
            { nr: "4", t: "Onderdak of waterdichte laag", d: "Een waterdicht maar dampdoorlatend onderdak wordt aangebracht boven op de isolatieplaten. Dit vangt eventueel binnendringend regenwater op en laat waterdamp van binnenuit ontsnappen." },
            { nr: "5", t: "Tegenlatten en panlatten", d: "Houten tegenlatten worden bevestigd doorheen het onderdak in de isolatie en de gordingen. Op de tegenlatten komen panlatten voor de uiteindelijke dakbedekking." },
            { nr: "6", t: "Nieuwe dakbedekking", d: "Keramische pannen, betonpannen, leien of andere dakbedekking naar keuze. Goten, regenpijpen, dakramen en schoorstenen worden vakkundig aangesloten." },
          ].map((step) => (
            <div key={step.nr} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <span className="text-4xl font-extrabold text-orange-100">{step.nr}</span>
              <h3 className="mt-2 font-bold text-teal-800">{step.t}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Realisaties */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Realisaties</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-8">Sarkingdaken in de praktijk</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                photo: PHOTOS.hellendDakEdegemAfter,
                beforePhoto: PHOTOS.hellendDakEdegemBefore,
                title: "Sarkingdak Edegem — PIR 18 cm + nieuwe keramische pannen",
                details: "Volledige dakrenovatie met sarking, nieuwe pannen en goten",
                href: "/realisaties/hellend-dak-edegem",
              },
              {
                photo: PHOTOS.hellendDakEdegemAfter1,
                beforePhoto: PHOTOS.hellendDakEdegemBefore2,
                title: "Sarkingdak Edegem — zijkant",
                details: "PIR 18 cm buitenisolatie, nieuwe dakpannen",
                href: "/realisaties/hellend-dak-edegem",
              },
            ].map((proj) => (
              <Link
                key={proj.title}
                href={proj.href}
                className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all hover:-translate-y-1"
              >
                <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                  <div className="relative aspect-[3/4]">
                    <Image src={proj.beforePhoto.src} alt={proj.beforePhoto.alt} fill className="object-cover" sizes="25vw" />
                    <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">VOOR</span>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <Image src={proj.photo.src} alt={proj.photo.alt} fill className="object-cover" sizes="25vw" />
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
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Prijsindicatie</span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-6">Wat kost een sarkingdak?</h2>
            <div className="rounded-2xl bg-teal-50 border border-teal-200 p-6">
              <h3 className="font-bold text-teal-800 mb-4">Richtprijzen (incl. btw 6%)</h3>
              <div className="space-y-3 text-sm">
                {[
                  ["Sarking 14 cm PIR + onderdak + latten", "€75–100/m²"],
                  ["Sarking 16 cm PIR + onderdak + latten", "€85–115/m²"],
                  ["Sarking 18 cm PIR + onderdak + latten", "€90–125/m²"],
                  ["Sarking 20 cm PIR + onderdak + latten", "€100–140/m²"],
                ].map(([omschrijving, prijs]) => (
                  <div key={omschrijving} className="flex justify-between items-center border-b border-teal-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600">{omschrijving}</span>
                    <span className="font-bold text-teal-800 tabular-nums shrink-0 ml-3">{prijs}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-teal-600 mt-4">
                Exclusief nieuwe dakbedekking (pannen/leien), goten en detailwerk rond doorvoeringen. Bijgewerkt: juli 2026.
              </p>
            </div>
          </div>
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">FAQ</span>
            <div className="mt-4 space-y-3">
              {[
                { q: "Wat is een sarkingdak?", a: "Een sarkingdak is een hellend dak met isolatie aan de buitenzijde van de dakconstructie — boven op de spanten, onder de panlatten. Dit elimineert koudebruggen en geeft de beste thermische prestatie." },
                { q: "Wanneer kies je voor sarking?", a: "Sarking is de betere keuze bij dakrenovatie (nieuwe pannen toch nodig), wanneer u geen ruimte wil verliezen, of wanneer u de hoogste energieprestatie wil." },
                { q: "Hoeveel cm PIR is aanbevolen?", a: "Wij werken standaard met 18 cm PIR (Rd ≈ 7,2 m²K/W), ruim boven de Vlaamse EPB-norm van Rd 4,5 bij renovatie. Dit geeft maximale energiebesparing en de beste EPC-score." },
              ].map((item, i) => (
                <details key={i} className="group rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 font-bold text-teal-800 text-sm">
                    {item.q}
                    <svg className="h-4 w-4 shrink-0 text-orange-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interne links */}
      <section className="bg-stone-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-extrabold text-teal-800 mb-6">Meer over dakisolatie</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/dakisolatie/hellend-dak", label: "Hellend dak isoleren", desc: "Alle methodes vergeleken" },
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
        </div>
      </section>

      {/* CTA */}
      <section id="offerte" className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">Sarkingdak laten plaatsen?</h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Vraag een gratis inspectie en offerte aan. Wij beoordelen uw dak en geven een eerlijk advies over de beste isolatiemethode voor uw situatie.
              </p>
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
