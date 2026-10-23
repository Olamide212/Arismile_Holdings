import { pageMetadata, siteTeam, TeamPage } from "@arismile/site-kit";
import { ui } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(site, "/team", "Team", siteTeam(site).intro);

export default function Page() {
  return <TeamPage site={site} ui={ui} />;
}
