"use client";

import { cn, Container } from "@arismile/ui";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { ImageAsset } from "../types";
import { navItems, servicePath } from "../utils";

/**
 * Desktop header styles. The mobile drawer, services dropdown and focus
 * handling are shared; each site picks the bar that suits its design.
 * - overlay:  transparent over a dark hero, turns solid on scroll (fixed)
 * - solid:    classic white bar
 * - boxed:    bordered cells, brutalist
 * - pill:     floating rounded bar (fixed)
 * - centered: logo centred above the navigation
 * - hud:      status strip + numbered navigation
 * - utility:  contact bar above the main bar
 */
export type HeaderVariant = "overlay" | "solid" | "boxed" | "pill" | "centered" | "hud" | "utility";

interface SiteHeaderProps {
  variant: HeaderVariant;
  name: string;
  tagline?: string;
  logo: ImageAsset;
  logoClassName?: string;
  services: { slug: string; title: string }[];
  phone: { display: string; href: string };
  email: string;
}

type Service = SiteHeaderProps["services"][number];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader(props: SiteHeaderProps) {
  const { variant, name, tagline, logo, logoClassName = "h-12", services, phone, email } = props;
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeDrawer = useCallback((returnFocus: boolean) => {
    setDrawerOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoEl = (className?: string) => (
    <Link href="/" aria-label={`${name} home`} className={cn("shrink-0", className)}>
      <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} priority className={cn(logoClassName, "w-auto")} />
    </Link>
  );

  const menuButton = (className?: string) => (
    <button
      ref={toggleRef}
      type="button"
      className={cn("inline-flex size-11 items-center justify-center lg:hidden", className)}
      aria-expanded={drawerOpen}
      aria-controls="site-drawer"
      aria-label="Open menu"
      onClick={() => setDrawerOpen(true)}
    >
      <Menu aria-hidden className="size-6" />
    </button>
  );

  const nav = (style: NavStyle) => <DesktopNav pathname={pathname} services={services} style={style} />;

  let bar: ReactNode;
  let wrapperClass = "";

  switch (variant) {
    case "overlay": {
      const solid = scrolled || drawerOpen;
      wrapperClass = cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-bg text-fg shadow-md" : "bg-transparent text-white",
      );
      bar = (
        <Container className="flex h-24 items-center justify-between gap-6">
          {logoEl(cn("rounded-(--radius) px-3 py-2 transition-colors", solid ? "" : "bg-white"))}
          {nav("overlay")}
          <Link
            href="/contact"
            className="hidden border-b-2 border-highlight pb-1 text-[13px] font-semibold uppercase tracking-[0.2em] lg:inline-flex"
          >
            Start a project
          </Link>
          {menuButton()}
        </Container>
      );
      break;
    }
    case "pill":
      wrapperClass = "fixed inset-x-0 top-4 z-50 px-4";
      bar = (
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 rounded-full border border-fg/10 bg-bg/80 pl-5 pr-2 text-fg shadow-2xl shadow-black/30 backdrop-blur-xl">
          {logoEl()}
          {nav("pill")}
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-on-primary transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Start a project
          </Link>
          {menuButton("mr-1")}
        </div>
      );
      break;
    case "boxed":
      wrapperClass = "sticky top-0 z-50 border-b-2 border-fg bg-bg text-fg";
      bar = (
        <div className="mx-auto flex h-20 max-w-(--container-max) items-stretch border-x-2 border-fg">
          {logoEl("flex items-center border-r-2 border-fg px-6")}
          <div className="hidden flex-1 lg:flex">{nav("boxed")}</div>
          <Link
            href="/contact"
            className="hidden items-center border-l-2 border-fg bg-primary px-8 text-[13px] font-bold uppercase tracking-[0.2em] text-on-primary transition-opacity hover:opacity-90 lg:flex"
          >
            Partner with us
          </Link>
          <div className="ml-auto flex items-center px-3 lg:hidden">{menuButton()}</div>
        </div>
      );
      break;
    case "centered":
      wrapperClass = "sticky top-0 z-50 border-b border-fg/15 bg-bg text-fg";
      bar = (
        <>
          <Container className="relative flex h-20 items-center justify-center">
            <p className="absolute left-4 hidden text-[12px] uppercase tracking-[0.3em] opacity-60 sm:left-6 lg:left-10 lg:block">
              {tagline}
            </p>
            {logoEl()}
            <Link
              href="/contact"
              className="absolute right-4 hidden text-[12px] font-semibold uppercase tracking-[0.25em] text-accent underline-offset-8 hover:underline sm:right-6 lg:right-10 lg:block"
            >
              Book a consultation
            </Link>
            <div className="absolute right-2 lg:hidden">{menuButton()}</div>
          </Container>
          <div className="hidden border-t border-fg/10 lg:block">
            <Container className="flex justify-center">{nav("centered")}</Container>
          </div>
        </>
      );
      break;
    case "hud":
      wrapperClass = "sticky top-0 z-50 border-b border-fg/15 bg-bg/95 text-fg backdrop-blur";
      bar = (
        <>
          <div className="border-b border-fg/10 bg-band">
            <Container className="flex h-8 items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-fg/60">
              <span className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-primary motion-reduce:animate-none" />
                Confidential enquiries
              </span>
              <a href={`mailto:${email}`} className="hidden hover:text-accent sm:inline">
                {email}
              </a>
            </Container>
          </div>
          <Container className="flex h-20 items-center justify-between gap-6">
            {logoEl()}
            {nav("hud")}
            <Link
              href="/contact"
              className="hidden border border-primary bg-primary/10 px-5 py-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-fg transition-colors hover:bg-primary lg:inline-flex"
            >
              Request assessment
            </Link>
            {menuButton()}
          </Container>
        </>
      );
      break;
    case "utility":
      wrapperClass = "sticky top-0 z-50 bg-bg text-fg shadow-sm";
      bar = (
        <>
          <div className="hidden bg-band text-on-band md:block">
            <Container className="flex h-10 items-center justify-between text-[13px]">
              <span className="font-semibold uppercase tracking-[0.25em] text-highlight">{tagline}</span>
              <span className="flex items-center gap-6 opacity-85">
                <a href={phone.href} className="flex items-center gap-2 hover:text-highlight">
                  <Phone aria-hidden className="size-3.5" />
                  {phone.display}
                </a>
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-highlight">
                  <Mail aria-hidden className="size-3.5" />
                  {email}
                </a>
              </span>
            </Container>
          </div>
          <Container className="flex h-20 items-center justify-between gap-6">
            {logoEl()}
            {nav("utility")}
            <Link
              href="/contact"
              className="hidden rounded-(--radius) bg-highlight px-6 py-3 text-[13px] font-bold uppercase tracking-wide text-band transition-opacity hover:opacity-90 lg:inline-flex"
            >
              Request supply
            </Link>
            {menuButton()}
          </Container>
        </>
      );
      break;
    default:
      wrapperClass = "sticky top-0 z-50 border-b border-fg/10 bg-bg/95 text-fg backdrop-blur";
      bar = (
        <Container className="flex h-20 items-center justify-between gap-6">
          {logoEl()}
          {nav("solid")}
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-[13px] font-semibold text-on-primary transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Get in touch
          </Link>
          {menuButton()}
        </Container>
      );
  }

  return (
    <header className={wrapperClass}>
      {bar}
      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        pathname={pathname}
        name={name}
        logo={logo}
        logoClassName={logoClassName}
        services={services}
        phone={phone}
        email={email}
      />
    </header>
  );
}

/* ------------------------------------------------------------ Desktop nav */

type NavStyle = HeaderVariant;

const navClasses: Record<NavStyle, { list: string; link: (active: boolean) => string }> = {
  overlay: {
    list: "flex items-center gap-1",
    link: (a) =>
      cn(
        "relative block px-4 py-8 text-[14px] font-medium tracking-wide transition-opacity after:absolute after:inset-x-4 after:bottom-6 after:h-0.5 after:bg-highlight after:transition-transform",
        a ? "after:scale-x-100" : "opacity-85 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100",
      ),
  },
  solid: {
    list: "flex items-center gap-1",
    link: (a) => cn("block rounded-full px-4 py-2 text-[15px] font-medium transition-colors", a ? "bg-surface text-accent" : "text-fg/75 hover:text-accent"),
  },
  boxed: {
    list: "flex h-full",
    link: (a) =>
      cn(
        "flex h-full items-center border-r-2 border-fg px-6 text-[13px] font-bold uppercase tracking-[0.2em] transition-colors",
        a ? "bg-highlight text-fg" : "hover:bg-surface",
      ),
  },
  pill: {
    list: "flex items-center gap-1",
    link: (a) => cn("block rounded-full px-4 py-2 text-[14px] font-medium transition-colors", a ? "bg-fg/10 text-fg" : "text-fg/70 hover:text-fg"),
  },
  centered: {
    list: "flex items-center gap-2",
    link: (a) =>
      cn(
        "block border-b-2 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.3em] transition-colors",
        a ? "border-highlight text-fg" : "border-transparent text-fg/65 hover:text-fg",
      ),
  },
  hud: {
    list: "flex items-center gap-1 font-mono",
    link: (a) => cn("block px-3 py-2 text-[12px] uppercase tracking-[0.2em] transition-colors", a ? "text-accent" : "text-fg/65 hover:text-fg"),
  },
  utility: {
    list: "flex items-center gap-1",
    link: (a) =>
      cn(
        "relative block px-4 py-7 text-[14px] font-semibold uppercase tracking-wide transition-colors after:absolute after:inset-x-4 after:bottom-5 after:h-[3px] after:bg-highlight",
        a ? "text-fg after:opacity-100" : "text-fg/70 after:opacity-0 hover:text-fg",
      ),
  },
};

function DesktopNav({ pathname, services, style }: { pathname: string; services: Service[]; style: NavStyle }) {
  const c = navClasses[style];
  return (
    <nav aria-label="Main" className={cn("hidden lg:block", style === "boxed" && "h-full")}>
      <ul className={c.list}>
        {navItems.map((item, i) => {
          const active = isActive(pathname, item.href);
          const label = style === "hud" ? `[0${i + 1}] ${item.label}` : item.label;
          if (item.href === "/services") {
            return <ServicesMenu key={item.href} label={label} active={active} services={services} linkClass={c.link(active)} boxed={style === "boxed"} />;
          }
          return (
            <li key={item.href} className={style === "boxed" ? "h-full" : undefined}>
              <Link href={item.href} aria-current={active ? "page" : undefined} className={c.link(active)}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ServicesMenu({
  label,
  active,
  services,
  linkClass,
  boxed,
}: {
  label: string;
  active: boolean;
  services: Service[];
  linkClass: string;
  boxed: boolean;
}) {
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
      className={cn("group relative flex items-center", boxed && "h-full")}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <Link href="/services" aria-current={active ? "page" : undefined} className={cn(linkClass, "pr-1")}>
        {label}
      </Link>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        aria-label="Services submenu"
        onClick={() => setOpen((v) => !v)}
        className={cn("inline-flex size-7 items-center justify-center opacity-75 hover:opacity-100", boxed ? "absolute right-1" : "mr-2")}
      >
        <ChevronDown aria-hidden className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      <ul
        id="services-menu"
        className={cn(
          "absolute left-0 top-full w-80 rounded-(--radius) border border-fg/10 bg-bg py-2 text-fg shadow-xl",
          "invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100",
          open && "visible opacity-100",
        )}
      >
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={servicePath(s.slug)}
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-[14px] normal-case leading-snug tracking-normal text-fg/80 transition-colors hover:bg-surface hover:text-accent"
            >
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

/* ----------------------------------------------------------- Mobile drawer */

function Drawer({
  open,
  onClose,
  pathname,
  name,
  logo,
  logoClassName,
  services,
  phone,
  email,
}: {
  open: boolean;
  onClose: (returnFocus: boolean) => void;
  pathname: string;
  name: string;
  logo: ImageAsset;
  logoClassName: string;
  services: Service[];
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
        className={cn("fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300", open ? "opacity-100" : "pointer-events-none opacity-0")}
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
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={cn(logoClassName, "max-h-11 w-auto")} />
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
