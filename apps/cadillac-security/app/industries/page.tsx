import { IndustriesPage, pageMetadata } from "@arismile/site-kit";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/industries", "Industries", site.industries.intro);

export default function Page() {
  return <IndustriesPage site={site} />;
}
