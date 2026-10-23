import { pageMetadata, PrivacyPage } from "@arismile/site-kit";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/privacy-policy", "Privacy Policy", `How ${site.record.legalName} handles personal information.`);

export default function Page() {
  return <PrivacyPage site={site} />;
}
