// src/app/gevelisolatie-antwerpen/page.tsx
import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND, PHOTOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

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

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const WhatsAppIcon = () => (
  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.625-1.465A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

export default function GevelisolatieLanding() {
  return (
    <>
      {/* ═══ 1. HERO — 2 kolommen desktop ═══ */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.gevelCrepiMeise.src}
            alt="Woning in Antwerpen na buitengevelisolatie met crepi afwerking"
            fill className="object-cover object-center" priority sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/95 via-teal-800/85 to-teal-800/60 lg:to-teal-800/50" />
        <div className="relative container-wide py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: proposition */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-xs font-bold text-orange-300 uppercase tracking-wide">Antwerpen & omgeving · Gratis inspectie</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold text-white leading-[1.12] mb-5">
                Via uw ongeïsoleerde gevel verdwijnt elke winter tot{" "}
                <span className="text-orange-400">25% van uw verwarmingsgeld.</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-7">
                ISOPROTECH stopt dat verlies structureel. Crepi, spuitkurk of steenstrips —
                warmer huis, lagere rekening, betere EPC. Eén aanspreekpunt. Vaste prijs. 10 jaar garantie.
              </p>
              <div className="flex flex-col gap-2.5 mb-8">
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
              {/* Mobile-only CTA buttons */}
              <div className="flex flex-wrap gap-3 lg:hidden">
                <a href="#offerte" className="btn-primary text-base px-7 py-3.5">
                  Plan gratis gevelinspectie
                </a>
                <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline-light text-base px-6 py-3.5 inline-flex items-center gap-2">
                  <WhatsAppIcon /> WhatsApp
                </a>
              </div>
              {/* Desktop: WhatsApp as secondary CTA */}
              <div className="hidden lg:flex gap-3">
                <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                  <WhatsAppIcon />
                  Stuur een foto via WhatsApp
                </a>
                <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors px-3 py-3">
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right: compact form — desktop only */}
            <div className="hidden lg:block">
              <ContactForm defaultService="gevelwerken" compact hideService />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST BAR ═══ */}
      <div className="bg-teal-800 py-5 border-b border-teal-700">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { value: "150+", label: "Gevels geïsoleerd" },
              { value: "★ 5/5", label: "Google Reviews" },
              { value: "10 jr", label: "Schriftelijke garantie" },
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

      {/* ═══ 3. FOTO GALERIE — echte projecten ═══ */}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden h-64 md:h-auto">
              <Image src={PHOTOS.crepiAntwAfter.src} alt="Volledig gerenoveerde voorgevel met crepi in Antwerpen" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="50vw" />
              <div className="absolute bottom-3 left-3 bg-teal-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">Crepi voorgevel — Antwerpen</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.gevelCrepiMeise2.src} alt="Gevelisolatie met crepi in Meise — zijgevel" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Crepi — Meise</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.crepiOranje1.src} alt="Oranje crepi gevelafwerking" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Crepi kleur</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.spuitkurkAfter1.src} alt="Woning na spuitkurk gevelafwerking" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Spuitkurk</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.crepiSchilde.src} alt="Crepi gevelafwerking woning Schilde" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Crepi — Schilde</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40 md:h-44">
              <Image src={PHOTOS.gevelCrepiProject.src} alt="Gevelisolatie met crepi afwerking" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
              <div className="absolute bottom-2 left-2 bg-teal-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-full">Crepi afwerking</div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Geen stockfoto&apos;s — eigen projecten in Antwerpen en omgeving</p>
        </div>
      </section>

      {/* ═══ 4. VOOR & NA ═══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Voor & na</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-3">Het verschil ziet u onmiddellijk</h2>
          <p className="text-gray-500 mb-10 max-w-xl">Elk project is anders — dezelfde aanpak: vakkundig, netjes, binnen de afgesproken termijn.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { before: PHOTOS.gevelBefore1, after: PHOTOS.gevelAfter1, label: "Spuitkurk", city: "Antwerpen" },
              { before: PHOTOS.crepiBefore1, after: PHOTOS.crepiAfter1, label: "Crepi achtergevel", city: "Antwerpen" },
              { before: PHOTOS.gevelAntwBefore, after: PHOTOS.gevelAntwAfter, label: "Crepi appartement", city: "Antwerpen" },
              { before: PHOTOS.spuitkurkBefore1, after: PHOTOS.spuitkurkAfter1, label: "Spuitkurk renovatie", city: "Omgeving" },
            ].map((pair) => (
              <div key={pair.label + pair.city} className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div className="grid grid-cols-2 h-52">
                  <div className="relative">
                    <Image src={pair.before.src} alt={pair.before.alt} fill className="object-cover" sizes="15vw" />
                    <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">VOOR</span>
                  </div>
                  <div className="relative">
                    <Image src={pair.after.src} alt={pair.after.alt} fill className="object-cover" sizes="15vw" />
                    <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">NA</span>
                  </div>
                </div>
                <div className="p-3">
                  <span className="text-sm font-bold text-teal-800">{pair.label}</span>
                  <span className="text-xs text-gray-400 ml-2">{pair.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. CTA TUSSENSTOP ═══ */}
      <section className="py-10 bg-teal-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="text-white/80 text-lg mb-4">Klaar voor een warme gevel en een lagere energierekening?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Plan gratis gevelinspectie</a>
            <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
              <WhatsAppIcon /> Stuur een foto via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 6. VOORDELEN (compact) ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">De oplossing</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-10">Wat gevelisolatie concreet voor u doet</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {([
              {
                icon: "💶",
                title: "25–35% minder verwarmingskosten",
                desc: "Bij een gemiddelde rekening van €2.100 bespaart u jaarlijks €525–€735. Terugverdientijd: 8 tot 12 jaar.",
              },
              {
                icon: "🌡️",
                title: "Warme muren, aangenaam klimaat",
                desc: "Geen koude tocht, geen condensatie meer, stabiel binnenklimaat in alle seizoenen.",
              },
              {
                icon: "🏡",
                title: "+5 tot +10% woningwaarde",
                desc: "Een betere EPC-score verhoogt uw verkoopprijs meetbaar. Relevant bij verhuur én verkoop.",
              },
              {
                icon: "🔇",
                title: "Geen vocht, minder geluid",
                desc: "Condensatie en schimmel verdwijnen structureel. Buitengevelisolatie dempt ook omgevingsgeluid.",
              },
            ] as Array<{ icon: string; title: string; desc: string }>).map((item) => (
              <div key={item.title} className="flex gap-4 items-start p-5 rounded-xl bg-white border border-gray-100">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-teal-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee highlight */}
          <div className="mt-8 rounded-2xl bg-teal-800 text-white p-6 flex flex-col sm:flex-row items-center gap-5">
            <div className="text-5xl shrink-0">🛡️</div>
            <div>
              <div className="font-extrabold text-xl text-orange-400 mb-1">10 jaar schriftelijke garantie</div>
              <p className="text-white/80 text-sm leading-relaxed">
                Op alle uitgevoerde werken — isolatie, bevestiging en afwerking. Vaste prijs vóór de start, geen verrassingen achteraf. U weet precies wat u krijgt, en waarvoor u betaalt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. REVIEWS — Google-stijl ═══ */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            {/* Google branding */}
            <div className="inline-flex items-center gap-2 mb-3">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold text-gray-500">Google Reviews</span>
              <Stars />
              <span className="text-sm font-bold text-gray-700">5.0</span>
            </div>
            <h2 className="text-3xl font-extrabold text-teal-800 mb-2">Wat klanten zeggen</h2>
            <p className="text-gray-500">Echte ervaringen van woningeigenaren in Antwerpen en omgeving.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                text: "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee en stelde oplossingen voor. Een betrouwbare partner voor wie kwaliteit, communicatie en vakmanschap belangrijk zijn. Absoluut een aanrader!",
                author: "Tom V.",
                location: "Antwerpen",
                project: "Gevelisolatie + crepi",
              },
              {
                text: "Het team houdt zich aan afspraken en planning. Zij werken zeer nauwkeurig en netjes. De communicatie verloopt vriendelijk, vlot en transparant. Wij zijn zeer tevreden over het eindresultaat.",
                author: "Lies M.",
                location: "Antwerpen",
                project: "Gevelrenovatie",
              },
              {
                text: "Wij zijn bijzonder tevreden over onze samenwerking. Van bij de start viel de zeer klantgerichte aanpak en duidelijke communicatie op. De renovatie van onze buitengevel met steenstrips werd uiterst professioneel uitgevoerd, binnen een korte termijn.",
                author: "Peter D.",
                location: "Antwerpen",
                project: "Steenstrips gevelrenovatie",
              },
              {
                text: "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. The quality of the material used is excellent, have already seen the huge difference on the EPC attest.",
                author: "Sarah K.",
                location: "Antwerp",
                project: "Isolatie + EPC verbetering",
              },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold text-sm shrink-0">
                    {r.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-800">{r.author}</div>
                    <div className="text-xs text-gray-400">{r.location}</div>
                  </div>
                  <div className="ml-auto">
                    <Stars />
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">&ldquo;{r.text}&rdquo;</p>
                <span className="text-[10px] text-orange-500 font-semibold bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">{r.project}</span>
              </div>
            ))}
          </div>

          {/* Risk reversal / vertrouwen sluiten */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🔍", title: "Gratis inspectie", desc: "Ter plaatse, zonder verplichting" },
              { icon: "📋", title: "Vaste prijs", desc: "Schriftelijk vastgelegd vóór start" },
              { icon: "🛡️", title: "10 jaar garantie", desc: "Op isolatie én afwerking" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-gray-100">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <div className="font-bold text-sm text-teal-800">{item.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#offerte" className="btn-primary text-base px-8 py-3.5">Plan gratis gevelinspectie</a>
          </div>
        </div>
      </section>

      {/* ═══ 8. HOE WERKT HET (compact) ═══ */}
      <section className="section-padding bg-orange-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Hoe werkt het?</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Aanvraag", desc: "Formulier of telefonisch. Wij nemen binnen 48u contact op." },
              { n: "2", title: "Inspectie", desc: "Gratis ter plaatse. Onze vakman bekijkt uw gevel en meet op." },
              { n: "3", title: "Vaste offerte", desc: "Heldere prijs + overzicht premies waarvoor u in aanmerking komt." },
              { n: "4", title: "Uitvoering", desc: "Vakkundig, netjes, op tijd. Oplevering met schriftelijke garantie." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-3">{s.n}</div>
                <h3 className="font-bold text-teal-800 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. PREMIES ═══ */}
      <section className="section-padding bg-green-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-3">Premies en subsidies</h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            De overheid subsidieert isolatiewerken. Wij bekijken bij de inspectie welke premies voor u gelden en helpen met de aanvraag.
          </p>
          <div className="bg-white rounded-2xl border border-green-200 p-6 shadow-sm">
            <div className="space-y-4 text-sm text-gray-600">
              {[
                { title: "Mijn VerbouwPremie (Vlaanderen)", desc: "Voor woningen ouder dan 2006. Premiebedrag afhankelijk van inkomen en werken. Aanvragen vóór de start." },
                { title: "Verlaagd btw-tarief 6%", desc: "Woningen ouder dan 10 jaar: 6% btw i.p.v. 21% op arbeidskosten. Directe besparing op uw factuur." },
                { title: "Gemeentelijke premies Antwerpen", desc: "Stad Antwerpen en omliggende gemeenten bieden soms aanvullende premies. Wij checken dit voor u." },
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
          </div>
        </div>
      </section>

      {/* ═══ 10. PRIJS ═══ */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-4">Wat kost gevelisolatie?</h2>
          <div className="rounded-xl bg-teal-50 border border-teal-100 p-5 text-center mb-6">
            <p className="text-gray-700">
              Richtprijs buitengevelisolatie inclusief afwerking in Antwerpen:{" "}
              <strong className="text-teal-800 text-lg">€140 – €230 per m²</strong><br />
              <span className="text-sm text-gray-500">(alles inbegrepen, 6% btw, zonder premies)</span>
            </p>
          </div>
          <p className="text-center text-gray-500 text-sm mb-8">
            De prijs hangt af van uw gevel: oppervlakte, type isolatie, afwerking, bereikbaarheid en staat.
            Na de gratis inspectie ontvangt u een exacte vaste prijs.
          </p>
          <div className="text-center">
            <a href="#offerte" className="btn-primary text-sm px-7 py-3">Vraag een persoonlijke prijsindicatie aan</a>
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-teal-800 text-center mb-10">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {[
              { q: "Wat kost gevelisolatie in Antwerpen?", a: "Richtprijs: €140 tot €230 per m² inclusief isolatie, afwerking (crepi/spuitkurk), stellingen, arbeid en btw. Voor een gemiddelde rijwoning van ±60 m² gevel: €8.400 tot €13.800 vóór premies. Na Mijn VerbouwPremie en gemeentelijke premies kan dit aanzienlijk lager uitvallen." },
              { q: "Kom ik in aanmerking voor premie?", a: "Dat hangt af van het bouwjaar, uw inkomen en uw gemeente. Via Mijn VerbouwPremie komen de meeste woningen vóór 2006 in aanmerking. Wij bekijken dit samen bij de inspectie en helpen u met de aanvraag." },
              { q: "Hoe lang duren de werken?", a: "Gemiddeld 1 tot 2 weken voor een volledige gevel van een rijwoning. Wij plannen alles duidelijk in zodat u exact weet wat u kunt verwachten." },
              { q: "Moet ik thuis zijn tijdens de werken?", a: "Niet noodzakelijk — alle werken zijn aan de buitenzijde. Wij vragen u aanwezig te zijn bij de startbespreking en de eindoplevering." },
              { q: "Welke afwerking is het beste: crepi, spuitkurk of steenstrips?", a: "Crepi is populairst en meest budgetvriendelijk. Spuitkurk is naadloos, ideaal bij scheurgevoelige gevels. Steenstrips geven een authentieke klinkerlook. Wij adviseren op basis van uw gevel." },
              { q: "Is een vergunning nodig?", a: "In de meeste gevallen niet. Buitengevelisolatie tot 14 cm is in Vlaanderen vrijgesteld van vergunning. Bij beschermde gevels controleren wij dit altijd bij de inspectie." },
              { q: "Werken jullie ook in mijn gemeente?", a: "Wij werken in heel Antwerpen en omgeving: Wilrijk, Mortsel, Ekeren, Schoten, Brasschaat, Kapellen, Kontich, Edegem, Schilde, Mechelen en meer." },
              { q: "Is de gratis inspectie echt gratis?", a: "Ja, volledig. Wij komen langs, bekijken uw gevel en geven eerlijk advies — zonder verplichting, zonder kosten." },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-100 bg-white">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-teal-800 text-sm">
                  {faq.q}
                  <svg className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. FINAL CTA + FORM ═══ */}
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
          <ContactForm defaultService="gevelwerken" hideService />
          <p className="text-xs text-gray-400 text-center mt-4">Geen spam. Geen verplichtingen. Wij nemen binnen 48u contact op.</p>

          {/* WhatsApp as strong alternative path */}
          <div className="mt-8 rounded-2xl bg-green-50 border border-green-200 p-6 text-center">
            <p className="font-bold text-teal-800 mb-1">Liever eerst een foto sturen?</p>
            <p className="text-sm text-gray-600 mb-4">Stuur ons een foto van uw gevel via WhatsApp. Wij geven snel een eerste indruk — zonder verplichtingen.</p>
            <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              <WhatsAppIcon />
              Open WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
            <a href={`tel:${BRAND.phone}`} className="hover:text-teal-700 transition-colors">{BRAND.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 p-3 flex gap-3 sm:hidden">
        <a href={`tel:${BRAND.phone}`} className="btn-primary flex-1 text-center text-sm py-3">Bel nu</a>
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-500 text-white font-bold text-sm py-3">
          <WhatsAppIcon /> WhatsApp
        </a>
      </div>
    </>
  );
}
