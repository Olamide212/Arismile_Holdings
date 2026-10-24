import { cn } from "@arismile/ui";
import Image from "next/image";
import type { ImageAsset } from "../types";

/**
 * Branded first-load overlay. Server-rendered so it shows immediately; the
 * inline boot script (reveal.ts) fades it out once the HTML is parsed, and a
 * CSS fail-safe (reveal.css) hides it after 2.5s even if JavaScript never runs.
 */
export function Preloader({ logo, logoClassName, label }: { logo: ImageAsset; logoClassName?: string; label: string }) {
  return (
    <>
      <div id="kit-preloader" aria-hidden className="kit-preloader fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-bg">
        <Image src={logo.src} alt="" width={logo.width} height={logo.height} priority className={cn(logoClassName, "kit-preloader-logo max-h-20 w-auto")} />
        <div className="h-1 w-40 overflow-hidden rounded-full bg-fg/10">
          <div className="kit-preloader-bar h-full w-1/3 rounded-full bg-gradient-to-r from-primary to-highlight" />
        </div>
        <span className="sr-only">{label}</span>
      </div>
    </>
  );
}
