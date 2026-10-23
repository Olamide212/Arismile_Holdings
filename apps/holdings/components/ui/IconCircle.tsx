import { cn } from "@arismile/ui";
import type { ReactNode } from "react";

interface IconCircleProps {
  children: ReactNode;
  className?: string;
}

/** Yellow circular badge (Elementor "stacked" icon, 30px glyph). */
export function IconCircle({ children, className }: IconCircleProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-[60px] shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[24px] font-bold text-white transition-colors",
        className,
      )}
    >
      {children}
    </span>
  );
}
