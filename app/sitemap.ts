import type { MetadataRoute } from "next";
import { categories, products, BRAND } from "@/data/product";

export const baseUrl = BRAND.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryUrls = categories.map((c) => ({
    url: `${baseUrl}/category/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productUrls = products.map((p) => ({
    url: `${baseUrl}/product/${p.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryUrls,
    ...productUrls,
  ];
}
