import { getSubsidiary, holdingsSiteUrl, subsidiaryProfiles } from "@arismile/brand";
import type { ServiceContent, SiteContent } from "@arismile/site-kit";
import {
  Anchor,
  Building2,
  Cctv,
  Crosshair,
  Flag,
  Fuel,
  Globe2,
  Mountain,
  Radar,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import { images, logo } from "./images";

/*
 * Content for the Cadillac Security website.
 * Verified copy (summary, intro, services and their points, mission, creed,
 * methodology) comes from @arismile/brand. Everything else in this file was
 * drafted for this site and should be reviewed by Cadillac Security before
 * launch.
 */

const record = getSubsidiary("cadillac-security")!;
const profile = subsidiaryProfiles["cadillac-security"];
const verified = (prefix: string) => profile.services.find((s) => s.title.startsWith(prefix))!;

const services: ServiceContent[] = [
  {
    slug: "executive-vip-protection",
    icon: UserCheck,
    title: "Executive & VIP Protection",
    description: verified("Executive & VIP").description,
    overview: [
      "Our Elite Shield Division provides discreet, high-tier close protection for dignitaries, executives, diplomats and high-net-worth individuals. Every assignment is planned around the principal's itinerary, profile and the specific risks of each location.",
      "Protection teams combine experienced close protection officers, secure transport and advance intelligence, so principals can focus on their work while we manage the threat environment.",
    ],
    deliverables: verified("Executive & VIP").points!,
  },
  {
    slug: "manned-guarding",
    icon: Building2,
    title: "Manned Guarding & Corporate Security",
    description: verified("Manned Guarding").description,
    overview: [
      "A visible, professional guard force is one of the most effective deterrents. We provide disciplined, well-supervised officers for offices, residences, diplomatic missions and industrial sites.",
      "Guarding is backed by clear site instructions, access-control procedures and supervision, so standards hold on every shift.",
    ],
    deliverables: verified("Manned Guarding").points!,
  },
  {
    slug: "maritime-infrastructure-defense",
    icon: Anchor,
    title: "Maritime & Critical Infrastructure Defense",
    description: verified("Maritime & Critical").description,
    overview: [
      "Oil and gas, ports and mining concessions face distinct, high-consequence risks. We design security architectures for these environments that protect people, assets and continuity of operations.",
      "Solutions combine trained personnel, physical hardening and remote monitoring, coordinated with rapid response for remote and offshore installations.",
    ],
    deliverables: verified("Maritime & Critical").points!,
  },
  {
    slug: "electronic-security-intelligence",
    icon: Cctv,
    title: "Electronic Security & Technical Intelligence",
    description: verified("Electronic Security").description,
    overview: [
      "Technology multiplies the reach of every officer. We integrate surveillance, access control, sensors and tracking into a centralised command capability that sees more and responds faster.",
      "Systems are designed around each site's threat profile and integrated with our manned and response services.",
    ],
    deliverables: verified("Electronic Security").points!,
  },
];

const pillars = profile.groups?.[0];
const methodology = profile.groups?.[1];

export const site: SiteContent = {
  record,
  profile,
  name: "Cadillac Security",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? record.website ?? "http://localhost:3006",
  holdingsUrl: process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl,
  logo,
  logoClassName: "h-16",
  images,
  hero: {
    variant: "fullbleed",
    eyebrow: "Private Security · Sub-Saharan Africa",
    title: record.tagline,
    text: profile.summary,
  },
  highlights: {
    title: "The trusted shield across Africa",
    intro: "Five strategic pillars underpin every Cadillac Security engagement.",
    items: [
      { icon: ShieldCheck, title: "Integrity First", body: pillars?.items[0]?.body ?? "" },
      { icon: Globe2, title: "Global Standards", body: pillars?.items[1]?.body ?? "" },
      { icon: Crosshair, title: "Tactical Precision", body: pillars?.items[2]?.body ?? "" },
      { icon: Radar, title: "Proactive Resilience", body: pillars?.items[3]?.body ?? "" },
    ],
  },
  about: {
    title: "Redefining the benchmarks of private security across Africa",
    // The methodology is already shown as the process steps.
    groups: pillars ? [pillars] : [],
  },
  process: {
    title: methodology?.heading ?? "Operational methodology",
    intro: methodology?.intro ?? "",
    steps: (methodology?.items ?? []).map((i) => ({ title: i.title, body: i.body })),
  },
  industries: {
    title: "Who we protect",
    intro: "Cadillac Security serves organisations and individuals operating in complex risk environments across Sub-Saharan Africa.",
    items: [
      { icon: Flag, title: "Diplomatic missions", body: "Embassies, consulates and visiting delegations." },
      { icon: Users, title: "Executives & HNWIs", body: "Corporate leaders, dignitaries and high-net-worth individuals." },
      { icon: Building2, title: "Corporate & commercial", body: "Multi-tenant offices, commercial and residential properties." },
      { icon: Fuel, title: "Oil & gas", body: "Onshore and offshore energy installations and logistics." },
      { icon: Anchor, title: "Maritime & ports", body: "Vessels, offshore assets and port facilities." },
      { icon: Mountain, title: "Mining", body: "Mining concessions and remote industrial sites." },
    ],
  },
  services: {
    title: "Operational capabilities",
    intro: "From VIP close protection to maritime and critical-infrastructure defence, supported by electronic security and technical intelligence.",
    items: services,
  },
  faqs: [
    { q: "Where does Cadillac Security operate?", a: "Our headquarters is in Nigeria, and we maintain cross-border partnerships that let us manage transit, assets and personnel throughout Sub-Saharan Africa." },
    { q: "How are your officers selected?", a: "Personnel undergo stringent background checks and psychological evaluation, and only operators with verified forensic, psychological, tactical and professional credentials are assigned to sensitive deployments." },
    { q: "Which standards do you follow?", a: "We operate within internationally recognised frameworks, including ISO security benchmarks and the Voluntary Principles on Security and Human Rights (VPSHR)." },
    { q: "What happens before a deployment?", a: "Every engagement begins with a threat and vulnerability assessment, followed by a security architecture designed for your environment." },
    { q: "How do I request a security assessment?", a: "Use the contact form to tell us about your requirement. Enquiries are treated confidentially." },
  ],
  contact: {
    title: "Request a security assessment",
    intro: "Tell us about your people, assets or operations. All enquiries are handled confidentially.",
  },
  cta: {
    title: "Protect what matters most",
    text: "Speak with Cadillac Security about protection, guarding, infrastructure defence or electronic security.",
  },
  footerLine: "Premium private security for corporations, governments, diplomatic missions and high-value individuals. A subsidiary of Arismile Holdings.",
};
