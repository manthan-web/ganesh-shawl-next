import type { MetadataRoute } from "next";
import { categories, products, BRAND } from "@/data/product";
import { blogs } from "@/data/blogs";

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

  const blogUrls = blogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...categoryUrls,
    ...productUrls,
    ...blogUrls,
  ];
}
