import type { MetadataRoute } from "next";
import { subsidiaryContent } from "@/lib/content/subsidiaries";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about", "/subsidiaries", "/our-team", "/contact", "/privacy-policy"];
  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path === "/" ? "" : path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...subsidiaryContent.map((s) => ({
      url: `${siteUrl}${s.holdingsPath}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
