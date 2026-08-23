export type InsulationServiceSlug = "dakisolatie" | "gevelisolatie";

export interface InsulationStat {
  value: string;
  label: string;
}

export interface InsulationStep {
  step: string;
  title: string;
  desc: string;
}

export interface InsulationCard {
  title: string;
  body: string;
}

export interface InsulationTestimonial {
  quote: string;
  attribution: string;
}

export interface InsulationFaq {
  question: string;
  answer: string;
}

export interface InsulationServiceContent {
  slug: InsulationServiceSlug;
  heroDesc: string;
  seoDescription: string;
  benefits: string[];
  stats: InsulationStat[];
  process: InsulationStep[];
  problems?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
    outro: string;
  };
  methods?: InsulationCard[];
  explainer?: {
    title: string;
    body: string;
  };
  finishes?: InsulationCard[];
  symptomSection?: {
    title: string;
    body: string;
    caution: string;
  };
  testimonials: InsulationTestimonial[];
  premiums: InsulationCard[];
  premiumNote?: string;
  priceSection: {
    title: string;
    intro: string;
    factors: string[];
    outro: string;
    href: string;
    linkLabel: string;
  };
  faqs: InsulationFaq[];
  clarification?: string;
}

const dakisolatie: InsulationServiceContent = {
  slug: "dakisolatie",
  heroDesc:
    "Via een ongeïsoleerd dak verdwijnt voortdurend warmte uit uw woning — winter na winter betaalt u mee voor energie die letterlijk het huis verlaat. ISOPROTECH isoleert platte en hellende daken vakkundig, met een vaste prijs, 10 jaar garantie en begeleiding bij uw premie-aanvraag. In Antwerpen en omgeving.",
  seoDescription:
    "Dakisolatie in Antwerpen: plat en hellend dak, PIR-isolatie en sarking. Premie-advies inbegrepen, gratis inspectie, 10 jaar garantie.",
  benefits: [
    "Warmteverlies via het dak structureel beperken en uw energie-efficiëntie verbeteren",
    "Meer thermisch comfort op elke verdieping — constanter binnenklimaat, het hele jaar door",
    "Betere EPC-score — de meeste woningen verbeteren 1 à 2 labelstappen",
    "Positieve invloed op de woningwaarde",
    "Bescherming van uw dakstructuur tegen vocht en schimmel dankzij een nieuwe waterdichte dakbedekking",
    "Premie-aanvraag inbegrepen — wij regelen het voor u",
  ],
  stats: [
    { value: "150+", label: "Projecten afgerond" },
    { value: "10 jr", label: "Schriftelijke garantie" },
    { value: "5/5", label: "Google reviews" },
    { value: "48u", label: "Reactie gegarandeerd" },
  ],
  process: [
    {
      step: "01",
      title: "Gratis inspectie",
      desc: "Wij komen vrijblijvend bij u langs om de situatie te beoordelen en gericht advies te geven.",
    },
    {
      step: "02",
      title: "Duidelijke offerte",
      desc: "Na de inspectie ontvangt u een heldere offerte zonder verplichtingen of verborgen kosten, inclusief een overzicht van de premies waarvoor u in aanmerking komt.",
    },
    {
      step: "03",
      title: "Vakkundige uitvoering",
      desc: "Onze vakmensen voeren de werken correct en veilig uit, met kwaliteitscontrole in elke fase.",
    },
    {
      step: "04",
      title: "Nette oplevering",
      desc: "Wij ronden alles netjes af, precies zoals afgesproken, met 10 jaar schriftelijke garantie.",
    },
  ],
  problems: {
    eyebrow: "Het probleem",
    title: "Een ongeïsoleerd dak kost u geld",
    intro: "Een ongeïsoleerd dak laat op meerdere manieren merken dat er iets niet klopt:",
    items: [
      "Koud op de bovenverdieping in de winter, drukkend warm in de zomer — een ongeïsoleerd dak werkt in geen enkel seizoen in uw voordeel.",
      "Een energierekening die jaar na jaar zwaarder doorweegt, terwijl warmteverlies via het dak dat effect versterkt.",
      "Lekkages en vochtproblemen door verouderde dakbedekking, met risico op schimmel en houtrot aan de dakstructuur.",
      "Woningen gebouwd vóór 1990 bevatten vaak asbest in de dakbedekking — bij dakwerken is verwijdering wettelijk verplicht.",
      "Een dak dat de EPC-norm niet haalt, wat verhuur onder de Vlaamse regelgeving bemoeilijkt.",
    ],
    outro:
      "Benieuwd wat dakisolatie voor uw specifieke situatie betekent? Gebruik onze dakcalculator voor een persoonlijke inschatting, of vraag meteen een gratis inspectie aan voor exact advies.",
  },
  methods: [
    {
      title: "Plat dak isolatie + renovatie",
      body: "Bij een plat dak isoleren wij volgens het warm-dak principe: PIR-isolatieplaten aangebracht op de constructie, gevolgd door een nieuwe waterdichte bedekking (EPDM, bitumen of PVC-folie).",
    },
    {
      title: "Hellend dak renovatie + isolatie",
      body: "Bij een hellend dak brengen wij de isolatie aan tussen of boven de dakspanten, gevolgd door nieuwe dakpannen, leien of ander dakmateriaal naar keuze.",
    },
    {
      title: "Sarking",
      body: "Voor hellende daken bieden wij ook sarking aan — een isolatiemethode waarbij de isolatie aan de buitenzijde van de dakstructuur wordt aangebracht. Dit is vooral interessant bij renovatie, omdat de binnenzijde van het dak niet opengebroken hoeft te worden. Tijdens de gratis inspectie bekijken wij of sarking de beste oplossing is voor uw dak.",
    },
    {
      title: "Details en afwerking",
      body: "Schouwkappen, loodaansluitingen, dakramen en nokken — elk detail waterdicht afgewerkt. Geen concessies aan de periferie.",
    },
    {
      title: "Dakkapellen",
      body: "Extra leefruimte en daglicht op de bovenverdieping. Volledig geïntegreerd in uw bestaande dakstructuur, inclusief isolatie.",
    },
  ],
  testimonials: [
    {
      quote:
        "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee. Een betrouwbare partner voor wie kwaliteit en communicatie belangrijk zijn. Absoluut een aanrader!",
      attribution: "Woningeigenaar, Antwerpen · Dakrenovatie",
    },
    {
      quote:
        "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. Have already seen the huge difference on the EPC attest.",
      attribution: "Homeowner, Antwerp · Roof insulation + EPC",
    },
    {
      quote:
        "Het team houdt zich aan afspraken en planning. Zij werken zeer nauwkeurig en netjes. De communicatie verloopt vriendelijk, vlot en transparant. Wij zijn zeer tevreden over het eindresultaat.",
      attribution: "Woningeigenaar, Antwerpen · Dakwerken",
    },
    {
      quote:
        "Wij zijn bijzonder tevreden over onze samenwerking. Van bij de start viel de klantgerichte aanpak en duidelijke communicatie op. Uiterst professioneel uitgevoerd, en dat bovendien binnen een korte termijn.",
      attribution: "Woningeigenaar, Omgeving Antwerpen · Dakrenovatie + isolatie",
    },
  ],
  premiums: [
    {
      title: "Mijn VerbouwPremie (Vlaanderen)",
      body: "Voor woningen aangesloten vóór 2006. Premiebedrag afhankelijk van gezinsinkomen en -situatie. Aanvraag verplicht vóór de start van de werken.",
    },
    {
      title: "Verlaagd btw-tarief 6%",
      body: "Woningen ouder dan 10 jaar komen in aanmerking voor 6% btw in plaats van 21% op de arbeidskosten.",
    },
    {
      title: "Asbestverwijderingsbonus €8/m²",
      body: "Bij combinatie van dakwerken met asbestverwijdering krijgt u een extra bonus bovenop de reguliere premie. Relevant voor woningen vóór 1990.",
    },
    {
      title: "Lokale premies Antwerpen",
      body: "De stad Antwerpen en omliggende gemeenten bieden soms aanvullende premies. Wij checken dit bij de inspectie.",
    },
  ],
  premiumNote:
    "Let op: premies moeten worden aangevraagd vóór de start van de werken. Sinds maart 2026 gelden gewijzigde inkomensdrempels voor Mijn VerbouwPremie. Wij bekijken samen wat voor u van toepassing is.",
  priceSection: {
    title: "Wat bepaalt de prijs van dakisolatie?",
    intro: "De prijs van dakisolatie hangt af van een aantal factoren:",
    factors: [
      "Het type dak — plat of hellend",
      "De oppervlakte van uw dak",
      "Het gekozen isolatiemateriaal en de gekozen methode (bijvoorbeeld PIR-isolatie of sarking)",
      "Bijkomende elementen zoals dakramen, schouwen of dakgoten",
      "Of er ook een nieuwe dakbedekking nodig is",
    ],
    outro:
      "Voor richtprijzen per daktype en materiaal, bekijk ons artikel over de dakisolatie prijs per m² in 2026. Voor een exacte prijs op maat van uw woning: vraag een gratis inspectie aan.",
    href: "/blog/dakisolatie-prijs-m2-2026",
    linkLabel: "Lees het prijsartikel",
  },
  faqs: [
    {
      question: "Plat of hellend dak — wat is het verschil?",
      answer:
        "Bij een plat dak werken wij met het warm-dak principe: PIR-isolatieplaten worden bovenop de dakconstructie aangebracht, gevolgd door een nieuwe waterdichte bedekking (EPDM, bitumen of PVC). Bij een hellend dak wordt isolatie tussen of boven de dakspanten aangebracht, gevolgd door nieuwe pannen, leien of ander dakmateriaal.",
    },
    {
      question: "Kom ik in aanmerking voor premie?",
      answer:
        "Dat hangt af van het bouwjaar van uw woning, uw inkomenscategorie en uw gemeente. Via Mijn VerbouwPremie van de Vlaamse overheid komen de meeste woningen vóór 2006 in aanmerking. Extra bonus bij gelijktijdige asbestverwijdering. Wij bekijken dit samen bij de inspectie.",
    },
    {
      question: "Bevat mijn dak asbest?",
      answer:
        "Woningen gebouwd of gerenoveerd vóór 1990 bevatten vaak asbest in de dakbedekking (golfplaten, dakleien, isolatielagen). Vóór dakwerken is een asbestinventarisatie wettelijk verplicht. ISOPROTECH begeleidt u hierbij volledig — van inventarisatie tot gecertificeerde verwijdering.",
    },
    {
      question: "Hoe lang duren de werken?",
      answer:
        "Gemiddeld 3 tot 5 werkdagen voor een volledig plat dak van een rijwoning. Hellende daken zijn afhankelijk van de oppervlakte en complexiteit. Wij plannen alles helder in vooraf.",
    },
    {
      question: "Is een gratis inspectie echt vrijblijvend?",
      answer:
        "Ja, volledig. Wij bekijken uw dak, bespreken de opties en geven eerlijk advies. U ontvangt een offerte enkel als u dat wenst. Geen verplichting, geen kosten.",
    },
  ],
};

const gevelisolatie: InsulationServiceContent = {
  slug: "gevelisolatie",
  heroDesc:
    "Via ongeïsoleerde buitenmuren verdwijnt voortdurend warmte uit uw woning. ISOPROTECH realiseert buitengevelisolatie die technisch correct is, esthetisch sterk en jarenlang meegaat — met crepi, spuitkurk of steenstrips als afwerking. Vaste prijs, gratis inspectie, 10 jaar garantie. In Antwerpen en omgeving.",
  seoDescription:
    "Buitengevelisolatie in Antwerpen met crepi, spuitkurk of EPS-isolatie. Gratis inspectie, vaste prijs, 10 jaar garantie, premie-advies inbegrepen.",
  benefits: [
    "Warmteverlies via de buitenmuren structureel beperken",
    "Warmere muren in de winter, koelere muren in de zomer — meer thermisch comfort het hele jaar door",
    "Betere EPC-score — positieve invloed op de woningwaarde",
    "Uw gevel ziet er uit als nieuw — keuze uit crepi, spuitkurk of steenstrips",
    "Buitengevelisolatie dempt bovendien omgevingsgeluid",
    "Premies mogelijk — wij checken uw situatie",
  ],
  stats: [
    { value: "150+", label: "Gevels geïsoleerd" },
    { value: "10 jr", label: "Schriftelijke garantie" },
    { value: "5/5", label: "Google reviews" },
    { value: "48u", label: "Reactie gegarandeerd" },
  ],
  process: [
    {
      step: "01",
      title: "Aanvraag",
      desc: "Formulier of telefonisch. Wij nemen binnen 48u contact op.",
    },
    {
      step: "02",
      title: "Inspectie",
      desc: "Gratis ter plaatse. Onze vakman bekijkt uw gevel en meet op.",
    },
    {
      step: "03",
      title: "Vaste offerte",
      desc: "Heldere prijs, plus een overzicht van de premies waarvoor u in aanmerking komt.",
    },
    {
      step: "04",
      title: "Uitvoering",
      desc: "Vakkundig, netjes, op tijd. Oplevering met schriftelijke garantie.",
    },
  ],
  explainer: {
    title: "Wat is buitengevelisolatie?",
    body: "Buitengevelisolatie is een geïsoleerd afwerkingssysteem dat aan de buitenzijde van uw gevel wordt aangebracht: een isolatieplaat op de bestaande muur, afgewerkt met een pleister- of coatinglaag naar keuze. In de sector wordt dit ook wel ETICS genoemd (External Thermal Insulation Composite System) — voor u komt het in de praktijk neer op één geïntegreerd systeem, in één traject geplaatst. Voor de isolatieplaat werken wij onder meer met EPS. Voor de afwerklaag werken wij met kwaliteitsmerken zoals Caparol en Baumit.",
  },
  finishes: [
    {
      title: "Crepi",
      body: "De meest gekozen en budgetvriendelijke afwerking — een minerale pleisterlaag, strak en uniform, beschikbaar in tientallen kleuren en structuren.",
    },
    {
      title: "Spuitkurk",
      body: "Naadloos aangebracht, elastisch, en goed bestand tegen scheuren en bewegingen in de gevel.",
    },
    {
      title: "Steenstrips",
      body: "Een authentieke klinkerlook voor wie een baksteenuitstraling verkiest.",
    },
  ],
  symptomSection: {
    title: "Koude muren en koudebruggen",
    body: "Voelen uw buitenmuren koud aan, of merkt u condensatie op koude oppervlakken of ter hoogte van koudebruggen? Dat kan wijzen op onvoldoende isolatie. Gevelisolatie kan in die specifieke situatie helpen door de muur aan de buitenzijde thermisch te verbeteren.",
    caution: "Let op: bij optrekkend vocht, lekkages, vochtige kelders of vochtproblemen door slechte ventilatie is een andere aanpak nodig — gevelisolatie lost deze problemen niet op. Neem in dat geval contact op met een vochtspecialist.",
  },
  testimonials: [
    {
      quote:
        "Echte vakmannen die duidelijk weten waar ze mee bezig zijn. Andrii dacht telkens proactief mee en stelde oplossingen voor. Een betrouwbare partner voor wie kwaliteit, communicatie en vakmanschap belangrijk zijn. Absoluut een aanrader!",
      attribution: "Tom V., Antwerpen · Gevelisolatie + crepi",
    },
    {
      quote:
        "Het team houdt zich aan afspraken en planning. Zij werken zeer nauwkeurig en netjes. De communicatie verloopt vriendelijk, vlot en transparant. Wij zijn zeer tevreden over het eindresultaat.",
      attribution: "Lies M., Antwerpen · Gevelrenovatie",
    },
    {
      quote:
        "Wij zijn bijzonder tevreden over onze samenwerking. Van bij de start viel de zeer klantgerichte aanpak en duidelijke communicatie op. De renovatie van onze buitengevel met steenstrips werd uiterst professioneel uitgevoerd, binnen een korte termijn.",
      attribution: "Peter D., Antwerpen · Steenstrips gevelrenovatie",
    },
    {
      quote:
        "Recently had my home insulated by ISOPROTECH, the entire experience was excellent. Their professional team did incredible work. The quality of the material used is excellent, have already seen the huge difference on the EPC attest.",
      attribution: "Sarah K., Antwerp · Isolatie + EPC verbetering",
    },
  ],
  premiums: [
    {
      title: "Mijn VerbouwPremie (Vlaanderen)",
      body: "Voor woningen ouder dan 2006. Premiebedrag afhankelijk van inkomen en werken. Aanvragen vóór de start.",
    },
    {
      title: "Verlaagd btw-tarief 6%",
      body: "Woningen ouder dan 10 jaar: 6% btw in plaats van 21% op arbeidskosten.",
    },
    {
      title: "Gemeentelijke premies Antwerpen",
      body: "Stad Antwerpen en omliggende gemeenten bieden soms aanvullende premies. Wij checken dit voor u.",
    },
  ],
  priceSection: {
    title: "Wat bepaalt de prijs van gevelisolatie?",
    intro: "De prijs van gevelisolatie hangt af van een aantal factoren:",
    factors: [
      "De oppervlakte van uw gevel",
      "Het type isolatie en de gekozen dikte",
      "De gekozen afwerking — crepi, spuitkurk of steenstrips",
      "De bereikbaarheid en staat van uw gevel (stellingen, voorbereidend werk)",
    ],
    outro:
      "Voor richtprijzen per afwerking, bekijk ons artikel over de gevelisolatie prijs per m² in 2026. Na de gratis inspectie ontvangt u een exacte, vaste prijs voor uw situatie.",
    href: "/blog/gevelisolatie-prijs-m2-2026",
    linkLabel: "Lees het prijsartikel",
  },
  faqs: [
    {
      question: "Welke afwerking is het beste: crepi, spuitkurk of steenstrips?",
      answer:
        "Crepi is populairst en meest budgetvriendelijk. Spuitkurk is naadloos, ideaal bij scheurgevoelige gevels. Steenstrips geven een authentieke klinkerlook. Wij adviseren op basis van uw gevel.",
    },
    {
      question: "Is een vergunning nodig?",
      answer:
        "In de meeste gevallen niet. Buitengevelisolatie tot 14 cm is in Vlaanderen vrijgesteld van vergunning. Bij beschermde gevels controleren wij dit altijd bij de inspectie.",
    },
    {
      question: "Werken jullie ook in mijn gemeente?",
      answer:
        "Wij werken in heel Antwerpen en omgeving: Wilrijk, Mortsel, Ekeren, Schoten, Brasschaat, Kapellen, Kontich, Edegem, Schilde, Mechelen en meer.",
    },
    {
      question: "Moet ik thuis zijn tijdens de werken?",
      answer:
        "Niet noodzakelijk — alle werken zijn aan de buitenzijde. Wij vragen u aanwezig te zijn bij de startbespreking en de eindoplevering.",
    },
    {
      question: "Is de gratis inspectie echt gratis?",
      answer:
        "Ja, volledig. Wij komen langs, bekijken uw gevel en geven eerlijk advies — zonder verplichting, zonder kosten.",
    },
  ],
  clarification:
    "IsoproTech voert zelf geen spouwmuurisolatie uit — wij zijn gespecialiseerd in buitengevelisolatie.",
};

export const insulationServiceContent: Record<InsulationServiceSlug, InsulationServiceContent> = {
  dakisolatie,
  gevelisolatie,
};

export function getInsulationServiceContent(slug: string) {
  return insulationServiceContent[slug as InsulationServiceSlug] ?? null;
}
