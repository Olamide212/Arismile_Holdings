import { pageMetadata, ServicesPage } from "@arismile/site-kit";
import { ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(site, "/services", "Services", site.services.intro);

export default function Page() {
  return <ServicesPage site={site} ui={ui} />;
}
