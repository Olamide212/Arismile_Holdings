import { getSubsidiary, holdingsSiteUrl, type SubsidiaryRecord } from "@arismile/brand";

const record = getSubsidiary("mind-age");
if (!record) throw new Error("Unknown subsidiary slug: mind-age");

export const subsidiary: SubsidiaryRecord = record;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3004";
export const holdingsUrl = process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl;

/** Summary from the subsidiary's page on arismile.ng. */
export const summary = "MINDAGE, a flagship subsidiary of Arismile Holdings, is a premier technology institution dedicated to catalyzing organizational growth through the deployment of next-generation digital ecosystems.";

export const logo = { src: "/logo.png", width: 303, height: 210 };
