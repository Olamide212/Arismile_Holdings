import { Container } from "@arismile/ui";
import type { Metadata } from "next";
import { DiscoverMore } from "@/components/shared/DiscoverMore";
import { PageBanner } from "@/components/shared/PageBanner";
import { TeamGrid } from "@/components/team/TeamGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/lib/content/team";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Our Team",
  description: "The leadership team of Arismile Holdings.",
  alternates: { canonical: "/our-team" },
};

export default function OurTeamPage() {
  return (
    <>
      <PageBanner title="Our Team" eyebrow="Leadership" image={{ src: "/images/sections/about-banner.jpg" }} />

      {/* White above, light grey from mid-card down. */}
      <section aria-labelledby="team-heading" className="relative isolate bg-white pb-20 pt-16 lg:pb-28 lg:pt-20">
        <div aria-hidden className="absolute inset-x-0 bottom-0 top-[55%] -z-10 bg-light" />
        <Container>
          <SectionHeading id="team-heading">Leadership</SectionHeading>
          <p {...reveal("up", 100)} className="mb-10 max-w-2xl text-[15px] leading-relaxed text-body">
            The people guiding Arismile Holdings and its subsidiaries. Select a profile to read more.
          </p>
          <TeamGrid members={team} />
        </Container>
      </section>

      <DiscoverMore />
    </>
  );
}
