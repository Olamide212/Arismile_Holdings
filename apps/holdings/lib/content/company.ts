import type { ImageAsset } from "./types";

/*
 * Company copy. Sources: arismile.ng homepage, /about and footer (current);
 * arismile.com.ng (original) where noted.
 */

export const aboutIntro = {
  eyebrow: "Who We Are",
  heading: "About Us",
  backdropWord: "Arismile Holdings",
  /** First paragraph opens with the company name in bold. */
  lead: "is a preeminent, indigenous powerhouse in Engineering, Procurement and Construction (EPC), redefined by a legacy of technical precision and a vision for continental transformation. We operate at the nexus of Africa’s most critical sectors - Mining, Energy, Oil & Gas and Digital Infrastructure - orchestrating complex projects that bridge the gap between resource potential and industrial reality.",
  summary:
    "Through a sophisticated ecosystem of diversified subsidiaries and high-tier global joint ventures, Arismile delivers end-to-end solutions in financial advisory, public sector works, VIP security, and technology-driven services.",
  image: {
    src: "/images/sections/about-safety-equipment.png",
    alt: "Yellow hard hat with safety glasses, ear defenders and work gloves",
    width: 600,
    height: 475,
  } satisfies ImageAsset,
};

/** Additional paragraphs used on the About Us page. */
export const aboutPage = {
  expansion:
    "Our expansion beyond sub-Saharan borders is a testament to our scalable operational framework and our unwavering commitment to creating sustainable value for a sophisticated global clientele. At Arismile, we don't just build infrastructure; we engineer the future of emerging economies.",
  profile: [
    "Arismile Holdings is a foremost, multi-disciplinary investment and strategic advisory powerhouse, headquartered in Abuja, Nigeria with a commanding operational footprint spanning key global markets. We specialize in the orchestration of high-impact capital projects and technical solutions across the vital energy-infrastructure nexus — including Power, Oil & Gas, and Mining.",
    "By leveraging deep-market intelligence and an expansive cross-continental network, Arismile Holdings bridges the gap between ambitious vision and turnkey execution.",
  ],
  mission:
    "Arismile Holdings is a leading, multi-sectoral investment corporation dedicated to orchestrating large-scale industrial transformation and sustainable economic advancement. As a cornerstone of regional development, we leverage high-performance assets and a robust capital framework to deliver cutting-edge innovation, critical infrastructure, and systemic impact.",
  /** Original site: strategy statement from the arismile.com.ng About section. */
  strategy:
    "Our strategy is to be customer-focused and deliver high and predictable quality services in accordance with customer demands and same focus apply when actively develop services in close co-operation with existing and new customers.",
  banner: {
    src: "/images/sections/about-banner.jpg",
    alt: "Arismile Holdings team",
    width: 1695,
    height: 928,
  } satisfies ImageAsset,
};

/** Original homepage intro for the Our Subsidiaries section. */
export const subsidiariesIntro =
  "Each of our companies offers professional services, methods to stay up to date on customer’s needs, market trends, competitive actions, advance technology and project trends.";

export const discoverMore = {
  heading: "Discover More",
  text: "Get in touch with us today and discover a lot more about Arismile Holdings.",
  cta: { label: "Contact Us", href: "/contact" },
  image: {
    src: "/images/sections/discover-more.jpg",
    alt: "",
    width: 1920,
    height: 1080,
  } satisfies ImageAsset,
};

export const sectionImages = {
  aboutPattern: "/images/sections/about-pattern.jpg",
  subsidiariesGears: "/images/sections/subsidiaries-gears.jpg",
  footerTexture: "/images/sections/footer-texture.jpg",
  pageBanner: "/images/sections/page-banner-cranes.jpg",
};
