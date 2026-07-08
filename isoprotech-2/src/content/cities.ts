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
      description: "Dakisolatie, gevelisolatie, crepi en asbestverwijdering in Antwerpen. Lokale vakman, gratis inspectie, 10 jaar garantie. Bel +32 465 88 27 01.",
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
    localFaqs: [
      { q: "Is er een vergunning nodig voor gevelisolatie in Schilde?", a: "Voor standaard buitengevelisolatie is in Schilde doorgaans geen vergunning nodig. Voor woningen in beschermde zones of met een architecturaal karakter raden wij aan dit te laten controleren. Wij adviseren u hierover tijdens de gratis inspectie." },
      { q: "Welke gevelafwerking past het best bij een villa in Schilde?", a: "Voor de grotere, kwalitatieve woningen in Schilde kiezen veel eigenaars voor minerale crepi in een neutrale tint of voor een combinatie van crepi en steenstrips. Spuitkurk is een duurzame optie voor gevels met een unieke structuur. Wij leggen u de opties uit en passen ze aan uw voorkeur." },
      { q: "Bieden jullie ook dakrenovatie aan in Schilde?", a: "Ja. In Schilde voeren wij regelmatig gecombineerde dak- en gevelprojecten uit. Grotere, vrijstaande woningen combineren wij graag in één werf — efficiënter voor u en voor ons team." },
    ],
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
    localFaqs: [
      { q: "Welke afwerking past bij een kwalitatieve woning in Brasschaat?", a: "In Brasschaat is de verwachting voor kwaliteit en afwerking hoog. Wij werken hier met premium mineralecrepi-systemen en besteden extra aandacht aan details rond ramen, dakgoten en hoeken. Spuitkurk is ook populair voor zijn naadloze uitstraling en kleurvastheid." },
      { q: "Zijn er premies voor gevelisolatie in Brasschaat?", a: "Ja — via Mijn VerbouwPremie kunt u premies aanvragen voor buitengevelisolatie, ongeacht uw gemeente. Wij controleren uw recht op premies en dienen de aanvraag in voor u." },
      { q: "Hoelang duurt gevelisolatie voor een grote vrijstaande woning in Brasschaat?", a: "Voor een grotere vrijstaande woning in Brasschaat rekent u op 3 tot 5 weken, afhankelijk van de geveloppervlakte en de complexiteit van de details. Wij plannen alles vooraf en communiceren duidelijk over de doorlooptijd." },
    ],
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
    localFaqs: [
      { q: "Werken jullie ook bij oudere woningen in Kapellen waar asbest aanwezig kan zijn?", a: "Ja. In Kapellen zijn er woningen gebouwd vóór 1990 waar asbestmateriaal aanwezig kan zijn — met name in daken en gevels. Wij voeren de asbestinventarisatie en verwijdering uit vóór de start van de isolatiewerken. Een gecombineerde aanpak is zowel praktisch als kosteneffectief." },
      { q: "Kan ik dak- en gevelisolatie combineren in Kapellen?", a: "Zeker. Het is zelfs aan te raden. Door dak en gevel samen aan te pakken, betaalt u maar één keer voor stellingwerk en vermijdt u twee periodes van werken aan uw woning. Wij plannen beide ingrepen in één werf." },
      { q: "Hoe snel kan ISOPROTECH in Kapellen starten?", a: "Kapellen ligt op goede rijafstand van ons kantoor in Antwerpen. Na uw aanvraag plannen wij een gratis inspectie binnen de week en bezorgen u een offerte. De startdatum voor de werken stemmen wij af op uw planning." },
    ],
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
    localFaqs: [
      { q: "Hoeveel kost gevelisolatie voor een typische woning in Edegem?", a: "De meeste woningen in Edegem zijn halfopen bebouwing uit de jaren 50–70 met een geveloppervlak van 80 tot 120 m². Een indicatieve prijs voor buitengevelisolatie met crepi ligt voor dit type woning tussen €8.500 en €18.000, afhankelijk van de staat van de gevel, de isolatiedikte en de gekozen afwerking. Gebruik onze calculator of vraag een gratis inspectie aan voor een exacte prijs." },
      { q: "Zijn er referenties van ISOPROTECH in Edegem?", a: "Ja. Wij hebben in Edegem meerdere dak- en gevelprojecten gerealiseerd, waaronder hellende dakrenovaties en gevelisolatie met crepi op halfopen bebouwing. Bekijk onze realisaties voor meer voorbeelden." },
      { q: "Combineert ISOPROTECH dak- en gevelisolatie in Edegem?", a: "Ja. Voor de typische woning in Edegem is een gecombineerde aanpak — hellend dak renoveren én gevel isoleren — het meest kosteneffectief. Wij plannen beide ingrepen in één werf en zorgen voor een naadloze aansluiting." },
    ],
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
    localFaqs: [
      { q: "Werken jullie ook in Kontich voor particuliere woningen?", a: "Ja. Kontich valt volledig in ons werkgebied. Wij zijn regelmatig actief in Kontich voor zowel dak- als gevelprojecten. De afstand tot ons kantoor in Antwerpen is beperkt, wat de planning en communicatie vereenvoudigt." },
      { q: "Is gevelisolatie interessant voor een woning in het centrum van Kontich?", a: "Zeker. Oudere woningen in het centrum van Kontich hebben vaak massieve muren zonder isolatie — de ideale kandidaten voor buitengevelisolatie. De woning wint aan comfort en uitstraling, en u profiteert van de Vlaamse premies." },
      { q: "Welke diensten biedt ISOPROTECH aan in Kontich?", a: "In Kontich bieden wij dezelfde diensten als in heel ons werkgebied: dakisolatie, dakrenovatie, gevelisolatie, crepi, spuitkurk en asbestverwijdering. Vraag een gratis inspectie aan en wij bespreken wat het meest zinvol is voor uw specifieke woning." },
    ],
    seo: {
      title: "Isolatie Kontich — Dak & Gevel | ISOPROTECH",
      description: "Dak- en gevelisolatie in Kontich. Tussen Antwerpen en Mechelen. Gratis inspectie, 10 jaar garantie. ISOPROTECH.",
    },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getNearbyCities(cityId: string, max = 6): CityData[] {
  return cities.filter((c) => c.id !== cityId).slice(0, max);
}
