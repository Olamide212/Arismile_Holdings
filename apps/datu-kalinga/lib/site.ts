import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles } from "@arismile/brand";
import type { ServiceContent, SiteContent } from "@arismile/site-kit";
import {
  Building,
  Factory,
  Gem,
  HardHat,
  Landmark,
  Leaf,
  Mountain,
  Pickaxe,
  Satellite,
  ShieldCheck,
  Sprout,
  SunMedium,
  Users,
} from "lucide-react";
import { images, logo } from "./images";

/*
 * Content for the Datu Kalinga website.
 * Verified copy (summary, intro, services, mission/vision/QHSE) comes from
 * @arismile/brand. Everything else in this file was drafted for this site
 * and should be reviewed by Datu Kalinga before launch.
 */

const record = getSubsidiary("datu-kalinga")!;
const profile = subsidiaryProfiles["datu-kalinga"];
const describe = (title: string) => profile.services.find((s) => s.title === title)!.description;

const services: ServiceContent[] = [
  {
    slug: "exploration-mineral-analytics",
    icon: Satellite,
    title: "Exploration & Mineral Analytics",
    description: describe("Exploration & Mineral Analytics"),
    overview: [
      "Successful mining starts with knowing exactly what is in the ground. Our exploration programmes combine geological mapping, satellite imagery and field sampling to locate and quantify mineral deposits before major capital is committed.",
      "Findings are translated into clear resource models and recommendations, giving investors and partners a sound basis for deciding whether, where and how to mine.",
    ],
    deliverables: [
      "Geological mapping and remote-sensing analysis",
      "Field sampling and deposit quantification",
      "Resource modelling and reporting",
      "Recommendations for development and investment",
    ],
  },
  {
    slug: "mining-operations",
    icon: Pickaxe,
    title: "Full-Scale Mining Operations",
    description: describe("Full-Scale Mining Operations"),
    overview: [
      "We plan and run extraction operations for a portfolio of solid minerals, matching mining method, fleet and staffing to the deposit and the market.",
      "Operations are run to world-class safety protocols with efficient machinery and disciplined site management, so output is predictable and people go home safe.",
    ],
    deliverables: [
      "Mine planning and scheduling",
      "Extraction and haulage operations",
      "Fleet and equipment management",
      "Production reporting and grade control",
    ],
  },
  {
    slug: "mine-engineering-construction",
    icon: HardHat,
    title: "Mine Engineering & Heavy Construction",
    description: describe("Mine Engineering & Heavy Construction"),
    overview: [
      "A mine is only as productive as the infrastructure that supports it. We design and build the roads, platforms, processing areas and logistics networks that move ore efficiently from pit to port.",
      "Our heavy construction capability also supports wider engineering and building construction projects, in line with our mission to add value across the engineering industries.",
    ],
    deliverables: [
      "Pit-to-port logistics infrastructure",
      "Mine-site civil and structural works",
      "Haul roads, platforms and drainage",
      "Engineering and building construction support",
    ],
  },
  {
    slug: "green-energy",
    icon: SunMedium,
    title: "Green Energy & Sustainable Power",
    description: describe("Green Energy & Sustainable Power"),
    overview: [
      "Remote industrial sites need reliable power that does not cost the earth. We plan captive power solutions and integrate renewable generation so operations can run efficiently with lower emissions.",
      "Power solutions are sized to the site's real load profile and designed to grow as operations expand.",
    ],
    deliverables: [
      "Captive power planning for industrial sites",
      "Renewable energy integration",
      "Energy efficiency assessments",
      "Lower-carbon operating strategies",
    ],
  },
  {
    slug: "agro-allied-industrialization",
    icon: Sprout,
    title: "Agro-Allied Industrialization",
    description: describe("Agro-Allied Industrialization"),
    overview: [
      "Land assets have value beyond the minerals beneath them. We develop agricultural value-chain projects that put land to productive use and support communities during and after mining.",
      "Agro-allied projects also form part of our post-mining restoration approach, returning disturbed land to productive and sustainable use.",
    ],
    deliverables: [
      "Agricultural value-chain project development",
      "Land-use planning for productive reuse",
      "Post-mining land restoration",
      "Community-focused agro initiatives",
    ],
  },
  {
    slug: "esg-environmental-stewardship",
    icon: Leaf,
    title: "ESG & Environmental Stewardship",
    description: describe("ESG & Environmental Stewardship"),
    overview: [
      "Responsible mining protects people, ecosystems and long-term value. We maintain rigorous Environmental, Social and Governance standards across our activities, with a focus on biodiversity, occupational health and community empowerment.",
      "Our QHSE commitment is simple: zero injuries, no work-related ill health and no hazardous occurrences.",
    ],
    deliverables: [
      "Environmental and social impact management",
      "Occupational health and safety systems",
      "Biodiversity and rehabilitation planning",
      "Community engagement and empowerment programmes",
    ],
  },
];

export const site: SiteContent = {
  record,
  profile,
  name: "Datu Kalinga",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? record.website ?? "http://localhost:3003",
  holdingsUrl: process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl,
  logo,
  logoClassName: "h-16",
  images,
  hero: {
    variant: "fullbleed",
    eyebrow: "Mining · Minerals · Industrial Development",
    title: record.tagline,
    text: profile.summary,
  },
  highlights: {
    title: "Resource wealth, responsibly developed",
    intro: "What sets Datu Kalinga apart as a mining and industrial partner.",
    items: [
      { icon: Gem, title: "Integrated capability", body: "Exploration, extraction, engineering, power and land use under one company." },
      { icon: ShieldCheck, title: "Zero-harm culture", body: "A firm commitment to zero injuries, work-related ill health and hazardous occurrences." },
      { icon: Leaf, title: "ESG at the core", body: "Biodiversity, occupational health and community empowerment built into every project." },
      { icon: Users, title: "Indigenous, globally minded", body: "A wholly indigenous company built to compete with the major global players." },
    ],
  },
  about: {
    title: "A diversified mining and industrial powerhouse",
  },
  process: {
    title: "From discovery to restoration",
    intro: "Our project lifecycle covers every stage of a resource's life.",
    steps: [
      { title: "Discover", body: "Geological mapping, remote sensing and sampling identify and quantify deposits." },
      { title: "Plan", body: "Mine design, infrastructure, power and ESG plans are developed together." },
      { title: "Operate", body: "Extraction and processing run to world-class safety and efficiency standards." },
      { title: "Restore", body: "Land is rehabilitated and returned to productive use, including agro-allied projects." },
    ],
  },
  industries: {
    title: "Sectors we serve",
    intro: "Datu Kalinga works with partners across the resources and industrial value chain.",
    items: [
      { icon: Mountain, title: "Solid minerals", body: "Exploration and extraction of critical solid minerals." },
      { icon: Factory, title: "Industrial processing", body: "Supplying and supporting the global industrial value chain." },
      { icon: Building, title: "Construction & engineering", body: "Heavy civil works and building construction." },
      { icon: SunMedium, title: "Energy", body: "Captive and renewable power for industrial operations." },
      { icon: Sprout, title: "Agriculture", body: "Agro-allied value-chain projects on productive land." },
      { icon: Landmark, title: "Government & investors", body: "Partners seeking responsible development of resource assets." },
    ],
  },
  services: {
    title: "Mining, engineering and sustainable development",
    intro: "Six service lines that take a resource from exploration to restoration.",
    items: services,
  },
  faqs: [
    { q: "What minerals does Datu Kalinga work with?", a: "We work across a diverse portfolio of solid minerals. Contact us to discuss a specific mineral, licence area or opportunity." },
    { q: "Do you partner with foreign investors?", a: "Yes. Strategic international collaboration is central to how we work, and we partner with local and foreign organisations on agreed terms." },
    { q: "How do you manage safety and the environment?", a: "We are committed to zero injuries, work-related ill health and hazardous occurrences, and we maintain rigorous ESG standards covering biodiversity, occupational health and community empowerment." },
    { q: "Do you take on construction work outside mining?", a: "Yes. Our mission includes value-added services across the engineering industries and building construction." },
    { q: "How can we start a conversation?", a: "Use the contact form to tell us about your project, licence or investment interest and our team will respond." },
  ],
  contact: {
    title: "Partner with Datu Kalinga",
    intro: "Discuss exploration, mining, engineering or investment opportunities with our team.",
  },
  cta: {
    title: "Exploring a mineral or industrial opportunity?",
    text: "Talk to Datu Kalinga about exploration, operations, infrastructure and responsible development.",
  },
  footerLine: "Mining, mineral processing and industrial development. A subsidiary of Arismile Holdings.",
};
