import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { DiscoverMore } from "@/components/shared/DiscoverMore";
import { PageBanner } from "@/components/shared/PageBanner";
import { SubsidiariesSection } from "@/components/subsidiaries/SubsidiariesSection";
import { subsidiariesIntro } from "@/lib/content/company";
import { subsidiaryContent } from "@/lib/content/subsidiaries";

export const metadata: Metadata = pageMeta(
  "/subsidiaries",
  "Our Subsidiaries",
  "The Arismile Holdings group: 9-Town, Oceania, Datu Kalinga, Mind Age, Arismile Advisory, Cadillac Security and Petogas Limited.",
);

export default function SubsidiariesPage() {
  return (
    <>
      <PageBanner
        title="Our Subsidiaries"
        subtitle={subsidiariesIntro}
        image={{ src: "/images/hero/datu-kalinga.jpg" }}
      />
      <SubsidiariesSection items={subsidiaryContent} heading="Arismile Group Companies" intro="" />
      <DiscoverMore />
    </>
  );
}
