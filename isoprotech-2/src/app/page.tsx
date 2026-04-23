// src/app/page.tsx
// Homepage — conversion-first layout

import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { reviews } from "@/content/reviews";
import { cities } from "@/content/cities";
import { BRAND, PHOTOS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

const usps = [
  "10 jaar garantie",
  "Gratis inspectie",
  "ATG/BENOR-gekeurd",
  "Eén vast aanspreekpunt",
  "Verzekerde werken",
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
      <section className="relative min-h-[540px] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-teal-900/70" />
        <div className="relative container-wide py-32 text-center max-w-4xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-500/15 border border-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-300 tracking-wide">
            Dakwerken / Gevelwerken / Asbestverwijdering
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-[3.4rem] leading-[1.12] mb-6">
            Meer comfort, minder energiekosten in Antwerpen
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-8">
            ISOPROTECH realiseert duurzame dak- en gevelisolatie met 10 jaar
            garantie. Transparante offerte, kwaliteitscontrole in elke fase,
            verzekerde werken.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Gratis inspectie aanvragen
            </Link>
            <a
              href={`tel:${BRAND.phone}`}
              className="btn-outline-light text-base px-8 py-3.5"
            >
              {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ─── USP BAR ─── */}
      <div className="bg-teal-600 border-y border-orange-500/10">
        <div className="container-wide py-4 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {usps.map((usp) => (
            <div
              key={usp}
              className="flex items-center gap-2.5 text-sm font-semibold text-white/90"
            >
              <svg className="h-4 w-4 text-orange-400 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2" />
                <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {usp}
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-stone-100">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              Onze diensten
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800 md:text-4xl">
              Dakwerken, gevelwerken en asbestverwijdering
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Van isolatie tot renovatie — wij bieden een complete aanpak voor uw woning in Antwerpen en omgeving.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((sv) => (
              <Link
                key={sv.id}
                href={`/diensten/${sv.slug}`}
                className="card-hover group block overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={sv.photo.src}
                    alt={sv.photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-teal-800 group-hover:text-orange-500 transition-colors">
                    {sv.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                    {sv.shortDesc}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-orange-500">
                    Meer info →
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
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              Hoe het werkt
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800">
              Uw renovatie stap voor stap
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl bg-white border border-gray-100 p-7 shadow-sm"
              >
                <span className="absolute top-3 right-5 text-5xl font-black text-orange-500/8 leading-none select-none">
                  {s.n}
                </span>
                <div className="h-1 w-10 rounded bg-orange-400 mb-5" />
                <h3 className="font-bold text-teal-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALCULATOR CTA ─── */}
      <section className="bg-teal-600 py-16">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Bereken uw prijs in 2 minuten
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Krijg direct een indicatieve prijsvork voor uw dak- of gevelproject.
            Gebaseerd op actuele marktprijzen in de regio Antwerpen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/calculator" className="btn-primary text-base px-8">
              Gevelcalculator
            </Link>
            <Link href="/calculator/dak" className="btn-outline-light text-base px-8">
              Dakcalculator
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="section-padding bg-stone-100">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              Klantervaring
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800">
              Wat onze klanten zeggen
            </h2>
            <p className="mt-2 text-gray-600">
              4.9/5 op Google Reviews — echte ervaringen van tevreden klanten.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <svg key={j} className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 1l2.4 5.2L18 7l-4 4 1 5.8L10 14l-5 2.8 1-5.8-4-4 5.6-.8z" fill="currentColor" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-teal-800">— {r.name}</span>
                  <span className="text-gray-400">{r.serviceType}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <a
              href={BRAND.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Bekijk alle reviews op Google →
            </a>
          </p>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              Realisaties
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800">
              Recente projecten
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <Link
                key={p.id}
                href="/realisaties"
                className="group relative block rounded-2xl overflow-hidden h-64"
              >
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
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
          <div className="text-center mt-8">
            <Link href="/realisaties" className="btn-outline">
              Alle realisaties bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section className="section-padding bg-stone-100">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              Werkgebied
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-teal-800">
              Actief in Antwerpen en omgeving
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <Link
                key={c.id}
                href={`/regio/${c.slug}`}
                className="rounded-xl bg-white border border-gray-100 px-4 py-2.5 text-sm font-semibold text-teal-700 transition-all hover:border-orange-300 hover:text-orange-500"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA + FORM ─── */}
      <section className="bg-teal-900 section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
              Contact
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white leading-tight mb-4">
              Klaar voor uw renovatie?
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 max-w-md">
              Vraag vandaag nog een gratis inspectie en vrijblijvende offerte
              aan. Wij nemen binnen 24 uur contact met u op.
            </p>
            <div className="flex flex-wrap gap-4">
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
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
