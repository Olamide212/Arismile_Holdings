"use client";

import { useEffect } from "react";

/**
 * Fades the preloader out once the page is interactive and web fonts are
 * ready (waiting at most 1.2s for fonts), with a 400ms minimum on screen.
 * It deliberately does not wait for images.
 */
export function PreloaderController() {
  useEffect(() => {
    const el = document.getElementById("site-preloader");
    if (!el) return;
    const started = performance.now();
    let timer: number | undefined;
    let cancelled = false;
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    Promise.race([fontsReady, new Promise((resolve) => setTimeout(resolve, 1200))]).then(() => {
      if (cancelled) return;
      const wait = Math.max(0, 400 - (performance.now() - started));
      timer = window.setTimeout(() => el.classList.add("is-done"), wait);
    });
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);
  return null;
}
