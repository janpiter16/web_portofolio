import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const localeRoutes = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date("2026-11-11"),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/projects`,
      lastModified: new Date("2026-11-11"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  // Only index verified public projects, excluding placeholders (per docs/SITEMAP.md §5)
  const indexableProjects = projects.filter(
    (project) => !project.slug.includes("placeholder")
  );

  const projectRoutes = locales.flatMap((locale) =>
    indexableProjects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date("2026-11-11"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...localeRoutes, ...projectRoutes];
}
