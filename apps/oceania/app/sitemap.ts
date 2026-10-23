import { buildSitemap } from "@arismile/site-kit";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(site);
}
