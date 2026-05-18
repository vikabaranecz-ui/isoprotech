// src/content/services.ts

import { PHOTOS } from "@/lib/constants";

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  heroDesc: string;
  photo: typeof PHOTOS[keyof typeof PHOTOS];
  benefits: string[];
  galleryPhotos?: { src: string; alt: string }[];
  videoSrc?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  relatedServices: string[];
  faqIds: string[];
}

export const services: Service[] = [
  {
    id: "dakisolatie",
    slug: "dakisolatie",
    name: "Dakisolatie",
    shortDesc: "Stop het warmteverlies via uw dak. Lagere energiefactuur, meer comfort — gegarandeerd resultaat.",
    heroDesc: "Tot 30% van uw verwarmingskosten verdwijnt via een ongeïsoleerd dak. Dat is geld dat u elke maand betaalt zonder er iets voor terug te krijgen. ISOPROTECH isoleert platte en hellende daken vakkundig — met vaste prijs, 10 jaar garantie en begeleiding bij premie-aanvraag. In Antwerpen en omgeving.",
    photo: PHOTOS.dakisolatieService,
    benefits: [
      "Tot 30% besparing op uw verwarmingskosten",
      "Constante temperatuur — warm in de winter, koel in de zomer",
      "Betere EPC-score bij verkoop of verhuur",
      "Hogere woningwaarde — meetbaar verschil op de markt",
      "Bescherming van uw dakstructuur tegen vocht en schimmel",
      "Premie-aanvraag inbegrepen — wij regelen het voor u",
    ],
    galleryPhotos: [
      { src: PHOTOS.dakisolatieTorch.src, alt: PHOTOS.dakisolatieTorch.alt },
      { src: PHOTOS.dakisolatieTeam.src, alt: PHOTOS.dakisolatieTeam.alt },
      { src: PHOTOS.platDakAfter.src, alt: PHOTOS.platDakAfter.alt },
      { src: PHOTOS.platDak2After.src, alt: PHOTOS.platDak2After.alt },
      { src: PHOTOS.platDak.src, alt: PHOTOS.platDak.alt },
    ],
    seo: {
      title: "Dakisolatie Antwerpen — Plat & Hellend Dak | ISOPROTECH",
      description: "Professionele dakisolatie in Antwerpen en omgeving. Platte en hellende daken. Tot 30% besparing op energiekosten. Gratis inspectie, 10 jaar garantie. Vraag uw offerte aan.",
      keywords: ["dakisolatie antwerpen", "dak isoleren", "plat dak isolatie", "hellend dak isolatie", "dakisolatie prijs"],
    },
    relatedServices: ["dakrenovatie", "gevelisolatie"],
    faqIds: ["dakisolatie-besparing", "dakisolatie-prijs", "garantie"],
  },
  {
    id: "dakrenovatie",
    slug: "dakrenovatie",
    name: "Dakrenovatie",
    shortDesc: "Een verouderd dak lekt geld en water. Wij renoveren van A tot Z — waterdicht, geïsoleerd, gegarandeerd.",
    heroDesc: "Lekkages, vochtproblemen, verouderde pannen — een slecht dak kost u elke dag méér. ISOPROTECH renoveert uw dak volledig: dakstructuur, isolatie, bedekking en afwatering. Één aanspreekpunt, vaste prijs, geen verrassingen. Wij werken in Antwerpen en de ruime omgeving.",
    photo: PHOTOS.dakrenovatie,
    benefits: [
      "Waterdicht dak met levensduur van 30+ jaar",
      "Gecombineerde isolatie voor maximale energiebesparing",
      "Moderne dakafwerking naar uw keuze",
      "Lagere onderhoudskosten op lange termijn",
      "Hogere woningwaarde en betere EPC-score",
      "Premie-aanvraag inbegrepen",
    ],
    galleryPhotos: [
      { src: PHOTOS.dakrenovatieWorker.src, alt: PHOTOS.dakrenovatieWorker.alt },
      { src: PHOTOS.hellendDakEdegemAfter.src, alt: PHOTOS.hellendDakEdegemAfter.alt },
      { src: PHOTOS.hellendDakEdegemAfter1.src, alt: PHOTOS.hellendDakEdegemAfter1.alt },
      { src: PHOTOS.dakSchouw.src, alt: PHOTOS.dakSchouw.alt },
      { src: PHOTOS.platDakAfter.src, alt: PHOTOS.platDakAfter.alt },
    ],
    seo: {
      title: "Dakrenovatie Antwerpen — Vakkundige Dakvernieuwing | ISOPROTECH",
      description: "Dakrenovatie in Antwerpen. Volledige vernieuwing van platte en hellende daken. Nieuwe bedekking, isolatie en afwatering. Gratis inspectie, 10 jaar garantie.",
      keywords: ["dakrenovatie antwerpen", "dak vernieuwen", "dak renoveren", "nieuw dak prijs"],
    },
    relatedServices: ["dakisolatie", "dakkapellen"],
    faqIds: ["dakrenovatie-duur", "garantie"],
  },
  {
    id: "dakkapellen",
    slug: "dakkapellen",
    name: "Dakkapellen",
    shortDesc: "Meer ruimte, meer licht, meer waarde — een dakkapel is de slimste investering in uw woning.",
    heroDesc: "Een dakkapel geeft u extra leefruimte, daglicht en ventilatie zonder aan te bouwen. ISOPROTECH plaatst dakkapellen die perfect aansluiten op uw bestaande dakstructuur — waterdicht afgewerkt, volledig geïsoleerd, met 10 jaar garantie. In Antwerpen en omgeving.",
    photo: PHOTOS.dakkapellen,
    benefits: [
      "Extra leefruimte onder het dak zonder aanbouw",
      "Meer natuurlijk daglicht op de bovenverdieping",
      "Betere ventilatie — geen onaangename warmte meer",
      "Hogere woningwaarde bij verkoop",
      "Volledig geïntegreerd en waterdicht afgewerkt",
      "Combineerbaar met dakisolatie voor maximaal resultaat",
    ],
    seo: {
      title: "Dakkapellen Antwerpen — Meer Ruimte & Licht | ISOPROTECH",
      description: "Dakkapellen plaatsen in Antwerpen. Professionele installatie voor meer licht, ruimte en ventilatie. Perfecte integratie in uw bestaand dak. Gratis advies.",
      keywords: ["dakkapellen antwerpen", "dakkapel plaatsen", "dakkapel prijs"],
    },
    relatedServices: ["dakisolatie", "dakrenovatie"],
    faqIds: ["garantie"],
  },
  {
    id: "gevelisolatie",
    slug: "gevelisolatie",
    name: "Gevelisolatie",
    shortDesc: "Tot 35% minder verwarmingskosten. Uw gevel strak, uw woning warmer — blijvend resultaat.",
    heroDesc: "Via de buitenmuren verliest een gemiddeld huis 25 tot 35% van zijn warmte. Gevelisolatie stopt dat verlies structureel. ISOPROTECH realiseert buitengevelisolatie die technisch correct is, esthetisch sterk en jarenlang meegaat. Vaste prijs, gratis inspectie, 10 jaar garantie — in Antwerpen en omgeving.",
    photo: PHOTOS.gevelCrepiMeise,
    benefits: [
      "Tot 35% besparing op uw verwarmingskosten",
      "Warme muren in de winter, koele muren in de zomer",
      "Betere EPC-score — hogere woningwaarde",
      "Uw gevel ziet er uit als nieuw — keuze uit crepi, spuitkurk of steenstrips",
      "Geen condensatie of schimmel meer op binnenmuren",
      "Premies mogelijk — wij checken uw situatie",
    ],
    seo: {
      title: "Gevelisolatie Antwerpen — Buitenisolatie met Crepi | ISOPROTECH",
      description: "Gevelisolatie in Antwerpen en omgeving. Buitengevelisolatie met crepi, spuitkurk of steenstrips. Gratis inspectie, vrijblijvende offerte, 10 jaar garantie.",
      keywords: ["gevelisolatie antwerpen", "buitengevelisolatie", "gevel isoleren", "gevelisolatie prijs m2"],
    },
    relatedServices: ["crepi", "spuitkurk"],
    faqIds: ["gevelisolatie-prijs", "gevelisolatie-geschikt", "gevelisolatie-duur", "premies"],
  },
  {
    id: "crepi",
    slug: "crepi",
    name: "Crepi",
    shortDesc: "Strakke gevelafwerking die uw woning beschermt én een nieuwe uitstraling geeft. Duurzaam, onderhoudsvriendelijk.",
    heroDesc: "Crepi is de meest populaire gevelafwerking in België — en terecht. Het beschermt uw muren tegen vocht en weersinvloeden, geeft een strakke uitstraling en combineert uitstekend met isolatie. ISOPROTECH plaatst crepi-systemen die technisch correct zijn opgebouwd en jarenlang mooi blijven.",
    photo: PHOTOS.crepiService,
    benefits: [
      "Strakke, moderne geveluitstraling — direct verschil zichtbaar",
      "Bescherming tegen vocht, regen en vervuiling",
      "Gecombineerd met isolatie: ook energiewinst",
      "Beschikbaar in tientallen kleuren en structuren",
      "Weinig onderhoud op lange termijn",
      "Hogere woningwaarde bij verkoop",
    ],
    galleryPhotos: [
      { src: PHOTOS.crepiWorker.src, alt: PHOTOS.crepiWorker.alt },
      { src: PHOTOS.crepiAntwAfter.src, alt: PHOTOS.crepiAntwAfter.alt },
      { src: PHOTOS.crepiOranje1.src, alt: PHOTOS.crepiOranje1.alt },
      { src: PHOTOS.crepiAntwDetail.src, alt: PHOTOS.crepiAntwDetail.alt },
      { src: PHOTOS.crepiAfter1.src, alt: PHOTOS.crepiAfter1.alt },
      { src: PHOTOS.crepiOranje2.src, alt: PHOTOS.crepiOranje2.alt },
      { src: PHOTOS.binnentuinAfter.src, alt: PHOTOS.binnentuinAfter.alt },
      { src: PHOTOS.gevelCrepiMeise.src, alt: PHOTOS.gevelCrepiMeise.alt },
      { src: PHOTOS.gevelAntwAfter.src, alt: PHOTOS.gevelAntwAfter.alt },
    ],
    seo: {
      title: "Crepi Antwerpen — Gevelafwerking met Isolatie | ISOPROTECH",
      description: "Professionele crepi gevelafwerking in Antwerpen. Met of zonder isolatie. Diverse kleuren en structuren. Gratis inspectie, 10 jaar garantie.",
      keywords: ["crepi antwerpen", "crepi gevel", "crepi prijs", "gevelpleister", "crepi met isolatie"],
    },
    relatedServices: ["gevelisolatie", "spuitkurk"],
    faqIds: ["crepi-vs-spuitkurk", "gevelisolatie-prijs"],
  },
  {
    id: "spuitkurk",
    slug: "spuitkurk",
    name: "Spuitkurk",
    shortDesc: "Naadloze, elastische gevelcoating op basis van natuurlijke kurk. Geen scheuren, geen vocht, geen onderhoud.",
    heroDesc: "Spuitkurk is een innovatieve gevelafwerking die anders is dan crepi: naadloos aangebracht, elastisch, waterafstotend én dampopen. Het volgt bewegingen in de gevel op, dekt oneffenheden af en heeft een thermisch isolerend effect. ISOPROTECH past spuitkurk toe als duurzame oplossing voor nieuwe en bestaande gevels in Antwerpen.",
    photo: PHOTOS.spuitkurk,
    benefits: [
      "Naadloze afwerking — geen voegen die barsten of lekken",
      "Elastisch: volgt bewegingen in de gevel op zonder te scheuren",
      "Waterafstotend en toch dampopen — geen vocht achter de coating",
      "Natuurlijk en ecologisch materiaal",
      "Thermisch en akoestisch isolerend effect",
      "Kleurvast en onderhoudsvriendelijk — jarenlang mooi",
    ],
    videoSrc: "/videos/spuitkurk-showreel.mp4",
    galleryPhotos: [
      { src: PHOTOS.spuitkurkAfter1.src, alt: PHOTOS.spuitkurkAfter1.alt },
      { src: PHOTOS.spuitkurkBefore1.src, alt: PHOTOS.spuitkurkBefore1.alt },
      { src: PHOTOS.spuitkurkAfter2.src, alt: PHOTOS.spuitkurkAfter2.alt },
      { src: PHOTOS.spuitkurkBefore2.src, alt: PHOTOS.spuitkurkBefore2.alt },
      { src: PHOTOS.gevelAfter1.src, alt: PHOTOS.gevelAfter1.alt },
      { src: PHOTOS.gevelCrepiMeise2.src, alt: PHOTOS.gevelCrepiMeise2.alt },
    ],
    seo: {
      title: "Spuitkurk Antwerpen — Naadloze Gevelafwerking | ISOPROTECH",
      description: "Spuitkurk gevelafwerking in Antwerpen. Naadloze, elastische coating op basis van natuurlijke kurk. Duurzaam, ecologisch, onderhoudsvriendelijk. Gratis offerte.",
      keywords: ["spuitkurk antwerpen", "spuitkurk gevel", "spuitkurk prijs", "kurk gevelafwerking"],
    },
    relatedServices: ["gevelisolatie", "crepi"],
    faqIds: ["crepi-vs-spuitkurk", "gevelisolatie-prijs"],
  },
  {
    id: "asbestverwijdering",
    slug: "asbestverwijdering",
    name: "Asbestverwijdering",
    shortDesc: "Veilige, wettelijk conforme asbestverwijdering. Gecertificeerd team, volledige documentatie, geen zorgen.",
    heroDesc: "Asbest is gevaarlijk — en verwijdering door een niet-gecertificeerd bedrijf is illegaal. ISOPROTECH verwijdert asbest volledig veilig, volgens alle Belgische normen, met gecertificeerd afvaltransport en volledige sanering. U ontvangt alle vereiste attesten voor uw renovatiedossier.",
    photo: PHOTOS.asbestverwijdering,
    benefits: [
      "Gecertificeerd en wettelijk conform — alle attesten inbegrepen",
      "Veilige verwijdering zonder risico voor bewoners of werklieden",
      "Gecertificeerd afvaltransport en verwerking",
      "Volledige documentatie voor uw renovatiepremie",
      "Asbestverwijderingsbonus van €8/m² mogelijk",
      "Gratis inspectie en asbestinventarisatie ter plaatse",
    ],
    galleryPhotos: [
      { src: PHOTOS.asbestverwijdering1.src, alt: PHOTOS.asbestverwijdering1.alt },
      { src: PHOTOS.asbestverwijdering2.src, alt: PHOTOS.asbestverwijdering2.alt },
      { src: PHOTOS.asbestverwijdering.src, alt: PHOTOS.asbestverwijdering.alt },
    ],
    seo: {
      title: "Asbestverwijdering Antwerpen — Veilig & Gecertificeerd | ISOPROTECH",
      description: "Veilige asbestverwijdering in Antwerpen en omgeving. Gecertificeerd volgens Belgische normen. Gratis inspectie, volledige sanering, afvaltransport inbegrepen.",
      keywords: ["asbestverwijdering antwerpen", "asbest verwijderen", "asbest sanering", "asbest prijs"],
    },
    relatedServices: ["dakrenovatie", "gevelisolatie"],
    faqIds: ["asbest-voor-renovatie", "garantie"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(serviceId: string): Service[] {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return [];
  return service.relatedServices
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean) as Service[];
}
