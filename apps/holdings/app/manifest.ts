import type { MetadataRoute } from "next";
import { siteDescription } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arismile Holdings",
    short_name: "Arismile",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#323333",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}
