// src/content/blog.ts
// Blog articles — structured content with full body paragraphs, headings, and SEO

import { PHOTOS } from "@/lib/constants";

export interface BlogParagraph {
  type: "text" | "heading";
  content: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO date
  dateDisplay: string;
  category: string;
  readTime: string;
  excerpt: string;
  photo: typeof PHOTOS[keyof typeof PHOTOS];
  body: BlogParagraph[];
  relatedSlugs: string[];
  seo: {
    title: string;
    description: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "gevelisolatie-voordelen-2026",
    slug: "gevelisolatie-voordelen-2026",
    title: "De 7 voordelen van gevelisolatie in 2026",
    date: "2026-03-15",
    dateDisplay: "15 maart 2026",
    category: "Gevelisolatie",
    readTime: "5 min",
    excerpt: "Ontdek waarom gevelisolatie dé investering van het jaar is. Van lagere energiefacturen tot een hogere woningwaarde — alle voordelen op een rij.",
    photo: PHOTOS.gevelCrepiMeise,
    body: [
      { type: "text", content: "Gevelisolatie is in 2026 meer dan ooit een slimme investering voor elke woningeigenaar in België. Met stijgende energieprijzen en strengere EPC-normen is het isoleren van uw buitengevels niet langer optioneel — het is essentieel voor zowel uw portemonnee als uw wooncomfort." },
      { type: "heading", content: "1. Lagere energiefactuur" },
      { type: "text", content: "Het eerste en meest tastbare voordeel is de verlaging van uw energiefactuur. Een goed geïsoleerde gevel voorkomt tot 35% warmteverlies via de buitenmuren. Dit vertaalt zich direct in lagere verwarmingskosten in de winter en minder nood aan koeling in de zomer." },
      { type: "heading", content: "2. Betere EPC-score" },
      { type: "text", content: "Gevelisolatie verbetert uw EPC-score aanzienlijk. Een beter EPC-label verhoogt niet alleen de waarde van uw woning, maar is ook wettelijk steeds belangrijker bij verkoop of verhuur in Vlaanderen. Vanaf 2026 gelden nog strengere normen voor het EPC bij verkoop." },
      { type: "heading", content: "3. Aangenamer binnenklimaat" },
      { type: "text", content: "Buitengevelisolatie zorgt voor een stabiel binnenklimaat. Geen koude muren meer in de winter, minder oververhitting in de zomer, en minder tocht. Dit verhoogt het wooncomfort voor het hele gezin, in elk seizoen." },
      { type: "heading", content: "4. Esthetische vernieuwing" },
      { type: "text", content: "In combinatie met crepi, spuitkurk of steenstrips geeft u uw woning een volledig nieuwe uitstraling. De gevel wordt modern, strak en onderhoudsvriendelijk — een visuele upgrade die meteen opvalt." },
      { type: "heading", content: "5. Bescherming tegen vocht" },
      { type: "text", content: "Gevelisolatie beschermt uw woning tegen vochtproblemen en schimmel. Door condensatie op koude muren te voorkomen, blijft uw binnenomgeving gezonder. De isolatielaag vormt een extra barrière tegen weersinvloeden." },
      { type: "heading", content: "6. Renovatiepremies" },
      { type: "text", content: "Via Mijn Verbouwpremie kunt u in 2026 aanzienlijke premies aanvragen voor gevelisolatie. De premie hangt af van uw inkomen en de bereikte isolatiewaarde, maar kan een betekenisvol deel van de investering dekken." },
      { type: "heading", content: "7. Hogere woningwaarde" },
      { type: "text", content: "Tot slot verhoogt gevelisolatie de marktwaarde van uw woning structureel. Potentiële kopers kijken steeds meer naar de energieprestaties van een woning. Een goede isolatie met een mooie afwerking is een doorslaggevend verkoopargument." },
    ],
    relatedSlugs: ["epc-label-verbeteren", "crepi-vs-spuitkurk"],
    seo: {
      title: "7 Voordelen van Gevelisolatie in 2026 — ISOPROTECH Blog",
      description: "Waarom gevelisolatie in 2026 de slimste investering is. Lagere energiekosten, betere EPC-score, hogere woningwaarde. Lees alle voordelen.",
    },
  },
  {
    id: "dakisolatie-plat-hellend",
    slug: "dakisolatie-plat-hellend",
    title: "Dakisolatie: plat dak vs. hellend dak",
    date: "2026-03-01",
    dateDisplay: "1 maart 2026",
    category: "Dakisolatie",
    readTime: "6 min",
    excerpt: "Beide daktypes vragen een andere aanpak. De technische verschillen en hoe u de juiste keuze maakt.",
    photo: PHOTOS.platDak,
    body: [
      { type: "text", content: "Bij dakisolatie is het type dak bepalend voor de aanpak. Een plat dak en een hellend dak vragen elk een andere techniek, andere materialen en een andere uitvoering. In dit artikel leggen we de belangrijkste verschillen uit." },
      { type: "heading", content: "Hellend dak isoleren" },
      { type: "text", content: "Bij een hellend dak wordt de isolatie doorgaans langs de binnenzijde geplaatst, tussen of onder de dakspanten. Materialen zoals minerale wol of PIR-platen zijn hiervoor het meest geschikt. De isolatie moet luchtdicht worden afgewerkt met een dampscherm om vochtproblemen te voorkomen." },
      { type: "heading", content: "Plat dak isoleren" },
      { type: "text", content: "Bij een plat dak wordt de isolatie meestal bovenop de draagstructuur geplaatst, in combinatie met een waterdichte dakbedekking zoals EPDM of roofing. Hier wordt vaak gekozen voor PUR-, PIR- of EPS-isolatieplaten. Het zogenaamde 'warm dak'-principe is de standaard." },
      { type: "heading", content: "Verschil in afwatering" },
      { type: "text", content: "Een belangrijk technisch verschil is de afwatering. Bij een plat dak moet de isolatie-opbouw zorgen voor voldoende afschot richting de afvoer. Bij een hellend dak is dit door de helling vanzelf geregeld, wat de uitvoering eenvoudiger maakt." },
      { type: "heading", content: "Isolatiewaarde" },
      { type: "text", content: "Qua isolatiewaarde is er geen fundamenteel verschil — beide daktypes kunnen dezelfde U-waarden bereiken. Het verschil zit in de uitvoering, de materialen en de aandachtspunten bij de plaatsing." },
      { type: "heading", content: "Renovatie-overwegingen" },
      { type: "text", content: "Bij renovatie is dakisolatie van een hellend dak vaak eenvoudiger uit te voeren zonder de dakbedekking te verwijderen — de isolatie kan langs de binnenzijde worden aangebracht. Bij een plat dak is het meestal nodig om de volledige opbouw te vernieuwen, wat een grotere ingreep is maar ook de kans biedt om de waterdichting te vernieuwen." },
    ],
    relatedSlugs: ["gevelisolatie-voordelen-2026", "epc-label-verbeteren"],
    seo: {
      title: "Dakisolatie: Plat vs. Hellend Dak — ISOPROTECH Blog",
      description: "Verschil tussen plat dak en hellend dak isoleren. Techniek, materialen en renovatie-overwegingen. Advies van ISOPROTECH Antwerpen.",
    },
  },
  {
    id: "crepi-vs-spuitkurk",
    slug: "crepi-vs-spuitkurk",
    title: "Crepi of spuitkurk? De juiste keuze voor uw gevel",
    date: "2026-02-20",
    dateDisplay: "20 februari 2026",
    category: "Gevelafwerking",
    readTime: "4 min",
    excerpt: "Een vergelijking van twee populaire gevelafwerkingen: prijs, onderhoud, uitstraling en duurzaamheid.",
    photo: PHOTOS.crepiSchoten,
    body: [
      { type: "text", content: "Crepi en spuitkurk zijn beide populaire gevelafwerkingen in België. Ze worden vaak gecombineerd met buitengevelisolatie en geven uw woning een verzorgde, moderne uitstraling. Maar welke past het best bij uw situatie?" },
      { type: "heading", content: "Crepi: strak en mineraal" },
      { type: "text", content: "Crepi is een minerale pleisterafwerking met een strakke, uniforme uitstraling. Het is beschikbaar in verschillende korrelgroottes en structuren — van fijn tot grof. Crepi is dampdoorlatend, beschermt de onderliggende isolatie en is relatief budgetvriendelijk." },
      { type: "heading", content: "Spuitkurk: elastisch en naadloos" },
      { type: "text", content: "Spuitkurk is een elastische coating op basis van natuurlijke kurk. Het wordt naadloos aangebracht en is bijzonder goed bestand tegen scheuren en bewegingen in de ondergrond. Spuitkurk heeft bovendien een licht isolerend en akoestisch dempend effect." },
      { type: "heading", content: "Prijs en onderhoud" },
      { type: "text", content: "Qua prijs ligt spuitkurk doorgaans iets hoger dan standaard crepi. Het verschil wordt echter gecompenseerd door de langere levensduur en het lagere onderhoud. Spuitkurk is zelfherstellend bij kleine scheurtjes, terwijl crepi bij scheuren gerepareerd moet worden." },
      { type: "heading", content: "Wanneer wat kiezen?" },
      { type: "text", content: "Kies crepi als u een strakke, uniforme uitstraling wilt tegen een competitieve prijs. Kies spuitkurk als uw gevel gevoelig is voor scheuren, als u een naadloze afwerking prefereert, of als ecologie een belangrijk criterium is." },
    ],
    relatedSlugs: ["gevelisolatie-voordelen-2026", "premies-renovatie-2026"],
    seo: {
      title: "Crepi of Spuitkurk? Vergelijking Gevelafwerking — ISOPROTECH",
      description: "Vergelijking crepi vs. spuitkurk: prijs, onderhoud, uitstraling en duurzaamheid. Welke gevelafwerking past bij uw woning? ISOPROTECH adviseert.",
    },
  },
  {
    id: "epc-label-verbeteren",
    slug: "epc-label-verbeteren",
    title: "Hoe verbetert u uw EPC-label met isolatie?",
    date: "2026-02-10",
    dateDisplay: "10 februari 2026",
    category: "Energie",
    readTime: "7 min",
    excerpt: "Een beter EPC-label verhoogt uw woningwaarde. Welke isolatiewerken hebben het meeste impact?",
    photo: PHOTOS.dakGevelMechelen,
    body: [
      { type: "text", content: "Het EPC-label (Energieprestatiecertificaat) geeft aan hoe energiezuinig uw woning is. In Vlaanderen wordt dit steeds belangrijker — zowel bij verkoop als bij verhuur. Maar welke maatregelen hebben nu écht de grootste impact op uw EPC-score?" },
      { type: "heading", content: "Dakisolatie: de grootste impact" },
      { type: "text", content: "Dakisolatie heeft vaak de grootste impact op uw EPC-score. Via het dak gaat tot 30% van de warmte verloren, dus een goede dakisolatie kan uw label met één of meerdere klassen verbeteren. Dit is bijna altijd de meest kosteneffectieve eerste stap." },
      { type: "heading", content: "Gevelisolatie: de tweede prioriteit" },
      { type: "text", content: "Gevelisolatie is de tweede belangrijkste maatregel. Buitenmuren zijn verantwoordelijk voor 20 tot 25% van het totale warmteverlies. Buitengevelisolatie met crepi of spuitkurk verbetert niet alleen de isolatiewaarde maar moderniseert ook de uitstraling van uw woning." },
      { type: "heading", content: "Combinatie levert het meeste op" },
      { type: "text", content: "De grootste verbetering bereikt u door dak- en gevelisolatie te combineren. Samen dekken ze meer dan de helft van het warmteverlies. Bij een gecombineerde aanpak bespaart u bovendien op stellingen en mobilisatiekosten." },
      { type: "heading", content: "Premies en terugverdientijd" },
      { type: "text", content: "Via Mijn Verbouwpremie kunt u premies aanvragen die de investering in isolatie nog aantrekkelijker maken. De terugverdientijd van dakisolatie ligt doorgaans tussen 5 en 8 jaar, voor gevelisolatie tussen 8 en 12 jaar — afhankelijk van uw energieverbruik en de gekozen materialen." },
    ],
    relatedSlugs: ["gevelisolatie-voordelen-2026", "dakisolatie-plat-hellend"],
    seo: {
      title: "EPC-label Verbeteren met Isolatie — ISOPROTECH Blog",
      description: "Welke isolatiewerken verbeteren uw EPC-label het meest? Dakisolatie, gevelisolatie, premies en terugverdientijd uitgelegd.",
    },
  },
  {
    id: "premies-renovatie-2026",
    slug: "premies-renovatie-2026",
    title: "Renovatiepremies Vlaanderen 2026: volledig overzicht",
    date: "2026-01-25",
    dateDisplay: "25 januari 2026",
    category: "Premies",
    readTime: "8 min",
    excerpt: "Welke premies kunt u aanvragen voor dak- en gevelisolatie in Vlaanderen?",
    photo: PHOTOS.gevelCrepiAntw2,
    body: [
      { type: "text", content: "In 2026 biedt de Vlaamse overheid via Mijn Verbouwpremie verschillende premies aan voor woningrenovatie. Dit overzicht helpt u begrijpen welke premies beschikbaar zijn voor isolatiewerken en hoe u ze kunt aanvragen." },
      { type: "heading", content: "Premie voor dakisolatie" },
      { type: "text", content: "Voor dakisolatie kunt u een premie aanvragen die varieert naargelang uw inkomen en de oppervlakte van het geïsoleerde dak. De isolatie moet voldoen aan de minimale Rd-waarde die de overheid voorschrijft. De premie wordt berekend per m² geïsoleerd oppervlak." },
      { type: "heading", content: "Premie voor gevelisolatie" },
      { type: "text", content: "Voor gevelisolatie gelden vergelijkbare voorwaarden. De premie wordt berekend op basis van het geïsoleerde oppervlak en de bereikte U-waarde. Buitengevelisolatie met voldoende dikte komt vrijwel altijd in aanmerking." },
      { type: "heading", content: "Hoe aanvragen?" },
      { type: "text", content: "Belangrijk: u moet de premie aanvragen vóór de start van de werken via het online platform van Mijn Verbouwpremie. ISOPROTECH kan u hierbij begeleiden en zorgt ervoor dat de technische specificaties van de werken voldoen aan de premievoorwaarden." },
      { type: "heading", content: "Gemeentelijke premies" },
      { type: "text", content: "Naast Mijn Verbouwpremie zijn er soms ook gemeentelijke premies beschikbaar. De stad Antwerpen, Mechelen en andere gemeenten bieden soms bijkomende ondersteuning. Informeer bij uw gemeente of via het Ecohuis naar actuele mogelijkheden." },
    ],
    relatedSlugs: ["gevelisolatie-voordelen-2026", "epc-label-verbeteren"],
    seo: {
      title: "Renovatiepremies Vlaanderen 2026 — Overzicht | ISOPROTECH",
      description: "Overzicht renovatiepremies Vlaanderen 2026. Premies voor dakisolatie en gevelisolatie via Mijn Verbouwpremie. Hoe aanvragen? ISOPROTECH helpt.",
    },
  },
  {
    id: "asbest-herkennen",
    slug: "asbest-herkennen",
    title: "Hoe herkent u asbest in uw woning?",
    date: "2026-01-10",
    dateDisplay: "10 januari 2026",
    category: "Asbestverwijdering",
    readTime: "5 min",
    excerpt: "Asbest zit vaker in woningen dan u denkt. Leer de meest voorkomende toepassingen herkennen.",
    photo: PHOTOS.schilde,
    body: [
      { type: "text", content: "Asbest werd tot eind jaren 90 veelvuldig gebruikt in de Belgische bouw. Het zit in daken, gevelbekleding, leidingen, vloeren en zelfs in lijm en kit. Als u een woning bezit van vóór 2001, is de kans groot dat er ergens asbesthoudende materialen aanwezig zijn." },
      { type: "heading", content: "Meest voorkomende toepassingen" },
      { type: "text", content: "De meest voorkomende toepassingen zijn asbestcementen golfplaten op daken en bijgebouwen, gevelpanelen (vaak grijswitte vlakke platen), schoorsteenbuizen, en leidingisolatie in kelders en stookruimtes. Ook dakleien, vensterbanken en bloembakken kunnen asbest bevatten." },
      { type: "heading", content: "Hoe herkennen?" },
      { type: "text", content: "U kunt asbest niet met het blote oog herkennen. Het materiaal is vaak grijs of grijswit, soms geschilderd. De enige betrouwbare manier om asbest te identificeren is via een professionele inventarisatie of laboratoriumanalyse. Bij twijfel: niet breken, schuren of boren." },
      { type: "heading", content: "Wanneer is het gevaarlijk?" },
      { type: "text", content: "Asbest is alleen gevaarlijk wanneer vezels vrijkomen — bijvoorbeeld bij beschadiging, verwering, of bewerking. Onbeschadigde, hechtgebonden asbest (zoals in asbestcement) vormt een beperkt gezondheidsrisico zolang het materiaal intact blijft. Maar bij renovatiewerken is verwijdering verplicht." },
      { type: "heading", content: "Professionele verwijdering" },
      { type: "text", content: "ISOPROTECH voert asbestverwijdering uit volgens alle wettelijke normen. Wij zorgen voor een veilige verwijdering met beschermingsmaatregelen, gecertificeerd afvaltransport en volledige documentatie. Neem contact op voor een gratis inspectie." },
    ],
    relatedSlugs: ["premies-renovatie-2026", "dakisolatie-plat-hellend"],
    seo: {
      title: "Asbest Herkennen in Uw Woning — ISOPROTECH Blog",
      description: "Hoe herkent u asbest? Meest voorkomende toepassingen, risico's en professionele verwijdering. ISOPROTECH Antwerpen.",
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getBlogPostBySlug(slug);
  if (!post) return [];
  return post.relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter(Boolean) as BlogPost[];
}
