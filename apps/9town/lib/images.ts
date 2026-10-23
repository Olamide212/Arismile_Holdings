import type { ImageAsset, SiteContent } from "@arismile/site-kit";

// Generated from the files in public/images; dimensions are the real pixel sizes.
export const logo: ImageAsset = { src: "/images/logo.png", alt: "9-Town Nigeria Limited", width: 600, height: 381 };

export const images: SiteContent["images"] = {
  hero: { src: "/images/hero.jpg", alt: "Construction workers in hard hats on a 9-Town building site", width: 2400, height: 1600 },
  about: { src: "/images/about.jpg", alt: "Tower crane above a building under construction", width: 1120, height: 1400 },
};
