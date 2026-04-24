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
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  relatedServices: string[];
  faqIds: string[]; // references to FAQ items relevant to this service
}

export const services: Service[] = [
  {
    id: "dakisolatie",
    slug: "dakisolatie",
    name: "Dakisolatie",
    shortDesc: "Isolatie van platte en hellende daken voor minder warmteverlies en lagere energiekosten.",
    heroDesc: "Tot 30% van de warmte in een woning gaat verloren via het dak. Met professionele dakisolatie verlaagt u structureel uw energiefactuur en verhoogt u het wooncomfort. ISOPROTECH isoleert zowel platte als hellende daken, bij renovatie of bestaande woningen in Antwerpen en omgeving.",
    photo: PHOTOS.dakiso,
    benefits: [
      "Constante binnentemperatuur zomer en winter",
      "Tot 30% besparing op verwarmingskosten",
      "Meer wooncomfort en minder tocht",
      "Hogere woningwaarde bij verkoop",
      "Betere EPC-score voor uw woning",
      "Bescherming van uw dakstructuur tegen vocht",
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
    shortDesc: "Volledige renovatie en vernieuwing van platte en hellende daken.",
    heroDesc: "Een verouderd dak brengt risico's met zich mee: lekkages, vochtproblemen en energieverlies. ISOPROTECH renoveert uw dak vakkundig en duurzaam — van dakstructuur tot bedekking en afwatering. Wij werken in heel Antwerpen en omgeving.",
    photo: PHOTOS.platDak,
    benefits: [
      "Waterdicht en duurzaam dak voor de komende decennia",
      "Langere levensduur van uw dakstructuur",
      "Verbeterde isolatiewaarde bij combinatie met dakisolatie",
      "Moderne dakafwerking naar keuze",
      "Verhoogde woningwaarde",
      "Minder onderhouds- en herstelkosten",
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
    shortDesc: "Plaatsing van dakkapellen voor extra leefruimte, licht en ventilatie.",
    heroDesc: "Een dakkapel brengt extra licht, ruimte en ventilatie in uw woning. ISOPROTECH plaatst dakkapellen die perfect geïntegreerd zijn in uw bestaande dakstructuur, met aandacht voor isolatie en waterdichting.",
    photo: PHOTOS.dakkapellen,
    benefits: [
      "Extra leefruimte onder het dak",
      "Meer natuurlijk daglicht in uw woning",
      "Betere ventilatie op de bovenverdieping",
      "Hogere woningwaarde",
      "Esthetische meerwaarde aan de gevelzijde",
      "Combineerbaar met dakisolatie",
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
    shortDesc: "Buitengevelisolatie voor minder warmteverlies, meer comfort en een lagere energiefactuur.",
    heroDesc: "Gevelisolatie is één van de meest effectieve manieren om uw woning energiezuiniger te maken. Door warmteverlies via de buitenmuren te beperken, geniet u van meer comfort, een stabiel binnenklimaat en lagere energiekosten. ISOPROTECH realiseert gevelisolatie-oplossingen die technisch correct, duurzaam en esthetisch afgestemd zijn op uw woning.",
    photo: PHOTOS.gevelCrepiMeise,
    benefits: [
      "Minder warmteverlies in de winter",
      "Koeler binnenklimaat in de zomer",
      "Lagere energiefactuur — structurele besparing",
      "Betere EPC-score",
      "Hogere woningwaarde bij verkoop",
      "Moderne geveluitstraling met afwerking naar keuze",
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
    shortDesc: "Moderne gevelafwerking met strakke minerale pleister, met of zonder isolatie.",
    heroDesc: "Crepi is een populaire gevelafwerking die uw woning een strakke, moderne uitstraling geeft en tegelijk beschermt tegen weer en vervuiling. In combinatie met gevelisolatie zorgt crepi voor meer wooncomfort en lagere energiekosten. ISOPROTECH plaatst crepi-systemen die technisch correct zijn opgebouwd.",
    photo: PHOTOS.crepiSchoten,
    benefits: [
      "Moderne en verzorgde geveluitstraling",
      "Extra bescherming tegen vocht en weersinvloeden",
      "Betere energieprestaties in combinatie met isolatie",
      "Minder onderhoud op lange termijn",
      "Hogere woningwaarde",
      "Beschikbaar in diverse kleuren en structuren",
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
    shortDesc: "Elastische, naadloze en ecologische gevelafwerking op basis van natuurlijke kurk.",
    heroDesc: "Spuitkurk is een innovatieve gevelafwerking op basis van natuurlijke kurk. Het vormt een naadloze, ademende en waterafstotende laag die uw gevel beschermt tegen vocht, scheuren en temperatuurschommelingen. ISOPROTECH past spuitkurk toe als duurzame oplossing voor nieuwe en bestaande gevels.",
    photo: PHOTOS.spuitkurkMortsel,
    benefits: [
      "Naadloze afwerking zonder voegen",
      "Elastisch en scheurwerend — volgt bewegingen op",
      "Waterafstotend en dampopen tegelijk",
      "Natuurlijk en ecologisch materiaal",
      "Thermisch en akoestisch isolerend effect",
      "Diverse kleuropties beschikbaar",
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
    shortDesc: "Veilige en gecertificeerde verwijdering van asbest volgens Belgische normen.",
    heroDesc: "Asbest is een gevaarlijk materiaal dat uitsluitend door professionals verwijderd mag worden. ISOPROTECH voert asbestverwijdering uit volgens alle wettelijke veiligheidsvoorschriften, met gecertificeerd afvaltransport en volledige sanering.",
    photo: PHOTOS.asbestverwijdering,
    benefits: [
      "Veilige verwijdering volgens Belgische normen",
      "Wettelijk conforme aanpak en documentatie",
      "Gecertificeerd afvaltransport",
      "Volledige sanering van uw woning",
      "Advies en begeleiding bij het volledige traject",
      "Gratis inspectie ter plaatse",
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
