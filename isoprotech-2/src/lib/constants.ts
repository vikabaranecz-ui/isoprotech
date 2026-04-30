// src/lib/constants.ts

export const BRAND = {
  name: "ISOPROTECH",
  tagline: "Meer wooncomfort, minder energiekosten.",
  phone: "+32 465 88 27 01",
  phoneDisplay: "+32 465 88 27 01",
  email: "info@isoprotech.be",
  address: { street: "P. van den Eedenstraat 84", city: "Antwerpen", zip: "2660", country: "BE" },
  whatsapp: "https://wa.me/32465882701",
  maps: "https://maps.google.com/maps?cid=7238737443262617326",
  url: "https://www.isoprotech.be",
  geo: { lat: 51.1784, lng: 4.3484 },
  hours: { weekdays: "08:00 – 18:00", saturday: "09:00 – 14:00", sunday: "Gesloten" },
} as const;

export const COLORS = {
  teal: "#1E4C59", tealDark: "#15353e", orange: "#F79448", orangeHover: "#f9a862",
  light: "#f5f2ee", white: "#ffffff", text: "#5a6a6f", textDark: "#2a3a3f",
} as const;

export const IMAGES = {
  logo: "/images/logo-white.png",
  logoDark: "/images/logo-dark.png",
  ogDefault: "/images/og-isoprotech.png",
} as const;

export const VIDEOS = {
  mainShowreel: "https://www.youtube.com/embed/Zt19qXNgBCg",
  projectHighlight: "https://www.youtube.com/embed/Pxm7v6-AUxE",
} as const;

export const INSTAGRAM = {
  handle: "@isoprotech.be",
  url: "https://www.instagram.com/isoprotech.be/",
  reels: [
    { id: "DVgq2UIk2mn", title: "Vochtproblemen? Hoge verwarmingskosten?" },
    { id: "DU8GT8WE0RA", title: "Een gevel die uw woning verandert" },
    { id: "DVOl9Z9k318", title: "3 redenen waarom gevelvernieuwing slim is" },
  ],
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/isoprotech.be/",
  facebook: "https://www.facebook.com/people/Isoprotech/61587744656837/",
} as const;

// All images local — in public/images/
export const PHOTOS = {
  // Project photos
  gevelCrepiMeise: { src: "/images/projects/gevelisolatie-crepi-meise.jpg", alt: "Buitengevelisolatie met crepi afwerking in Meise", width: 1346, height: 757 },
  gevelCrepiMeise2: { src: "/images/projects/gevelisolatie-crepi-meise-2.jpg", alt: "Gevelisolatie met crepi in Meise — tweede hoek", width: 1346, height: 757 },
  gevelBefore1: { src: "/images/projects/gevelisolatie-before-1.jpg", alt: "Woning vóór gevelisolatie — oude bakstenen gevel", width: 800, height: 1060 },
  gevelAfter1: { src: "/images/projects/gevelisolatie-after-1.jpg", alt: "Woning na gevelisolatie met spuitkurk afwerking", width: 960, height: 1280 },
  crepiBefore1: { src: "/images/projects/crepi-before-1.jpg", alt: "Achtergevel vóór crepi renovatie — verweerde muur", width: 1200, height: 800 },
  crepiAfter1: { src: "/images/projects/crepi-after-1.jpg", alt: "Achtergevel na crepi afwerking — strakke witte gevel", width: 960, height: 1280 },
  gevelAntwBefore: { src: "/images/projects/gevelisolatie-antwerpen-before.jpg", alt: "Appartement vóór gevelisolatie — leien bekleding", width: 800, height: 1200 },
  gevelAntwAfter: { src: "/images/projects/gevelisolatie-antwerpen-after.jpg", alt: "Appartement na gevelisolatie met crepi", width: 800, height: 1200 },
  dakSchouw: { src: "/images/projects/dakrenovatie-schouw.jpg", alt: "Nieuwe schouwkap op gerenoveerd dak met zwarte pannen", width: 960, height: 1280 },
  dakSchouw2: { src: "/images/projects/dakrenovatie-schouw-2.jpg", alt: "Schouw met loodaansluiting bij dakrenovatie", width: 960, height: 1280 },
  gevelInProgress: { src: "/images/projects/gevelisolatie-in-progress.jpg", alt: "Gevelisolatie met EPS-platen in uitvoering — stellingen", width: 1200, height: 900 },
  gevelCrepiProject: { src: "/images/projects/gevelisolatie-crepi-project.jpg", alt: "Gevelisolatie met crepi afwerking — modern resultaat", width: 1200, height: 800 },
  crepiSchilde: { src: "/images/projects/crepi-schilde.jpg", alt: "Crepi gevelafwerking op woning in Schilde", width: 960, height: 1280 },
  platDak: { src: "/images/projects/plat-dak-renovatie.jpg", alt: "Plat dak renovatie met PIR-isolatie — dronebeeld", width: 1460, height: 820 },
  // Service photos
  asbestverwijdering: { src: "/images/services/asbestverwijdering.jpg", alt: "Veilige asbestverwijdering — vakman in beschermend pak", width: 1460, height: 820 },
  dakkapellen: { src: "/images/services/dakkapellen.png", alt: "Dakkapel wordt geplaatst op een hellend dak", width: 1200, height: 800 },
  dakrenovatie: { src: "/images/services/dakrenovatie.jpg", alt: "Dakrenovatie met nieuwe keramische dakpannen", width: 1080, height: 1920 },
  dakisolatieService: { src: "/images/services/dakisolatie.jpg", alt: "Dakisolatie op plat dak — PIR-platen en roofing", width: 1460, height: 820 },
  spuitkurk: { src: "/images/services/spuitkurk.jpg", alt: "Spuitkurk gevelafwerking close-up", width: 1200, height: 500 },
  crepiService: { src: "/images/services/crepi.jpg", alt: "Crepi gevelafwerking — strakke minerale pleister", width: 1080, height: 1620 },
} as const;
