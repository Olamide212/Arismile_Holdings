import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles } from "@arismile/brand";
import type { ServiceContent, SiteContent } from "@arismile/site-kit";
import {
  Briefcase,
  Building2,
  Compass,
  Factory,
  Handshake,
  Landmark,
  LineChart,
  PiggyBank,
  Receipt,
  Scale,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { images, logo } from "./images";

/*
 * Content for the Arismile Advisory website.
 * Verified copy (summary, intro, services, mission/vision/assets) comes from
 * @arismile/brand. Everything else in this file was drafted for this site
 * and should be reviewed by Arismile Advisory before launch.
 */

const record = getSubsidiary("arismile-advisory")!;
const profile = subsidiaryProfiles["arismile-advisory"];
const describe = (title: string) => profile.services.find((s) => s.title === title)!.description;

const services: ServiceContent[] = [
  {
    slug: "financial-architecture",
    icon: Compass,
    title: "Bespoke Financial Architecture",
    description: describe("Bespoke Financial Architecture"),
    overview: [
      "Every client's financial position is different, so every plan should be too. We start by understanding your goals, obligations and appetite for risk, then build a financial roadmap that connects today's decisions with long-term objectives.",
      "Plans are data-driven and reviewed regularly, so they stay aligned as markets, regulations and your circumstances change.",
    ],
    deliverables: [
      "Financial position and goals assessment",
      "Data-driven financial roadmap",
      "Cash-flow and capital planning",
      "Regular reviews and adjustments",
    ],
  },
  {
    slug: "investment-management",
    icon: LineChart,
    title: "Active Investment Management",
    description: describe("Active Investment Management"),
    overview: [
      "We manage portfolios with discipline, diversifying across asset classes to pursue risk-adjusted returns while protecting capital when markets turn volatile.",
      "Clients receive clear reporting on performance, allocation and risk, and portfolios are rebalanced as conditions and objectives evolve.",
    ],
    deliverables: [
      "Investment policy and risk profiling",
      "Diversified portfolio construction",
      "Ongoing monitoring and rebalancing",
      "Transparent performance reporting",
    ],
  },
  {
    slug: "tax-optimization",
    icon: Receipt,
    title: "Strategic Tax Optimization",
    description: describe("Strategic Tax Optimization"),
    overview: [
      "Tax efficiency protects bottom-line performance. We review corporate structures and personal estates to identify lawful opportunities to reduce tax exposure and improve compliance.",
      "Recommendations are practical, documented and coordinated with your accountants and legal advisers.",
    ],
    deliverables: [
      "Tax position reviews",
      "Structuring recommendations for companies and estates",
      "Compliance planning",
      "Coordination with accountants and legal advisers",
    ],
  },
  {
    slug: "retirement-liquidity-planning",
    icon: PiggyBank,
    title: "Retirement & Liquidity Planning",
    description: describe("Retirement & Liquidity Planning"),
    overview: [
      "Retirement should be planned, not hoped for. We design retirement vehicles and exit strategies that keep income flowing and maintain the lifestyle you have worked for.",
      "For business owners, we plan liquidity events and exits so that value is realised efficiently and on your timetable.",
    ],
    deliverables: [
      "Retirement income planning",
      "Pension and retirement vehicle design",
      "Business exit and liquidity strategies",
      "Lifestyle continuity planning",
    ],
  },
  {
    slug: "estate-legacy-planning",
    icon: Scale,
    title: "Estate & Legacy Planning",
    description: describe("Estate & Legacy Planning"),
    overview: [
      "Wealth that is not structured carefully can be eroded in transfer. We help families and institutions put the right vehicles in place so assets pass smoothly to the next generation and legacies are protected.",
      "We work alongside legal professionals to ensure structures are robust and reflect your wishes.",
    ],
    deliverables: [
      "Estate review and succession planning",
      "Wealth transfer structures",
      "Family and institutional legacy planning",
      "Coordination with legal advisers",
    ],
  },
  {
    slug: "corporate-capital-advisory",
    icon: Building2,
    title: "Corporate Capital Advisory",
    description: describe("Corporate Capital Advisory"),
    overview: [
      "Ambitious organisations need strong balance sheets and investor-ready structures. We review financial structure and performance, and prepare enterprises to attract and deploy Tier-1 investment.",
      "Engagements range from structural audits to capital-raising preparation and performance improvement programmes.",
    ],
    deliverables: [
      "Balance sheet and structural review",
      "Investment readiness preparation",
      "Capital strategy and funding options",
      "Performance enhancement programmes",
    ],
  },
];

export const site: SiteContent = {
  record,
  profile,
  name: "Arismile Advisory",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? record.website ?? "http://localhost:3005",
  holdingsUrl: process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl,
  logo,
  logoClassName: "h-14",
  images,
  hero: {
    variant: "split",
    eyebrow: "Financial & Strategic Advisory",
    title: record.tagline,
    text: profile.summary,
  },
  highlights: {
    title: "Guidance engineered for a complex global economy",
    intro: "Why individuals and enterprises choose Arismile Advisory.",
    items: [
      { icon: Handshake, title: "Fiduciary partnership", body: "We act as a primary fiduciary partner, with your interests at the centre of every recommendation." },
      { icon: LineChart, title: "Data-driven decisions", body: "Deep market intelligence and advanced financial modelling behind every plan." },
      { icon: ShieldCheck, title: "Capital preservation", body: "Strategies designed to protect capital as well as grow it." },
      { icon: Users, title: "Individuals & enterprises", body: "Advice for private clients, families, and organisations of every size." },
    ],
  },
  about: {
    title: "The strategic orchestration of capital and long-term fiscal resilience",
  },
  process: {
    title: "A structured advisory journey",
    intro: "A consistent process that keeps advice clear, documented and accountable.",
    steps: [
      { title: "Understand", body: "We learn your objectives, obligations, timeline and appetite for risk." },
      { title: "Analyse", body: "We model scenarios using current market intelligence and your financial data." },
      { title: "Recommend", body: "You receive a clear, documented strategy with the reasoning behind it." },
      { title: "Review", body: "We monitor results and adjust the plan as markets and circumstances change." },
    ],
  },
  industries: {
    title: "Who we advise",
    intro: "Arismile Advisory serves a sophisticated clientele of individuals and organisations.",
    items: [
      { icon: Wallet, title: "Private clients", body: "High-net-worth individuals seeking growth, protection and succession planning." },
      { icon: Users, title: "Families", body: "Family wealth, estate and legacy planning across generations." },
      { icon: Briefcase, title: "Business owners", body: "Exit planning, liquidity and personal–corporate financial alignment." },
      { icon: Building2, title: "Corporates", body: "Capital structure, investment readiness and performance enhancement." },
      { icon: Factory, title: "Growth enterprises", body: "Preparation for Tier-1 investment and sustainable expansion." },
      { icon: Landmark, title: "Institutions", body: "Fiscal resilience and long-term capital planning." },
    ],
  },
  services: {
    title: "Advisory services built around your capital",
    intro: "Six specialist services spanning financial architecture, investments, tax, retirement, estates and corporate capital.",
    items: services,
  },
  faqs: [
    { q: "Who does Arismile Advisory work with?", a: "We advise individuals, families and enterprises, from private clients planning retirement to organisations preparing for major investment." },
    { q: "How does the advisory process start?", a: "With a confidential conversation about your objectives and current position. From there we agree the scope of work and next steps." },
    { q: "Do you work with our existing accountants and lawyers?", a: "Yes. Tax, estate and corporate work is coordinated with your existing professional advisers." },
    { q: "Is my information kept confidential?", a: "Yes. Client information is handled confidentially and used only to provide our advisory services." },
    { q: "How can I book a consultation?", a: "Use the contact form and choose the service you are interested in, and our team will get in touch to arrange a meeting." },
  ],
  contact: {
    title: "Book a consultation",
    intro: "Tell us about your goals and the right adviser will be in touch to arrange a confidential conversation.",
  },
  cta: {
    title: "Ready to plan your next financial move?",
    text: "Speak with Arismile Advisory about investments, tax, retirement, estates or corporate capital.",
  },
  footerLine: "Strategic, financial and business advisory for individuals and enterprises. A subsidiary of Arismile Holdings.",
};
