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
  { label: "10 jaar garantie", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Gratis inspectie", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { label: "ATG/BENOR-gekeurd", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { label: "Eén vast aanspreekpunt", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "Verzekerde werken", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

const steps = [
  { n: "01", title: "Gratis inspectie", desc: "Wij komen vrijblijvend langs om de situatie te beoordelen en gericht advies te geven." },
  { n: "02", title: "Duidelijke offerte", desc: "Na de inspectie ontvangt u een heldere offerte zonder verplichtingen of verborgen kosten." },
  { n: "03", title: "Vakkundige uitvoering", desc: "Onze vakmensen voeren de werken correct uit, met kwaliteitscontrole in elke fase." },
  { n: "04", title: "Nette oplevering", desc: "Wij ronden alles correct af en laten het netjes achter, precies zoals afgesproken." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/90 via-teal-900/80 to-teal-800/60" />

        {/* Decorative circle */}
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

        <div className="relative container-wide py-36 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/25 px-4 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-sm font-semibold text-orange-300">Antwerpen en omgeving</span>
            </div>

            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
              Uw dak of gevel isoleren?
              <span className="block text-orange-400 mt-1">Wij regelen het. Compleet.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              Dak- en gevelisolatie in Antwerpen met 10 jaar garantie.
              Gratis inspectie, vaste prijs, geen verrassingen.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href={`tel:${BRAND.phone}`} className="btn-primary text-base px-8 py-4 text-lg">
                Bel voor gratis inspectie
              </a>
              <Link href="/calculator" className="btn-outline-light text-base px-8 py-4 text-lg">
                Bereken uw prijs
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50 font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Google 5/5
              </span>
              <span>10 jaar garantie</span>
              <span>Gratis inspectie</span>
              <span>ATG &amp; BENOR</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USP BAR ─── */}
      <div className="bg-teal-800 border-b border-teal-700/50">
        <div className="container-wide py-5 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {usps.map((usp) => (
            <div key={usp.label} className="flex items-center gap-2.5 text-sm font-semibold text-white/85">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-500/20">
                <svg className="h-3.5 w-3.5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={usp.icon} />
                </svg>
              </span>
              {usp.label}
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="section-label">Onze diensten</span>
            <h2 className="section-heading">
              Dakwerken, gevelwerken en asbestverwijdering
            </h2>
            <p className="section-subheading">
              Van isolatie tot renovatie — een complete aanpak voor uw woning in Antwerpen en omgeving.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((sv) => (
              <Link
                key={sv.id}
                href={`/diensten/${sv.slug}`}
                className="card-hover group block overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
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
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-500 group-hover:gap-2 transition-all duration-200">
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
          <div className="text-center mb-14">
            <span className="section-label">Hoe het werkt</span>
            <h2 className="section-heading">
              Uw renovatie stap voor stap
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
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
                      <path fillRule="evenodd" d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" clipRule="evenodd" />
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
          <div className="text-center mb-12">
            <span className="section-label">Bekijk ons werk</span>
            <h2 className="section-heading">
              Video van onze projecten
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 py-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize:"32px 32px"}} />
        <div className="relative container-wide text-center">
          <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold text-orange-300 mb-6">
            Gratis tool
          </span>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl mb-4">
            Bereken uw prijs in 2 minuten
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
            Krijg direct een indicatieve prijsvork voor uw dak- of gevelproject.
            Gebaseerd op actuele marktprijzen in de regio Antwerpen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
          <div className="text-center mb-14">
            <span className="section-label">Klantervaring</span>
            <h2 className="section-heading">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subheading">
              5/5 op Google Reviews — echte ervaringen van tevreden klanten.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <svg key={j} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-teal-800">— {r.name}</span>
                  <span className="text-gray-400 bg-stone-50 px-2 py-1 rounded-lg">{r.serviceType}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <a
              href={BRAND.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Bekijk alle reviews op Google
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
          <div className="text-center mb-14">
            <span className="section-label">Realisaties</span>
            <h2 className="section-heading">
              Recente projecten
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <Link
                key={p.id}
                href="/realisaties"
                className="group relative block rounded-2xl overflow-hidden h-64 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-bold text-white text-sm leading-snug">
                    {p.title}
                  </p>
                  <span className="text-xs text-orange-300 font-semibold">
                    {p.location}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/realisaties" className="btn-outline">
              Alle realisaties bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section className="section-padding bg-stone-50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="section-label">Werkgebied</span>
            <h2 className="text-2xl font-extrabold text-teal-900">
              Actief in Antwerpen en omgeving
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.id}
                href={`/regio/${c.slug}`}
                className="rounded-xl bg-white border border-gray-200 px-4 py-2.5 text-sm font-semibold text-teal-700 transition-all duration-200 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 hover:-translate-y-0.5 shadow-sm hover:shadow"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA + FORM ─── */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-950 section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-start">
          <div className="lg:pt-4">
            <span className="section-label text-orange-400">Contact</span>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl leading-tight mb-5">
              Klaar voor uw renovatie?
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 max-w-md text-lg">
              Vraag vandaag nog een gratis inspectie en vrijblijvende offerte
              aan. Wij nemen binnen 24 uur contact met u op.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={`tel:${BRAND.phone}`} className="btn-primary">
                Bel ons
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                WhatsApp
              </a>
            </div>

            <div className="space-y-4">
              {[
                { icon: "📞", label: "Telefoon", value: BRAND.phoneDisplay, href: `tel:${BRAND.phone}` },
                { icon: "✉️", label: "E-mail", value: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: "📍", label: "Adres", value: `${BRAND.address.street}, ${BRAND.address.zip} ${BRAND.address.city}`, href: BRAND.maps },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 group">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wide">{item.label}</div>
                    <div className="text-sm font-semibold text-white/75 group-hover:text-orange-400 transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
