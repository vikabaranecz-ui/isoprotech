// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { blogPosts } from "@/content/blog";

const BASE = "https://www.isoprotech.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/diensten`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/realisaties`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/calculator/dak`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // /privacy and /cookies are noindex — excluded from sitemap
    { url: `${BASE}/regio`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Landing pages — high priority for Google Ads
    { url: `${BASE}/gevelisolatie-antwerpen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/dakisolatie-antwerpen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/diensten/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/regio/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages];
}
