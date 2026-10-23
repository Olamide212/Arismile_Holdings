import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles } from "@arismile/brand";
import type { ServiceContent, SiteContent } from "@arismile/site-kit";
import {
  Banknote,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Database,
  Factory,
  GraduationCap,
  Landmark,
  Layers,
  LayoutTemplate,
  Lock,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { images, logo } from "./images";

/*
 * Content for the Mind Age website.
 * Verified copy (summary, intro, service titles/descriptions) comes from
 * @arismile/brand. Everything else in this file was drafted for this site
 * and should be reviewed by Mind Age before launch.
 */

const record = getSubsidiary("mind-age")!;
const profile = subsidiaryProfiles["mind-age"];
const describe = (prefix: string) => profile.services.find((s) => s.title.startsWith(prefix))!.description;

const services: ServiceContent[] = [
  {
    slug: "software-engineering",
    icon: Code2,
    title: "Enterprise Software & Systems Engineering",
    description: describe("Enterprise Software"),
    overview: [
      "We design and build software around how your organisation actually works. From internal tools to customer-facing platforms, our engineers turn complex business rules into reliable, maintainable systems.",
      "Projects are delivered iteratively, with working software early and often, so stakeholders can shape the product as it grows.",
    ],
    deliverables: [
      "Requirements discovery and solution architecture",
      "Custom application development",
      "Systems integration and APIs",
      "Testing, deployment and ongoing support",
    ],
  },
  {
    slug: "data-ecosystems",
    icon: Database,
    title: "Intelligent Data Ecosystems",
    description: describe("Intelligent Data"),
    overview: [
      "Data becomes valuable when it is trusted, connected and easy to act on. We design database architectures and analytics pipelines that turn scattered records into a single, dependable source of truth.",
      "On top of that foundation we build dashboards and AI-assisted analytics that give leaders timely, actionable insight.",
    ],
    deliverables: [
      "Database design and modernisation",
      "Data integration and pipelines",
      "Dashboards and reporting",
      "AI-driven analytics and insight",
    ],
  },
  {
    slug: "web-digital-experience",
    icon: LayoutTemplate,
    title: "Web Architecture & Digital Experience (DX)",
    description: describe("Web Architecture"),
    overview: [
      "Your website and digital products are often the first experience people have of your organisation. We design and build fast, accessible interfaces that look sharp and convert visitors into customers.",
      "Front-end polish is matched with secure, well-architected back ends, so experiences stay reliable as traffic and features grow.",
    ],
    deliverables: [
      "UX research and UI design",
      "Websites and web applications",
      "Performance, accessibility and SEO",
      "Secure back-end architecture",
    ],
  },
  {
    slug: "cyber-physical-security",
    icon: Lock,
    title: "Cyber-Physical Security & Integrated Protection",
    description: describe("Cyber-Physical"),
    overview: [
      "Modern threats cross the line between digital and physical. Our security division protects digital assets while coordinating, where needed, with tech-augmented security personnel for complete operational continuity.",
      "We assess exposure, harden systems and help teams respond quickly and effectively when incidents happen.",
    ],
    deliverables: [
      "Security assessments and hardening",
      "Access control and identity management",
      "Monitoring and incident response planning",
      "Integrated digital and physical protection",
    ],
  },
  {
    slug: "it-infrastructure-consulting",
    icon: Cloud,
    title: "IT Infrastructure & Strategic Consulting",
    description: describe("IT Infrastructure"),
    overview: [
      "Reliable infrastructure is the backbone of modern industry. We help organisations plan, migrate and optimise their networks and cloud environments, and we audit existing systems against business needs.",
      "Our consultants provide independent technical advisory, helping leadership teams make confident technology investment decisions.",
    ],
    deliverables: [
      "Cloud integration and migration",
      "Network design and optimisation",
      "Systems auditing",
      "Technology strategy and advisory",
    ],
  },
];

export const site: SiteContent = {
  record,
  profile,
  name: "Mind Age",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? record.website ?? "http://localhost:3004",
  holdingsUrl: process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl,
  logo,
  logoClassName: "h-14",
  images,
  hero: {
    variant: "split",
    eyebrow: "Software · Data · Security · Infrastructure",
    title: record.tagline,
    text: profile.summary,
  },
  highlights: {
    title: "Technology that becomes a competitive advantage",
    intro: "How Mind Age helps organisations move faster and work smarter.",
    items: [
      { icon: Layers, title: "End-to-end capability", body: "Strategy, design, engineering, data, security and infrastructure from one team." },
      { icon: ShieldCheck, title: "Secure by design", body: "Security considered from architecture through deployment, not bolted on later." },
      { icon: BrainCircuit, title: "Intelligence built in", body: "Data and AI-driven analytics that turn information into decisions." },
      { icon: Rocket, title: "Built to scale", body: "Systems designed to grow with your organisation and modernise legacy platforms." },
    ],
  },
  about: {
    title: "A strategic architect for progress in the digital economy",
    values: [
      { title: "Innovation", body: "We apply state-of-the-art technology where it creates real value, not for its own sake." },
      { title: "Excellence", body: "We hold our engineering, design and delivery to a high standard." },
      { title: "Integrity", body: "We protect our clients' data, systems and trust as if they were our own." },
      { title: "Partnership", body: "We work as an extension of our clients' teams and measure success by their outcomes." },
    ],
  },
  process: {
    title: "From idea to impact",
    intro: "Our delivery approach keeps projects focused, transparent and on track.",
    steps: [
      { title: "Discover", body: "We learn your goals, users and constraints, and define what success looks like." },
      { title: "Design", body: "Architecture, user experience and security are designed together." },
      { title: "Build", body: "We deliver in short iterations with working software at every step." },
      { title: "Evolve", body: "We support, monitor and improve your systems as your needs change." },
    ],
  },
  industries: {
    title: "Industries we serve",
    intro: "Mind Age supports organisations wherever technology drives performance.",
    items: [
      { icon: Landmark, title: "Government & public sector", body: "Digital services, data platforms and secure infrastructure." },
      { icon: Banknote, title: "Financial services", body: "Secure systems, analytics and customer-facing platforms." },
      { icon: Zap, title: "Energy & resources", body: "Data and infrastructure for operational efficiency." },
      { icon: Building2, title: "Enterprise & SMEs", body: "Business systems, websites and IT support that scale." },
      { icon: Factory, title: "Industry & logistics", body: "Integration, monitoring and automation of operations." },
      { icon: GraduationCap, title: "Education & non-profit", body: "Accessible platforms and cost-effective infrastructure." },
    ],
  },
  services: {
    title: "Digital services for the modern enterprise",
    intro: "Five service lines that cover the full technology stack, from strategy to secure operations.",
    items: services,
  },
  faqs: [
    { q: "What services does Mind Age provide?", a: "We provide enterprise software engineering, data and analytics, web and digital experience, cyber-physical security, and IT infrastructure and strategic consulting." },
    { q: "Can you modernise our existing systems?", a: "Yes. We regularly help organisations move legacy systems onto agile, future-ready platforms while keeping day-to-day operations running." },
    { q: "Do you provide ongoing support after launch?", a: "Yes. We offer support, monitoring and continuous improvement once your systems are live." },
    { q: "Do you work with other Arismile companies?", a: "Yes. Our security division can coordinate with Cadillac Security, and we support technology needs across the Arismile group." },
    { q: "How do we start a project?", a: "Send us a short description of your goals using the contact form and we will arrange a discovery conversation." },
  ],
  contact: {
    title: "Let’s build what’s next",
    intro: "Tell us about your project, system or challenge and our team will get back to you.",
  },
  cta: {
    title: "Ready to modernise how your organisation works?",
    text: "Talk to Mind Age about software, data, security and infrastructure.",
  },
  footerLine: "Software, data, security and IT infrastructure for the digital economy. A subsidiary of Arismile Holdings.",
};
