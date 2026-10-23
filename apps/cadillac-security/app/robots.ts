import { buildRobots } from "@arismile/site-kit";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return buildRobots(site);
}
