// src/app/realisaties/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { BRAND, VIDEOS } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Realisaties — Projecten Dak- & Gevelisolatie",
  description: "Bekijk onze gerealiseerde dak- en gevelprojecten in Antwerpen en omgeving. Gevelisolatie, crepi, spuitkurk, dakrenovatie en meer.",
  alternates: { canonical: `${BRAND.url}/realisaties` },
  openGraph: {
    title: "Realisaties — Projecten Dak- & Gevelisolatie",
    description: "Bekijk onze gerealiseerde dak- en gevelprojecten in Antwerpen en omgeving. Gevelisolatie, crepi, spuitkurk, dakrenovatie en meer.",
  },
};

const beforeAfterProjects = projects.filter((p) => p.beforePhoto);
const otherProjects = projects.filter((p) => !p.beforePhoto);

export default function RealisatiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-400/15 border border-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Realisaties
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">Onze projecten</h1>
          <p className="text-lg text-white/60">
            Een selectie van gerealiseerde dak- en gevelprojecten in Antwerpen en omgeving. Klik op een project voor het volledige verhaal.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Realisaties", href: "/realisaties" }]} />
      </div>

      <section className="container-wide py-12">
        {/* Videos */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-teal-800 mb-6">Bekijk ons werk</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl overflow-hidden bg-black aspect-video">
              <iframe
                src={`${VIDEOS.mainShowreel}?rel=0&modestbranding=1`}
                title="ISOPROTECH — Gevelisolatie showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen className="w-full h-full" loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-black aspect-video">
              <iframe
                src={`${VIDEOS.projectHighlight}?rel=0&modestbranding=1`}
                title="ISOPROTECH — Project highlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen className="w-full h-full" loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Before/after cards */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-teal-800 mb-6">Voor en na — klik voor het volledige verhaal</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfterProjects.map((pr) => (
              <Link
                key={pr.id}
                href={`/realisaties/${pr.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-orange-200"
              >
                <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                  <div className="relative">
                    <Image
                      src={pr.beforePhoto!.src}
                      alt={pr.beforePhoto!.alt}
                      width={pr.beforePhoto!.width}
                      height={pr.beforePhoto!.height}
                      className="w-full h-auto object-cover"
                      sizes="20vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">VOOR</span>
                  </div>
                  <div className="relative">
                    <Image
                      src={pr.photo.src}
                      alt={pr.photo.alt}
                      width={pr.photo.width}
                      height={pr.photo.height}
                      className="w-full h-auto object-cover"
                      sizes="20vw"
                    />
                    <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">NA</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-teal-800 text-sm mb-1 group-hover:text-orange-500 transition-colors">{pr.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {pr.workType.map((w) => (
                      <span key={w} className="text-[10px] font-bold text-orange-400 bg-orange-50 px-2 py-0.5 rounded">{w}</span>
                    ))}
                    <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{pr.location}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{pr.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-500 group-hover:gap-2 transition-all">
                    Bekijk case study
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <>
            <h2 className="text-xl font-extrabold text-teal-800 mb-6">Meer realisaties</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((pr) => (
                <Link
                  key={pr.id}
                  href={`/realisaties/${pr.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-orange-200"
                >
                  <Image
                    src={pr.photo.src}
                    alt={pr.photo.alt}
                    width={pr.photo.width}
                    height={pr.photo.height}
                    className="w-full h-auto"
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-teal-800 mb-1 group-hover:text-orange-500 transition-colors">{pr.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {pr.workType.map((w) => (
                        <span key={w} className="text-xs font-semibold text-orange-400 bg-orange-50 px-2.5 py-1 rounded-md">{w}</span>
                      ))}
                      <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{pr.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{pr.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-500 group-hover:gap-2 transition-all">
                      Bekijk case study
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
