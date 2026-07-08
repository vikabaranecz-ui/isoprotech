// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { reviews } from "@/content/reviews";
import { cities } from "@/content/cities";
import { blogPosts } from "@/content/blog";
import { BRAND, PHOTOS, VIDEOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Dakisolatie & Gevelisolatie Antwerpen | ISOPROTECH",
  description:
    "Dak- en gevelisolatie in Antwerpen en omgeving. Gecertificeerde vakmensen, ATG/BENOR-materialen, gratis inspectie aan huis, 10 jaar schriftelijke garantie. Vraag vandaag uw offerte aan.",
  alternates: {
    canonical: "https://www.isoprotech.be",
  },
  openGraph: {
    title: "ISOPROTECH — Dakisolatie & Gevelisolatie Antwerpen",
    description:
      "Dak- en gevelisolatie in Antwerpen. Gratis inspectie, vaste prijs, 10 jaar garantie.",
    url: "https://www.isoprotech.be",
    images: [{ url: "/images/og-isoprotech.png", width: 1080, height: 1080 }],
  },
};

const stats = [
  { value: "150+", label: "Projecten afgerond" },
  { value: "10jr", label: "Schriftelijke garantie" },
  { value: "5/5", label: "Google reviews" },
  { value: "48u", label: "Reactie gegarandeerd" },
];

const steps = [
  { n: "01", title: "Gratis inspectie", desc: "Wij komen langs, beoordelen de situatie en geven eerlijk advies. Geen verplichtingen." },
  { n: "02", title: "Vaste offerte", desc: "Heldere prijsopbouw, geen verborgen kosten, geen meerwerk achteraf." },
  { n: "03", title: "Vakkundige uitvoering", desc: "Gecertificeerde vakmensen, ATG/BENOR-materialen, kwaliteitscontrole in elke fase." },
  { n: "04", title: "Oplevering met garantie", desc: "10 jaar schriftelijke garantie op elk project. Netjes achtergelaten, precies zoals afgesproken." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.gevelCrepiMeise.src}
            alt={PHOTOS.gevelCrepiMeise.alt}
            fill
            className="object-cover object-center scale-[1.02]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-teal-800/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/75 via-teal-800/40 to-transparent" />

        <div className="relative container-wide py-24 md:py-32">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left: headline */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-orange-300 uppercase">Antwerpen · Google 5/5 · Gratis inspectie</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold text-white leading-[1.07] tracking-tight mb-5">
                Dak of gevel isoleren?
                <span className="block text-orange-400 mt-1">Compleet geregeld.</span>
              </h1>
              <p className="text-lg text-white/70 max-w-lg leading-relaxed mb-8">
                Professionele isolatie en renovatie in Antwerpen. Gratis inspectie,
                vaste prijs, 10 jaar garantie — één aanspreekpunt van start tot oplevering.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={`tel:${BRAND.phone}`} className="btn-primary text-base px-7 py-4 text-center">
                  Bel voor gratis inspectie
                </a>
                <Link href="/calculator" className="btn-outline-light text-base px-7 py-4 text-center">
                  Bereken uw prijs
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50 font-medium">
                {["Gratis inspectie", "Reactie binnen 24u", "ATG & BENOR", "10 jaar garantie"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-orange-400 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: floating stats card — desktop only */}
            <div className="hidden lg:block w-56 xl:w-64 shrink-0">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-5">
                {stats.map(s => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-3xl font-black text-orange-400 leading-none">{s.value}</span>
                    <span className="text-xs text-white/55 mt-1 leading-tight">{s.label}</span>
                    <div className="mt-2.5 h-px bg-white/8" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-wide py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {stats.map(s => (
              <div key={s.label} className="bg-white flex flex-col items-center justify-center py-5 px-4 text-center">
                <span className="text-2xl md:text-3xl font-black text-teal-800">{s.value}</span>
                <span className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SERVICES BENTO ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <span className="section-label">Onze diensten</span>
              <h2 className="section-heading">Alles voor uw dak en gevel</h2>
            </div>
            <Link href="/diensten" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-600 transition-colors shrink-0">
              Alle diensten
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Large featured card — first service */}
            <Link
              href={`/diensten/${services[0].slug}`}
              className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[360px]"
            >
              <Image src={services[0].photo.src} alt={services[0].photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:1024px)100vw,50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-800/90 via-teal-800/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block rounded-full bg-orange-400/20 border border-orange-400/30 px-3 py-1 text-xs font-bold text-orange-300 mb-3">Meest gevraagd</span>
                <h3 className="text-xl font-extrabold text-white mb-1.5">{services[0].name}</h3>
                <p className="text-sm text-white/65 leading-relaxed line-clamp-2 mb-3">{services[0].shortDesc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-400 group-hover:gap-2.5 transition-all">
                  Meer info <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </span>
              </div>
            </Link>

            {/* Smaller cards */}
            {services.slice(1, 7).map((sv) => (
              <Link
                key={sv.id}
                href={`/diensten/${sv.slug}`}
                className="group relative rounded-2xl overflow-hidden min-h-[150px] md:min-h-[170px]"
              >
                <Image src={sv.photo.src} alt={sv.photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:640px)50vw,(max-width:1024px)50vw,25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-800/85 via-teal-800/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-white text-sm leading-snug">{sv.name}</h3>
                  <span className="text-xs text-orange-300 font-medium mt-0.5 block opacity-0 group-hover:opacity-100 transition-opacity">Meer info →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="section-label">Hoe het werkt</span>
            <h2 className="section-heading">Van aanvraag tot oplevering — zonder stress</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">Wij regelen alles. U hoeft enkel uw wensen te vertellen.</p>
          </div>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 relative">
            {/* Connecting line desktop */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
            {steps.map((s, i) => (
              <div key={s.n} className="relative flex flex-col items-center text-center p-6 md:p-7">
                {/* Step circle */}
                <div className={`relative z-10 h-20 w-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg ${
                  i === 0 ? "bg-orange-400 shadow-orange-400/30" : "bg-white border-2 border-gray-100 shadow-gray-100/50"
                }`}>
                  <span className={`text-2xl font-black ${i === 0 ? "text-white" : "text-teal-800"}`}>{s.n}</span>
                </div>
                <h3 className="font-bold text-teal-800 mb-2 text-base">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={`tel:${BRAND.phone}`} className="btn-primary">
              Start nu — bel gratis
            </a>
          </div>
        </div>
      </section>

      {/* ─── CALCULATOR CTA ─── */}
      <section className="relative overflow-hidden bg-teal-800">
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)", backgroundSize:"28px 28px"}} />
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-700/30 blur-3xl pointer-events-none" />
        <div className="relative container-wide py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-1.5 mb-6">
              <span className="text-xs font-bold tracking-widest text-orange-300 uppercase">Gratis prijsindicatie</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Weet wat het kost<br className="hidden sm:block" />
              <span className="text-orange-400"> voor u belt</span>
            </h2>
            <p className="text-white/55 max-w-lg mx-auto mb-8 text-base md:text-lg leading-relaxed">
              Onze calculator geeft in 2 minuten een indicatieve prijs — op basis van uw specifieke situatie.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/calculator" className="btn-primary text-base px-8 py-4">
                Gevelcalculator
              </Link>
              <Link href="/calculator/dak" className="btn-outline-light text-base px-8 py-4">
                Dakcalculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <span className="section-label">Realisaties</span>
              <h2 className="section-heading">Onze projecten in Antwerpen</h2>
            </div>
            <Link href="/realisaties" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-600 transition-colors shrink-0">
              Alle realisaties
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            </Link>
          </div>

          {/* Masonry-style grid */}
          {(() => {
            const homeIds = [
              "gevel-antwerpen-before-after",  // modern apartment facade — best visual
              "plat-dak-voor-na",              // flat roof + wood cladding
              "spuitkurk-voor-na-1",           // angular white house facade
              "hellend-dak-edegem-1",          // pitched roof renovation
              "gevel-meise",                   // large crepi facade
            ];
            const homePr = homeIds.map(id => projects.find(p => p.id === id)).filter(Boolean) as typeof projects;
            return (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {homePr.map((p, i) => (
              <Link
                key={p.id}
                href="/realisaties"
                className={`group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  i === 0 ? "col-span-2 h-64 md:h-80" : "h-48 md:h-56"
                }`}
              >
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-800/85 via-teal-800/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-bold text-white text-sm leading-snug">{p.title}</p>
                  <span className="text-xs text-orange-300 font-medium">{p.location}</span>
                </div>
                {p.beforePhoto && (
                  <span className="absolute top-3 left-3 bg-orange-400/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">VOOR / NA</span>
                )}
              </Link>
            ))}
          </div>
            );
          })()}
          <div className="text-center mt-8 md:hidden">
            <Link href="/realisaties" className="btn-outline">Alle realisaties bekijken</Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-12">
            <span className="section-label">Klantervaring</span>
            <h2 className="section-heading">Echte klanten, echte resultaten</h2>
            <p className="mt-3 text-gray-500 text-base md:text-lg">
              5/5 op Google — beoordeeld door woningeigenaren in Antwerpen en omgeving.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <div key={r.id} className="flex flex-col rounded-2xl bg-white border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <svg key={j} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  {/* Avatar */}
                  <div className="h-8 w-8 rounded-full bg-teal-800 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-white">{r.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-800">{r.name}</p>
                    <p className="text-[10px] text-gray-400">{r.serviceType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <a href={BRAND.maps} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-teal-700 shadow-sm hover:border-orange-200 hover:text-orange-400 transition-all">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-orange-400" fill="currentColor"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/></svg>
              Alle Google reviews bekijken
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            </a>
          </p>
        </div>
      </section>

      {/* ─── VIDEO ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="section-label">Bekijk ons werk</span>
            <h2 className="section-heading">Echte projecten in Antwerpen</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-teal-800 aspect-video shadow-xl ring-1 ring-teal-800/30">
              <iframe src={`${VIDEOS.mainShowreel}?rel=0&modestbranding=1`} title="ISOPROTECH — Gevelisolatie showreel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-teal-800 aspect-video shadow-xl ring-1 ring-teal-800/30">
              <iframe src={`${VIDEOS.projectHighlight}?rel=0&modestbranding=1`} title="ISOPROTECH — Project highlight" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-8">
            <span className="section-label">Werkgebied</span>
            <h2 className="text-2xl font-extrabold text-teal-900">Actief in Antwerpen en omgeving</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((c) => (
              <Link key={c.id} href={`/regio/${c.slug}`}
                className="rounded-xl bg-white border border-gray-200 px-4 py-2.5 text-sm font-semibold text-teal-700 shadow-sm transition-all hover:border-orange-300 hover:text-orange-400 hover:bg-orange-50 hover:-translate-y-0.5 hover:shadow">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="section-label">Tips & advies</span>
              <h2 className="section-heading mt-1">Laatste artikels</h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors shrink-0">
              Alle artikels
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.photo.src}
                    alt={post.photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-teal-800 leading-snug group-hover:text-orange-500 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-orange-500">
                    {post.readTime} · {post.dateDisplay}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link href="/blog" className="btn-outline">Alle artikels bekijken</Link>
          </div>
        </div>
      </section>

      {/* ─── CTA + FORM ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 to-teal-700 section-padding">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-teal-800/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-orange-400/5 blur-3xl pointer-events-none" />
        <div className="relative container-wide grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          <div className="lg:pt-2">
            <span className="section-label text-orange-400">Gratis offerte</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Vraag vandaag uw<br />gratis inspectie aan
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 text-base md:text-lg">
              Wij komen ter plaatse, beoordelen uw situatie en geven eerlijk advies —
              zonder verplichting en zonder kosten.
            </p>
            <ul className="space-y-3.5 mb-10">
              {[
                "Reactie binnen 24u, inspectie binnen 48u",
                "Vaste prijs — geen meerwerk achteraf",
                "10 jaar schriftelijke garantie",
                "Premie-advies inbegrepen",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="h-5 w-5 rounded-full bg-orange-400/20 border border-orange-400/30 flex items-center justify-center shrink-0">
                    <svg className="h-3 w-3 text-orange-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${BRAND.phone}`} className="btn-primary">
                Bel {BRAND.phoneDisplay}
              </a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline-light inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.625-1.465A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                WhatsApp ons
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

    </>
  );
}
