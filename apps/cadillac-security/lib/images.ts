import type { ImageAsset, SiteContent } from "@arismile/site-kit";

// Generated from the files in public/images; dimensions are the real pixel sizes.
export const logo: ImageAsset = { src: "/images/logo.png", alt: "Cadillac Security Services Limited", width: 447, height: 424 };

export const images: SiteContent["images"] = {
  hero: { src: "/images/hero.jpg", alt: "Cadillac Security officer in tactical uniform at a corporate lobby", width: 1402, height: 1122 },
  about: { src: "/images/about.jpg", alt: "Security officer communicating by radio", width: 864, height: 1134 },
};
