// src/app/cookies/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "Cookiebeleid van ISOPROTECH. Welke cookies wij gebruiken en waarvoor.",
  alternates: { canonical: `${BRAND.url}/cookies` },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-950 py-24">
        <div className="container-wide text-center">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">Cookiebeleid</h1>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Cookies", href: "/cookies" }]} />
      </div>

      <article className="container-narrow py-12 prose prose-gray prose-headings:text-teal-800 prose-a:text-orange-500 max-w-none">
        <h2>1. Wat zijn cookies?</h2>
        <p>
          Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen
          wanneer u een website bezoekt. Ze helpen de website om uw voorkeuren
          te onthouden en het websitegebruik te analyseren.
        </p>

        <h2>2. Welke cookies gebruiken wij?</h2>

        <h3>Functionele cookies (noodzakelijk)</h3>
        <p>
          Deze cookies zijn nodig voor de basisfunctionaliteit van de website,
          zoals navigatie en het onthouden van uw cookievoorkeuren. Deze cookies
          worden altijd geplaatst en vereisen geen toestemming.
        </p>

        <h3>Analytische cookies (Google Analytics via GTM)</h3>
        <p>
          Wij gebruiken Google Analytics 4 via Google Tag Manager om het
          websitegebruik anoniem te meten. Hiermee analyseren wij welke
          pagina&apos;s het meest bezocht worden en hoe bezoekers de website
          gebruiken, zodat wij onze dienstverlening kunnen verbeteren.
        </p>
        <p>
          De verzamelde gegevens zijn geanonimiseerd (IP-anonimisatie is
          ingeschakeld) en worden niet gebruikt om u persoonlijk te
          identificeren.
        </p>

        <h3>Marketing cookies (Google Ads, Meta Pixel)</h3>
        <p>
          Als u toestemming geeft, plaatsen wij marketing cookies voor Google
          Ads en Meta (Facebook/Instagram). Deze cookies helpen ons om de
          effectiviteit van onze advertenties te meten en relevante advertenties
          te tonen aan mensen die onze website hebben bezocht.
        </p>

        <h2>3. Overzicht cookies</h2>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-2">Cookie</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Bewaartermijn</th>
              <th className="text-left py-2">Doel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">cookie_consent</td>
              <td>Functioneel</td>
              <td>1 jaar</td>
              <td>Onthoudt uw cookiekeuze</td>
            </tr>
            <tr>
              <td className="py-2">_ga / _ga_*</td>
              <td>Analytisch</td>
              <td>2 jaar</td>
              <td>Google Analytics — websitegebruik meten</td>
            </tr>
            <tr>
              <td className="py-2">_gid</td>
              <td>Analytisch</td>
              <td>24 uur</td>
              <td>Google Analytics — sessie-identificatie</td>
            </tr>
            <tr>
              <td className="py-2">_gcl_au</td>
              <td>Marketing</td>
              <td>90 dagen</td>
              <td>Google Ads — conversie-attributie</td>
            </tr>
            <tr>
              <td className="py-2">_fbp</td>
              <td>Marketing</td>
              <td>90 dagen</td>
              <td>Meta Pixel — advertentie-effectiviteit</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Cookies beheren</h2>
        <p>
          U kunt uw cookievoorkeuren op elk moment wijzigen via de
          cookie-instellingen onderaan de website. U kunt cookies ook beheren
          of verwijderen via uw browserinstellingen:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/nl/kb/cookies-verwijderen" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/nl-nl/guide/safari/sfri11471" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-verwijderen-in-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <h2>5. Meer informatie</h2>
        <p>
          Heeft u vragen over ons cookiebeleid? Neem contact op via{" "}
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
          Lees ook ons <Link href="/privacy">privacybeleid</Link>.
        </p>

        <p className="text-xs text-gray-400 mt-8">Laatste update: april 2026.</p>
      </article>
    </>
  );
}
