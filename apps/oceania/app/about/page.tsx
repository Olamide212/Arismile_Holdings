import { AboutPage, pageMetadata } from "@arismile/site-kit";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/about", "About Us", site.profile.summary);

export default function Page() {
  return <AboutPage site={site} />;
}
