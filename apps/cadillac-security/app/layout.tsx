import { group } from "@arismile/brand";
import { revealBootScript, rootMetadata, ScrollReveal, SiteFooter, SiteHeader, siteEmail } from "@arismile/site-kit";
import { SkipLink } from "@arismile/ui";
import type { Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Oswald({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body-face", display: "swap" });

export const metadata = rootMetadata(site);

export const viewport: Viewport = {
  themeColor: "#0b0c0f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The reveal boot script adds a class to <html> before hydration.
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="min-h-dvh overflow-x-clip bg-bg text-fg">
        <ScrollReveal />
        <SkipLink href="#main" />
        <SiteHeader
          name={site.name}
          logo={site.logo}
          logoClassName={site.logoClassName}
          services={site.services.items.map(({ slug, title }) => ({ slug, title }))}
          phone={{ display: group.phone.display, href: group.phone.href }}
          email={siteEmail(site)}
        />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter site={site} />
      </body>
    </html>
  );
}
