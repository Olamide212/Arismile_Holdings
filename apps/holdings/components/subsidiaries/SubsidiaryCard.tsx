import { IconCircle } from "@/components/ui/IconCircle";
import { ReadMoreLink } from "@/components/ui/ReadMoreLink";

interface SubsidiaryCardProps {
  number: number;
  name: string;
  summary: string;
  href: string;
  headingLevel?: "h2" | "h3";
}

/** White card with a yellow numbered badge, name, description and READ MORE. */
export function SubsidiaryCard({ number, name, summary, href, headingLevel = "h3" }: SubsidiaryCardProps) {
  const Heading = headingLevel;
  return (
    <article className="flex h-full flex-col bg-white p-[25px] text-center">
      <IconCircle className="mx-auto mb-4">{number}</IconCircle>
      <Heading className="mb-[11px] text-[22px] font-semibold capitalize leading-snug text-black lg:text-[25px]">
        {name}
      </Heading>
      <p className="mb-6 text-[15px] leading-relaxed text-black">{summary}</p>
      <ReadMoreLink href={href} context={`about ${name}`} className="mt-auto self-start" />
    </article>
  );
}
