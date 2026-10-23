import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Centred content wrapper. Width comes from the consuming site's
 * `--container-max` CSS variable so each brand keeps its own measure.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-(--container-max) px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
