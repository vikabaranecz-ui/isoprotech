// src/app/gevelisolatie-antwerpen/page.tsx
// High-conversion landing page — rebuilt with photo galleries, pain+numbers, social proof

import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND, PHOTOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";
import { HeroQuickForm } from "@/components/forms/HeroQuickForm";
import { BeforeAfterGallery } from "@/components/gallery/BeforeAfterGallery";

export const metadata: Metadata = {
  title: "Gevelisolatie Antwerpen — Warmer Huis | ISOPROTECH",
  description: "Buitengevelisolatie in Antwerpen met crepi, spuitkurk of steenstrips. Gratis inspectie ter plaatse, duidelijke offerte, 10 jaar garantie. Bel +32 465 88 27 01.",
  keywords: ["gevelisolatie antwerpen", "gevelisolatie prijs", "crepi antwerpen", "spuitkurk antwerpen", "buitengevel isoleren", "gevelrenovatie antwerpen", "gevelisolatie laten plaatsen"],
  alternates: { canonical: `${BRAND.url}/gevelisolatie-antwerpen` },
  openGraph: {
    title: "Gevelisolatie Antwerpen — ISOPROTECH",
    description: "Warmer huis, lagere energiekosten. Gratis inspectie, vaste prijs, 10 jaar garantie.",
    images: [{ url: "/images/og-isoprotech.png", width: 1080, height: 1080 }],
  },
};

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function GevelisolatieLanding() {
  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.gevelCrepiMeise.src}
            alt="Woning in Antwerpen na buitengevelisolatie met crepi afwerking"
            fill className="object-cover object-center" priority sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/95 via-teal-800/80 to-teal-800/60" />
        <div className="relative container-wide py-10 md:py-20">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-center">

            {/* Left column — text */}
            <div className="lg:col-span-3 order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-xs font-bold text-orange-300 uppercase tracking-wide">Antwerpen & omgeving · Gratis inspectie</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold text-white leading-[1.12] mb-4">
                Via uw ongeïsoleerde gevel verdwijnt elke winter tot{" "}
                <span className="text-orange-400">25% van uw verwarmingsgeld.</span>
              </h1>
              <p className="hidden md:block text-lg text-white/75 leading-relaxed mb-6">
                ISOPROTECH stopt dat verlies structureel met buitengevelisolatie. Crepi, spuitkurk of steenstrips —
                uw woning wordt warmer, stiller en ziet er uit als nieuw.
              </p>
              <div className="hidden md:flex flex-col gap-2.5">
                {[
                  "Gratis inspectie ter plaatse — zonder verplichting",
                  "Duidelijke vaste prijs na de inspectie",
                  "Premie-advies op maat inbegrepen",
                  "10 jaar schriftelijke garantie op alle werken",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2.5">
                    <svg className="h-5 w-5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-white/90 text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — form (always visible, no scrolling required) */}
            <div className="lg:col-span-2 order-2 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
              <HeroQuickForm />
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. STATS BAR ═══ */}
      <div className="bg-teal-800 py-5 border-b border-teal-700">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { value: "150+", label: "Gevels geïsoleerd" },
              { value: "5/5", label: "Google Reviews" },
              { value: "10 jr", label: "Garantie op alle werken" },
              { value: "48u", label: "Reactie gegarandeerd" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-orange-400">{s.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 2b. QUICK CONTACT STRIP — visible early, no scroll needed ═══ */}
      <div className="bg-orange-50 border-b border-orange-200 py-4">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/15 shrink-0">
                <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-teal-800">Gratis inspectie inplannen?</p>
                <p className="text-xs text-gray-500">Binnen 48u contact · Geen verplichtingen</p>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 rounded-xl border-2 border-teal-800 px-4 py-2 text-sm font-bold text-teal-800 hover:bg-teal-800 hover:text-white transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Bel nu
              </a>
              <a href="#offerte" className="btn-primary text-sm px-4 py-2">
                Gratis offerte
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 3. PAIN — met cijfers ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Het probleem</span>
              <h2 className="mt-2 text-3xl font-extrabold text-teal-800 leading-tight mb-5">
                Een ongeïsoleerde gevel kost u meer dan u denkt
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Een gemiddelde rijwoning in Antwerpen heeft een verwarmingsrekening van{" "}
                <strong className="text-teal-800">€1.800 tot €2.400 per jaar</strong>. Via de buitenmuren
                verdwijnt tot 25% van die warmte — dat is{" "}
                <strong className="text-teal-800">€450 tot €600 per jaar</strong> die letterlijk
                door de muur gaat. Jaar na jaar. Zonder dat u er iets voor terugkrijgt.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Bron: Buildwise (vroeger WTCB) — warmteverliesverdeling in niet-geïsoleerde woningen
              </p>
              <div className="space-y-4">
                {[
                  { title: "Koude muren, ondanks de verwarming", desc: "U warmt het huis op, maar de muren voelen koud aan. De warmte trekt weg door de ongeïsoleerde buitenwand." },
                  { title: "Elke winter dezelfde hoge rekening", desc: "Energieprijzen stijgen. Uw woning zonder isolatie wordt elk jaar duurder om te verwarmen." },
                  { title: "Verouderde, verweerde gevel", desc: "Scheuren, verkleuringen, afbladderende verf — uw woning ziet eruit als versleten. Dat drukt ook de waarde." },
                  { title: "Vocht en schimmel in de hoeken", desc: "Condensatie op koude binnenmuren is een teken van slechte isolatie. Schimmel is ongezond en duur om te verhelpen." },
                  { title: "EPC-label dat verkoop bemoeilijkt", desc: "Kopers en huurders letten steeds meer op het EPC-label. Een slecht label = lagere marktwaarde of geen huurder." },
                  { title: "Onduidelijkheid over premies", desc: "U weet dat er subsidies bestaan, maar welke gelden voor u? Wij zoeken het uit bij de inspectie." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <svg className="h-5 w-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <span className="font-bold text-sm text-teal-800">{item.title}</span>
                      <p className="text-sm text-gray-500 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Cost calculator visual */}
            <div className="rounded-2xl bg-teal-800 p-8 text-white">
              <h3 className="text-xl font-extrabold mb-6">Wat kost uitstel u per jaar?</h3>
              <div className="space-y-4">
                {[
                  { label: "Gemiddelde verwarmingsrekening", value: "€2.100 / jaar", highlight: false },
                  { label: "Warmteverlies via ongeïsoleerde gevel", value: "≈ 25%", highlight: false },
                  { label: "Jaarlijks verlies door ongeïsoleerde gevel", value: "≈ €525 / jaar", highlight: true },
                  { label: "Over 10 jaar", value: "≈ €5.250", highlight: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between items-center py-3 border-b border-white/10 ${row.highlight ? "text-orange-300 font-bold" : "text-white/70"}`}>
                    <span className="text-sm">{row.label}</span>
                    <span className="text-sm font-bold ml-4 shrink-0">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-orange-400/15 border border-orange-400/30 p-4 text-center">
                <p className="text-sm text-orange-200 leading-relaxed">
                  Gevelisolatie kost gemiddeld <strong className="text-orange-300">€140–230/m²</strong> alles inbegrepen.
                  De investering verdient zichzelf terug in <strong className="text-orange-300">8 tot 12 jaar</strong> — daarna puur winst.
                </p>
              </div>
              <a href="#offerte" className="mt-5 block w-full text-center btn-primary py-3 text-sm">
                Bereken mijn persoonlijke besparing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. PHOTO GALLERY — echte projecten ═══ */}
      <section className="section-padding bg-stone-100">
        <div className="container-wide">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Onze realisaties</span>
          <div className="flex items-end justify-between mt-1 mb-8">
            <h2 className="text-3xl font-extrabold text-teal-800">Echte projecten in Antwerpen</h2>
            <Link href="/realisaties" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-600 transition-colors">
              Alle projecten
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
          {/* Gallery: images are links to /realisaties — fixes dead clicks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Big feature image */}
            <Link href="/realisaties" className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden h-64 md:h-auto block group" aria-label="Bekijk alle realisaties">
              <Image src={PHOTOS.crepiAntwAfter.src} alt="Volledig gerenoveerde voorgevel met crepi in Antwerpen" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 bg-teal-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">Crepi voorgevel — Antwerpen</div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-400 text-white text-[10px] font-bold px-2 py-1 rounded-full">Bekijk meer →</div>
            </Link>
            <Link href="/realisaties" className="relative rounded-2xl overflow-hidden h-40 md:h-44 block group" aria-label="Bekijk realisaties">
              <Image src={PHOTOS.gevelCrepiMeise2.src} alt="Gevelisolatie met crepi in Meise — zijgevel" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Crepi — Meise</div>
            </Link>
            <Link href="/realisaties" className="relative rounded-2xl overflow-hidden h-40 md:h-44 block group" aria-label="Bekijk realisaties">
              <Image src={PHOTOS.crepiOranje1.src} alt="Oranje crepi gevelafwerking — volledig gerenoveerde woning" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Crepi kleur</div>
            </Link>
            <Link href="/realisaties" className="relative rounded-2xl overflow-hidden h-40 md:h-44 block group" aria-label="Bekijk realisaties">
              <Image src={PHOTOS.spuitkurkAfter1.src} alt="Woning na spuitkurk gevelafwerking" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Spuitkurk</div>
            </Link>
            <Link href="/realisaties" className="relative rounded-2xl overflow-hidden h-40 md:h-44 block group" aria-label="Bekijk realisaties">
              <Image src={PHOTOS.crepiSchilde.src} alt="Crepi gevelafwerking woning Schilde" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Crepi — Schilde</div>
            </Link>
            <Link href="/realisaties" className="relative rounded-2xl overflow-hidden h-40 md:h-44 block group" aria-label="Bekijk realisaties">
              <Image src={PHOTOS.gevelCrepiProject.src} alt="Gevelisolatie met crepi afwerking — modern eindresultaat" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Crepi afwerking</div>
            </Link>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Geen stockfoto&apos;s — eigen projecten in Antwerpen en omgeving · <Link href="/realisaties" className="text-orange-400 hover:underline">Alle projecten bekijken →</Link></p>
        </div>
      </section>

      {/* ═══ 5. SOLUTION — met cijfers ═══ */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">De oplossing</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 text-center mb-10">
            Wat gevelisolatie concreet voor u doet
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {([
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "25–35% minder verwarmingskosten",
                desc: "Bij een gemiddelde verwarmingsrekening van €2.100 bespaart u jaarlijks €525 tot €735. Terugverdientijd: 8 tot 12 jaar. Daarna puur rendement.",
                source: "Bron: VEA — Vlaams Energie- en Klimaatagentschap",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
                title: "Warme muren, aangenaam klimaat",
                desc: "Warmere binnenmuurtemperaturen in de winter: minder koude tocht, geen condensatieproblemen meer, en een stabiel binnenklimaat in alle seizoenen.",
                source: "Effect van buitengevelisolatie op binnenoppervlaktetemperatuur",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "1 tot 2 EPC-labels beter",
                desc: "Gevelisolatie verbetert uw EPC-score aanzienlijk. Bij een gemiddelde Belgische woning: 1 à 2 labelstappen voorwaarts. Relevant bij verhuur (verplichte normen) en verkoop.",
                source: "Energieprestatieregelgeving Vlaanderen — Fluvius/VEA",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "+5% tot +10% woningwaarde",
                desc: "Een betere EPC-score verhoogt de marktwaarde van uw woning meetbaar. Vastgoedstudies tonen een gemiddelde meerwaarde van 5% tot 10% bij verkoop.",
                source: "Bron: diverse vastgoedmarkt-analyses EPC vs. verkoopprijs",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                ),
                title: "Geluidsdemping",
                desc: "Buitengevelisolatie met minerale wol of EPS dempt ook omgevingsgeluid. Minder verkeerslawaai, rustiger huis — een bijkomend voordeel dat veel klanten verrast.",
                source: "",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Geen vocht of schimmel meer",
                desc: "Warmere binnenmuurtemperaturen voorkomen condensatie. Bestaande vochtproblemen in hoeken en kieren verdwijnen na buitenisolatie structureel.",
                source: "",
              },
            ] as Array<{ icon: React.ReactNode; title: string; desc: string; source: string }>).map((item) => (
              <div key={item.title} className="flex gap-4 items-start p-5 rounded-xl bg-stone-50 border border-gray-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-teal-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  {item.source && <p className="text-[11px] text-gray-400 mt-1.5 italic">{item.source}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. BEFORE / AFTER — expanded ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Voor & na</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-3">Het verschil ziet u onmiddellijk</h2>
          <p className="text-gray-500 mb-10 max-w-xl">Klik op een project om de foto&apos;s groter te bekijken.</p>
          <BeforeAfterGallery pairs={[
            { before: PHOTOS.gevelBefore1, after: PHOTOS.gevelAfter1, label: "Spuitkurk gevelafwerking", city: "Antwerpen" },
            { before: PHOTOS.crepiBefore1, after: PHOTOS.crepiAfter1, label: "Crepi achtergevel", city: "Antwerpen" },
            { before: PHOTOS.gevelAntwBefore, after: PHOTOS.gevelAntwAfter, label: "Crepi appartement", city: "Antwerpen" },
            { before: PHOTOS.spuitkurkBefore1, after: PHOTOS.spuitkurkAfter1, label: "Spuitkurk renovatie", city: "Omgeving" },
          ]} />
        </div>
      </section>

      {/* ═══ 7. CTA TUSSENSTOP ═══ */}
      <section className="py-10 bg-teal-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="text-white/80 text-lg mb-4">Klaar voor een gevel waar u trots op bent — en een lagere energierekening?</p>
          <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Plan gratis gevelinspectie</a>
        </div>
      </section>

      {/* ═══ 8. WAT WIJ DOEN ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Wat wij voor u doen</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {([
              {
                icon: <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" /></svg>,
                title: "Buitengevelisolatie",
                desc: "EPS, PUR of minerale wol — optimaal afgestemd op uw constructie, klimaat en budget.",
              },
              {
                icon: <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
                title: "Crepi afwerking",
                desc: "Minerale pleister in tientallen kleuren en structuren. Duurzaam, onderhoudsvriendelijk.",
              },
              {
                icon: <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
                title: "Spuitkurk",
                desc: "Elastische, naadloze afwerking op basis van natuurlijke kurk. Ademend en vochtbestendig.",
              },
              {
                icon: <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
                title: "Steenstrips",
                desc: "Klinkerlook zonder volle baksteen. Dun, duurzaam, authentiek karakter.",
              },
              {
                icon: <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>,
                title: "Gevelrenovatie",
                desc: "Volledige vernieuwing van uw buitengevel, inclusief vensterbanken, details en afwerking.",
              },
              {
                icon: <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
                title: "Premie-begeleiding",
                desc: "Wij bekijken samen welke subsidies mogelijk zijn en helpen met de aanvraag.",
              },
            ] as Array<{ icon: React.ReactNode; title: string; desc: string }>).map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-100 p-5 bg-white hover:border-orange-200 hover:shadow-sm transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 mb-3">
                  {s.icon}
                </div>
                <h3 className="font-bold text-teal-800 mb-1.5">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. PROCESS ═══ */}
      <section className="section-padding bg-orange-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Hoe werkt het?</h2>
          <div className="space-y-8">
            {[
              { n: "1", title: "Gratis aanvraag", desc: "Vul het formulier in of bel ons. Wij nemen binnen 48 uur contact op voor een afspraak." },
              { n: "2", title: "Inspectie ter plaatse", desc: "Onze vakman bekijkt uw gevel, meet op en bespreekt uw wensen en de beste oplossingen. Geen verplichtingen." },
              { n: "3", title: "Vaste offerte + premie-overzicht", desc: "U ontvangt een heldere prijs met volledige breakdown. Plus een overzicht van premies waarvoor u in aanmerking komt." },
              { n: "4", title: "Uitvoering binnen afgesproken termijn", desc: "Wij werken netjes en vakkundig, binnen de termijn die wij samen afspreken. Oplevering met 10 jaar schriftelijke garantie." },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-white font-extrabold text-lg flex items-center justify-center shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-bold text-teal-800 text-lg">{s.title}</h3>
                  <p className="text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Vraag een gratis prijsindicatie aan</a>
            <p className="text-xs text-gray-400 mt-3">Gratis · Vrijblijvend · Binnen 48u contact</p>
          </div>
        </div>
      </section>

      {/* ═══ 10. REVIEWS ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Stars />
            <h2 className="text-3xl font-extrabold text-teal-800 mt-3 mb-2">Wat klanten zeggen</h2>
            <p className="text-gray-500">Google 5/5 — echte ervaringen van woningeigenaren in Antwerpen en omgeving.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                text: "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee en stelde oplossingen voor. Een betrouwbare partner voor wie kwaliteit, communicatie en vakmanschap belangrijk zijn. Absoluut een aanrader!",
                author: "Woningeigenaar",
                location: "Antwerpen",
                project: "Gevelisolatie + crepi",
              },
              {
                text: "Het team houdt zich aan afspraken en planning. Zij werken zeer nauwkeurig en netjes. De communicatie verloopt vriendelijk, vlot en transparant. Wij zijn zeer tevreden over het eindresultaat.",
                author: "Woningeigenaar",
                location: "Antwerpen",
                project: "Gevelrenovatie",
              },
              {
                text: "Wij zijn bijzonder tevreden over onze samenwerking. Van bij de start viel de zeer klantgerichte aanpak en duidelijke communicatie op. De renovatie van onze buitengevel met steenstrips werd uiterst professioneel uitgevoerd, en dat bovendien binnen een korte termijn.",
                author: "Woningeigenaar",
                location: "Antwerpen",
                project: "Steenstrips gevelrenovatie",
              },
              {
                text: "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. The quality of the material used is excellent, have already seen the huge difference on the EPC attest.",
                author: "Homeowner",
                location: "Antwerp",
                project: "Insulation + EPC improvement",
              },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <Stars />
                <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-4">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-800">{r.author} · {r.location}</span>
                  <span className="text-[10px] text-orange-400 font-semibold bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">{r.project}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1.5"><svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Lokaal team in Antwerpen</span>
            <span className="flex items-center gap-1.5"><svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Eén vast aanspreekpunt</span>
            <span className="flex items-center gap-1.5"><svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Geen verborgen kosten</span>
            <span className="flex items-center gap-1.5"><svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>10 jaar schriftelijke garantie</span>
          </div>
        </div>
      </section>

      {/* ═══ 11. PREMIES ═══ */}
      <section className="section-padding bg-green-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Premies en subsidies</h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            De overheid subsidieert isolatiewerken. Afhankelijk van uw situatie kunt u een aanzienlijk deel
            van de investering recupereren via Mijn VerbouwPremie.
          </p>
          <div className="bg-white rounded-2xl border border-green-200 p-6 shadow-sm">
            <div className="space-y-4 text-sm text-gray-600">
              {[
                { title: "Mijn VerbouwPremie (Vlaanderen)", desc: "Voor woningen ouder dan 2006. Premiebedrag afhankelijk van gezinsinkomen en uitgevoerde werken. Vraag vóór de start van de werken aan." },
                { title: "Verlaagd btw-tarief 6%", desc: "Woningen ouder dan 10 jaar komen in aanmerking voor 6% btw i.p.v. 21% op de arbeidskosten. Dit is een directe besparing op uw factuur." },
                { title: "Gemeentelijke premies Antwerpen", desc: "De stad Antwerpen en omliggende gemeenten bieden soms aanvullende premies. Wij checken dit voor u bij de inspectie." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <strong className="text-teal-800">{item.title}</strong>
                    <p className="text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-green-50 border border-green-200 p-4 text-center">
              <p className="text-sm text-gray-600">
                <strong className="text-teal-800">Let op:</strong> premies moeten worden aangevraagd{" "}
                <strong>vóór de start</strong> van de werken. Wij begeleiden u bij de aanvraag.
              </p>
            </div>
            <div className="text-center mt-5">
              <a href="#offerte" className="btn-primary text-sm px-6 py-3">Vraag premie-advies aan</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 12. PRIJS ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-4">Wat kost gevelisolatie?</h2>
          <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
            De prijs is altijd maatwerk. Maar we zijn transparant over de factoren die de prijs bepalen.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-8">
            {[
              { factor: "Oppervlakte van uw gevel (m²)", impact: "Grootste factor" },
              { factor: "Isolatiedikte en -type (EPS / PUR / minerale wol)", impact: "Energie-effect" },
              { factor: "Afwerking: crepi, spuitkurk of steenstrips", impact: "Esthetiek + prijs" },
              { factor: "Staat van de bestaande gevel", impact: "Voorbereiding" },
              { factor: "Stellingen en bereikbaarheid", impact: "Logistiek" },
              { factor: "Ramen, vensterbanken en details", impact: "Afwerking" },
            ].map((f) => (
              <div key={f.factor} className="flex items-center justify-between p-3.5 rounded-lg bg-stone-50 border border-gray-100">
                <span className="text-sm text-gray-700 flex items-center gap-2">
                  <svg className="h-4 w-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {f.factor}
                </span>
                <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full ml-2 shrink-0">{f.impact}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-teal-50 border border-teal-100 p-5 text-center mb-6">
            <p className="text-sm text-gray-600">
              Richtprijs buitengevelisolatie inclusief afwerking in Antwerpen:{" "}
              <strong className="text-teal-800">€140 – €230 per m²</strong> (alles inbegrepen, 6% btw, zonder premies).
              De exacte prijs krijgt u na de gratis inspectie.
            </p>
          </div>
          <div className="text-center">
            <a href="#offerte" className="btn-primary text-sm px-7 py-3">Vraag een persoonlijke prijsindicatie aan</a>
          </div>
        </div>
      </section>

      {/* ═══ 13. FAQ ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {[
              { q: "Wat kost gevelisolatie in Antwerpen?", a: "Richtprijs: €140 tot €230 per m² inclusief isolatie, afwerking (crepi/spuitkurk), stellingen, arbeid en btw. Voor een gemiddelde rijwoning van ±60 m² gevel komt dat neer op €8.400 tot €13.800 vóór premies. Na Mijn VerbouwPremie en gemeentelijke premies kan dit aanzienlijk lager uitvallen. U krijgt een exacte prijs na de gratis inspectie." },
              { q: "Kom ik in aanmerking voor premie?", a: "Dat hangt af van het bouwjaar van uw woning, uw inkomenscategorie en uw gemeente. Via Mijn VerbouwPremie van de Vlaamse overheid komen de meeste woningen vóór 2006 in aanmerking. Wij bekijken dit samen bij de inspectie en helpen u met de aanvraag als u in aanmerking komt." },
              { q: "Hoe lang duren de werken?", a: "Gemiddeld 1 tot 2 weken voor een volledige gevel van een rijwoning, afhankelijk van de grootte en complexiteit. Grotere projecten of appartementsgebouwen kunnen langer duren. Wij plannen alles duidelijk in zodat u exact weet wat u kunt verwachten." },
              { q: "Moet ik thuis zijn tijdens de werken?", a: "Niet noodzakelijk. Alle werken gebeuren aan de buitenzijde van uw woning. Wij vragen u wel aanwezig te zijn bij de startbespreking en de eindoplevering." },
              { q: "Welke afwerking is het beste: crepi, spuitkurk of steenstrips?", a: "Dat hangt af van uw smaak, budget en de staat van uw gevel. Crepi is het populairst en het meest budgetvriendelijk. Spuitkurk is volledig naadloos en ideaal bij gevels met kleine oneffenheden of scheurgevoeligheid. Steenstrips geven een authentieke klinkerlook. Wij adviseren u graag op basis van uw specifieke gevel." },
              { q: "Is een vergunning nodig?", a: "In de meeste gevallen niet. Buitengevelisolatie tot 14 cm extra dikte is in Vlaanderen vrijgesteld van stedenbouwkundige vergunning. Bij beschermde gevels of woningen nabij de rooilijn kan een vergunning nodig zijn. Wij controleren dit altijd bij de inspectie." },
              { q: "Werken jullie ook in mijn gemeente?", a: "Wij werken in heel Antwerpen en omgeving: Wilrijk, Mortsel, Ekeren, Schoten, Brasschaat, Kapellen, Kontich, Edegem, Schilde, Mechelen en meer." },
              { q: "Is de gratis inspectie echt gratis?", a: "Ja, volledig. Wij komen langs, bekijken uw gevel, meten op en geven eerlijk advies over de beste oplossing voor uw situatie. Zonder verplichting, zonder kosten." },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-100 bg-white">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-teal-800 text-sm">
                  {faq.q}
                  <svg className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 14. FINAL CTA + FORM ═══ */}
      <section id="offerte" className="section-padding bg-white">
        <div className="container-wide max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Gratis · Vrijblijvend · Binnen 48u</span>
            <h2 className="text-3xl font-extrabold text-teal-800 mt-2 mb-3">
              Ontdek wat gevelisolatie voor uw woning kan betekenen
            </h2>
            <p className="text-gray-500">
              Vul het formulier in. Wij nemen contact op voor een gratis inspectie ter plaatse — geen verplichting.
            </p>
          </div>
          <ContactForm defaultService="gevelwerken" />
          <p className="text-xs text-gray-400 text-center mt-4">Geen spam. Geen verplichtingen. Wij nemen binnen 48u contact op.</p>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-3">Liever direct contact?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${BRAND.phone}`} className="btn-outline text-sm px-5 py-2.5">{BRAND.phoneDisplay}</a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-5 py-2.5 inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.625-1.465A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STICKY MOBILE CTA — page-specific, higher z-index overrides global ═══ */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-white/97 backdrop-blur-sm border-t border-orange-200 px-3 py-2.5 flex gap-2.5 md:hidden">
        <a href={`tel:${BRAND.phone}`} className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-teal-800 text-white text-sm font-bold py-3 hover:bg-teal-700 transition-colors">
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Bel nu
        </a>
        <a href="#offerte" className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-orange-400 text-white text-sm font-bold py-3 hover:bg-orange-300 transition-colors">
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          Gratis offerte
        </a>
      </div>
    </>
  );
}
