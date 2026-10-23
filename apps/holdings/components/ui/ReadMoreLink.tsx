import { cn } from "@arismile/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ReadMoreLinkProps {
  href: string;
  /** Describes the destination for screen readers, e.g. "about 9Town Limited". */
  context?: string;
  className?: string;
}

/** Transparent yellow "READ MORE" text button from the original cards. */
export function ReadMoreLink({ href, context, className }: ReadMoreLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[15px] font-semibold uppercase text-brand-yellow transition-colors hover:text-ink",
        className,
      )}
    >
      Read More
      {context ? <span className="sr-only"> {context}</span> : null}
      <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
