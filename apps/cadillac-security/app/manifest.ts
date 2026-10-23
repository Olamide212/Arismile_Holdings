import { buildManifest } from "@arismile/site-kit";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return buildManifest(site, { background: "#0b0c0f", theme: "#0b0c0f" });
}
