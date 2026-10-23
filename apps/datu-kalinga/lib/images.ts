import type { ImageAsset, SiteContent } from "@arismile/site-kit";

// Generated from the files in public/images; dimensions are the real pixel sizes.
export const logo: ImageAsset = { src: "/images/logo.png", alt: "Datu Kalinga Nigeria Limited", width: 425, height: 600 };

export const images: SiteContent["images"] = {
  hero: { src: "/images/hero.jpg", alt: "Mining haul truck and excavator at an open-pit mine", width: 2400, height: 1800 },
  about: { src: "/images/about.jpg", alt: "Bulldozer working on a mine site", width: 1280, height: 960 },
  banner: { src: "/images/banner.jpg", alt: "Excavator at work in a mountain quarry", width: 1280, height: 853 },
};
