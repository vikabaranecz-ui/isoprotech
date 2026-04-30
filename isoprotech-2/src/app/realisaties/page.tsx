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
        <ProjectGallery />

        {/* Instagram feed */}
        <div className="mt-16 mb-8">
          <h2 className="text-xl font-extrabold text-teal-800 mb-2">Volg ons op Instagram</h2>
          <p className="text-sm text-gray-500 mb-6">Dagelijkse updates van onze projecten, tips en transformaties.</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { id: "DVgq2UIk2mn", title: "Vochtproblemen? Hoge verwarmingskosten?" },
              { id: "DU8GT8WE0RA", title: "Een gevel die uw woning verandert" },
              { id: "DVOl9Z9k318", title: "3 redenen waarom gevelvernieuwing slim is" },
            ].map((reel) => (
              <div key={reel.id} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  title={reel.title}
                  className="w-full"
                  style={{ minHeight: "480px", border: "none" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://www.instagram.com/isoprotech.be/" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm inline-flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Meer op Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
