import { contactOptions, createContactHandler } from "@arismile/site-kit/server";
import { site } from "@/lib/site";

export const POST = createContactHandler({ source: site.record.slug, services: contactOptions(site) });
