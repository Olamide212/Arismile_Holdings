import type { ImageAsset } from "./types";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: ImageAsset;
}

/** Leadership listed on arismile.ng/about. */
export const team: TeamMember[] = [
  {
    name: "Saheed Adelanwa",
    role: "Co-Founder",
    bio: "A young visionary entrepreneur with interest in Oil and Gas, Mining & Agro-Allied, Commodities Trading, Media and Public Relations among others. Saheed is passionate about making Africa great.",
    photo: { src: "/images/team/saheed-adelanwa.jpg", alt: "Portrait of Saheed Adelanwa", width: 466, height: 700 },
  },
  {
    name: "Olatunbosun Ariyo, MFR",
    role: "Co-Founder / GMD",
    // arismile.ng truncates this bio; the remainder is from arismile.com.ng/our-team.
    bio: "Ariyo is a conscientious and astute business administrator, with rich and wide experience in the world of corporate business development. Having spent the last fifteen years in different capacity and diverse engagement with various consortium, and traversing the terrain of both local and international business operations in Oil and Gas, Power (Generation and Transmission) and largely EPIC projects.",
    photo: { src: "/images/team/olatunbosun-ariyo.jpg", alt: "Portrait of Olatunbosun Ariyo", width: 466, height: 700 },
  },
  {
    name: "Temitope Olowu",
    role: "Group COO",
    bio: "Mr. Temitope is an astute businessman with over 20 years in the banking industry, finance and accounting with a passion in people and operation management.",
    photo: { src: "/images/team/temitope-olowu.jpg", alt: "Portrait of Temitope Olowu", width: 270, height: 360 },
  },
  {
    name: "Walid Muazu",
    role: "GM, Special Transactions",
    bio: "Alhaji Walid is a corporate businessman and consultant with accumulated experience in the Construction, IT, Mining, Transportation and Facilities Management industries.",
    photo: { src: "/images/team/walid-muazu.jpg", alt: "Portrait of Walid Muazu", width: 270, height: 360 },
  },
];
