import { Factory, HardHat, PackageCheck, Zap, type LucideIcon } from "lucide-react";

export interface Competency {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** "Area of Core Competence" — titles from the original site, wording from arismile.ng. */
export const competencies: Competency[] = [
  {
    title: "Power Infrastructure",
    description:
      "We provide services in the supply of power plants, transmission lines, substations, distribution lines, and transformers.",
    icon: Zap,
  },
  {
    title: "Oil and Gas Infrastructure",
    description:
      "We provide systems and facilities used to extract, process, transport, and store oil and natural gas.",
    icon: Factory,
  },
  {
    title: "General Procurement, Operations and Equipment Supply",
    description:
      "We provide general goods and services, including equipment purchasing, leasing, and daily operational support.",
    icon: PackageCheck,
  },
  {
    title: "Installations & Constructions",
    description: "Civil and Mechanical Construction",
    icon: HardHat,
  },
];
