// src/app/realisaties/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/content/projects";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Realisaties — Projecten Dak- & Gevelisolatie",
  description: "Bekijk onze gerealiseerde dak- en gevelprojecten in Antwerpen en omgeving. Gevelisolatie, crepi, spuitkurk, dakrenovatie en meer.",
  alternates: { canonical: `${BRAND.url}/realisaties` },
};

export default function RealisatiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-950 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-500/15 border border-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Realisaties
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">Onze projecten</h1>
          <p className="text-lg text-white/60">Een selectie van gerealiseerde dak- en gevelprojecten in Antwerpen en omgeving.</p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Realisaties", href: "/realisaties" }]} />
      </div>

      <section className="container-wide py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
              <div className="relative h-56">
                <Image src={p.photo.src} alt={p.photo.alt} fill className="object-cover" sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" />
              </div>
              <div className="p-5">
                <h2 className="font-bold text-teal-800 mb-1">{p.title}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.workType.map((wt) => (
                    <span key={wt} className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md">{wt}</span>
                  ))}
                  <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{p.location}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{p.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
