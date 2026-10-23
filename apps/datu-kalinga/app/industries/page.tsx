import { IndustriesPage, pageMetadata } from "@arismile/site-kit";
import { ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(site, "/industries", "Industries", site.industries.intro);

export default function Page() {
  return <IndustriesPage site={site} ui={ui} />;
}
