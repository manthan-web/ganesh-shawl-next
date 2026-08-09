import type { MetadataRoute } from "next";
import { BRAND } from "@/data/product";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BRAND.baseUrl}/sitemap.xml`,
  };
}