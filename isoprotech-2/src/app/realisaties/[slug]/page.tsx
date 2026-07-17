// src/app/realisaties/[slug]/page.tsx
// Individual project case study page — SSG with full SEO

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug, getRelatedProjects } from "@/content/projects";
import { getServiceBySlug } from "@/content/services";
import { BRAND } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    alternates: { canonical: `${BRAND.url}/realisaties/${project.slug}` },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: `${BRAND.url}/realisaties/${project.slug}`,
      type: "website",
      images: [
        { url: `${BRAND.url}${project.photo.src}`, width: project.photo.width, height: project.photo.height },
      ],
    },
  };
}

export default function ProjectCasePage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.id);
  const service = project.serviceSlug ? getServiceBySlug(project.serviceSlug) : undefined;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Realisaties", item: `${BRAND.url}/realisaties` },
      { "@type": "ListItem", position: 2, name: project.title, item: `${BRAND.url}/realisaties/${project.slug}` },
    ],
  };

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.seo.title,
    description: project.seo.description,
    image: `${BRAND.url}${project.photo.src}`,
    author: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
    publisher: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
    ...(project.specs?.jaar ? { datePublished: `${project.specs.jaar}-01-01` } : {}),
    mainEntityOfPage: `${BRAND.url}/realisaties/${project.slug}`,
    about: {
      "@type": "Service",
      name: project.workType.join(", "),
      areaServed: { "@type": "City", name: project.location },
      provider: { "@type": "LocalBusiness", name: BRAND.name, url: BRAND.url },
    },
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {project.workType.map((w) => (
              <span
                key={w}
                className="inline-block rounded-full bg-orange-400/20 px-4 py-1.5 text-sm font-semibold text-orange-300 border border-orange-400/20"
              >
                {w}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-white/65 text-base flex items-center justify-center gap-2">
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {project.location}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            { label: "Realisaties", href: "/realisaties" },
            { label: project.title, href: `/realisaties/${project.slug}` },
          ]}
        />
      </div>

      {/* Before / After photos */}
      <section className="mx-auto max-w-7xl px-6 py-10 space-y-4">
        {project.beforePhoto ? (
          <>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={project.beforePhoto.src}
                  alt={project.beforePhoto.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px)100vw,50vw"
                  priority
                />
                <span className="absolute top-4 left-4 bg-red-500/90 text-white text-sm font-bold px-4 py-1.5 rounded-xl">
                  VOOR
                </span>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={project.photo.src}
                  alt={project.photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px)100vw,50vw"
                  priority
                />
                <span className="absolute top-4 right-4 bg-green-500/90 text-white text-sm font-bold px-4 py-1.5 rounded-xl">
                  NA
                </span>
              </div>
            </div>
            {project.extraBeforeAfterPairs?.map((pair, i) => (
              <div key={i} className="grid sm:grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={pair.before.src}
                    alt={pair.before.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px)100vw,50vw"
                  />
                  <span className="absolute top-4 left-4 bg-red-500/90 text-white text-sm font-bold px-4 py-1.5 rounded-xl">
                    VOOR
                  </span>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={pair.after.src}
                    alt={pair.after.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px)100vw,50vw"
                  />
                  <span className="absolute top-4 right-4 bg-green-500/90 text-white text-sm font-bold px-4 py-1.5 rounded-xl">
                    NA
                  </span>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={project.photo.src}
                alt={project.photo.alt}
                width={project.photo.width}
                height={project.photo.height}
                className="w-full h-auto rounded-2xl"
                sizes="(max-width:768px)100vw,900px"
                priority
              />
            </div>
            {project.extraPhotos && project.extraPhotos.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.extraPhotos.map((photo, i) => (
                  <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Project specificaties */}
      {project.specs && Object.values(project.specs).some(Boolean) && (
        <section className="mx-auto max-w-4xl px-6 pb-10">
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.specs.material && (
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Systeem</p>
                <p className="text-sm text-gray-700 font-medium">{project.specs.material}</p>
              </div>
            )}
            {project.specs.isolatiewaarde && (
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Isolatiewaarde</p>
                <p className="text-sm text-gray-700 font-medium">{project.specs.isolatiewaarde}</p>
              </div>
            )}
            {project.specs.oppervlakte && (
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Oppervlakte</p>
                <p className="text-sm text-gray-700 font-medium">{project.specs.oppervlakte}</p>
              </div>
            )}
            {(project.specs.epcVoor || project.specs.epcNa) && (
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">EPC label</p>
                <p className="text-sm text-gray-700 font-medium">
                  {project.specs.epcVoor && <span className="text-red-500 font-bold">{project.specs.epcVoor}</span>}
                  {project.specs.epcVoor && project.specs.epcNa && <span className="mx-1">→</span>}
                  {project.specs.epcNa && <span className="text-green-600 font-bold">{project.specs.epcNa}</span>}
                </p>
              </div>
            )}
            {project.specs.jaar && (
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Jaar</p>
                <p className="text-sm text-gray-700 font-medium">{project.specs.jaar}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Case study — Probleem / Oplossing / Resultaat */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Probleem */}
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100">
                <svg className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </span>
              <h2 className="font-extrabold text-red-700 text-sm uppercase tracking-wide">De situatie</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Oplossing */}
          <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-100">
                <svg className="h-4 w-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </span>
              <h2 className="font-extrabold text-teal-700 text-sm uppercase tracking-wide">Onze aanpak</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{project.solution}</p>
          </div>

          {/* Resultaat */}
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-100">
                <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <h2 className="font-extrabold text-green-700 text-sm uppercase tracking-wide">Wat de klant kreeg</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{project.result}</p>
          </div>
        </div>
      </section>

      {/* Video if available */}
      {project.videoUrl && (
        <section className="bg-teal-800 py-14">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Bekijk het werk</span>
              <h2 className="mt-2 text-2xl font-extrabold text-white mb-3">Dit project in video</h2>
              <p className="text-white/60 leading-relaxed">Van voorbereiding tot het perfecte eindresultaat — zie hoe ons team te werk gaat.</p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-black">
              <iframe
                src={`${project.videoUrl}?rel=0&modestbranding=1`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Cross-links — Service & City */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-sm text-gray-500">Meer info:</span>
          {service && (
            <Link
              href={`/diensten/${service.slug}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-teal-50 border border-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              Alles over {service.name}
            </Link>
          )}
          {project.citySlug && (
            <Link
              href={`/regio/${project.citySlug}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-orange-50 border border-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-100 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              ISOPROTECH in {project.location}
            </Link>
          )}
          <Link
            href="/realisaties"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gray-50 border border-gray-100 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            ← Alle realisaties
          </Link>
          {/* Smart links to service subpages */}
          {project.workType.some(w => w === "Dakisolatie" || w === "Dakrenovatie") && (
            <>
              <Link href="/dakisolatie/plat-dak" className="inline-flex items-center gap-1.5 rounded-xl bg-teal-50 border border-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors">Plat dak isolatie</Link>
              <Link href="/dakisolatie/prijs" className="inline-flex items-center gap-1.5 rounded-xl bg-teal-50 border border-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors">Dakisolatie prijs</Link>
            </>
          )}
          {project.workType.some(w => w === "Gevelisolatie" || w === "Crepi") && (
            <>
              <Link href="/gevelisolatie/crepi-met-isolatie" className="inline-flex items-center gap-1.5 rounded-xl bg-teal-50 border border-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors">Crepi met isolatie</Link>
              <Link href="/gevelisolatie/prijs" className="inline-flex items-center gap-1.5 rounded-xl bg-teal-50 border border-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors">Gevelisolatie prijs</Link>
            </>
          )}
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-stone-100 py-14">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-extrabold text-teal-800 mb-8">Vergelijkbare projecten</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/realisaties/${rp.slug}`}
                  className="group block rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {rp.beforePhoto ? (
                    <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                      <div className="relative">
                        <Image src={rp.beforePhoto.src} alt={rp.beforePhoto.alt} width={rp.beforePhoto.width} height={rp.beforePhoto.height} className="w-full h-auto object-cover" sizes="20vw" />
                        <span className="absolute bottom-1.5 left-1.5 bg-red-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">VOOR</span>
                      </div>
                      <div className="relative">
                        <Image src={rp.photo.src} alt={rp.photo.alt} width={rp.photo.width} height={rp.photo.height} className="w-full h-auto object-cover" sizes="20vw" />
                        <span className="absolute bottom-1.5 right-1.5 bg-green-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">NA</span>
                      </div>
                    </div>
                  ) : (
                    <Image src={rp.photo.src} alt={rp.photo.alt} width={rp.photo.width} height={rp.photo.height} className="w-full h-auto object-cover" sizes="(max-width:640px)100vw,33vw" />
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-teal-800 text-sm group-hover:text-orange-400 transition-colors leading-snug">{rp.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{rp.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Zelfde resultaat voor uw woning in {project.location}?
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Vraag vandaag nog een gratis inspectie aan. Wij nemen binnen 24 uur contact met u op en bezorgen u een vrijblijvende offerte op maat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white transition hover:bg-orange-500"
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
              project.workType.some(w => w.toLowerCase().includes("dak"))
                ? "dakwerken"
                : "gevelwerken"
            }
          />
        </div>
      </section>
    </>
  );
}
