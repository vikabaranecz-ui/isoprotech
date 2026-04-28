// src/app/diensten/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Onze Diensten — Dak, Gevel & Asbest",
  description: "ISOPROTECH biedt dakisolatie, dakrenovatie, gevelisolatie, crepi, spuitkurk en asbestverwijdering in Antwerpen en omgeving. Bekijk ons volledig aanbod.",
  alternates: { canonical: `${BRAND.url}/diensten` },
};

export default function DienstenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-950 py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-orange-500/15 border border-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-300">
            Onze diensten
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl mb-6">
            Dakwerken, gevelwerken en asbestverwijdering
          </h1>
          <p className="text-lg text-white/60">
            ISOPROTECH biedt een complete aanpak voor uw woning — van isolatie
            en renovatie tot asbestverwijdering. Altijd met 10 jaar garantie.
          </p>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Diensten", href: "/diensten" }]} />
      </div>

      <section className="container-wide py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((sv) => (
            <Link
              key={sv.id}
              href={`/diensten/${sv.slug}`}
              className="card-hover group block overflow-hidden"
            >
              <div className="relative h-52">
                <Image
                  src={sv.photo.src}
                  alt={sv.photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-teal-800 group-hover:text-orange-500 transition-colors mb-2">
                  {sv.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {sv.heroDesc.slice(0, 160)}...
                </p>
                <span className="text-sm font-semibold text-orange-500">
                  Meer info →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
