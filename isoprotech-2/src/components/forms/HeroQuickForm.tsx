// src/components/forms/HeroQuickForm.tsx
// Compact conversion form placed directly in the hero section.
// Visible without scrolling on mobile. WhatsApp opens immediately on submit.
"use client";

import { useState } from "react";
import { BRAND } from "@/lib/constants";
import { track } from "@/lib/tracking";

export function HeroQuickForm() {
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!telefoon.trim()) return;

    const lines = [
      "📋 *Offerte-aanvraag via isoprotech.be*",
      "",
      naam.trim() ? `👤 Naam: ${naam.trim()}` : null,
      `📞 Telefoon: ${telefoon.trim()}`,
      "",
      "📍 Pagina: Gevelisolatie Antwerpen",
    ].filter(Boolean).join("\n");

    window.open(
      `https://wa.me/32470802020?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer"
    );

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: naam.trim() || "Onbekend",
        phone: telefoon.trim(),
        service: "gevelwerken",
        message: "Aanvraag via hero-formulier (gevelisolatie-antwerpen)",
        privacy: true,
      }),
    }).catch(() => {});

    track.formSubmit("gevelwerken");
    setSent(true);
  }

  const inputCls =
    "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition backdrop-blur-sm";

  if (sent) {
    return (
      <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center">
        <div className="flex items-center justify-center gap-2 text-green-400 font-bold text-base mb-2">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          WhatsApp wordt geopend!
        </div>
        <p className="text-white/70 text-sm">
          Klik op &ldquo;Verstuur&rdquo; in WhatsApp om uw aanvraag te bevestigen. Wij nemen binnen 48u contact op.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-teal-900/70 backdrop-blur-md border border-white/15 p-5 md:p-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
        <span className="text-xs font-bold text-orange-300 uppercase tracking-wide">
          Gratis · Vrijblijvend · Binnen 48u
        </span>
      </div>

      <h2 className="text-lg font-extrabold text-white mb-1">
        Plan gratis gevelinspectie
      </h2>
      <p className="text-sm text-white/60 mb-4">
        Onze vakman komt langs in Antwerpen. Vaste prijs na inspectie.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Uw naam"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          autoComplete="name"
          className={inputCls}
        />
        <input
          type="tel"
          placeholder="Telefoonnummer *"
          required
          value={telefoon}
          onChange={(e) => setTelefoon(e.target.value)}
          autoComplete="tel"
          className={inputCls}
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-400 hover:bg-orange-300 text-white font-bold py-3.5 text-sm transition-colors shadow-lg shadow-orange-400/25"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.1-1.13l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          Stuur aanvraag via WhatsApp
        </button>
      </form>

      {/* Phone fallback — critical for Facebook App where WhatsApp may not open */}
      <div className="mt-3 text-center">
        <a
          href={`tel:${BRAND.phone}`}
          className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Liever bellen? {BRAND.phoneDisplay}
        </a>
      </div>

      <p className="text-[10px] text-white/30 text-center mt-2">
        Geen spam · Geen verplichtingen
      </p>
    </div>
  );
}
