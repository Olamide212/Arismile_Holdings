import { HomePage, pageMetadata } from "@arismile/site-kit";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/", undefined, site.profile.summary);

export default function Page() {
  return <HomePage site={site} />;
}
