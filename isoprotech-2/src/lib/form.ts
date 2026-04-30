// src/lib/form.ts
// Form validation schemas — Zod

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Naam moet minstens 2 tekens bevatten.")
    .max(100, "Naam is te lang."),
  phone: z
    .string()
    .min(8, "Vul een geldig telefoonnummer in.")
    .max(20, "Telefoonnummer is te lang.")
    .regex(
      /^[+]?[\d\s\-().]{8,20}$/,
      "Vul een geldig telefoonnummer in."
    ),
  email: z
    .string()
    .email("Vul een geldig e-mailadres in.")
    .max(100, "E-mailadres is te lang."),
  service: z.enum(
    ["gevelwerken", "dakwerken", "asbestverwijdering", "anders"],
    { errorMap: () => ({ message: "Selecteer een type werken." }) }
  ),
  message: z
    .string()
    .max(2000, "Bericht is te lang.")
    .optional()
    .default(""),
  privacy: z.literal(true, {
    errorMap: () => ({
      message: "U moet akkoord gaan met het privacybeleid.",
    }),
  }),
  // Honeypot — must remain empty
  website: z.string().max(0).optional().default(""),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Server-side re-validation (same schema, used in API route)
export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}

// Rate limiting key — simple IP + timestamp bucket
export function rateLimitKey(ip: string): string {
  const bucket = Math.floor(Date.now() / 60000); // 1-minute bucket
  return `contact:${ip}:${bucket}`;
}
