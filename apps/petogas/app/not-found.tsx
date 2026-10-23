import { NotFoundPage } from "@arismile/site-kit";
import { ui } from "@/components/ui";
import { site } from "@/lib/site";

export default function NotFound() {
  return <NotFoundPage site={site} ui={ui} />;
}
