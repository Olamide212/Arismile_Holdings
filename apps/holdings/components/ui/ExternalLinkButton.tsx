import { cn } from "@arismile/ui";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface ExternalLinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Outlined white button (for dark backgrounds) for links that leave the Holdings site; opens a new tab. */
export function ExternalLinkButton({ href, children, className }: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-[3px] border border-white/70 px-6 py-[13px] text-[15px] font-semibold uppercase tracking-wide text-white transition-colors hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink",
        className,
      )}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
      <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
