"use client";

import { cn, Container } from "@arismile/ui";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ImageAsset } from "../types";
import { navItems, servicePath } from "../utils";

interface SiteHeaderProps {
  name: string;
  logo: ImageAsset;
  logoClassName?: string;
  services: { slug: string; title: string }[];
  phone: { display: string; href: string };
  email: string;
}

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ name, logo, logoClassName = "h-12", services, phone, email }: SiteHeaderProps) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeDrawer = useCallback((returnFocus: boolean) => {
    setDrawerOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-fg/10 bg-bg/95 text-fg backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${name} home`} className="shrink-0">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} priority className={cn(logoClassName, "w-auto")} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) =>
              item.href === "/services" ? (
                <ServicesMenu key={item.href} active={isActive(pathname, item.href)} services={services} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={cn(
                      "block px-4 py-7 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-accent",
                      isActive(pathname, item.href) ? "text-accent" : "text-fg/75",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-(--radius) bg-primary px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-on-primary transition-opacity hover:opacity-90 lg:inline-flex"
        >
          Get in touch
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center lg:hidden"
          aria-expanded={drawerOpen}
          aria-controls="site-drawer"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu aria-hidden className="size-6" />
        </button>
      </Container>

      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        pathname={pathname}
        name={name}
        logo={logo}
        services={services}
        phone={phone}
        email={email}
      />
    </header>
  );
}

function ServicesMenu({ active, services }: { active: boolean; services: SiteHeaderProps["services"] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="group relative flex items-center"
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        href="/services"
        aria-current={active ? "page" : undefined}
        className={cn(
          "block py-7 pl-4 pr-1 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-accent",
          active ? "text-accent" : "text-fg/75",
        )}
      >
        Services
      </Link>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        aria-label="Services submenu"
        onClick={() => setOpen((v) => !v)}
        className="mr-3 inline-flex size-7 items-center justify-center text-fg/75 hover:text-accent"
      >
        <ChevronDown aria-hidden className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      <ul
        id="services-menu"
        className={cn(
          "absolute left-0 top-full w-80 rounded-(--radius) border border-fg/10 bg-bg py-2 shadow-xl",
          "invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100",
          open && "visible opacity-100",
        )}
      >
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={servicePath(s.slug)}
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-[14px] leading-snug text-fg/80 transition-colors hover:bg-surface hover:text-accent"
            >
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function Drawer({
  open,
  onClose,
  pathname,
  name,
  logo,
  services,
  phone,
  email,
}: {
  open: boolean;
  onClose: (returnFocus: boolean) => void;
  pathname: string;
  name: string;
  logo: ImageAsset;
  services: SiteHeaderProps["services"];
  phone: SiteHeaderProps["phone"];
  email: string;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose(true);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div className="lg:hidden">
      <div
        aria-hidden
        onClick={() => onClose(true)}
        className={cn(
          "fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <nav
        id="site-drawer"
        aria-label="Mobile"
        inert={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-[70] flex w-[85%] max-w-sm flex-col bg-bg text-fg shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-fg/10 px-5 py-4">
          <Link href="/" onClick={() => onClose(false)} aria-label={`${name} home`}>
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-11 w-auto" />
          </Link>
          <button
            ref={closeRef}
            type="button"
            onClick={() => onClose(true)}
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-surface"
          >
            <X aria-hidden className="size-6" />
          </button>
        </div>

        <ul className="flex-1 divide-y divide-fg/10 overflow-y-auto overscroll-contain">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const linkClass = cn(
              "block flex-1 border-l-4 px-5 py-4 text-[15px] font-semibold uppercase tracking-wide",
              active ? "border-primary text-accent" : "border-transparent text-fg/80",
            );
            if (item.href !== "/services") {
              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => onClose(false)} aria-current={active ? "page" : undefined} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <div className="flex items-center">
                  <Link href={item.href} onClick={() => onClose(false)} aria-current={active ? "page" : undefined} className={linkClass}>
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="drawer-services"
                    aria-label="Services submenu"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="inline-flex size-12 items-center justify-center"
                  >
                    <ChevronDown aria-hidden className={cn("size-5 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                </div>
                <ul id="drawer-services" hidden={!servicesOpen} className="bg-surface py-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={servicePath(s.slug)}
                        onClick={() => onClose(false)}
                        className="block px-8 py-2.5 text-[14px] leading-snug text-fg/80 hover:text-accent"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="space-y-2 border-t border-fg/10 px-5 py-5 text-[14px] text-fg/80">
          <a href={phone.href} className="flex items-center gap-2.5 hover:text-accent">
            <Phone aria-hidden className="size-4 text-accent" />
            {phone.display}
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-2.5 break-all hover:text-accent">
            <Mail aria-hidden className="size-4 shrink-0 text-accent" />
            {email}
          </a>
        </div>
      </nav>
    </div>
  );
}
