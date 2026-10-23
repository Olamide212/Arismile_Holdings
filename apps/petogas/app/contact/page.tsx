import { ContactPage, pageMetadata } from "@arismile/site-kit";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/contact", "Contact", site.contact.intro);

export default function Page() {
  return <ContactPage site={site} />;
}
