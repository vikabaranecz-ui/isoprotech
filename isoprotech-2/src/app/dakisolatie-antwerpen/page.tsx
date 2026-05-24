// src/app/dakisolatie-antwerpen/page.tsx
// High-conversion landing page — rebuilt with photo galleries, pain+numbers, social proof

import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND, PHOTOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Dakisolatie Antwerpen — Meer Comfort | ISOPROTECH",
  description: "Dakisolatie en dakrenovatie in Antwerpen. Plat en hellend dak. Premie-advies inbegrepen. Gratis inspectie, vaste prijs, 10 jaar garantie. Bel +32 465 88 27 01.",
  keywords: ["dakisolatie antwerpen", "dakisolatie prijs", "dakrenovatie antwerpen", "plat dak isoleren", "dak renoveren antwerpen", "dakisolatie premie"],
  alternates: { canonical: `${BRAND.url}/dakisolatie-antwerpen` },
  openGraph: {
    title: "Dakisolatie Antwerpen — ISOPROTECH",
    description: "Tot 30% minder warmteverlies. Gratis inspectie, vaste prijs, 10 jaar garantie.",
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

export default function DakisolatieLanding() {
  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.platDak.src}
            alt="Plat dak renovatie met PIR-isolatie in Antwerpen — droneshot"
            fill className="object-cover object-center" priority sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/95 via-teal-800/70 to-transparent" />
        <div className="relative container-wide py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-bold text-orange-300 uppercase tracking-wide">Antwerpen & omgeving · Gratis inspectie</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold text-white leading-[1.12] mb-5">
              Via uw ongeïsoleerd dak verliest u elke winter tot{" "}
              <span className="text-orange-400">30% van uw verwarmingskosten.</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-7">
              ISOPROTECH isoleert en renoveert uw dak van A tot Z. Plat of hellend — vakkundig uitgevoerd,
              inclusief premie-advies, met vaste prijs en 10 jaar schriftelijke garantie.
            </p>
            <div className="flex flex-col gap-2.5 mb-8">
              {[
                "Gratis inspectie ter plaatse — zonder verplichting",
                "Premie-advies op maat inbegrepen",
                "Vaste prijs, geen verborgen kosten",
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
            <div className="flex flex-wrap gap-3">
              <a href="#offerte" className="btn-primary text-base px-7 py-3.5">
                Plan gratis dakinspectie
              </a>
              <a href={`tel:${BRAND.phone}`} className="btn-outline-light text-base px-7 py-3.5">
                {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. STATS BAR ═══ */}
      <div className="bg-teal-800 py-5 border-b border-teal-700">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { value: "150+", label: "Daken gerenoveerd" },
              { value: "5/5", label: "Google Reviews" },
              { value: "10 jr", label: "Garantie op alle werken" },
              { value: "5–8 jr", label: "Terugverdientijd dakisolatie" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-orange-400">{s.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
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
                Een ongeïsoleerd dak kost u elk jaar honderden euro&apos;s
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Via een ongeïsoleerd dak gaat{" "}
                <strong className="text-teal-800">25 tot 30% van de warmte</strong> van uw woning verloren.
                Bij een gemiddelde verwarmingsrekening van €2.100 per jaar betekent dat{" "}
                <strong className="text-teal-800">€525 tot €630 per jaar</strong> die letterlijk
                door het dak verdwijnt — zonder dat u er iets aan hebt.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Bron: Buildwise (WTCB) — warmteverliesverdeling in niet-geïsoleerde woningen
              </p>
              <div className="space-y-4">
                {[
                  { title: "Koud op de bovenverdieping, heet in de zomer", desc: "Slechte dakisolatie maakt uw bovenste verdieping onleefbaar: ijskoud in de winter, gloeiend heet in de zomer." },
                  { title: "Energierekening die blijft stijgen", desc: "Energieprijzen zijn de afgelopen jaren met 40–60% gestegen. Een ongeïsoleerd dak versterkt dat effect elk jaar." },
                  { title: "Lekkages en vochtproblemen", desc: "Verouderde dakbedekking laat water door. Schimmel, houtrot en structuurschade zijn het gevolg. Uitstel kost meer." },
                  { title: "Asbest in uw dak?", desc: "Woningen gebouwd vóór 1990 bevatten vaak asbestcement in de dakbedekking. Bij dakwerken is verwijdering wettelijk verplicht." },
                  { title: "EPC-label dat verhuur bemoeilijkt", desc: "Vlaamse regelgeving verplicht steeds hogere EPC-normen bij verhuur. Zonder dakisolatie haalt u de norm niet." },
                  { title: "Onduidelijkheid over wat het kost", desc: "Geen enkele aannemer geeft u een eerlijke prijs zonder inspectie. Wij wel — na een gratis bezoek ter plaatse." },
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
                  { label: "Warmteverlies via ongeïsoleerd dak", value: "≈ 27%", highlight: false },
                  { label: "Jaarlijks verlies door ongeïsoleerd dak", value: "≈ €567 / jaar", highlight: true },
                  { label: "Over 10 jaar (zonder investering)", value: "≈ €5.670", highlight: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between items-center py-3 border-b border-white/10 ${row.highlight ? "text-orange-300 font-bold" : "text-white/70"}`}>
                    <span className="text-sm">{row.label}</span>
                    <span className="text-sm font-bold ml-4 shrink-0">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-orange-400/15 border border-orange-400/30 p-4 text-center">
                <p className="text-sm text-orange-200 leading-relaxed">
                  Dakisolatie heeft een <strong className="text-orange-300">terugverdientijd van 5 tot 8 jaar</strong>.
                  Na die periode verdient u structureel — elke verwarmingsperiode opnieuw.
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
            <h2 className="text-3xl font-extrabold text-teal-800">Dakprojecten in Antwerpen en omgeving</h2>
            <Link href="/realisaties" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-600 transition-colors">
              Alle projecten
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Big feature image */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden h-64 md:h-auto">
              <Image src={PHOTOS.hellendDakEdegemAfter.src} alt="Hellend dak Edegem na renovatie met nieuwe dakpannen en isolatie" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="50vw" />
              <div className="absolute bottom-3 left-3 bg-teal-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">Hellend dak renovatie — Edegem</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.platDakAfter.src} alt="Plat dak na renovatie — nieuwe waterdichte bedekking" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Plat dak — na renovatie</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.platDak2After.src} alt="Plat dak na vernieuwing — waterdicht en geïsoleerd" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Plat dak — vernieuwd</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.hellendDakEdegemAfter1.src} alt="Hellend dak Edegem na renovatie — tweede hoek" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Hellend dak — Edegem</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.dakSchouw.src} alt="Schouwkap bij dakrenovatie — loodaansluiting en dakpannen" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Details & schouw</div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Geen stockfoto&apos;s — eigen projecten in Antwerpen en omgeving</p>
        </div>
      </section>

      {/* ═══ 5. BEFORE / AFTER — plat + hellend dak ═══ */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Voor & na</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-3">Het verschil is duidelijk</h2>
          <p className="text-gray-500 mb-10">Plat dak, hellend dak — elk project waterdicht en geïsoleerd opgeleverd.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { before: PHOTOS.platDakBefore, after: PHOTOS.platDakAfter, label: "Plat dak", desc: "Verouderde bedekking → nieuw EPDM/bitumen + PIR-isolatie" },
              { before: PHOTOS.platDak2Before, after: PHOTOS.platDak2After, label: "Plat dak renovatie", desc: "Oud dak volledig vervangen — waterdicht en geïsoleerd" },
              { before: PHOTOS.hellendDakEdegemBefore, after: PHOTOS.hellendDakEdegemAfter, label: "Hellend dak — Edegem", desc: "Verouderde pannen → nieuwe dakpannen met isolatie" },
              { before: PHOTOS.hellendDakEdegemBefore2, after: PHOTOS.hellendDakEdegemAfter1, label: "Hellend dak — tweede zijde", desc: "Volledige dakvernieuwing inclusief isolatie en afwerking" },
            ].map((pair) => (
              <div key={pair.label} className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div className="grid grid-cols-2 h-56">
                  <div className="relative">
                    <Image src={pair.before.src} alt={pair.before.alt} fill className="object-cover" sizes="25vw" />
                    <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">VOOR</span>
                  </div>
                  <div className="relative">
                    <Image src={pair.after.src} alt={pair.after.alt} fill className="object-cover" sizes="25vw" />
                    <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">NA</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm font-bold text-teal-800">{pair.label}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{pair.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. SOLUTION — met cijfers ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">De oplossing</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 text-center mb-10">
            Wat dakisolatie concreet voor u doet
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {([
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Tot 30% minder verwarmingskosten",
                desc: "Dakisolatie is de meest rendabele energiemaatregel voor een woning. Bij een rekening van €2.100/jaar bespaart u tot €630 per verwarmingsseizoen. Terugverdientijd: 5 tot 8 jaar.",
                source: "Bron: VEA — Vlaams Energie- en Klimaatagentschap",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
                title: "Comfortabel op elke verdieping",
                desc: "Geen onaangename hitte meer op de bovenverdieping in de zomer, geen koude tocht in de winter. Een goed geïsoleerd dak regelt de temperatuur in beide richtingen.",
                source: "",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Bescherming van uw woning",
                desc: "Nieuwe waterdichte dakbedekking (EPDM, bitumen of PVC) gecombineerd met PIR-isolatie. Levensduur van 25 tot 30+ jaar bij correcte uitvoering. Geen water, geen houtrot, geen structuurschade.",
                source: "",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "1 tot 2 EPC-labels beter",
                desc: "Dakisolatie heeft de grootste impact op uw EPC-score. In de meeste gevallen verbetert u 1 à 2 labelstappen — relevant bij zowel verhuur als verkoop.",
                source: "Energieprestatieregelgeving Vlaanderen",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: "Premies tot duizenden euro's",
                desc: "Via Mijn VerbouwPremie kunt u een aanzienlijk deel recupereren. Bonus bij asbestverwijdering: €8/m². Verlaagd btw-tarief van 6% voor woningen ouder dan 10 jaar.",
                source: "Mijn VerbouwPremie — Vlaamse overheid",
              },
              {
                icon: (
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "Hogere woningwaarde",
                desc: "Een beter EPC-label verhoogt de marktwaarde van uw woning. Vastgoedstudies tonen aan dat kopers 5–10% meer betalen voor energiezuinige woningen.",
                source: "",
              },
            ] as Array<{ icon: React.ReactNode; title: string; desc: string; source: string }>).map((item) => (
              <div key={item.title} className="flex gap-4 items-start p-5 rounded-xl bg-white border border-gray-100">
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

      {/* ═══ 7. CTA TUSSENSTOP ═══ */}
      <section className="py-10 bg-teal-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="text-white/80 text-lg mb-4">Benieuwd wat dakisolatie voor uw woning kan opleveren?</p>
          <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Plan gratis dakinspectie</a>
        </div>
      </section>

      {/* ═══ 8. WAT WIJ DOEN ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Plat of hellend dak — wij regelen het volledig</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { photo: PHOTOS.platDak, title: "Plat dak isolatie + renovatie", desc: "Warm-dak principe: PIR-platen op de constructie + nieuwe waterdichte bedekking (EPDM, bitumen of PVC-folie). Waterdicht voor 25–30 jaar." },
              { photo: PHOTOS.hellendDakEdegemAfter, title: "Hellend dak renovatie + isolatie", desc: "Volledige renovatie van hellend dak: nieuwe isolatie, onderdak en dakpannen of leien naar keuze. Inclusief dakgoten en details." },
              { photo: PHOTOS.dakSchouw, title: "Details en afwerking", desc: "Schouwkappen, loodaansluitingen, dakramen en nokken — elk detail waterdicht afgewerkt. Geen concessies aan de periferie." },
              { photo: PHOTOS.dakkapellen, title: "Dakkapellen", desc: "Extra leefruimte en daglicht op de bovenverdieping. Volledig geïntegreerd in uw bestaand dakstructuur, inclusief isolatie." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                <div className="relative h-48">
                  <Image src={s.photo.src} alt={s.photo.alt} fill className="object-cover" sizes="50vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-teal-800 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. PROCESS + OFFER ═══ */}
      <section className="section-padding bg-orange-50">
        <div className="container-wide max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-extrabold text-teal-800 mb-4">U hoeft nog niet te beslissen</h2>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            We bekijken eerst uw dak, luisteren naar uw wensen en geven duidelijk advies over de
            beste oplossing. Pas daarna ontvangt u een heldere offerte — zonder verplichtingen.
          </p>
        </div>
        <div className="container-wide max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              { n: "1", title: "Gratis aanvraag", desc: "Vul het formulier in of bel ons. Wij nemen binnen 48 uur contact op voor een afspraak." },
              { n: "2", title: "Inspectie ter plaatse", desc: "Onze vakman bekijkt uw dak, bespreekt uw wensen en geeft advies over de beste aanpak. Eventuele asbestproblemen worden meegenomen." },
              { n: "3", title: "Vaste offerte + premie-overzicht", desc: "U ontvangt een heldere vaste prijs met volledige breakdown, plus een overzicht van premies waarvoor u in aanmerking komt." },
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
            <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Vraag gratis dakinspectie aan</a>
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
                text: "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee. Een betrouwbare partner voor wie kwaliteit en communicatie belangrijk zijn. Absoluut een aanrader!",
                author: "Woningeigenaar",
                location: "Antwerpen",
                project: "Dakrenovatie",
              },
              {
                text: "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. Have already seen the huge difference on the EPC attest.",
                author: "Homeowner",
                location: "Antwerp",
                project: "Roof insulation + EPC",
              },
              {
                text: "Het team houdt zich aan afspraken en planning. Zij werken zeer nauwkeurig en netjes. De communicatie verloopt vriendelijk, vlot en transparant. Wij zijn zeer tevreden over het eindresultaat.",
                author: "Woningeigenaar",
                location: "Antwerpen",
                project: "Dakwerken",
              },
              {
                text: "Wij zijn bijzonder tevreden over onze samenwerking. Van bij de start viel de klantgerichte aanpak en duidelijke communicatie op. Uiterst professioneel uitgevoerd, en dat bovendien binnen een korte termijn.",
                author: "Woningeigenaar",
                location: "Omgeving Antwerpen",
                project: "Dakrenovatie + isolatie",
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
        </div>
      </section>

      {/* ═══ 11. PREMIES ═══ */}
      <section className="section-padding bg-green-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Premies en subsidies</h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            Dakisolatie is een van de best gesubsidieerde renovatiemaatregelen in Vlaanderen.
            Combineer meerdere premies voor maximale terugbetaling.
          </p>
          <div className="bg-white rounded-2xl border border-green-200 p-6 shadow-sm">
            <div className="space-y-4 text-sm text-gray-600">
              {[
                {
                  title: "Mijn VerbouwPremie (Vlaanderen)",
                  desc: "Voor woningen aangesloten vóór 2006. Premiebedrag afhankelijk van gezinsinkomen en gezinssituatie. Aanvraag verplicht vóór de start van de werken.",
                },
                {
                  title: "Verlaagd btw-tarief 6%",
                  desc: "Woningen ouder dan 10 jaar komen in aanmerking voor 6% btw i.p.v. 21% op de arbeidskosten. Dit is een directe, automatische besparing op uw factuur.",
                },
                {
                  title: "Asbestverwijderingsbonus €8/m²",
                  desc: "Bij combinatie van dakwerken met asbestverwijdering krijgt u een extra bonus van €8/m² bovenop de reguliere premie. Relevant voor woningen vóór 1990.",
                },
                {
                  title: "Lokale premies Antwerpen",
                  desc: "De stad Antwerpen en omliggende gemeenten (Mechelen, Schoten, etc.) bieden soms aanvullende premies. Wij checken dit bij de inspectie.",
                },
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
            <div className="mt-5 rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs text-amber-800">
                <strong>Let op:</strong> premies moeten worden aangevraagd vóór de start van de werken.
                Sinds maart 2026 gelden gewijzigde inkomensdrempels voor Mijn VerbouwPremie.
                Wij bekijken samen wat voor u van toepassing is.
              </p>
            </div>
            <div className="text-center mt-5">
              <a href="#offerte" className="btn-primary text-sm px-6 py-3">Vraag premie-advies aan</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 12. FAQ ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {[
              { q: "Wat kost dakisolatie in Antwerpen?", a: "De prijs hangt af van het type dak (plat of hellend), de oppervlakte, het isolatietype en bijkomende elementen zoals dakramen, schouwen of goten. Voor een gemiddelde rijwoning met plat dak van ±70 m² ligt de prijs inclusief isolatie en nieuwe bedekking tussen €12.000 en €22.000 incl. btw, vóór premies. U krijgt een exacte prijs na de gratis inspectie." },
              { q: "Plat of hellend dak — wat is het verschil?", a: "Bij een plat dak werken wij met het warm-dak principe: PIR-isolatieplaten worden bovenop de dakconstructie aangebracht, gevolgd door een nieuwe waterdichte bedekking (EPDM, bitumen of PVC). Bij een hellend dak wordt isolatie tussen of boven de dakspanten aangebracht, gevolgd door nieuwe pannen, leien of ander dakmateriaal." },
              { q: "Hoe lang duren de werken?", a: "Gemiddeld 3 tot 5 werkdagen voor een volledig plat dak van een rijwoning. Hellende daken zijn afhankelijk van de oppervlakte en complexiteit. Wij plannen alles helder in vooraf." },
              { q: "Kom ik in aanmerking voor premie?", a: "Dat hangt af van het bouwjaar van uw woning, uw inkomenscategorie en uw gemeente. Via Mijn VerbouwPremie van de Vlaamse overheid komen de meeste woningen vóór 2006 in aanmerking. Extra bonus bij gelijktijdige asbestverwijdering (€8/m²). Wij bekijken dit samen bij de inspectie." },
              { q: "Bevat mijn dak asbest?", a: "Woningen gebouwd of gerenoveerd vóór 1990 bevatten vaak asbest in de dakbedekking (golfplaten, dakleien, isolatielagen). Vóór dakwerken is een asbestinventarisatie wettelijk verplicht. ISOPROTECH begeleidt u hierbij volledig — van inventarisatie tot gecertificeerde verwijdering." },
              { q: "Is een gratis inspectie echt vrijblijvend?", a: "Ja, volledig. Wij bekijken uw dak, bespreken de opties en geven eerlijk advies. U ontvangt een offerte enkel als u dat wenst. Geen verplichting, geen kosten." },
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

      {/* ═══ 13. FINAL CTA + FORM ═══ */}
      <section id="offerte" className="section-padding bg-white">
        <div className="container-wide max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Gratis · Vrijblijvend · Binnen 48u</span>
            <h2 className="text-3xl font-extrabold text-teal-800 mt-2 mb-3">
              Ontdek wat dakisolatie voor uw woning kan betekenen
            </h2>
            <p className="text-gray-500">
              Vul het formulier in. Wij nemen contact op voor een gratis inspectie ter plaatse — geen verplichting.
            </p>
          </div>
          <ContactForm defaultService="dakwerken" />
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

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 p-3 flex gap-3 sm:hidden">
        <a href={`tel:${BRAND.phone}`} className="btn-primary flex-1 text-center text-sm py-3">Bel nu</a>
        <a href="#offerte" className="btn-outline flex-1 text-center text-sm py-3">Gratis offerte</a>
      </div>
    </>
  );
}
