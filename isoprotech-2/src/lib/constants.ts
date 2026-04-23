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
  logo: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/ISOPROTECH%20final%20white-01.png?etag=null&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=375%2B55",
  logoDark: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/ISOPROTECH%20final%20white-01.png?etag=null&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=375%2B55",
  ogDefault: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/ISOPROTECH%20final%20white-01.png?etag=null&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=375%2B55",
} as const;

// Project photos — real URLs from isoprotech.be
export const PHOTOS = {
  gevelCrepiMeise: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/Timeline%207_01_03_52_00.png?etag=W%2F%225f17a9-19c7bc27338%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1346,757&quality=85", alt: "Buitengevelisolatie met crepi afwerking bij een woning in Meise", width: 1346, height: 757 },
  gevelCrepiAntwerpen: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/WhatsApp%20Image%202026-03-11%20at%2019.15.29.jpeg?etag=W%2F%2273b32-19ce66a5fe8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1200,1600&quality=85", alt: "Gevelisolatie met crepi-afwerking bij woning in Antwerpen", width: 1200, height: 1600 },
  dakGevelMechelen: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/Timeline%202_01_00_17_07.png?etag=W%2F%225f17a9-19c7bc257e0%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1346,757&quality=85", alt: "Combinatie van dakvernieuwing en gevelisolatie in Mechelen", width: 1346, height: 757 },
  gevelCrepiAntw2: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/F.png?etag=W%2F%221c0925-19ce2fed348%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1080,1350&quality=85", alt: "Gevelisolatie met crepi afwerking bij woning in Antwerpen", width: 1080, height: 1350 },
  gevelEkeren: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/DD.png?etag=W%2F%22227052-19ce64dc3b0%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1080,1350&quality=85", alt: "Gevelisolatie met duurzame crepi afwerking in Ekeren", width: 1080, height: 1350 },
  spuitkurkMortsel: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/3.png?etag=W%2F%22263400-19ce2ede358%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1080,1350&quality=85", alt: "Gevel afgewerkt met spuitkurk in Mortsel", width: 1080, height: 1350 },
  platDak: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/526039aec34209d08c469e4f8cfaaf7e.jpg?etag=W%2F%221c424-19c72518ca8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1200,900&quality=85", alt: "Duurzame dakbedekking op plat dak in Antwerpen", width: 1200, height: 900 },
  wilrijk: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/WhatsApp%20Image%202026-02-18%20at%2012.10.16.jpeg?etag=W%2F%224ed58-19c7c69b788%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1200,1594&quality=85", alt: "Dak- en gevelisolatie in Wilrijk", width: 1200, height: 1594 },
  schilde: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/IMG_7405.JPG?etag=W%2F%222d096-19c56f71ba8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=960,1280&quality=85", alt: "Dak- en gevelisolatie in Schilde", width: 960, height: 1280 },
  crepiSchoten: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/203C5D87-59A2-4D38-B6DE-32D9E096A271%202.PNG?etag=W%2F%222a118d-19c7c244248%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1200,800&quality=85", alt: "Crepi afwerking na isolatiewerken in Schoten", width: 1200, height: 800 },
  dakiso: { src: "https://impro.usercontent.one/appid/oneComWsb/domain/isoprotech.be/media/isoprotech.be/onewebmedia/94ae311a-168d-425e-ac60-fcd136e61946.JPG?etag=W%2F%228f706-19c72507750%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=430%2B573&quality=85", alt: "Professionele dakisolatie in Antwerpen", width: 430, height: 573 },
} as const;
