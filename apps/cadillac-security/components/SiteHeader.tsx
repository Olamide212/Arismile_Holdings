"use client";

import { cn, Container } from "@arismile/ui";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brand, nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fg/10 bg-bg/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${brand.name} home`} className="shrink-0">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={brand.logo.width}
            height={brand.logo.height}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] font-semibold uppercase tracking-[0.12em] text-fg/75 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-(--radius) bg-primary px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-on-primary transition-opacity hover:opacity-90 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </Container>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn("border-t border-fg/10 bg-bg md:hidden", !open && "hidden")}
      >
        <ul className="divide-y divide-fg/10">
          {[...nav, { label: "Contact", href: "#contact" }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-4 text-sm font-semibold uppercase tracking-wide text-fg/80 hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
