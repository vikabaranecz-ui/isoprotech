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
      description: "ISOPROTECH is uw lokale partner voor dakisolatie, gevelisolatie, crepi en asbestverwijdering in Antwerpen. Gratis inspectie, 10 jaar garantie. Bel +32 465 88 27 01.",
    },
  },
  {
    id: "mechelen",
    slug: "mechelen",
    name: "Mechelen",
    zip: "2800",
    province: "Antwerpen",
    intro: "In Mechelen voert ISOPROTECH regelmatig dak- en gevelprojecten uit. De stad kent een mix van historische panden in het centrum en modernere woningen in de buitenwijken zoals Battel, Heffen en Leest. Ons team combineert geregeld dakvernieuwing met gevelisolatie voor een optimaal energetisch resultaat.",
    localContext: "Mechelen zet sterk in op klimaatneutraliteit en stimuleert bewoners actief om te isoleren. De vele jaren-60 en jaren-70 woningen in de Mechelse rand zijn ideale kandidaten voor buitengevelisolatie. Wij hebben meerdere projecten gerealiseerd waar dak- en gevelwerken in één fase werden uitgevoerd, wat technisch efficiënt en kostenbesparend is.",
    projectRefs: ["dak-gevel-mechelen"],
    localFaqs: [
      { q: "Werken jullie ook in de deelgemeenten van Mechelen?", a: "Ja, wij zijn actief in heel Mechelen inclusief Battel, Heffen, Leest, Walem, Hombeek en Muizen. De afstand tot ons kantoor in Antwerpen is beperkt." },
    ],
    seo: {
      title: "Isolatie & Dakrenovatie Mechelen — ISOPROTECH",
      description: "Dakisolatie, gevelisolatie en dakrenovatie in Mechelen. Lokale referenties, gratis inspectie, 10 jaar garantie. Vraag uw offerte aan bij ISOPROTECH.",
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
    localFaqs: [],
    seo: {
      title: "Gevelisolatie Ekeren — Crepi & Isolatie | ISOPROTECH",
      description: "Gevelisolatie met crepi in Ekeren. Grote geveloppervlakken, snelle terugverdientijd. Gratis inspectie, 10 jaar garantie. ISOPROTECH Antwerpen.",
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
    localFaqs: [],
    seo: {
      title: "Dak- & Gevelisolatie Schilde — ISOPROTECH",
      description: "Totale dak- en gevelisolatie in Schilde. Ervaring met villawoningen, grote oppervlakken. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
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
    localFaqs: [],
    seo: {
      title: "Isolatie & Gevelwerken Brasschaat — ISOPROTECH",
      description: "Dakisolatie en gevelisolatie in Brasschaat. Premium afwerking, lokale ervaring. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
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
    localFaqs: [],
    seo: {
      title: "Dakisolatie & Gevelwerken Kapellen — ISOPROTECH",
      description: "Dak- en gevelisolatie in Kapellen. Van asbestverwijdering tot crepi-afwerking. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
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
    localFaqs: [],
    seo: {
      title: "Gevelisolatie Edegem — Crepi & Isolatie | ISOPROTECH",
      description: "Buitengevelisolatie met crepi in Edegem. Ideaal voor jaren-60 woningen. Gratis inspectie, 10 jaar garantie. ISOPROTECH Antwerpen.",
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
    localFaqs: [],
    seo: {
      title: "Isolatie Kontich — Dak & Gevel | ISOPROTECH",
      description: "Dak- en gevelisolatie in Kontich. Tussen Antwerpen en Mechelen. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
    },
  },
  {
    id: "lier",
    slug: "lier",
    name: "Lier",
    zip: "2500",
    province: "Antwerpen",
    intro: "Lier is een charmante Vlaamse stad met veel historische bebouwing en een groeiende residentiële rand. ISOPROTECH voert in Lier regelmatig dak- en gevelisolatieprojecten uit, aangepast aan de diverse bouwstijlen in de regio.",
    localContext: "Het historische centrum van Lier omvat veel beschermde panden waarvoor een aangepaste aanpak nodig is. In de buitenwijken en deelgemeenten zoals Koningshooikt en Bautersem zien we meer vrijstaande gezinswoningen uit de jaren 60–80 — ideale kandidaten voor buitengevelisolatie met crepi of spuitkurk. Wij adviseren altijd op basis van de specifieke noden van het pand.",
    projectRefs: [],
    localFaqs: [
      { q: "Rijden jullie ook naar Lier voor een gratis inspectie?", a: "Ja, wij komen graag vrijblijvend langs in Lier en de omliggende deelgemeenten. De verplaatsing is volledig gratis en bij u zonder verplichtingen." },
      { q: "Is gevelisolatie mogelijk bij een woning in de Lierse binnenstad?", a: "In beschermde stadsgezichten gelden strikte regels. Wij bekijken altijd of buitengevelisolatie vergunningsplichtig is en adviseren u over de beste aanpak voor uw specifieke situatie. Soms is een minder zichtbare isolatiemethode de beste oplossing." },
    ],
    seo: {
      title: "Dakisolatie & Gevelisolatie Lier — ISOPROTECH",
      description: "Professionele dakisolatie en gevelisolatie in Lier. Gratis inspectie, vrijblijvende offerte, 10 jaar garantie. Neem contact op met ISOPROTECH.",
    },
  },
  {
    id: "boom",
    slug: "boom",
    name: "Boom",
    zip: "2850",
    province: "Antwerpen",
    intro: "Boom ligt aan de Rupel ten zuiden van Antwerpen en is een gemeente met veel arbeiderswoningen en rijhuizen uit de eerste helft van de twintigste eeuw. ISOPROTECH is actief in Boom met specialisatie in het isoleren van oudere gevel- en dakconstructies.",
    localContext: "De typische Boomse rijwoning heeft massieve gevels zonder isolatie en een hellend dak dat te weinig isoleert. Buitengevelisolatie met crepi is hier bijzonder effectief: de investering is relatief beperkt en het energetische voordeel is groot. Wij combineren dit dikwijls met dakisolatie en eventuele asbestverwijdering voor een totaalaanpak.",
    projectRefs: [],
    localFaqs: [
      { q: "Zijn er specifieke uitdagingen bij het isoleren van oude rijwoningen in Boom?", a: "Oudere rijwoningen in Boom hebben smalle gevels en zijn soms gebouwd met asbesthoudende materialen. Wij inspecteren altijd eerst grondig, verwijderen indien nodig asbest veilig en leggen dan pas de isolatielaag aan. Dit garandeert een correcte en veilige uitvoering." },
    ],
    seo: {
      title: "Isolatie & Dakrenovatie Boom — ISOPROTECH",
      description: "Gevelisolatie en dakisolatie in Boom. Specialisten voor oudere rijwoningen en jaren-30 bebouwing. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
    },
  },
  {
    id: "zwijndrecht",
    slug: "zwijndrecht",
    name: "Zwijndrecht",
    zip: "2070",
    province: "Antwerpen",
    intro: "Zwijndrecht ligt direct over de Schelde van Antwerpen en is een gemeente met een mix van naoorlogse woningbouw en recentere verkavelingen. ISOPROTECH werkt hier regelmatig voor particulieren die hun woning energiezuiniger willen maken.",
    localContext: "De ligging van Zwijndrecht tegenover de Antwerpse haven maakt het een forensengemeente met veel gezinswoningen uit de jaren 60–80. Deze woningen zijn gebouwd zonder degelijke gevel- of dakisolatie en lenen zich uitstekend voor een gerichte energierenovatie. Combinatieprojecten dak + gevel zijn hier een populaire keuze.",
    projectRefs: [],
    localFaqs: [
      { q: "Rijden jullie ook naar Zwijndrecht?", a: "Ja, Zwijndrecht behoort tot ons vaste werkgebied. Vanuit ons kantoor in Hoboken zijn wij er snel bij. Gratis inspectie en offerte zonder verplichtingen." },
    ],
    seo: {
      title: "Gevelisolatie & Dakwerken Zwijndrecht — ISOPROTECH",
      description: "Dak- en gevelisolatie in Zwijndrecht. Direct bij Antwerpen, gratis inspectie, 10 jaar garantie. ISOPROTECH.",
    },
  },
  {
    id: "aartselaar",
    slug: "aartselaar",
    name: "Aartselaar",
    zip: "2630",
    province: "Antwerpen",
    intro: "Aartselaar is een groene gemeente ten zuiden van Antwerpen, geliefd om zijn rustige woonwijken en ruime gezinswoningen. ISOPROTECH voert er dakisolatie- en gevelisolatieprojecten uit, vaak voor vrijstaande woningen met grote gevels.",
    localContext: "De woningen in Aartselaar zijn gemiddeld groter dan in de Antwerpse stad, wat buitengevelisolatie extra kosteneffectief maakt: grotere geveloppervlakken betekenen grotere premies en grotere energiebesparingen. Wij werken hier met premium afwerkingssystemen passend bij het kwalitatieve karakter van de buurt.",
    projectRefs: [],
    localFaqs: [],
    seo: {
      title: "Gevelisolatie & Dakisolatie Aartselaar — ISOPROTECH",
      description: "Professionele gevelisolatie en dakisolatie in Aartselaar. Gratis inspectie, vrijblijvende offerte, 10 jaar garantie. ISOPROTECH.",
    },
  },
  {
    id: "boechout",
    slug: "boechout",
    name: "Boechout",
    zip: "2530",
    province: "Antwerpen",
    intro: "Boechout is een residentiële gemeente ten zuidoosten van Antwerpen met een hoog aandeel vrijstaande en halfopen gezinswoningen. ISOPROTECH is actief in Boechout met dak- en gevelisolatiewerken voor particulieren.",
    localContext: "De woningbouw in Boechout is relatief recent vergeleken met de Antwerpse stad, maar ook hier zijn er veel woningen uit de jaren 70–90 die nog niet of onvoldoende geïsoleerd zijn. Spuitkurk als gevelafwerking is populair in Boechout vanwege de moderne uitstraling die goed past bij de bestaande architectuur.",
    projectRefs: [],
    localFaqs: [],
    seo: {
      title: "Isolatie Boechout — Gevel & Dak | ISOPROTECH",
      description: "Dak- en gevelisolatie in Boechout. Ervaring met gezinswoningen in de Antwerpse regio. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
    },
  },
  {
    id: "hove",
    slug: "hove",
    name: "Hove",
    zip: "2540",
    province: "Antwerpen",
    intro: "Hove is een compacte maar welvarende gemeente tussen Antwerpen en Lier. De gemeente telt veel kwalitatieve gezinswoningen waarbij esthetiek en technische prestatie hand in hand gaan. ISOPROTECH verzorgt hier gevel- en dakisolatieprojecten met aandacht voor detail.",
    localContext: "In Hove verwachten bewoners een nette, strakke afwerking. Wij werken hier met gecertificeerde systemen die zowel technisch als esthetisch het hoogste niveau halen. Crepi en spuitkurk in neutrale of moderne kleuren zijn populaire keuzes die de uitstraling van de woning verbeteren.",
    projectRefs: [],
    localFaqs: [],
    seo: {
      title: "Gevelisolatie & Dakwerken Hove — ISOPROTECH",
      description: "Professionele gevel- en dakisolatie in Hove bij Antwerpen. Premium afwerking, gratis inspectie, 10 jaar garantie. ISOPROTECH.",
    },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getNearbyCities(cityId: string, max = 6): CityData[] {
  return cities.filter((c) => c.id !== cityId).slice(0, max);
}
