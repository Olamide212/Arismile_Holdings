import { cn } from "@arismile/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  arrow?: boolean;
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", arrow = false, className }: ButtonLinkProps) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-(--radius) px-7 py-3.5 font-semibold transition-colors",
    variant === "primary"
      ? "bg-primary text-on-primary hover:opacity-90"
      : "border border-current/30 hover:border-accent hover:text-accent",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow ? <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" /> : null}
    </>
  );
  return external ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  align?: "left" | "center";
  /** `text-highlight` on dark bands. */
  eyebrowClassName?: string;
  className?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  eyebrowClassName = "text-accent",
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("text-[13px] font-semibold uppercase tracking-[0.25em]", eyebrowClassName)}>{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold leading-tight md:text-[42px]">
        {title}
      </h2>
      <span aria-hidden className={cn("mt-5 block h-1 w-14 bg-highlight", align === "center" && "mx-auto")} />
      {intro ? <p className="mt-6 text-[17px] leading-relaxed opacity-80">{intro}</p> : null}
    </div>
  );
}

export function Section({
  children,
  tone = "bg",
  id,
  labelledBy,
  className,
}: {
  children: ReactNode;
  tone?: "bg" | "surface" | "band";
  id?: string;
  labelledBy?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-24 py-20 lg:py-28",
        tone === "bg" && "bg-bg text-fg",
        tone === "surface" && "bg-surface text-fg",
        tone === "band" && "bg-band text-on-band",
        className,
      )}
    >
      {children}
    </section>
  );
}
