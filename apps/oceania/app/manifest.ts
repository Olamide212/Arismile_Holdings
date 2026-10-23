import { buildManifest } from "@arismile/site-kit";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return buildManifest(site, { background: "#ffffff", theme: "#0a2540" });
}
