// src/lib/tracking.ts
// GTM dataLayer events for conversion tracking

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function push(event: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }
}

export const track = {
  /** Contact form successfully submitted */
  formSubmit(service: string) {
    push({
      event: "form_submit",
      form_name: "contact",
      form_service: service,
    });
  },

  /** Calculator completed — user reached result step */
  calculatorComplete(type: "gevel" | "dak", totalLow: number, totalHigh: number) {
    push({
      event: "calculator_complete",
      calculator_type: type,
      estimate_low: totalLow,
      estimate_high: totalHigh,
    });
  },

  /** Phone click */
  phoneClick() {
    push({ event: "phone_click" });
  },

  /** WhatsApp click */
  whatsappClick() {
    push({ event: "whatsapp_click" });
  },

  /** CTA button click */
  ctaClick(label: string, page: string) {
    push({
      event: "cta_click",
      cta_label: label,
      cta_page: page,
    });
  },

  /** Page view (for SPA transitions if needed) */
  pageView(url: string, title: string) {
    push({
      event: "page_view",
      page_location: url,
      page_title: title,
    });
  },
};
