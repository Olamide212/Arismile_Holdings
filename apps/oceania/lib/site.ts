import { getSubsidiary, holdingsSiteUrl, type SubsidiaryRecord } from "@arismile/brand";

const record = getSubsidiary("oceania");
if (!record) throw new Error("Unknown subsidiary slug: oceania");

export const subsidiary: SubsidiaryRecord = record;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002";
export const holdingsUrl = process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl;

/** Summary from the subsidiary's page on arismile.ng. */
export const summary = "OCEANIA provides an integrated suite of world-class solutions engineered to meet the rigorous demands of the modern Oil & Gas and marine sectors.";

export const logo = { src: "/logo.png", width: 600, height: 366 };
