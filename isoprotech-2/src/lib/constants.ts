// src/lib/constants.ts
// Brand configuration — single source of truth

export const BRAND = {
  name: "ISOPROTECH",
  tagline: "Meer wooncomfort, minder energiekosten.",
  phone: "+32 465 88 27 01",
  phoneDisplay: "+32 465 88 27 01",
  email: "info@isoprotech.be",
  address: {
    street: "P. van den Eedenstraat 84",
    city: "Antwerpen",
    zip: "2660",
    country: "BE",
  },
  whatsapp: "https://wa.me/32465882701",
  maps: "https://maps.google.com/maps?cid=7238737443262617326",
  placeId: "ChIJ0fEyD8eHYEER7tb8J1opdWQ",
  url: "https://www.isoprotech.be",
  geo: { lat: 51.1784, lng: 4.3484 },
  hours: {
    weekdays: "08:00 – 18:00",
    saturday: "09:00 – 14:00",
    sunday: "Gesloten",
  },
} as const;

export const COLORS = {
  teal: "#1E4C59",
  tealDark: "#15353e",
  orange: "#F79448",
  orangeHover: "#f9a862",
  light: "#f5f2ee",
  white: "#ffffff",
  text: "#5a6a6f",
  textDark: "#2a3a3f",
} as const;

export const IMAGES = {
  logo: "/images/logo-white.png",
  logoDark: "/images/logo-dark.png",
  ogDefault: "/images/og-isoprotech.jpg",
} as const;

// All images are local — upload to /public/images/ in your GitHub repo
// After uploading, images will be served from /images/filename.jpg
export const PHOTOS = {
  gevelCrepiMeise: { src: "/images/projects/gevelisolatie-crepi-meise.jpg", alt: "Buitengevelisolatie met crepi afwerking bij een woning in Meise", width: 1346, height: 757 },
  gevelCrepiAntwerpen: { src: "/images/projects/gevelisolatie-crepi-antwerpen.jpg", alt: "Gevelisolatie met crepi-afwerking bij woning in Antwerpen", width: 1200, height: 1600 },
  dakGevelMechelen: { src: "/images/projects/dak-gevelisolatie-mechelen.jpg", alt: "Combinatie van dakvernieuwing en gevelisolatie in Mechelen", width: 1346, height: 757 },
  gevelCrepiAntw2: { src: "/images/projects/gevelisolatie-crepi-antwerpen-2.jpg", alt: "Gevelisolatie met crepi afwerking bij woning in Antwerpen", width: 1080, height: 1350 },
  gevelEkeren: { src: "/images/projects/gevelisolatie-ekeren.jpg", alt: "Gevelisolatie met duurzame crepi afwerking in Ekeren", width: 1080, height: 1350 },
  spuitkurkMortsel: { src: "/images/projects/spuitkurk-mortsel.jpg", alt: "Gevel afgewerkt met spuitkurk in Mortsel", width: 1080, height: 1350 },
  platDak: { src: "/images/projects/plat-dak-renovatie.jpg", alt: "Duurzame dakbedekking op plat dak in Antwerpen", width: 1200, height: 900 },
  wilrijk: { src: "/images/projects/dak-gevelisolatie-wilrijk.jpg", alt: "Dak- en gevelisolatie in Wilrijk", width: 1200, height: 1594 },
  schilde: { src: "/images/projects/dak-gevelisolatie-schilde.jpg", alt: "Dak- en gevelisolatie in Schilde", width: 960, height: 1280 },
  crepiSchoten: { src: "/images/projects/crepi-schoten.jpg", alt: "Crepi afwerking na isolatiewerken in Schoten", width: 1200, height: 800 },
  dakiso: { src: "/images/projects/dakisolatie-antwerpen.jpg", alt: "Professionele dakisolatie in Antwerpen", width: 430, height: 573 },
  // Service-specific photos
  asbestverwijdering: { src: "/images/services/asbestverwijdering.jpg", alt: "Veilige asbestverwijdering door ISOPROTECH — vakman in beschermend pak", width: 1460, height: 820 },
  dakkapellen: { src: "/images/services/dakkapellen.png", alt: "Dakkapel wordt geplaatst op een hellend dak", width: 1200, height: 800 },
  dakrenovatie: { src: "/images/services/dakrenovatie.jpg", alt: "Dakrenovatie met nieuwe keramische dakpannen — dronebeeld", width: 1080, height: 1920 },
  dakisolatieService: { src: "/images/services/dakisolatie.jpg", alt: "Dakisolatie op plat dak — PIR-platen en roofing", width: 1460, height: 820 },
  spuitkurk: { src: "/images/services/spuitkurk.jpg", alt: "Spuitkurk gevelafwerking close-up — steenstrip textuur", width: 1200, height: 500 },
  crepiService: { src: "/images/services/crepi.jpg", alt: "Crepi gevelafwerking — strakke minerale pleister", width: 1080, height: 1620 },
} as const;
