import { ArrowUpRight } from "lucide-react";
import { IconCircle } from "@/components/ui/IconCircle";
import { ReadMoreLink } from "@/components/ui/ReadMoreLink";

interface SubsidiaryCardProps {
  number: number;
  name: string;
  summary: string;
  href: string;
  /** The subsidiary's own website, if it has one. */
  website?: string;
  headingLevel?: "h2" | "h3";
}

/** White card with a yellow numbered badge, name, description, READ MORE and website link. */
export function SubsidiaryCard({ number, name, summary, href, website, headingLevel = "h3" }: SubsidiaryCardProps) {
  const Heading = headingLevel;
  return (
    <article className="flex h-full flex-col bg-white p-[25px] text-center">
      <IconCircle className="mx-auto mb-4">{number}</IconCircle>
      <Heading className="mb-[11px] text-[22px] font-semibold capitalize leading-snug text-black lg:text-[25px]">
        {name}
      </Heading>
      <p className="mb-6 text-[15px] leading-relaxed text-black">{summary}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <ReadMoreLink href={href} context={`about ${name}`} />
        {website ? (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-[13px] font-semibold uppercase text-body transition-colors hover:text-brand-green"
          >
            Website
            <span className="sr-only"> of {name} (opens in a new tab)</span>
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
