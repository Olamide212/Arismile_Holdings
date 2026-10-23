import Image from "next/image";
import { PreloaderController } from "./PreloaderController";

/**
 * First-load overlay with the Arismile logo. Fades out once the page has
 * loaded; a CSS fail-safe in globals.css hides it after 3s even without JS.
 */
export function Preloader() {
  return (
    <>
      <div id="site-preloader" aria-hidden className="site-preloader fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-white">
        <Image src="/images/logo/arismile-logo.png" alt="" width={240} height={95} priority className="preloader-logo h-auto w-[220px]" />
        <div className="h-1 w-40 overflow-hidden rounded-full bg-black/10">
          <div className="preloader-bar h-full w-1/3 rounded-full bg-gradient-to-r from-brand-green via-brand-yellow to-brand-blue" />
        </div>
        <span className="sr-only">Loading Arismile Holdings</span>
      </div>
      <PreloaderController />
    </>
  );
}
