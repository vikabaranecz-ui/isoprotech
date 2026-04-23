// src/components/layout/Footer.tsx
import Link from "next/link";
import { BRAND, IMAGES } from "@/lib/constants";
import { services } from "@/content/services";
import { cities } from "@/content/cities";

export function Footer() {
  return (
    <footer className="bg-teal-900 pt-16 pb-8">
      <div className="container-wide">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.logo}
              alt="ISOPROTECH"
              width={160}
              height={24}
              className="h-6 w-auto mb-4"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              {BRAND.tagline} Dak-, gevelisolatie en asbestverwijdering in
              Antwerpen en omgeving.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-4">
              Diensten
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/diensten/${s.slug}`}
                    className="text-sm text-white/50 hover:text-orange-300 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Werkgebied */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-4">
              Werkgebied
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {cities.slice(0, 12).map((c) => (
                <Link
                  key={c.id}
                  href={`/regio/${c.slug}`}
                  className="text-xs text-white/45 hover:text-orange-300 transition-colors py-0.5"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-4">
              Contact
            </h4>
            <address className="not-italic text-sm text-white/50 leading-loose">
              {BRAND.address.street}
              <br />
              {BRAND.address.zip} {BRAND.address.city}
              <br />
              <a
                href={`tel:${BRAND.phone}`}
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                {BRAND.phoneDisplay}
              </a>
              <br />
              <a
                href={`mailto:${BRAND.email}`}
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                {BRAND.email}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {BRAND.name}. Alle rechten
            voorbehouden.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Cookies
            </Link>
            <Link
              href="/faq"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
