import { pageMetadata, ServicesPage } from "@arismile/site-kit";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/services", "Services", site.services.intro);

export default function Page() {
  return <ServicesPage site={site} />;
}
