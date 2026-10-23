import { getSubsidiary, holdingsSiteUrl, type SubsidiaryRecord } from "@arismile/brand";

const record = getSubsidiary("nine-town");
if (!record) throw new Error("Unknown subsidiary slug: nine-town");

export const subsidiary: SubsidiaryRecord = record;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";
export const holdingsUrl = process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl;

/** Summary from the subsidiary's page on arismile.ng. */
export const summary = "9-TOWN Nigeria Limited, a flagship subsidiary of Arismile Holdings, is a premier powerhouse in large-scale infrastructure, high-value real estate, and sophisticated civil engineering.";

export const logo = { src: "/logo.png", width: 600, height: 381 };
