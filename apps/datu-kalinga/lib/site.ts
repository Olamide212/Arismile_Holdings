import { getSubsidiary, holdingsSiteUrl, type SubsidiaryRecord } from "@arismile/brand";

const record = getSubsidiary("datu-kalinga");
if (!record) throw new Error("Unknown subsidiary slug: datu-kalinga");

export const subsidiary: SubsidiaryRecord = record;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3003";
export const holdingsUrl = process.env.NEXT_PUBLIC_HOLDINGS_URL ?? holdingsSiteUrl;

/** Summary from the subsidiary's page on arismile.ng. */
export const summary = "DATU KALINGA NIGERIA LIMITED is a diversified mining and industrial powerhouse dedicated to the sustainable extraction and processing of critical solid minerals.";

export const logo = { src: "/logo.png", width: 425, height: 600 };
