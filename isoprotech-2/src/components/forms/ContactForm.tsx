// src/components/forms/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/form";
import { track } from "@/lib/tracking";

interface ContactFormProps {
  defaultService?: ContactFormData["service"];
  compact?: boolean;
  hideService?: boolean;
}

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultService, compact, hideService }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      region: "",
      service: defaultService || undefined,
      message: "",
      privacy: false as unknown as true,
      website: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setFormState("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? "Submission failed");
      }

      setFormState("success");
      track.formSubmit(data.service);
      reset();
    } catch {
      setFormState("error");
      setServerError("Er is een fout opgetreden. Probeer het opnieuw of bel ons op +32 470 80 20 20.");
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-2xl bg-white p-10 text-center border border-teal-100" role="alert" aria-live="polite">
        <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="h-9 w-9 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-bold text-2xl text-teal-800 mb-3">Bedankt voor uw aanvraag!</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          We hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op —
          normaal <span className="font-semibold text-teal-700">binnen 24 uur</span>.
        </p>
        <p className="text-sm text-gray-400">U ontvangt ook een bevestiging per e-mail.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={`rounded-2xl bg-white border border-gray-100 shadow-sm ${compact ? "p-6" : "p-8"}`}
    >
      <h3 className={`font-bold text-teal-800 mb-4 ${compact ? "text-lg" : "text-xl mb-6"}`}>
        Gratis inspectie aanvragen
      </h3>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Naam <span className="text-orange-400">*</span>
        </label>
        <input
          id="name" type="text" autoComplete="name" placeholder="Uw naam"
          aria-invalid={!!errors.name}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition ${errors.name ? "border-red-400" : "border-gray-200"}`}
          {...register("name")}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Telefoonnummer <span className="text-orange-400">*</span>
        </label>
        <input
          id="phone" type="tel" autoComplete="tel" placeholder="+32 4xx xx xx xx"
          aria-invalid={!!errors.phone}
          aria-describedby="phone-hint"
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition ${errors.phone ? "border-red-400" : "border-gray-200"}`}
          {...register("phone")}
        />
        <p id="phone-hint" className="text-[11px] text-gray-400 mt-1">Wij bellen u terug voor een gratis afspraak — geen spam.</p>
        {errors.phone && <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone.message}</p>}
      </div>

      {/* Region */}
      <div className="mb-4">
        <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1.5">
          Gemeente / Regio
        </label>
        <input
          id="region" type="text" autoComplete="address-level2"
          placeholder="bv. Antwerpen, Wilrijk, Mortsel..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
          {...register("region")}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          E-mailadres <span className="text-orange-400">*</span>
        </label>
        <input
          id="email" type="email" autoComplete="email" placeholder="uw@email.be"
          aria-invalid={!!errors.email}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition ${errors.email ? "border-red-400" : "border-gray-200"}`}
          {...register("email")}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1" role="alert">{errors.email.message}</p>}
      </div>

      {/* Service */}
      {hideService && defaultService ? (
        <input type="hidden" value={defaultService} {...register("service")} />
      ) : (
        <div className="mb-4">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
            Type werken <span className="text-orange-400">*</span>
          </label>
          <select
            id="service"
            aria-invalid={!!errors.service}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition ${errors.service ? "border-red-400" : "border-gray-200"}`}
            {...register("service")}
          >
            <option value="">Selecteer...</option>
            <option value="gevelwerken">Gevelwerken (isolatie, crepi, spuitkurk)</option>
            <option value="dakwerken">Dakwerken (isolatie, renovatie, dakkapellen)</option>
            <option value="asbestverwijdering">Asbestverwijdering</option>
            <option value="anders">Anders / meerdere diensten</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1" role="alert">{errors.service.message}</p>}
        </div>
      )}

      {/* Message — non-compact only */}
      {!compact && (
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
            Bericht <span className="text-gray-400 font-normal">(optioneel)</span>
          </label>
          <textarea
            id="message" rows={3}
            placeholder="Beschrijf uw gevel, type afwerking, bijzonderheden..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition resize-y"
            {...register("message")}
          />
        </div>
      )}

      {/* Privacy */}
      <div className="mb-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-400 focus:ring-orange-300" {...register("privacy")} />
          <span className="text-xs text-gray-500 leading-relaxed">
            Ik ga akkoord met het{" "}
            <a href="/privacy" className="text-teal-700 underline">privacybeleid</a>.
            {" "}ISOPROTECH gebruikt uw gegevens uitsluitend om uw aanvraag te behandelen.
          </span>
        </label>
        {errors.privacy && <p className="text-red-500 text-xs mt-1" role="alert">{errors.privacy.message}</p>}
      </div>

      {formState === "error" && serverError && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-sm" role="alert">{serverError}</div>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full py-3.5 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
      >
        {formState === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Bezig met verzenden...
          </span>
        ) : "Gratis inspectie aanvragen"}
      </button>
      <p className="text-[11px] text-gray-400 text-center mt-2">Gratis · Vrijblijvend · Binnen 24u reactie</p>
    </form>
  );
}
