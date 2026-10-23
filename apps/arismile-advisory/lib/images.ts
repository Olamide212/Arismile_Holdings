import type { ImageAsset, SiteContent } from "@arismile/site-kit";

// Generated from the files in public/images; dimensions are the real pixel sizes.
export const logo: ImageAsset = { src: "/images/logo.png", alt: "Arismile Advisory", width: 725, height: 344 };

export const images: SiteContent["images"] = {
  hero: { src: "/images/hero.jpg", alt: "Arismile Advisory consultants in a strategy meeting", width: 1024, height: 683 },
  about: { src: "/images/about.jpg", alt: "Advisor shaking hands with a client", width: 735, height: 490 },
  banner: { src: "/images/banner.jpg", alt: "Advisory team reviewing a document on a tablet", width: 896, height: 1075 },
};
