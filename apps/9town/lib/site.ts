import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles, type SubsidiaryService } from "@arismile/brand";
import type { ServiceContent, SiteContent } from "@arismile/site-kit";
import {
  Building2,
  ClipboardCheck,
  Factory,
  HardHat,
  Home,
  Hotel,
  Landmark,
  Leaf,
  Map as MapIcon,
  Network,
  Route,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { images, logo } from "./images";

/*
 * Content for the 9-Town website.
 * Verified copy (summary, intro, service titles/descriptions) comes from
 * @arismile/brand. Everything else in this file was drafted for this site
 * and should be reviewed by 9-Town before launch.
 */

const record = getSubsidiary("nine-town")!;
const profile = subsidiaryProfiles["nine-town"];
const verified = (title: string): SubsidiaryService => profile.services.find((s) => s.title.startsWith(title))!;

const services: ServiceContent[] = [
  {
    slug: "civil-infrastructure",
    icon: Route,
    title: "Large-Scale Civil Infrastructure",
    description: verified("Large-Scale Civil").description,
    overview: [
      "Roads, bridges and municipal utilities are the backbone of economic growth. 9-Town plans and delivers civil works that are engineered for heavy use, long service life and low maintenance, working closely with public-sector clients and their consultants from early design through commissioning.",
      "Our teams combine design coordination, earthworks, structural works and utility installation under one programme, so interfaces between disciplines are managed rather than left to chance on site.",
    ],
    deliverables: [
      ...verified("Large-Scale Civil").points!,
      "Road construction, viaducts and overpasses",
      "Wastewater and rainwater facilities",
      "Site supervision and quality control through to handover",
    ],
  },
  {
    slug: "residential-commercial-real-estate",
    icon: Building2,
    title: "Prime Residential & Commercial Real Estate",
    description: verified("Prime Residential").description,
    overview: [
      "We develop residential communities, office space and mixed-use buildings that balance contemporary design with practical, efficient operation. Each development is planned around how people will live and work in it, and how the asset will perform for its owners over time.",
      "Development models are tailored to the opportunity, including income-sharing, land purchase and land-for-flat arrangements, and we coordinate architecture, structure and building services as one integrated design.",
    ],
    deliverables: [
      ...verified("Prime Residential").points!,
      "Housing developments, villas and residences",
      "Hotels, business centres and shopping centres",
      "Flexible development and partnership models",
    ],
  },
  {
    slug: "urban-master-planning",
    icon: MapIcon,
    title: "Urban Master Planning & Site Development",
    description: verified("Urban Master").description,
    overview: [
      "Good places start with a good plan. We help landowners and public bodies turn raw land into coherent, well-connected developments, setting out land use, access, utilities and phasing so that each stage of building adds value to the next.",
      "Our planning work is grounded in engineering reality: we test layouts against topography, drainage, power and transport so the plan can actually be built and financed.",
    ],
    deliverables: [
      ...verified("Urban Master").points!,
      "Land-use and phasing plans",
      "Infrastructure and landscaping design",
      "Site preparation and enabling works",
    ],
  },
  {
    slug: "epc-management",
    icon: ClipboardCheck,
    title: "Engineering, Procurement, and Construction (EPC) Management",
    description: verified("Engineering, Procurement").description,
    overview: [
      "On complex projects, a single point of responsibility protects budget and programme. As EPC manager, 9-Town takes ownership of engineering, procurement and construction, coordinating designers, suppliers and contractors against one schedule.",
      "We prepare tender documentation, manage contracts and claims, and keep clients informed with clear reporting on cost, progress, quality and safety.",
    ],
    deliverables: [
      "Preparation of project tender files",
      "Project management and site supervision",
      "Procurement planning and supplier management",
      "Contract and claims administration",
      "Cost, programme and HSE reporting",
    ],
  },
  {
    slug: "property-portfolio-management",
    icon: Landmark,
    title: "Property Portfolio Management & Strategic Advisory",
    description: verified("Property Portfolio").description,
    overview: [
      "A building's value is protected long after construction ends. We help owners manage completed assets: keeping them well maintained, well occupied and positioned for long-term capital growth.",
      "Our advisory work covers lifecycle planning, tenant experience and decisions on when to refurbish, reposition, hold or sell.",
    ],
    deliverables: [
      ...verified("Property Portfolio").points!,
      "Facility and maintenance management",
      "Refurbishment and reinforcement projects",
    ],
  },
];

export const site: SiteContent = {
  record,
  profile,
  name: "9-Town",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? record.website ?? "http://localhost:3001",
  holdingsUrl: process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl,
  logo,
  logoClassName: "h-14",
  images,
  hero: {
    variant: "fullbleed",
    eyebrow: "Infrastructure · Real Estate · Civil Engineering",
    title: record.tagline,
    text: profile.summary,
  },
  highlights: {
    title: "Built on structural integrity and visionary design",
    intro: "What clients can expect when they build with 9-Town.",
    items: [
      { icon: HardHat, title: "End-to-end delivery", body: "From master planning and design through procurement, construction and handover, one accountable team manages every stage." },
      { icon: ShieldCheck, title: "Safety and quality first", body: "Rigorous on-site supervision and quality control on every project, aligned with international safety practice." },
      { icon: Leaf, title: "Sustainable urbanism", body: "Developments that use land efficiently, integrate green space and remain economical to run over their lifetime." },
      { icon: Network, title: "The strength of a group", body: "As part of Arismile Holdings, 9-Town draws on sister companies in power, energy, procurement and security." },
    ],
  },
  about: {
    title: "Building the infrastructure and places that move communities forward",
    values: [
      { title: "Integrity", body: "Structural integrity in what we build and professional integrity in how we work with clients, partners and communities." },
      { title: "Excellence", body: "Institutional-grade delivery: clear planning, disciplined execution and attention to detail on every site." },
      { title: "Sustainability", body: "Designing for efficient land use, durable materials and buildings that are affordable to operate for decades." },
      { title: "Partnership", body: "Working openly with clients, consultants and the public sector to deliver shared outcomes." },
    ],
  },
  process: {
    title: "A disciplined path from concept to completion",
    intro: "Every 9-Town project follows the same four stages, so clients always know what happens next.",
    steps: [
      { title: "Feasibility & planning", body: "We assess the site, brief and budget, then define scope, phasing and the delivery model." },
      { title: "Design & engineering", body: "Architecture, structure and services are coordinated into one buildable design." },
      { title: "Procurement & construction", body: "Materials and contractors are procured and managed against a single programme with daily supervision." },
      { title: "Handover & asset care", body: "Commissioning, documentation and handover, with ongoing facility and portfolio management if required." },
    ],
  },
  industries: {
    title: "Sectors we build for",
    intro: "9-Town delivers projects for public and private clients across the built environment.",
    items: [
      { icon: Route, title: "Public infrastructure", body: "Roads, bridges, drainage and municipal utility systems." },
      { icon: Home, title: "Residential", body: "Housing estates, gated communities, residences and villas." },
      { icon: Building2, title: "Commercial & office", body: "Office blocks, business centres, showrooms and shopping centres." },
      { icon: Factory, title: "Industrial", body: "Factories, industrial facilities and greenfield industrial clusters." },
      { icon: Hotel, title: "Hospitality & institutional", body: "Hotels, educational, cultural and healthcare buildings." },
      { icon: Zap, title: "Energy facilities", body: "Civil works for hydroelectric, thermal, wind and solar power plants." },
    ],
  },
  services: {
    title: "Infrastructure, real estate and project delivery",
    intro: "Five integrated service lines covering the full life of a built asset, from master plan to portfolio management.",
    items: services,
  },
  faqs: [
    { q: "What sectors does 9-Town Limited serve?", a: "We serve industrial facilities, residential and commercial buildings, energy plants, and hospitality developments, as well as public infrastructure." },
    { q: "Can 9-Town manage a project from design through to handover?", a: "Yes. Through our EPC management service we take single-point responsibility for engineering, procurement and construction, and can continue with facility and portfolio management after handover." },
    { q: "Do you work on public-sector projects?", a: "Yes. Public works such as roads, bridges and municipal utilities are a core part of our civil infrastructure service." },
    { q: "What development models do you offer landowners?", a: "Depending on the opportunity, we can work through income-sharing, land purchase or land-for-flat arrangements. Contact us to discuss your site." },
    { q: "How can I start a project or request a consultation?", a: `Use the form on this page or email ${record.email} with a short description of your site and objectives, and our team will arrange a consultation.` },
  ],
  contact: {
    title: "Start your project with 9-Town",
    intro: "Tell us about your site, development or infrastructure requirement and we will arrange a consultation.",
  },
  cta: {
    title: "Planning a development or infrastructure project?",
    text: "Talk to 9-Town about feasibility, design, delivery and long-term asset management.",
  },
  footerLine: "Large-scale infrastructure, high-value real estate and civil engineering. A subsidiary of Arismile Holdings.",
};
