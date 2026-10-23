import { cn } from "./cn";

interface SkipLinkProps {
  href?: string;
  className?: string;
  label?: string;
}

/** Keyboard "skip to content" link, visible only when focused. */
export function SkipLink({ href = "#main", className, label = "Skip to content" }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline-2",
        className,
      )}
    >
      {label}
    </a>
  );
}
