import type { ImageAsset, SiteContent } from "@arismile/site-kit";

// Generated from the files in public/images; dimensions are the real pixel sizes.
export const logo: ImageAsset = { src: "/images/logo.png", alt: "Mind Age", width: 303, height: 210 };

export const images: SiteContent["images"] = {
  hero: { src: "/images/hero.jpg", alt: "Laptop displaying an analytics dashboard", width: 1024, height: 729 },
  about: { src: "/images/about.jpg", alt: "Professional interacting with a digital interface", width: 736, height: 1308 },
  banner: { src: "/images/banner.jpg", alt: "Laptop, mouse and phone on a desk", width: 1920, height: 1280 },
};
