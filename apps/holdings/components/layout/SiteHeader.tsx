"use client";

import { group } from "@arismile/brand";
import { cn, Container } from "@arismile/ui";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { mainNav, type NavItem } from "@/lib/site";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  if (item.href.startsWith("/#")) return false;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

/**
 * Transparent header laid over the hero/page banner, as on the original
 * Astra theme (white links, green hover/active, 70px bar).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMobile = useCallback((returnFocus: boolean) => {
    setMobileOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="flex min-h-[70px] items-center justify-between gap-6 py-3">
        <Link href="/" className="shrink-0" aria-label="Arismile Holdings home">
          <Image
            src="/images/logo/arismile-logo-white.png"
            alt="Arismile Holdings"
            width={170}
            height={77}
            priority
            className="h-[60px] w-auto lg:h-[77px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {mainNav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item} active={isActive(pathname, item)} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item) ? "page" : undefined}
                    className={cn(
                      "block px-4 py-6 text-[15px] font-medium text-white transition-colors hover:text-brand-green",
                      isActive(pathname, item) && "text-brand-green",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu aria-hidden className="size-7" />
        </button>
      </Container>

      <MobileMenu
        open={mobileOpen}
        pathname={pathname}
        onClose={closeMobile}
      />
    </header>
  );
}

function DesktopDropdown({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="group relative flex items-center"
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "block py-6 pl-4 pr-1 text-[15px] font-medium text-white transition-colors hover:text-brand-green",
          active && "text-brand-green",
        )}
      >
        {item.label}
      </Link>
      <button
        type="button"
        className="mr-3 inline-flex size-7 items-center justify-center text-white hover:text-brand-green"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${item.label} submenu`}
        onClick={() => setOpen((value) => !value)}
      >
        <ChevronDown aria-hidden className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      <ul
        id={menuId}
        className={cn(
          "absolute left-0 top-full w-64 border-t-2 border-brand-green bg-white py-2 shadow-lg",
          "invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100",
          open && "visible opacity-100",
        )}
      >
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-[14px] font-medium uppercase text-body transition-colors hover:bg-light hover:text-brand-green"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

/** Off-canvas drawer that slides in from the left (mobile and tablet). */
function MobileMenu({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  /** `returnFocus` is false when closing because a link was followed. */
  onClose: (returnFocus: boolean) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // While open: lock page scroll, focus the drawer, close on Escape.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose(true);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
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
        id="mobile-menu"
        aria-label="Mobile"
        inert={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-[70] flex w-[85%] max-w-sm flex-col bg-offwhite shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <Link href="/" onClick={() => onClose(false)} aria-label="Arismile Holdings home">
            <Image src="/images/logo/arismile-logo.png" alt="Arismile Holdings" width={136} height={54} className="h-[54px] w-auto" />
          </Link>
          <button
            ref={closeRef}
            type="button"
            onClick={() => onClose(true)}
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-brand-yellow"
          >
            <X aria-hidden className="size-6" />
          </button>
        </div>

        <ul className="flex-1 divide-y divide-black/5 overflow-y-auto overscroll-contain">
          {mainNav.map((item) => {
            const active = isActive(pathname, item);
            const linkClass = cn(
              "block flex-1 border-l-4 px-5 py-4 text-[15px] font-medium text-body transition-colors hover:text-brand-green",
              active ? "border-brand-green font-semibold text-ink" : "border-transparent",
            );
            if (!item.children) {
              return (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass} onClick={() => onClose(false)} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            }
            const isExpanded = expanded === item.href;
            const submenuId = `mobile-sub-${item.label.toLowerCase()}`;
            return (
              <li key={item.href}>
                <div className="flex items-center">
                  <Link href={item.href} className={linkClass} onClick={() => onClose(false)} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex size-12 items-center justify-center text-body"
                    aria-expanded={isExpanded}
                    aria-controls={submenuId}
                    aria-label={`${item.label} submenu`}
                    onClick={() => setExpanded(isExpanded ? null : item.href)}
                  >
                    <ChevronDown aria-hidden className={cn("size-5 transition-transform", isExpanded && "rotate-180")} />
                  </button>
                </div>
                <ul id={submenuId} hidden={!isExpanded} className="bg-white py-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => onClose(false)}
                        aria-current={pathname === child.href ? "page" : undefined}
                        className={cn(
                          "block px-8 py-2.5 text-[14px] uppercase hover:text-brand-green",
                          pathname === child.href ? "font-semibold text-brand-green" : "text-body",
                        )}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="space-y-2 border-t border-black/10 px-5 py-5 text-[14px] text-body">
          <a href={group.phone.href} className="flex items-center gap-2.5 hover:text-brand-green">
            <Phone aria-hidden className="size-4 text-brand-green" />
            {group.phone.display}
          </a>
          <a href={`mailto:${group.email}`} className="flex items-center gap-2.5 break-all hover:text-brand-green">
            <Mail aria-hidden className="size-4 shrink-0 text-brand-green" />
            {group.email}
          </a>
        </div>
      </nav>
    </div>
  );
}
