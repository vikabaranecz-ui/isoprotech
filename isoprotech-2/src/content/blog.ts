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
  {
    id: "gevelisolatie-prijs-m2-2026",
    slug: "gevelisolatie-prijs-m2-2026",
    title: "Gevelisolatie prijs per m² in 2026 — wat kost het echt?",
    date: "2026-04-10",
    dateDisplay: "10 april 2026",
    category: "Gevelisolatie",
    readTime: "6 min",
    excerpt: "Een eerlijk overzicht van de werkelijke kosten voor buitengevelisolatie in Antwerpen. Materiaal, arbeid, stelling en afwerking — alles meegerekend.",
    photo: PHOTOS.gevelCrepiAntw2,
    body: [
      { type: "text", content: "Wie gevelisolatie overweegt, wil weten wat het werkelijk kost. Online vindt u uiteenlopende prijzen — van €80 tot €250 per m². Het verschil zit in wat er wél en niet is inbegrepen. In dit artikel geven we een eerlijk overzicht op basis van onze werkelijke projecten in Antwerpen." },
      { type: "heading", content: "Wat zit er in de prijs per m²?" },
      { type: "text", content: "Een realistische prijs voor buitengevelisolatie omvat: het isolatiemateriaal, de gevelafwerking, stellingen, arbeid, voorbereiding van de ondergrond, en afwerking rond ramen en deuren. Prijzen die alleen isolatiemateriaal vermelden, geven een vertekend beeld." },
      { type: "heading", content: "Richtprijzen per afwerking" },
      { type: "text", content: "In Antwerpen liggen de totale kosten voor buitengevelisolatie met afwerking doorgaans tussen €140 en €230 per m², afhankelijk van het type afwerking. Crepi is de meest budgetvriendelijke optie, steenstrips de duurste. Spuitkurk en kaleien zitten daar tussenin." },
      { type: "heading", content: "Factoren die de prijs beïnvloeden" },
      { type: "text", content: "Naast de afwerking spelen ook de gevelhoogte, de staat van de bestaande gevel, het aantal ramen en deuren, en de bereikbaarheid een rol. Een gevel boven 5 meter hoogte vereist zwaardere stellingen, wat de kosten verhoogt." },
      { type: "heading", content: "Premies drukken de netto-investering" },
      { type: "text", content: "Via Mijn Verbouwpremie en eventueel gemeentelijke premies kunt u een deel van de investering recupereren. Dit maakt gevelisolatie financieel nog aantrekkelijker, zeker in combinatie met de structurele energiebesparing." },
      { type: "heading", content: "Gebruik onze calculator" },
      { type: "text", content: "Wilt u een indicatieve prijs voor uw specifieke situatie? Gebruik onze gevelcalculator voor een schatting op maat, gebaseerd op de actuele marktprijzen in Antwerpen." },
    ],
    relatedSlugs: ["gevelisolatie-voordelen-2026", "premies-renovatie-2026"],
    seo: {
      title: "Gevelisolatie Prijs per m² 2026 — Wat Kost Het? | ISOPROTECH",
      description: "Wat kost gevelisolatie per m² in 2026? Eerlijk overzicht: materiaal, arbeid, stelling, afwerking. Richtprijzen Antwerpen. ISOPROTECH.",
    },
  },
  {
    id: "buitenmuur-isoleren-buitenzijde",
    slug: "buitenmuur-isoleren-buitenzijde",
    title: "Buitenmuur isoleren via de buitenzijde — wanneer is het zinvol?",
    date: "2026-04-01",
    dateDisplay: "1 april 2026",
    category: "Gevelisolatie",
    readTime: "5 min",
    excerpt: "Niet elke woning is geschikt voor buitengevelisolatie. Wanneer is het de beste keuze en wanneer zijn er betere alternatieven?",
    photo: PHOTOS.gevelEkeren,
    body: [
      { type: "text", content: "Buitengevelisolatie — het aanbrengen van een isolatielaag aan de buitenzijde van uw muur — is een van de meest effectieve manieren om een woning energiezuinig te maken. Maar het is niet altijd de beste keuze. In dit artikel bekijken we wanneer buitenisolatie zinvol is en wanneer niet." },
      { type: "heading", content: "Ideale kandidaten" },
      { type: "text", content: "Woningen met massieve muren zonder spouwmuur zijn de ideale kandidaten. Dit geldt voor de meeste Belgische woningen gebouwd vóór 1975. Ook woningen met een lege of onvoldoende gevulde spouw komen in aanmerking, net als woningen waar de gevel toe is aan een visuele opfrisbeurt." },
      { type: "heading", content: "Voordelen ten opzichte van binnenisolatie" },
      { type: "text", content: "Buitenisolatie heeft meerdere voordelen tegenover binnenisolatie: geen verlies van binnenruimte, minder risico op condensatie- en vochtproblemen, en de bestaande muur blijft in het warme deel van de constructie waardoor het binnenklimaat stabieler is." },
      { type: "heading", content: "Wanneer is het minder geschikt?" },
      { type: "text", content: "Bij beschermde gevels, monumentale panden, of woningen waar de rooilijn geen extra geveldikte toelaat, is buitenisolatie niet altijd mogelijk. In die gevallen kan binnenisolatie of spouwmuurisolatie een beter alternatief zijn." },
      { type: "heading", content: "Combinatie met afwerking" },
      { type: "text", content: "Een groot voordeel van buitenisolatie is dat u tegelijk de gevelafwerking vernieuwt. Crepi, spuitkurk of steenstrips geven uw woning een volledig nieuwe uitstraling — een dubbele investering die zowel energetisch als esthetisch rendeert." },
    ],
    relatedSlugs: ["gevelisolatie-voordelen-2026", "gevelisolatie-prijs-m2-2026"],
    seo: {
      title: "Buitenmuur Isoleren via de Buitenzijde — ISOPROTECH Blog",
      description: "Wanneer is buitengevelisolatie zinvol? Voordelen, beperkingen en alternatieven. Advies van ISOPROTECH Antwerpen.",
    },
  },
  {
    id: "dakrenovatie-plat-dak-2026",
    slug: "dakrenovatie-plat-dak-2026",
    title: "Plat dak renoveren in 2026 — EPDM, roofing of groendak?",
    date: "2026-03-20",
    dateDisplay: "20 maart 2026",
    category: "Dakrenovatie",
    readTime: "7 min",
    excerpt: "Uw plat dak is aan vervanging toe. Welke dakbedekking kiest u? Een vergelijking van EPDM, roofing en groendak.",
    photo: PHOTOS.platDak,
    body: [
      { type: "text", content: "Een plat dak heeft een beperktere levensduur dan een hellend dak. Na 20 tot 30 jaar is een volledige renovatie vaak nodig. De keuze van dakbedekking bepaalt niet alleen de prijs, maar ook de levensduur, het onderhoud en de ecologische impact." },
      { type: "heading", content: "Bitumen roofing — de klassieke keuze" },
      { type: "text", content: "Bitumen roofing is de meest toegepaste dakbedekking voor platte daken in België. Het is betrouwbaar, relatief betaalbaar en goed bestand tegen de Belgische weersomstandigheden. De levensduur ligt rond 20 tot 25 jaar bij correct onderhoud." },
      { type: "heading", content: "EPDM — duurzaam en naadloos" },
      { type: "text", content: "EPDM is een synthetisch rubbermembraan dat in grote banen wordt aangebracht, waardoor er minder naden zijn. Het is bijzonder duurzaam (30+ jaar), flexibel bij temperatuurschommelingen en bestand tegen UV-straling. De iets hogere aanschafprijs wordt gecompenseerd door de langere levensduur." },
      { type: "heading", content: "Groendak — ecologisch en isolerend" },
      { type: "text", content: "Een groendak (sedumdak) combineert waterdichting met een vegetatielaag. Het biedt extra isolatie, vertraagt regenwater, verbetert de biodiversiteit en verlengt de levensduur van de waterdichte laag. Het is duurder in aanschaf maar levert meerdere voordelen op lange termijn." },
      { type: "heading", content: "Combineer renovatie met isolatie" },
      { type: "text", content: "Bij een dakbedekkingsrenovatie is het technisch en financieel slim om tegelijk de dakisolatie te vernieuwen. De constructie ligt toch open, en de meerkosten voor isolatie zijn beperkt vergeleken met de energiebesparing die u er jarenlang mee realiseert." },
    ],
    relatedSlugs: ["dakisolatie-plat-hellend", "epc-label-verbeteren"],
    seo: {
      title: "Plat Dak Renoveren 2026 — EPDM, Roofing of Groendak? | ISOPROTECH",
      description: "Plat dak renoveren? Vergelijking EPDM, bitumen roofing en groendak. Prijzen, levensduur en advies. ISOPROTECH Antwerpen.",
    },
  },
  {
    id: "isolatie-zonder-bouwvergunning",
    slug: "isolatie-zonder-bouwvergunning",
    title: "Welke isolatiewerken mag u uitvoeren zonder bouwvergunning?",
    date: "2026-03-10",
    dateDisplay: "10 maart 2026",
    category: "Regelgeving",
    readTime: "4 min",
    excerpt: "Niet alle isolatiewerken vereisen een stedenbouwkundige vergunning. Wat mag wél en wat niet? Een overzicht voor Vlaanderen.",
    photo: PHOTOS.gevelCrepiMeise,
    body: [
      { type: "text", content: "Veel woningeigenaren twijfelen of ze een bouwvergunning nodig hebben voor isolatiewerken. In Vlaanderen is het antwoord in de meeste gevallen nee — maar er zijn uitzonderingen. Dit artikel geeft een overzicht van de regels in 2026." },
      { type: "heading", content: "Dakisolatie — vrijgesteld" },
      { type: "text", content: "Dakisolatie aan de binnenzijde (tussen of onder de spanten) is in Vlaanderen vrijgesteld van vergunning. Ook dakisolatie bovenop het dak bij platte daken vereist doorgaans geen vergunning, tenzij de dakopbouw significant wordt verhoogd." },
      { type: "heading", content: "Buitengevelisolatie — let op de dikte" },
      { type: "text", content: "Buitengevelisolatie met een afwerking (crepi, spuitkurk) is in de meeste gemeenten vrijgesteld, op voorwaarde dat de gevel niet meer dan 14 cm dikker wordt. Bij woningen in een beschermd stadsgezicht of nabij de rooilijn kan een vergunning wél nodig zijn." },
      { type: "heading", content: "Wanneer is een vergunning wél nodig?" },
      { type: "text", content: "Een vergunning is nodig als de isolatiewerken de buitenafmetingen van de woning significant wijzigen, als u in een beschermd gebied woont, of als de werken gepaard gaan met structurele aanpassingen. Bij twijfel: informeer bij uw gemeente of laat het ons opzoeken." },
      { type: "heading", content: "ISOPROTECH adviseert" },
      { type: "text", content: "Wij controleren bij elk project of een vergunning nodig is. Als dat het geval is, begeleiden wij u bij de aanvraag. U hoeft zich hier geen zorgen over te maken — wij regelen het." },
    ],
    relatedSlugs: ["gevelisolatie-voordelen-2026", "premies-renovatie-2026"],
    seo: {
      title: "Isolatie Zonder Bouwvergunning — Wat Mag Wel? | ISOPROTECH",
      description: "Welke isolatiewerken zijn vrijgesteld van bouwvergunning in Vlaanderen? Dakisolatie, gevelisolatie, regels 2026. ISOPROTECH.",
    },
  },
  {
    id: "energiezuinig-renoveren-stappenplan",
    slug: "energiezuinig-renoveren-stappenplan",
    title: "Energiezuinig renoveren — het volledige stappenplan",
    date: "2026-02-28",
    dateDisplay: "28 februari 2026",
    category: "Energie",
    readTime: "8 min",
    excerpt: "Van dakisolatie tot gevelafwerking: de juiste volgorde voor een energiezuinige renovatie in Vlaanderen.",
    photo: PHOTOS.dakGevelMechelen,
    body: [
      { type: "text", content: "Een energiezuinige renovatie is geen kwestie van één maatregel. Het is een combinatie van isolatie, ventilatie en efficiënte installaties — in de juiste volgorde. Dit stappenplan helpt u de meest kosteneffectieve aanpak te kiezen." },
      { type: "heading", content: "Stap 1: Dakisolatie" },
      { type: "text", content: "Begin altijd bovenaan. Via het dak verliest een woning tot 30% van zijn warmte. Dakisolatie is bijna altijd de eerste en meest rendabele stap. De terugverdientijd ligt tussen 5 en 8 jaar, en u merkt het verschil onmiddellijk in wooncomfort." },
      { type: "heading", content: "Stap 2: Gevelisolatie" },
      { type: "text", content: "Na het dak zijn de muren aan de beurt. Buitengevelisolatie voorkomt 20 tot 25% warmteverlies en moderniseert tegelijk de uitstraling van uw woning. Combineer dit met een afwerking naar keuze: crepi, spuitkurk of steenstrips." },
      { type: "heading", content: "Stap 3: Schrijnwerk en beglazing" },
      { type: "text", content: "Vervang enkel of dubbel glas door hoogrendementsbeglazing. Samen met goed geïsoleerde raamprofielen vermindert dit warmteverlies én geluidshinder aanzienlijk." },
      { type: "heading", content: "Stap 4: Ventilatie" },
      { type: "text", content: "Een goed geïsoleerde woning moet goed ventileren. Mechanische ventilatie met warmteterugwinning (systeem D) is de meest efficiënte oplossing. Dit voorkomt vochtproblemen en zorgt voor gezonde binnenlucht." },
      { type: "heading", content: "Stap 5: Verwarmingsinstallatie" },
      { type: "text", content: "Pas na het isoleren van de schil investeert u in een nieuw verwarmingssysteem. Een warmtepomp is ideaal in een goed geïsoleerde woning, maar ook een condensatieketel kan nog een goede keuze zijn bij een stapsgewijze renovatie." },
      { type: "heading", content: "Premies en financiering" },
      { type: "text", content: "Elke stap komt in aanmerking voor premies via Mijn Verbouwpremie. Door de werken in de juiste volgorde uit te voeren, maximaliseert u zowel de energiebesparing als de beschikbare premies. ISOPROTECH helpt u bij de eerste twee stappen: dak en gevel." },
    ],
    relatedSlugs: ["epc-label-verbeteren", "gevelisolatie-voordelen-2026"],
    seo: {
      title: "Energiezuinig Renoveren Stappenplan — ISOPROTECH Blog",
      description: "De juiste volgorde voor energiezuinig renoveren: dak, gevel, ramen, ventilatie, verwarming. Stappenplan en premies. ISOPROTECH.",
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
