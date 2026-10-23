import type { ImageAsset } from "./types";

export interface Partner {
  name: string;
  logo: ImageAsset;
}

/*
 * Logos from the original arismile.com.ng partner carousel. arismile.ng loads
 * partners from its CMS, which currently returns none, so this list is the
 * latest verifiable one.
 */
export const partners: Partner[] = [
  {
    name: "Nigerian Communications Commission (NCC)",
    logo: { src: "/images/partners/ncc.jpg", alt: "Nigerian Communications Commission logo", width: 600, height: 392 },
  },
  {
    name: "Clarit of Africa",
    logo: { src: "/images/partners/clarit-of-africa.png", alt: "Clarit of Africa logo", width: 170, height: 170 },
  },
  {
    name: "Malaysia Smelting Corporation (MSC)",
    logo: {
      src: "/images/partners/malaysia-smelting-corporation.png",
      alt: "Malaysia Smelting Corporation logo",
      width: 600,
      height: 390,
    },
  },
  {
    name: "Utechni",
    logo: { src: "/images/partners/utechni.png", alt: "Utechni logo", width: 600, height: 278 },
  },
  {
    name: "Niger Delta Power Holding Company (NDPHC)",
    logo: { src: "/images/partners/ndphc.png", alt: "NDPHC logo", width: 450, height: 112 },
  },
  {
    name: "Nigerian National Petroleum Company (NNPC)",
    logo: { src: "/images/partners/nnpc.png", alt: "NNPC logo", width: 600, height: 354 },
  },
  {
    name: "Independent National Electoral Commission (INEC)",
    logo: {
      src: "/images/partners/inec.png",
      alt: "Independent National Electoral Commission logo",
      width: 800,
      height: 164,
    },
  },
  {
    name: "Federal Ministry of Communications",
    logo: {
      src: "/images/partners/federal-ministry-of-communications.jpg",
      alt: "Federal Ministry of Communications logo",
      width: 200,
      height: 200,
    },
  },
];
