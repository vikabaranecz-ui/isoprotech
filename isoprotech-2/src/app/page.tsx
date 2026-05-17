// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { reviews } from "@/content/reviews";
import { cities } from "@/content/cities";
import { BRAND, PHOTOS, VIDEOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

const usps = [
  { label: "10 jaar garantie" },
  { label: "Gratis inspectie" },
  { label: "ATG/BENOR-gekeurd" },
  { label: "Vaste prijs, geen meerwerk" },
  { label: "Eén aanspreekpunt" },
];

const steps = [
  { n: "01", title: "Gratis inspectie", desc: "Wij komen langs, beoordelen de situatie en geven eerlijk advies. Geen verplichtingen." },
  { n: "02", title: "Vaste offerte", desc: "Heldere prijsopbouw, geen verborgen kosten, geen meerwerk achteraf." },
  { n: "03", title: "Vakkundige uitvoering", desc: "Gecertificeerde vakmensen, ATG/BENOR-materialen, kwaliteitscontrole op elke fase." },
  { n: "04", title: "Oplevering met garantie", desc: "10 jaar schriftelijke garantie op elk project. Netjes achtergelaten, precies zoals afgesproken." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.gevelCrepiMeise.src}
            alt={PHOTOS.gevelCrepiMeise.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/92 via-teal-900/82 to-teal-800/65" />
        <div className="relative container-wide py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/25 px-3.5 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              <span className="text-xs font-semibold text-orange-300">Antwerpen · Google 5/5 · 10 jaar garantie</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-5">
              Dak of gevel isoleren?
              <span className="block text-orange-400 mt-1">Compleet geregeld. Vaste prijs.</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-8">
              Professionele dak- en gevelisolatie in Antwerpen. Gratis inspectie ter plaatse,
              geen meerwerk, 10 jaar schriftelijke garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href={`tel:${BRAND.phone}`} className="btn-primary text-base px-7 py-4 text-center">
                Bel voor gratis inspectie
              </a>
              <Link href="/calculator" className="btn-outline-light text-base px-7 py-4 text-center">
                Bereken uw prijs
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-white/50 font-medium">
              <span>✓ Gratis inspectie</span>
              <span>✓ Reactie binnen 24u</span>
              <span>✓ ATG &amp; BENOR</span>
              <span>✓ 10 jaar garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USP BAR ─── */}
      <div className="bg-teal-800 border-b border-teal-700/50">
        <div className="container-wide py-3.5 flex flex-wrap justify-center gap-x-8 gap-y-2.5">
          {usps.map((usp) => (
            <div key={usp.label} className="flex items-center gap-2 text-sm font-semibold text-white/85">
              <svg className="h-3.5 w-3.5 text-orange-400 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {usp.label}
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Onze diensten</span>
            <h2 className="section-heading">
              Alles voor uw dak en gevel
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
              Van dakisolatie tot gevelrenovatie — één team, één aanspreekpunt, één prijs.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((sv) => (
              <Link
                key={sv.id}
                href={`/diensten/${sv.slug}`}
                className="card-hover group block overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sv.photo.src}
                    alt={sv.photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-teal-800 group-hover:text-orange-500 transition-colors duration-200">
                    {sv.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                    {sv.shortDesc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-500">
                    Meer info
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Hoe het werkt</span>
            <h2 className="section-heading">
              Van aanvraag tot oplevering — zonder stress
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative rounded-2xl bg-white border border-gray-100 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="h-1 w-10 rounded-full bg-orange-400" />
                  <span className="text-4xl font-black text-orange-500/10 leading-none select-none">{s.n}</span>
                </div>
                <h3 className="font-bold text-teal-800 mb-2 text-base">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg className="h-6 w-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="section-label">Bekijk ons werk</span>
            <h2 className="section-heading">Echte projecten in Antwerpen</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-teal-900 aspect-video shadow-xl">
              <iframe
                src={`${VIDEOS.mainShowreel}?rel=0&modestbranding=1`}
                title="ISOPROTECH — Gevelisolatie showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-teal-900 aspect-video shadow-xl">
              <iframe
                src={`${VIDEOS.projectHighlight}?rel=0&modestbranding=1`}
                title="ISOPROTECH — Project highlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALCULATOR CTA ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 py-16 md:py-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize:"32px 32px"}} />
        <div className="relative container-wide text-center">
          <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold text-orange-300 mb-5">
            Gratis prijsindicatie
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white md:text-4xl mb-3 md:mb-4">
            Weet wat het kost voor u belt
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Onze calculator geeft u in 2 minuten een indicatieve prijs op basis van uw specifieke situatie.
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
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Klantervaring</span>
            <h2 className="section-heading">
              Echte klanten, echte resultaten
            </h2>
            <p className="mt-3 text-gray-500 text-base md:text-lg">
              5/5 op Google — beoordeeld door woningeigenaren in Antwerpen en omgeving.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl bg-white border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <svg key={j} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-teal-800">— {r.name}</span>
                  <span className="text-gray-400 bg-stone-50 px-2 py-1 rounded-lg">{r.serviceType}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-7">
            <a
              href={BRAND.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Alle reviews lezen op Google
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </p>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Realisaties</span>
            <h2 className="section-heading">
              Onze projecten in Antwerpen
            </h2>
          </div>
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <Link
                key={p.id}
                href="/realisaties"
                className="group relative block rounded-2xl overflow-hidden h-56 md:h-64 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="font-bold text-white text-sm leading-snug">{p.title}</p>
                  <span className="text-xs text-orange-300 font-semibold">{p.location}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/realisaties" className="btn-outline">
              Alle realisaties bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-8">
            <span className="section-label">Werkgebied</span>
            <h2 className="text-2xl font-extrabold text-teal-900">
              Actief in Antwerpen en omgeving
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((c) => (
              <Link
                key={c.id}
                href={`/regio/${c.slug}`}
                className="rounded-xl bg-white border border-gray-200 px-4 py-2.5 text-sm font-semibold text-teal-700 transition-all duration-200 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 shadow-sm hover:shadow"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA + FORM ─── */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-950 section-padding">
        <div className="container-wide grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">
          <div className="lg:pt-4">
            <span className="section-label text-orange-400">Gratis offerte</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white md:text-4xl leading-tight mb-4 md:mb-5">
              Vraag vandaag uw gratis inspectie aan
            </h2>
            <p className="text-white/55 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
              Wij komen ter plaatse, beoordelen uw situatie en geven eerlijk advies —
              zonder verplichting en zonder kosten.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Reactie binnen 24u, inspectie binnen 48u",
                "Vaste prijs — geen meerwerk achteraf",
                "10 jaar schriftelijke garantie",
                "Premie-advies inbegrepen",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <svg className="h-4 w-4 text-orange-400 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${BRAND.phone}`} className="btn-primary">
                Bel {BRAND.phoneDisplay}
              </a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
                WhatsApp ons
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ─── STICKY MOBILE CTA ─── */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 flex gap-2.5 sm:hidden">
        <a href={`tel:${BRAND.phone}`} className="btn-primary flex-1 text-center text-sm py-3.5">
          Bel nu gratis
        </a>
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 text-center text-sm py-3.5">
          WhatsApp
        </a>
      </div>
    </>
  );
}
