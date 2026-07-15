import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    { url: base, lastModified: new Date("2026-07-12"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/mentions-legales`, lastModified: new Date("2026-07-12"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
