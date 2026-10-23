import { AboutPage, pageMetadata } from "@arismile/site-kit";
import { ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(site, "/about", "About Us", site.profile.summary);

export default function Page() {
  return <AboutPage site={site} ui={ui} />;
}
