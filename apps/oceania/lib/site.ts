import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles } from "@arismile/brand";
import type { ServiceContent, SiteContent } from "@arismile/site-kit";
import {
  Anchor,
  Container as ContainerIcon,
  Cog,
  Compass,
  Factory,
  Fuel,
  Gauge,
  Landmark,
  Network,
  ShieldCheck,
  Ship,
  Waves,
} from "lucide-react";
import { images, logo } from "./images";

/*
 * Content for the Oceania website.
 * Verified copy (summary, intro, service titles/descriptions) comes from
 * @arismile/brand. Everything else in this file was drafted for this site
 * and should be reviewed by Oceania before launch.
 */

const record = getSubsidiary("oceania")!;
const profile = subsidiaryProfiles.oceania;
const describe = (title: string) => profile.services.find((s) => s.title === title)!.description;

const services: ServiceContent[] = [
  {
    slug: "marine-engineering",
    icon: Ship,
    title: "Integrated Marine Engineering",
    description: describe("Integrated Marine Engineering"),
    overview: [
      "Vessels and offshore assets earn their keep only when they are available. Oceania provides structural and mechanical engineering, planned maintenance and fleet management designed to keep marine assets safe, compliant and in service.",
      "We plan maintenance around operational windows, coordinate specialist trades and keep clear records, so owners and operators can make confident decisions about their fleets.",
    ],
    deliverables: [
      "Structural and mechanical engineering for vessels and offshore units",
      "Planned and corrective vessel maintenance",
      "Offshore fleet management and technical support",
      "Marine vessel supply and operations",
      "Maintenance and service contracts",
    ],
  },
  {
    slug: "upstream-midstream-support",
    icon: Fuel,
    title: "Upstream & Midstream Support",
    description: describe("Upstream & Midstream Support"),
    overview: [
      "Oil and gas operators need partners who understand both the technical detail and the operating environment. Oceania supports upstream and midstream assets with engineering services, pipeline integrity work and procurement of equipment for energy infrastructure.",
      "Our scope is built around keeping production safe and continuous: inspecting and maintaining what is already installed, and sourcing the right equipment when systems are expanded or replaced.",
    ],
    deliverables: [
      "Subsea engineering support",
      "Pipeline integrity management, maintenance and supply",
      "Oil and gas equipment and supply services",
      "Procurement for energy infrastructure projects",
    ],
  },
  {
    slug: "offshore-logistics",
    icon: ContainerIcon,
    title: "Offshore Logistics & Asset Protection",
    description: describe("Offshore Logistics & Asset Protection"),
    overview: [
      "Moving people, equipment and materials to offshore and remote locations is complex and time-critical. We plan and coordinate marine logistics so that supplies arrive where and when operations need them.",
      "Logistics planning is matched with asset-protection measures, coordinated where needed with our sister company Cadillac Security, to reduce risk to cargo, crews and installations.",
    ],
    deliverables: [
      "Marine logistics planning and coordination",
      "Supply chain management for offshore operations",
      "Equipment and materials movement to remote sites",
      "Asset-protection planning for cargo and installations",
    ],
  },
  {
    slug: "risk-technical-advisory",
    icon: Compass,
    title: "Risk Mitigation & Technical Advisory",
    description: describe("Risk Mitigation & Technical Advisory"),
    overview: [
      "Every marine and energy operation carries technical, regulatory and environmental risk. Oceania's advisory team helps clients understand that risk clearly and reduce it with practical, well-evidenced recommendations.",
      "We review operations, assets and procedures against applicable safety and environmental standards, and support clients through implementation.",
    ],
    deliverables: [
      "Operational risk assessments",
      "Compliance reviews against safety and environmental standards",
      "Technical due diligence and advisory",
      "Implementation support for recommended improvements",
    ],
  },
  {
    slug: "infrastructure-development",
    icon: Anchor,
    title: "Strategic Infrastructure Development",
    description: describe("Strategic Infrastructure Development"),
    overview: [
      "Ports and energy terminals are long-life assets at the heart of trade and energy security. Oceania supports their development and operation, from early engineering through construction and facility management.",
      "Where projects need civil construction capacity, we work alongside 9-Town, Arismile Holdings' infrastructure company, to deliver a single integrated solution.",
    ],
    deliverables: [
      "Port facility management",
      "Energy terminal construction support",
      "Engineering for marine and coastal infrastructure",
      "Integrated delivery with Arismile group companies",
    ],
  },
];

export const site: SiteContent = {
  record,
  profile,
  name: "Oceania",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? record.website ?? "http://localhost:3002",
  holdingsUrl: process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl,
  logo,
  logoClassName: "h-14",
  images,
  hero: {
    variant: "fullbleed",
    eyebrow: "Marine · Oil & Gas · Logistics",
    title: record.tagline,
    text: profile.summary,
  },
  highlights: {
    title: "Precision for high-stakes marine and energy operations",
    intro: "Why operators choose Oceania for their offshore and onshore requirements.",
    items: [
      { icon: Cog, title: "Deep technical expertise", body: "Engineering capability across vessels, pipelines, terminals and offshore assets." },
      { icon: ShieldCheck, title: "Safety and compliance", body: "Work planned and executed against global safety and environmental standards." },
      { icon: Gauge, title: "Uptime-focused", body: "Maintenance and logistics organised around keeping assets in service." },
      { icon: Network, title: "Group capability", body: "Access to Arismile companies in construction, security, procurement and energy." },
    ],
  },
  about: {
    title: "A premier sentinel of industrial excellence in energy and maritime corridors",
    values: [
      { title: "Technical mastery", body: "We bring deep domain expertise to every engineering, maintenance and advisory engagement." },
      { title: "Operational integrity", body: "We protect people, assets and the environment by doing the work properly, every time." },
      { title: "Reliability", body: "Clients depend on us to keep critical assets available, so we plan carefully and deliver on commitments." },
      { title: "Innovation", body: "We look for better methods, tools and data to reduce cost and risk for our clients." },
    ],
  },
  process: {
    title: "From assessment to sustained performance",
    intro: "A clear, repeatable approach for every marine and energy engagement.",
    steps: [
      { title: "Assess", body: "We survey the asset or operation and agree objectives, constraints and risks." },
      { title: "Engineer", body: "Solutions, maintenance plans or logistics programmes are designed and costed." },
      { title: "Execute", body: "Qualified teams deliver the work safely, with progress and quality reporting." },
      { title: "Sustain", body: "Ongoing maintenance, monitoring and advisory keep performance on track." },
    ],
  },
  industries: {
    title: "Industries we serve",
    intro: "Oceania supports organisations operating across the energy and maritime value chain.",
    items: [
      { icon: Fuel, title: "Upstream oil & gas", body: "Exploration and production operators onshore and offshore." },
      { icon: Factory, title: "Midstream & pipelines", body: "Pipeline, processing and storage operators." },
      { icon: Ship, title: "Shipping & vessel operators", body: "Owners and managers of support vessels and fleets." },
      { icon: Anchor, title: "Ports & terminals", body: "Port authorities, terminal operators and energy terminals." },
      { icon: Waves, title: "Offshore services", body: "Contractors working on offshore installations and marine projects." },
      { icon: Landmark, title: "Public sector & regulators", body: "Agencies developing marine and energy infrastructure." },
    ],
  },
  services: {
    title: "Marine and energy engineering services",
    intro: "Five integrated service lines for the modern oil & gas and marine sectors.",
    items: services,
  },
  faqs: [
    { q: "What does Oceania do?", a: "Oceania provides marine engineering, upstream and midstream technical support, offshore logistics, risk and technical advisory, and support for port and energy terminal infrastructure." },
    { q: "Do you supply oil and gas equipment?", a: "Yes. Equipment and supply services for oil and gas operations, including pipeline maintenance and supply, are part of our upstream and midstream support." },
    { q: "Can you provide maintenance under a long-term contract?", a: "Yes. We offer maintenance and service contracts for vessels and energy assets, planned around your operational schedule." },
    { q: "Do you work with other Arismile companies?", a: "Yes. Where a project needs it, we coordinate with 9-Town for construction and Cadillac Security for asset protection, giving clients one integrated team." },
    { q: "How do we start working with Oceania?", a: "Send us a short description of your asset or requirement using the contact form and our team will arrange a technical discussion." },
  ],
  contact: {
    title: "Talk to Oceania",
    intro: "Tell us about your vessel, asset or project and our technical team will be in touch.",
  },
  cta: {
    title: "Need a dependable marine and energy partner?",
    text: "Speak with Oceania about engineering, maintenance, logistics or advisory support.",
  },
  footerLine: "Integrated marine engineering and oil & gas support services. A subsidiary of Arismile Holdings.",
};
