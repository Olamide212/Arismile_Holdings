import { buildManifest } from "@arismile/site-kit";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return buildManifest(site, { background: "#0d0b14", theme: "#1b1726" });
}
