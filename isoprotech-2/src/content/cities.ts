// src/content/cities.ts
// City/location data — each city has UNIQUE intro copy, local proof, and specific FAQs
// This prevents thin-content penalties from templated city pages

export interface CityData {
  id: string;
  slug: string;
  name: string;
  zip: string;
  province: string;
  /** Unique paragraph about ISOPROTECH's work in this specific city */
  intro: string;
  /** City-specific context that makes this page genuinely different */
  localContext: string;
  /** IDs of projects completed in/near this city */
  projectRefs: string[];
  /** City-specific FAQ entries */
  localFaqs: Array<{ q: string; a: string }>;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export const cities: CityData[] = [
  {
    id: "antwerpen",
    slug: "antwerpen",
    name: "Antwerpen",
    zip: "2000",
    province: "Antwerpen",
    intro: "Als Antwerpse onderneming is ISOPROTECH diep geworteld in de stad. Ons kantoor in Hoboken ligt centraal voor projecten in alle districten — van de historische binnenstad tot de naoorlogse wijken in Deurne, Merksem en Borgerhout. Wij kennen de typische Antwerpse rijwoningen, herenhuizen en appartementsgebouwen en weten exact welke isolatieoplossingen bij elk type passen.",
    localContext: "Antwerpen telt veel vooroorlogse en naoorlogse woningen met ongeïsoleerde massieve muren en verouderde daken. Het Antwerpse stadsbestuur stimuleert energetische renovatie via lokale premies bovenop de Vlaamse Mijn Verbouwpremie. Buitengevelisolatie met crepi is bijzonder populair in de Antwerpse residentiële wijken omdat het de gevel moderniseert zonder de structuur aan te tasten.",
    projectRefs: ["gevel-antwerpen-1", "gevel-antwerpen-2", "plat-dak-antwerpen"],
    localFaqs: [
      { q: "Heb ik een vergunning nodig voor gevelisolatie in Antwerpen?", a: "Voor standaard buitengevelisolatie met crepi of spuitkurk is in de meeste gevallen geen stedenbouwkundige vergunning nodig in Antwerpen, tenzij uw woning in een beschermd stadsgezicht ligt. Wij adviseren u hierover tijdens de gratis inspectie." },
      { q: "Zijn er extra premies voor isolatie in Antwerpen stad?", a: "Naast de Vlaamse Mijn Verbouwpremie biedt de stad Antwerpen soms bijkomende ondersteuning via het Ecohuis en lokale klimaatprogramma's. Wij helpen u bij het opzoeken van de actuele mogelijkheden." },
    ],
    seo: {
      title: "Dak- en Gevelisolatie Antwerpen — ISOPROTECH",
      description: "Dakisolatie, gevelisolatie, crepi en asbestverwijdering in Antwerpen. Lokale vakman, gratis inspectie, 10 jaar garantie. Bel +32 465 88 27 01.",
      keywords: ["dakisolatie antwerpen", "gevelisolatie antwerpen", "crepi antwerpen", "dakrenovatie antwerpen", "asbestverwijdering antwerpen"],
    },
  },
  {
    id: "mechelen",
    slug: "mechelen",
    name: "Mechelen",
    zip: "2800",
    province: "Antwerpen",
    intro: "Op zoek naar dakwerken in Mechelen? ISOPROTECH voert er regelmatig dak- en gevelprojecten uit. De stad kent een mix van historische panden in het centrum en modernere woningen in de buitenwijken zoals Battel, Heffen en Leest. Ons team combineert geregeld dakwerken met gevelisolatie voor een optimaal energetisch resultaat.",
    localContext: "Mechelen zet sterk in op klimaatneutraliteit en stimuleert bewoners actief om te isoleren. Voor dakwerken in Mechelen kiezen steeds meer eigenaars voor ISOPROTECH: van dakisolatie en dakrenovatie tot volledige dakvernieuwing. De vele jaren-60 en jaren-70 woningen in de Mechelse rand zijn bovendien ideale kandidaten voor buitengevelisolatie. Wij hebben meerdere projecten gerealiseerd waar dakwerken en gevelwerken in één fase werden uitgevoerd, wat technisch efficiënt en kostenbesparend is.",
    projectRefs: ["dak-gevel-mechelen"],
    localFaqs: [
      { q: "Werken jullie ook in de deelgemeenten van Mechelen?", a: "Ja, wij zijn actief in heel Mechelen inclusief Battel, Heffen, Leest, Walem, Hombeek en Muizen. De afstand tot ons kantoor in Antwerpen is beperkt." },
      { q: "Voeren jullie ook dakwerken uit in Mechelen, niet enkel isolatie?", a: "Zeker. Naast dakisolatie verzorgen wij ook volledige dakwerken in Mechelen: dakrenovatie, dakvernieuwing en herstellingen, steeds met 10 jaar garantie." },
    ],
    seo: {
      title: "Dakwerken & Isolatie Mechelen — ISOPROTECH",
      description: "Dakwerken, dakisolatie, gevelisolatie en dakrenovatie in Mechelen. Lokale referenties, gratis inspectie, 10 jaar garantie. Vraag uw offerte aan.",
      keywords: ["dakwerken mechelen", "dakisolatie mechelen", "gevelisolatie mechelen", "dakrenovatie mechelen", "isolatie mechelen"],
    },
  },
  {
    id: "wilrijk",
    slug: "wilrijk",
    name: "Wilrijk",
    zip: "2610",
    province: "Antwerpen",
    intro: "Wilrijk is één van de Antwerpse districten waar wij het meest actief zijn. De wijk kent veel vrijstaande en halfopen bebouwing uit de jaren 50–70 — woningen die bijzonder veel baat hebben bij dakisolatie en buitengevelisolatie.",
    localContext: "De typische Wilrijkse woning heeft een hellend dak met onvoldoende isolatie en massieve gevelmuren zonder spouw. Buitengevelisolatie met crepi is hier de meest effectieve oplossing: het verbetert zowel de isolatiewaarde als de uitstraling, zonder verlies van binnenruimte. Wij hebben in Wilrijk meerdere combinatieprojecten (dak + gevel) succesvol afgerond.",
    projectRefs: ["dak-gevel-wilrijk"],
    localFaqs: [
      { q: "Hoeveel kost gevelisolatie voor een typische woning in Wilrijk?", a: "Een gemiddelde halfopen woning in Wilrijk met circa 100 m² geveloppervlak kost indicatief tussen 9.000 en 16.000 euro voor buitengevelisolatie met crepi, afhankelijk van de staat van de gevel en de gekozen materialen. Gebruik onze calculator voor een nauwkeurigere schatting." },
    ],
    seo: {
      title: "Gevelisolatie & Dakwerken Wilrijk — ISOPROTECH",
      description: "Professionele gevelisolatie en dakwerken in Wilrijk. Ervaring met typische jaren-60 woningen. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
      keywords: ["gevelisolatie wilrijk", "dakwerken wilrijk", "crepi wilrijk", "isolatie wilrijk", "buitengevelisolatie wilrijk"],
    },
  },
  {
    id: "schoten",
    slug: "schoten",
    name: "Schoten",
    zip: "2900",
    province: "Antwerpen",
    intro: "In Schoten realiseren wij regelmatig gevelisolatie- en crepiprojecten. De gemeente heeft een groot aandeel vrijstaande gezinswoningen met ruime gevels die ideaal zijn voor buitenisolatie.",
    localContext: "Schoten telt veel woningen uit de jaren 60–80 met niet-geïsoleerde spouwmuren of massieve gevels. Crepi na isolatiewerken is hier een populaire keuze — het geeft de woning een frisse uitstraling en beschermt de nieuwe isolatielaag. Ons team heeft in Schoten meerdere gevels afgewerkt met zowel crepi als spuitkurk.",
    projectRefs: ["crepi-schoten"],
    localFaqs: [
      { q: "Kan ik in Schoten spuitkurk combineren met gevelisolatie?", a: "Ja, spuitkurk is een uitstekende afwerking over gevelisolatie. Het is naadloos, elastisch en beschermt de isolatielaag. Wij passen dit regelmatig toe in Schoten." },
    ],
    seo: {
      title: "Gevelisolatie & Crepi Schoten — ISOPROTECH",
      description: "Gevelisolatie met crepi of spuitkurk in Schoten. Lokale ervaring, gratis inspectie, 10 jaar garantie. Neem contact op met ISOPROTECH.",
      keywords: ["gevelisolatie schoten", "crepi schoten", "spuitkurk schoten", "buitengevelisolatie schoten", "isolatie schoten"],
    },
  },
  {
    id: "mortsel",
    slug: "mortsel",
    name: "Mortsel",
    zip: "2640",
    province: "Antwerpen",
    intro: "Mortsel ligt op korte afstand van ons kantoor en is een gemeente waar wij uitgebreide ervaring hebben opgebouwd met gevelafwerkingen. De compacte stadskern met aaneengesloten rijwoningen vraagt om oplossingen die zowel technisch correct als esthetisch verantwoord zijn.",
    localContext: "In Mortsel zien we veel rijwoningen met smalle gevels waar spuitkurk een praktische keuze is — de naadloze afwerking werkt goed op kleine oppervlakken en rond moeilijke details. Wij hebben hier meerdere gevelprojecten afgerond met zichtbaar resultaat.",
    projectRefs: ["spuitkurk-mortsel"],
    localFaqs: [
      { q: "Is spuitkurk geschikt voor een rijwoning in Mortsel?", a: "Ja, spuitkurk is bijzonder geschikt voor rijwoningen. De naadloze toepassing past goed bij smalle gevels en biedt een elastische, scheurwerende afwerking. Wij hebben hier ervaring mee in Mortsel." },
    ],
    seo: {
      title: "Spuitkurk & Gevelisolatie Mortsel — ISOPROTECH",
      description: "Spuitkurk en gevelisolatie in Mortsel. Ervaring met rijwoningen, naadloze afwerking. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
      keywords: ["spuitkurk mortsel", "gevelisolatie mortsel", "crepi mortsel", "buitengevelisolatie mortsel", "isolatie mortsel"],
    },
  },
  {
    id: "ekeren",
    slug: "ekeren",
    name: "Ekeren",
    zip: "2180",
    province: "Antwerpen",
    intro: "Ekeren is een Antwerps district met veel gezinswoningen in een groene omgeving. Wij voeren hier regelmatig gevelisolatie uit, vaak gecombineerd met een nieuwe crepi-afwerking die de woning een moderne uitstraling geeft.",
    localContext: "De woningen in Ekeren zijn vaak ruim opgezet met relatief grote geveloppervlakken. Dit maakt buitengevelisolatie bijzonder kosteneffectief — het bespaarde oppervlak is groot, dus de terugverdientijd is kort. Wij hebben in Ekeren meerdere projecten gerealiseerd met duurzame crepi-afwerking.",
    projectRefs: ["gevel-ekeren"],
    localFaqs: [
      { q: "Hoeveel kost gevelisolatie in Ekeren?", a: "Voor een typische Edegemse of Ekerse woning met circa 80–120 m² geveloppervlak rekent u indicatief op €7.000–€14.000 voor buitengevelisolatie met crepi (excl. btw). De exacte prijs hangt af van de staat van de gevel en de gewenste isolatiedikte. Gebruik onze calculator of vraag een gratis inspectie aan." },
      { q: "Werken jullie ook in de randgemeenten rond Ekeren?", a: "Ja, wij zijn actief in heel Ekeren en de omliggende gemeenten zoals Kapellen, Brasschaat en Stabroek. Ons team is snel ter plaatse voor een gratis inspectie." },
    ],
    seo: {
      title: "Gevelisolatie Ekeren — Crepi & Isolatie",
      description: "Gevelisolatie met crepi in Ekeren. Grote geveloppervlakken, snelle terugverdientijd. Gratis inspectie, 10 jaar garantie. ISOPROTECH Antwerpen.",
      keywords: ["gevelisolatie ekeren", "crepi ekeren", "buitengevelisolatie ekeren", "isolatie ekeren antwerpen"],
    },
  },
  {
    id: "schilde",
    slug: "schilde",
    name: "Schilde",
    zip: "2970",
    province: "Antwerpen",
    intro: "Schilde staat bekend om zijn villawijken en ruime woningen. ISOPROTECH voert hier regelmatig gecombineerde dak- en gevelprojecten uit, waarbij de schaal van de woningen een doordachte aanpak vereist.",
    localContext: "De vrijstaande woningen in Schilde hebben doorgaans zowel grote dakoppervlakken als ruime gevels. Een geïntegreerde aanpak — dakisolatie gecombineerd met gevelisolatie — levert hier het grootste energetische voordeel op. Wij hebben in Schilde succesvolle totaalprojecten gerealiseerd.",
    projectRefs: ["dak-gevel-schilde"],
    localFaqs: [
      { q: "Kan ISOPROTECH ook grotere vrijstaande woningen in Schilde behandelen?", a: "Absoluut. Grotere woningen zijn zelfs ideale kandidaten voor een gecombineerd dak- en gevelproject: de oppervlakken zijn groter, maar de kostprijs per m² is vergelijkbaar en het resultaat is indrukwekkend. Wij hebben meerdere villawoningen in de Schildse regio succesvol gerenoveerd." },
    ],
    seo: {
      title: "Dak- & Gevelisolatie Schilde — ISOPROTECH",
      description: "Totale dak- en gevelisolatie in Schilde. Ervaring met villawoningen, grote oppervlakken. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
      keywords: ["gevelisolatie schilde", "dakisolatie schilde", "dakrenovatie schilde", "isolatie schilde"],
    },
  },
  {
    id: "brasschaat",
    slug: "brasschaat",
    name: "Brasschaat",
    zip: "2930",
    province: "Antwerpen",
    intro: "Brasschaat is een residentiële gemeente ten noorden van Antwerpen met veel kwalitatieve gezinswoningen. ISOPROTECH is hier actief met zowel dakwerken als gevelisolatie, afgestemd op het hogere afwerkingsniveau dat in deze gemeente verwacht wordt.",
    localContext: "In Brasschaat zien we vaak woningen waar esthetiek even belangrijk is als technische prestatie. Wij werken hier met premium afwerkingen en besteden extra aandacht aan details rond ramen, deuren en dakgoten. Het resultaat is een woning die er niet alleen beter uitziet, maar ook meetbaar minder energie verbruikt.",
    projectRefs: [],
    localFaqs: [
      { q: "Welke gevelafwerking past bij een villa in Brasschaat?", a: "Voor woningen in Brasschaat kiezen wij vaak voor een premium minerale crepi of steenstrips die de bestaande architectuur respecteert. Wij bespreken de mogelijkheden tijdens de gratis inspectie en tonen referentieprojecten die aansluiten bij uw woonstijl." },
      { q: "Bieden jullie ook onderhoud of herstellingswerken aan gevelisolatie in Brasschaat?", a: "Ja. Naast nieuwe projecten voeren wij ook herstelling en onderhoud uit aan bestaande gevelafwerkingen. Kleine scheuren, loskomende pleister of vochtschade — wij beoordelen de toestand en bieden een gerichte oplossing." },
    ],
    seo: {
      title: "Isolatie & Gevelwerken Brasschaat — ISOPROTECH",
      description: "Dakisolatie en gevelisolatie in Brasschaat. Premium afwerking, lokale ervaring. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
      keywords: ["gevelisolatie brasschaat", "dakisolatie brasschaat", "isolatie brasschaat", "crepi brasschaat"],
    },
  },
  {
    id: "kapellen",
    slug: "kapellen",
    name: "Kapellen",
    zip: "2950",
    province: "Antwerpen",
    intro: "In Kapellen voeren wij dak- en gevelisolatiewerken uit voor zowel particuliere woningen als kleinere appartementsgebouwen. De gemeente biedt een mix van bouwstijlen waar onze brede ervaring goed bij aansluit.",
    localContext: "Kapellen kent zowel oudere dorpskernen als nieuwere verkavelingen. Bij oudere woningen combineren wij vaak asbestverwijdering met dakrenovatie en isolatie — een efficiënte totaalaanpak die de woning in één keer toekomstbestendig maakt.",
    projectRefs: [],
    localFaqs: [
      { q: "Verwijdert ISOPROTECH ook asbest vóór dakrenovatie in Kapellen?", a: "Ja. Voor woningen gebouwd vóór 1990 is een asbestinventarisatie wettelijk verplicht vóór de werken beginnen. Wij begeleiden u van de inventarisatie tot de volledige sanering, zodat u daarna zorgeloos kunt renoveren." },
    ],
    seo: {
      title: "Dakisolatie & Gevelwerken Kapellen — ISOPROTECH",
      description: "Dak- en gevelisolatie in Kapellen. Van asbestverwijdering tot crepi-afwerking. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
      keywords: ["dakisolatie kapellen", "gevelisolatie kapellen", "asbestverwijdering kapellen", "dakrenovatie kapellen", "isolatie kapellen"],
    },
  },
  {
    id: "edegem",
    slug: "edegem",
    name: "Edegem",
    zip: "2650",
    province: "Antwerpen",
    intro: "Edegem grenst direct aan ons werkgebied en is een gemeente waar wij snel ter plaatse zijn voor inspectie en uitvoering. De typische Edegemse halfopen en gesloten bebouwing leent zich uitstekend voor buitengevelisolatie.",
    localContext: "Veel woningen in Edegem dateren uit de jaren 50–70 en zijn gebouwd met massieve muren zonder isolatie. Buitengevelisolatie met crepi is hier de meest logische oplossing: de woning wint aan comfort, uitstraling en waarde, zonder verlies van binnenruimte.",
    projectRefs: [],
    localFaqs: [
      { q: "Hoeveel bespaar ik met gevelisolatie in Edegem?", a: "Bij een typische jaren-60 halfopen woning in Edegem met massieve muren bespaart u na gevelisolatie gemiddeld 15–25% op uw verwarmingskosten. De exacte besparing hangt af van het verwarmingssysteem en de huidige situatie. Tijdens de gratis inspectie geven wij een realistische inschatting." },
      { q: "Moet ik een vergunning aanvragen voor gevelisolatie in Edegem?", a: "In de meeste gevallen niet — buitengevelisolatie met crepi valt onder melding of is vergunningsvrij in Edegem, tenzij uw woning een beschermd karakter heeft of in een bepaalde zone ligt. Wij adviseren u hierover." },
    ],
    seo: {
      title: "Gevelisolatie Edegem — Crepi & Isolatie",
      description: "Buitengevelisolatie met crepi in Edegem. Ideaal voor jaren-60 woningen. Gratis inspectie, 10 jaar garantie. ISOPROTECH Antwerpen.",
      keywords: ["gevelisolatie edegem", "crepi edegem", "buitengevelisolatie edegem", "isolatie edegem", "dakisolatie edegem"],
    },
  },
  {
    id: "kontich",
    slug: "kontich",
    name: "Kontich",
    zip: "2550",
    province: "Antwerpen",
    intro: "Kontich is een dynamische gemeente tussen Antwerpen en Mechelen waar wij actief zijn met dak- en gevelprojecten. De goede bereikbaarheid maakt het een efficiënt werkgebied voor ons team.",
    localContext: "In Kontich treffen wij een mix van oudere woningen in het centrum en recentere bouw in de woonwijken. Voor de oudere woningen is een gecombineerde aanpak (dak + gevel) vaak het meest kosteneffectief. Voor recentere woningen kan een gerichte gevelafwerking al voldoende zijn.",
    projectRefs: [],
    localFaqs: [
      { q: "Zijn jullie ook snel beschikbaar in Kontich?", a: "Ja, Kontich ligt centraal in ons werkgebied. Wij kunnen doorgaans binnen de week langskomen voor een gratis inspectie. Bel of stuur ons een bericht via het contactformulier." },
    ],
    seo: {
      title: "Isolatie Kontich — Dak & Gevel | ISOPROTECH",
      description: "Dak- en gevelisolatie in Kontich. Tussen Antwerpen en Mechelen. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
      keywords: ["isolatie kontich", "gevelisolatie kontich", "dakisolatie kontich", "dakrenovatie kontich"],
    },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getNearbyCities(cityId: string, max = 6): CityData[] {
  return cities.filter((c) => c.id !== cityId).slice(0, max);
}
