import type { ImageAsset, SiteContent } from "@arismile/site-kit";

// Generated from the files in public/images; dimensions are the real pixel sizes.
export const logo: ImageAsset = { src: "/images/logo.png", alt: "Oceania Limited", width: 600, height: 366 };

export const images: SiteContent["images"] = {
  hero: { src: "/images/hero.jpg", alt: "Container vessel leaving a port", width: 1704, height: 1065 },
  about: { src: "/images/about.jpg", alt: "Offshore drilling vessel at sea", width: 768, height: 1024 },
};
