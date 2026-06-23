// src/app/privacy/page.tsx
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van ISOPROTECH — hoe wij omgaan met uw persoonsgegevens, welke gegevens wij verzamelen en uw rechten.",
  alternates: { canonical: `${BRAND.url}/privacy` },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Privacybeleid",
    description: "Privacybeleid van ISOPROTECH — hoe wij omgaan met uw persoonsgegevens, welke gegevens wij verzamelen en uw rechten.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-24">
        <div className="container-wide text-center">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">Privacybeleid</h1>
        </div>
      </section>

      <div className="container-wide">
        <Breadcrumb items={[{ label: "Privacy", href: "/privacy" }]} />
      </div>

      <article className="container-narrow py-12 prose prose-gray prose-headings:text-teal-800 prose-a:text-orange-400 max-w-none">
        <h2>1. Wie zijn wij?</h2>
        <p>
          {BRAND.name} is gevestigd te {BRAND.address.street}, {BRAND.address.zip}{" "}
          {BRAND.address.city}, België. U kunt ons bereiken via{" "}
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> of{" "}
          <a href={`tel:${BRAND.phone}`}>{BRAND.phoneDisplay}</a>.
        </p>

        <h2>2. Welke gegevens verzamelen wij?</h2>
        <p>
          Wanneer u ons contactformulier invult, verzamelen wij uw naam,
          telefoonnummer, e-mailadres en het type dienst waarin u geïnteresseerd
          bent. Deze gegevens worden uitsluitend gebruikt om uw aanvraag te
          behandelen.
        </p>

        <h2>3. Waarvoor gebruiken wij uw gegevens?</h2>
        <p>Wij gebruiken uw persoonsgegevens uitsluitend om:</p>
        <ul>
          <li>Uw offerte-aanvraag te verwerken</li>
          <li>Contact met u op te nemen over uw project</li>
          <li>Een gratis inspectie in te plannen</li>
        </ul>
        <p>Wij delen uw gegevens niet met derden voor marketingdoeleinden.</p>

        <h2>4. Bewaartermijn</h2>
        <p>
          Wij bewaren uw contactgegevens niet langer dan noodzakelijk voor de
          afhandeling van uw aanvraag, en maximaal 2 jaar na het laatste
          contact.
        </p>

        <h2>5. Uw rechten</h2>
        <p>
          Conform de AVG/GDPR heeft u het recht op inzage, correctie en
          verwijdering van uw persoonsgegevens. Neem contact op via{" "}
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> om uw rechten
          uit te oefenen.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Deze website gebruikt functionele cookies en analytische cookies
          (Google Analytics via Google Tag Manager) om het websitegebruik te
          meten en te verbeteren. U kunt cookies beheren via uw
          browserinstellingen.
        </p>

        <h2>7. Wijzigingen</h2>
        <p>
          Dit privacybeleid kan worden aangepast. De meest recente versie is
          altijd beschikbaar op deze pagina. Laatste update: april 2026.
        </p>
      </article>
    </>
  );
}
