import { cn } from "@arismile/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * Solid yellow call-to-action ("CONTACT US →"). Text is dark rather than the
 * original white so the label meets contrast requirements on #FFCC00.
 */
export function CtaButton({ href, children, className }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-[3px] bg-brand-yellow px-6 py-3.5 text-[15px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-white focus-visible:bg-white",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
