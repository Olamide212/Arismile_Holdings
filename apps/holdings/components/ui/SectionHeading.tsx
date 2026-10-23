import { cn } from "@arismile/ui";
import type { ReactNode } from "react";
import { reveal } from "@/lib/reveal";

interface SectionHeadingProps {
  children: ReactNode;
  /**
   * `muted`: large blue-grey heading on light sections (Core Competence, Partners).
   * `light`: white heading on dark image sections (Subsidiaries, Discover More).
   */
  tone?: "muted" | "light";
  /** Divider length: full width, or the short 30% rule used under "Our Partners". */
  divider?: "full" | "short";
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
}

export function SectionHeading({
  children,
  tone = "muted",
  divider = "full",
  as: Tag = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const muted = tone === "muted";
  return (
    <div {...reveal("up")} className={className}>
      <Tag
        id={id}
        className={cn(
          "uppercase leading-tight",
          muted
            ? "text-[32px] font-bold text-heading-muted md:text-[42px] lg:text-[50px]"
            : "text-[28px] font-normal text-white md:text-[35px]",
        )}
      >
        {children}
      </Tag>
      <div className={cn(muted ? "py-[15px]" : "py-1.5")}>
        <hr
          className={cn(
            "border-0 border-t",
            muted ? "border-heading-muted" : "border-white",
            divider === "short" ? "w-[30%]" : "w-full",
          )}
        />
      </div>
    </div>
  );
}
