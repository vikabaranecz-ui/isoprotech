import Link from "next/link";
import { BRAND } from "@/lib/constants";
import type {
  InsulationServiceContent,
  InsulationServiceSlug,
} from "@/content/insulationServiceContent";

export function InsulationHeroActions({ slug }: { slug: InsulationServiceSlug }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <a href="#offerte" className="btn-primary px-6 py-3 text-sm">
        {slug === "dakisolatie" ? "Plan gratis dakinspectie" : "Plan gratis gevelinspectie"}
      </a>
      {slug === "dakisolatie" ? (
        <Link href="/calculator/dak" className="btn-outline-light px-6 py-3 text-sm">
          Bereken mijn dakprijs
        </Link>
      ) : (
        <a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-light px-6 py-3 text-sm"
        >
          Stuur een foto via WhatsApp
        </a>
      )}
    </div>
  );
}

export function InsulationStats({ content }: { content: InsulationServiceContent }) {
  return (
    <div className="border-b border-teal-700 bg-teal-800 py-5">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-5 text-center md:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-extrabold text-orange-400">{stat.value}</div>
              <div className="mt-0.5 text-xs text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Benefits({ content }: { content: InsulationServiceContent }) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <span className="text-sm font-bold uppercase tracking-widest text-orange-400">Voordelen</span>
        <h2 className="mt-2 text-3xl font-extrabold text-teal-800">
          Waarom {content.slug === "dakisolatie" ? "dakisolatie" : "gevelisolatie"}?
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {content.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-stone-50 p-5">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-orange-400"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
                <path
                  d="M6 10l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="leading-relaxed text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProblemSection({ content }: { content: InsulationServiceContent }) {
  if (!content.problems) return null;

  return (
    <section className="section-padding bg-stone-100">
      <div className="container-wide grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-orange-400">
            {content.problems.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800">{content.problems.title}</h2>
          <p className="mt-5 leading-relaxed text-gray-600">{content.problems.intro}</p>
          <ul className="mt-6 space-y-4">
            {content.problems.items.map((item) => (
              <li key={item} className="flex gap-3 text-gray-600">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-teal-800 p-7 text-white shadow-sm">
          <h3 className="text-xl font-extrabold">Wat betekent dit voor uw dak?</h3>
          <p className="mt-4 leading-relaxed text-white/70">{content.problems.outro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link href="/calculator/dak" className="btn-primary text-center px-5 py-3 text-sm">
              Bereken mijn dakprijs
            </Link>
            <a href="#offerte" className="btn-outline-light text-center px-5 py-3 text-sm">
              Plan gratis dakinspectie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardsSection({
  title,
  cards,
  muted = false,
}: {
  title: string;
  cards: NonNullable<InsulationServiceContent["methods"]>;
  muted?: boolean;
}) {
  return (
    <section className={`section-padding ${muted ? "bg-stone-100" : ""}`}>
      <div className="container-wide">
        <h2 className="text-3xl font-extrabold text-teal-800">{title}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-teal-800">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GevelTechnicalSections({ content }: { content: InsulationServiceContent }) {
  if (!content.explainer || !content.finishes || !content.symptomSection) return null;

  return (
    <>
      <section className="section-padding bg-stone-100">
        <div className="container-wide grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-teal-800">{content.explainer.title}</h2>
            <p className="mt-5 leading-relaxed text-gray-600">{content.explainer.body}</p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-teal-800">Crepi, spuitkurk of steenstrips</h2>
            <div className="mt-5 space-y-4">
              {content.finishes.map((finish) => (
                <div key={finish.title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-teal-800">{finish.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{finish.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Wij adviseren welke afwerking het beste past bij uw gevel tijdens de gratis inspectie.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-extrabold text-teal-800">{content.symptomSection.title}</h2>
          <p className="mt-5 leading-relaxed text-gray-600">{content.symptomSection.body}</p>
          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-relaxed text-gray-700">
            {content.symptomSection.caution}
          </div>
        </div>
      </section>
    </>
  );
}

function Process({ content }: { content: InsulationServiceContent }) {
  return (
    <section className="section-padding bg-stone-100">
      <div className="container-wide">
        <span className="text-sm font-bold uppercase tracking-widest text-orange-400">Onze aanpak</span>
        <h2 className="mt-2 text-3xl font-extrabold text-teal-800">Hoe wij te werk gaan</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.process.map((item) => (
            <li key={item.step} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-sm font-extrabold text-orange-400">
                {item.step}
              </span>
              <h3 className="mt-5 font-bold text-teal-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function InsulationCoreSections({ content }: { content: InsulationServiceContent }) {
  return (
    <>
      <Benefits content={content} />
      {content.slug === "dakisolatie" && <ProblemSection content={content} />}
      {content.methods && (
        <CardsSection title="Plat of hellend dak — wij regelen het volledig" cards={content.methods} />
      )}
      {content.slug === "gevelisolatie" && <GevelTechnicalSections content={content} />}
      <Process content={content} />
    </>
  );
}

export function InsulationAfterProjects({ content }: { content: InsulationServiceContent }) {
  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-400">Ervaringen</span>
          <h2 className="mt-2 text-3xl font-extrabold text-teal-800">Wat klanten zeggen</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {content.testimonials.map((testimonial) => (
              <blockquote key={testimonial.attribution} className="rounded-2xl bg-stone-50 p-6">
                <p className="leading-relaxed text-gray-600">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-teal-800">— {testimonial.attribution}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-100">
        <div className="container-wide">
          <h2 className="text-3xl font-extrabold text-teal-800">Premies en subsidies</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.premiums.map((premium) => (
              <article key={premium.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-teal-800">{premium.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{premium.body}</p>
              </article>
            ))}
          </div>
          {content.premiumNote && (
            <p className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-relaxed text-gray-700">
              {content.premiumNote}
            </p>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-teal-800">{content.priceSection.title}</h2>
            <p className="mt-5 text-gray-600">{content.priceSection.intro}</p>
            <ul className="mt-5 space-y-3">
              {content.priceSection.factors.map((factor) => (
                <li key={factor} className="flex gap-3 text-gray-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-teal-800 p-7 text-white">
            <p className="leading-relaxed text-white/70">{content.priceSection.outro}</p>
            <Link href={content.priceSection.href} className="btn-primary mt-6 inline-flex px-5 py-3 text-sm">
              {content.priceSection.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-100">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-extrabold text-teal-800">Veelgestelde vragen</h2>
          <div className="mt-8 space-y-3">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-bold text-teal-800">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          {content.clarification && (
            <p className="mt-6 rounded-2xl border border-teal-100 bg-white p-5 text-sm leading-relaxed text-gray-600">
              {content.clarification}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
