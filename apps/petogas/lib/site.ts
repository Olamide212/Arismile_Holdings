import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles } from "@arismile/brand";
import type { ServiceContent, SiteContent } from "@arismile/site-kit";
import {
  BarChart3,
  Building2,
  Cog,
  Droplets,
  Factory,
  Fuel,
  HardHat,
  Leaf,
  Radio,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react";
import { images, logo } from "./images";

/*
 * Content for the Petogas website.
 * Verified copy (summary, intro, services, commitments) comes from
 * @arismile/brand. Everything else in this file was drafted for this site
 * and should be reviewed by Petogas before launch.
 */

const record = getSubsidiary("petogas-limited")!;
const profile = subsidiaryProfiles["petogas-limited"];
const describe = (title: string) => profile.services.find((s) => s.title === title)!.description;
const commitments = profile.groups?.[0];

const services: ServiceContent[] = [
  {
    slug: "bulk-distribution-logistics",
    icon: Truck,
    title: "Bulk Petroleum Distribution & Logistics",
    description: describe("Bulk Petroleum Distribution & Logistics"),
    overview: [
      "Reliable fuel supply keeps industry, transport and households moving. Petogas operates a high-performance fleet and strategic storage partnerships to move PMS, AGO and DPK in bulk to industrial hubs and retail outlets.",
      "Deliveries are planned around customer demand and tracked end to end, with a focus on product quality and volume integrity at every handover.",
    ],
    deliverables: [
      "Bulk supply of PMS, AGO and DPK",
      "Fleet scheduling and delivery management",
      "Strategic storage partnerships",
      "Product quality and volume integrity checks",
    ],
  },
  {
    slug: "retail-station-management",
    icon: Store,
    title: "Retail Station Management & Optimization",
    description: describe("Retail Station Management & Optimization"),
    overview: [
      "‘The Petogas Experience’ is about speed, accuracy and courtesy at the pump. We manage service stations to consistent standards so that every customer interaction is quick, accurate and safe.",
      "Station operations are supported by trained staff, reliable supply and clear safety procedures.",
    ],
    deliverables: [
      "Service station operations and staffing",
      "Accurate dispensing and stock control",
      "Forecourt safety procedures",
      "Customer service standards",
    ],
  },
  {
    slug: "industrial-commercial-fuel-supply",
    icon: Factory,
    title: "Industrial & Commercial Fuel Supply",
    description: describe("Industrial & Commercial Fuel Supply"),
    overview: [
      "Manufacturing plants, construction sites and telecoms networks cannot afford to run dry. We provide bespoke fuel supply with turnkey management, so organisations can focus on their core business.",
      "Supply schedules are built around each client's consumption, with delivery to site and clear documentation for every drop.",
    ],
    deliverables: [
      "Scheduled and on-demand delivery to site",
      "Turnkey fuel management",
      "Supply for manufacturing, construction and telecoms",
      "Consumption documentation and reporting",
    ],
  },
  {
    slug: "lubricants-specialized-fluids",
    icon: Droplets,
    title: "Lubricants & Specialized Fluid Marketing",
    description: describe("Lubricants & Specialized Fluid Marketing"),
    overview: [
      "The right lubricant extends equipment life and reduces downtime. Petogas supplies a premium range of high-performance lubricants and industrial chemicals for heavy equipment, machinery and automotive engines.",
      "We help customers choose the right products for their equipment and operating conditions.",
    ],
    deliverables: [
      "High-performance technical lubricants",
      "Industrial chemicals and specialised fluids",
      "Products for heavy equipment and automotive engines",
      "Product selection guidance",
    ],
  },
  {
    slug: "fuel-management-advisory",
    icon: BarChart3,
    title: "Technical Advisory & Fuel Management Systems",
    description: describe("Technical Advisory & Fuel Management Systems"),
    overview: [
      "Fuel is a major cost for energy-intensive organisations. We use data from consumption and delivery records to help institutional clients reduce waste and improve the bottom line.",
      "Advisory engagements can include digital monitoring and automated delivery so that supply is transparent and efficient.",
    ],
    deliverables: [
      "Fuel consumption analysis",
      "Waste and loss reduction",
      "Digital monitoring and automated delivery",
      "Cost-performance reporting",
    ],
  },
];

export const site: SiteContent = {
  record,
  profile,
  name: "Petogas",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? record.website ?? "http://localhost:3008",
  holdingsUrl: process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl,
  logo,
  logoClassName: "h-12",
  images,
  hero: {
    variant: "fullbleed",
    eyebrow: "Fuelling Possibilities",
    title: record.tagline,
    text: profile.summary,
  },
  highlights: {
    title: "Reliable energy for Nigeria’s economic corridors",
    intro: "What customers can count on from Petogas.",
    items: [
      { icon: Cog, title: commitments?.items[0]?.title ?? "Operational Resilience", body: commitments?.items[0]?.body ?? "" },
      { icon: Leaf, title: commitments?.items[1]?.title ?? "Environmental Stewardship", body: commitments?.items[1]?.body ?? "" },
      { icon: Radio, title: commitments?.items[2]?.title ?? "Customer-Centric Innovation", body: commitments?.items[2]?.body ?? "" },
      { icon: ShieldCheck, title: "Quality & volume integrity", body: "Rigorous standards so every delivery meets quality and volume expectations." },
    ],
  },
  about: {
    title: "A cornerstone of Nigeria’s downstream value chain",
    values: [
      { title: "Transparency", body: "Clear pricing, documentation and reporting for every customer." },
      { title: "Safety", body: "Health, Safety and Environment protocols at the heart of distribution and retail." },
      { title: "Operational precision", body: "Accurate volumes and dependable schedules, every time." },
      { title: "Local content", body: "A wholly indigenous company committed to local content development." },
    ],
  },
  process: {
    title: "How we keep fuel moving",
    intro: "A dependable supply chain from source to customer.",
    steps: [
      { title: "Source", body: "Product is secured through strategic storage and supply partnerships." },
      { title: "Assure", body: "Quality and volume checks protect product integrity." },
      { title: "Deliver", body: "Our fleet moves product to industrial hubs, sites and retail stations." },
      { title: "Optimise", body: "Data and monitoring help customers reduce waste and cost." },
    ],
  },
  industries: {
    title: "Who we supply",
    intro: "Petogas powers households, transportation and the engines of national commerce.",
    items: [
      { icon: Factory, title: "Manufacturing", body: "Reliable fuel and lubricants for production facilities." },
      { icon: HardHat, title: "Construction", body: "On-site fuel supply for plant and heavy equipment." },
      { icon: Radio, title: "Telecommunications", body: "Fuel for network sites and backup generation." },
      { icon: Truck, title: "Transport & logistics", body: "Fleet fuelling and lubricants for vehicles." },
      { icon: Fuel, title: "Retail motorists", body: "Quality fuel through Petogas service stations." },
      { icon: Building2, title: "Institutions", body: "Managed fuel supply and consumption advisory." },
    ],
  },
  services: {
    title: "Downstream energy, end to end",
    intro: "Distribution, retail, industrial supply, lubricants and fuel-management advisory across Nigeria’s economic corridors.",
    items: services,
  },
  faqs: [
    { q: "Which products does Petogas supply?", a: "We distribute Premium Motor Spirit (PMS), Automotive Gas Oil (AGO) and Dual Purpose Kerosene (DPK), together with high-performance lubricants and industrial chemicals." },
    { q: "Can you deliver fuel directly to our site?", a: "Yes. We provide scheduled and on-demand delivery for manufacturing, construction, telecoms and other commercial customers." },
    { q: "Do you offer fuel management for large organisations?", a: "Yes. Our technical advisory and fuel management systems help institutional clients optimise consumption, reduce waste and improve cost performance." },
    { q: "How do you ensure product quality?", a: "We apply rigorous standards to quality and volume integrity throughout distribution, alongside strict HSE protocols." },
    { q: "How do I open a supply account?", a: "Use the contact form to tell us about your consumption and location, and our team will be in touch." },
  ],
  contact: {
    title: "Power your operations with Petogas",
    intro: "Tell us about your fuel, lubricant or fuel-management requirements.",
  },
  cta: {
    title: "Need a dependable fuel partner?",
    text: "Talk to Petogas about bulk supply, site delivery, lubricants and fuel management.",
  },
  footerLine: "Distribution and marketing of refined petroleum products across Nigeria. A subsidiary of Arismile Holdings.",
};
