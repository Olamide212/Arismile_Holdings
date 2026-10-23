import { cn } from "@arismile/ui";
import Image from "next/image";

interface FixedBackgroundProps {
  src: string;
  /** Tailwind classes for the colour overlay above the image. */
  overlayClassName: string;
}

/**
 * Background image that stays fixed while the section scrolls over it
 * (a "parallax" window). The parent section must have `[clip-path:inset(0)]`
 * and `isolate` so the viewport-sized image is clipped to the section.
 * Unlike `background-attachment: fixed`, this also works on iOS Safari.
 */
export function FixedBackground({ src, overlayClassName }: FixedBackgroundProps) {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-20">
        <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div aria-hidden className={cn("absolute inset-0 -z-10", overlayClassName)} />
    </>
  );
}
