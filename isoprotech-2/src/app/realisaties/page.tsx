// src/app/realisaties/page.tsx
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProjectGallery } from "./ProjectGallery";

export const metadata: Metadata = {
  title: "Realisaties — Projecten Dak- & Gevelisolatie",
  description: "Bekijk onze gerealiseerde dak- en gevelprojecten in Antwerpen en omgeving. Gevelisolatie, crepi, spuitkurk, dakrenovatie en meer.",
  alternates: { canonical: `${BRAND.url}/realisaties` },
};

export default function RealisatiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-400/15 border border-orange-400/20 px-5 py-2 text-sm font-semibold text-orange-300">
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
        <ProjectGallery />
      </section>
    </>
  );
}
