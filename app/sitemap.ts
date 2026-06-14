import type { MetadataRoute } from "next";
import { getListingSlugs } from "@/sanity/lib/listings";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/properties", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const propertySlugs = await getListingSlugs();

  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...propertySlugs.map(({ slug }) => ({
      url: `${siteUrl}/properties/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  return routes;
}
