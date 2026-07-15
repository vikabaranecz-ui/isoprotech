// src/app/diensten/[slug]/page.tsx
// Dynamic service page — SSG with full SEO

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services, getServiceBySlug, getRelatedServices } from "@/content/services";
import { getBlogPostBySlug } from "@/content/blog";
import { getProjectsByService } from "@/content/projects";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

// Generate all service pages at build time
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Dynamic metadata per service
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `${BRAND.url}/diensten/${service.slug}`,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `${BRAND.url}/diensten/${service.slug}`,
      type: "website",
      images: [{ url: `${BRAND.url}/images/og-isoprotech.png`, width: 1080, height: 1080 }],
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(service.id);
  const serviceUrl = `${BRAND.url}/diensten/${service.slug}`;
  const relatedProjects = getProjectsByService(service.slug);
  const relatedBlogPosts = (service.relatedBlogSlugs ?? [])
    .map(getBlogPostBySlug)
    .filter(Boolean) as NonNullable<ReturnType<typeof getBlogPostBySlug>>[];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.seo.description,
          url: serviceUrl,
        })}
      />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.photo.src})` }}
        />
        <div className="absolute inset-0 bg-teal-900/70" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300 border border-orange-400/20">
            {service.name}
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-6">
            {service.name} in Antwerpen en omgeving
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {service.heroDesc}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            { label: "Diensten", href: "/diensten" },
            { label: service.name, href: `/diensten/${service.slug}` },
          ]}
        />
      </div>

      {/* Benefits + Process */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Benefits */}
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
              Voordelen
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800">
              Waarom {service.name.toLowerCase()}?
            </h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
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
                  <span className="text-gray-600 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
              Onze aanpak
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800">
              Hoe wij te werk gaan
            </h2>
            <ol className="mt-8 space-y-8">
              {[
                {
                  step: "01",
                  title: "Gratis inspectie",
                  desc: "Wij komen vrijblijvend bij u langs om de situatie te beoordelen en gericht advies te geven.",
                },
                {
                  step: "02",
                  title: "Duidelijke offerte",
                  desc: "Na de inspectie ontvangt u een heldere offerte zonder verplichtingen of verborgen kosten.",
                },
                {
                  step: "03",
                  title: "Vakkundige uitvoering",
                  desc: "Onze vakmensen voeren de werken correct en veilig uit, met kwaliteitscontrole in elke fase.",
                },
                {
                  step: "04",
                  title: "Nette oplevering",
                  desc: "Wij ronden alles correct af en laten het netjes achter, precies zoals afgesproken.",
                },
              ].map((s) => (
                <li key={s.step} className="relative pl-16">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-sm font-extrabold text-orange-400">
                    {s.step}
                  </span>
                  <h3 className="font-bold text-teal-800">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Video section */}
      {service.videoSrc && (
        <section className="py-16 bg-teal-800">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Bekijk het resultaat</span>
                <h2 className="mt-2 text-3xl font-extrabold text-white mb-4">{service.name} in de praktijk</h2>
                <p className="text-white/60 leading-relaxed">Bekijk hoe onze vakmensen een {service.name.toLowerCase()} project aanpakken — van voorbereiding tot het perfecte eindresultaat. Vakwerk dat voor zichzelf spreekt.</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src={service.videoSrc}
                  poster="/videos/spuitkurk-poster.jpg"
                  controls
                  playsInline
                  className="w-full aspect-video object-cover bg-black"
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Photo gallery */}
      {service.galleryPhotos && service.galleryPhotos.length > 0 && (
        <section className="bg-stone-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Realisaties</span>
            <h2 className="mt-2 text-3xl font-extrabold text-teal-800 mb-8">Onze {service.name.toLowerCase()} projecten</h2>
            <div className="columns-2 md:columns-3 gap-3 [column-gap:12px]">
              {service.galleryPhotos.map((photo, i) => (
                <div key={i} className="break-inside-avoid mb-3 rounded-2xl overflow-hidden relative group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px)50vw,33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related project case studies */}
      {relatedProjects.length > 0 && (
        <section className="bg-stone-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Voor & Na</span>
            <h2 className="mt-2 text-2xl font-extrabold text-teal-800 mb-8">
              Realisaties {service.name.toLowerCase()}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/realisaties/${rp.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-orange-200"
                >
                  {rp.beforePhoto ? (
                    <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                      <div className="relative">
                        <Image src={rp.beforePhoto.src} alt={rp.beforePhoto.alt} width={rp.beforePhoto.width} height={rp.beforePhoto.height} className="w-full h-auto object-cover" sizes="15vw" />
                        <span className="absolute bottom-1.5 left-1.5 bg-red-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">VOOR</span>
                      </div>
                      <div className="relative">
                        <Image src={rp.photo.src} alt={rp.photo.alt} width={rp.photo.width} height={rp.photo.height} className="w-full h-auto object-cover" sizes="15vw" />
                        <span className="absolute bottom-1.5 right-1.5 bg-green-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">NA</span>
                      </div>
                    </div>
                  ) : (
                    <Image src={rp.photo.src} alt={rp.photo.alt} width={rp.photo.width} height={rp.photo.height} className="w-full h-auto object-cover" sizes="25vw" />
                  )}
                  <div className="p-3">
                    <h3 className="text-xs font-bold text-teal-800 leading-snug group-hover:text-orange-500 transition-colors">{rp.title}</h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">{rp.location}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/realisaties" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-orange-500 transition-colors">
                Alle realisaties bekijken
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-stone-100 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-extrabold text-teal-800 mb-8">
              Gerelateerde diensten
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rs) => (
                <a
                  key={rs.id}
                  href={`/diensten/${rs.slug}`}
                  className="group block rounded-2xl bg-white p-6 border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="font-bold text-teal-800 group-hover:text-orange-400 transition-colors">
                    {rs.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {rs.shortDesc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related blog posts */}
      {relatedBlogPosts.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">Verder lezen</span>
            <h2 className="mt-2 text-2xl font-extrabold text-teal-800 mb-8">
              Nuttige artikels over {service.name.toLowerCase()}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl bg-white border border-gray-100 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
                >
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-bold text-teal-800 leading-snug group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-500">
                    Lees meer
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Landing page link for geo-targeted pages */}
      {service.landingPage && (
        <div className="mx-auto max-w-7xl px-6 pb-4">
          <p className="text-sm text-gray-500">
            Specifiek op zoek naar{" "}
            <Link href={service.landingPage} className="font-semibold text-teal-700 underline underline-offset-2 hover:text-orange-500 transition-colors">
              {service.name.toLowerCase()} in Antwerpen
            </Link>
            ? Bekijk onze speciale pagina met lokale referenties en prijsindicaties.
          </p>
        </div>
      )}

      {/* CTA + Form */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Interesse in {service.name.toLowerCase()}?
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Vraag vandaag nog een gratis inspectie en vrijblijvende offerte
                aan. Wij nemen binnen 24 uur contact met u op.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white transition hover:bg-orange-400"
                >
                  Bel ons
                </a>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-orange-400 px-6 py-3 font-bold text-orange-400 transition hover:bg-orange-400/10"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <ContactForm
              defaultService={
                service.id.includes("dak") ? "dakwerken" :
                service.id === "asbestverwijdering" ? "asbestverwijdering" :
                "gevelwerken"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
