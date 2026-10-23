import { cn } from "@arismile/ui";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  /** Eyebrow colour; use `text-highlight` on dark bands. */
  eyebrowClassName?: string;
  className?: string;
}

export function SectionIntro({ eyebrow, title, intro, id, className, eyebrowClassName = "text-accent" }: SectionIntroProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("text-[13px] font-semibold uppercase tracking-[0.25em]", eyebrowClassName)}>{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      <span aria-hidden className="mt-5 block h-1 w-14 bg-highlight" />
      {intro ? <p className="mt-6 text-[17px] leading-relaxed opacity-80">{intro}</p> : null}
    </div>
  );
}
