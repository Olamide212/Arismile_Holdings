import { group } from "@arismile/brand";
import {
  JsonLd,
  organizationJsonLd,
  Preloader,
  revealBootScript,
  rootMetadata,
  ScrollReveal,
  SiteHeader,
  siteEmail,
  websiteJsonLd,
} from "@arismile/site-kit";
import { SkipLink } from "@arismile/ui";
import type { Viewport } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";

const display = Lora({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body-face", display: "swap" });

export const metadata = rootMetadata(site);

export const viewport: Viewport = {
  themeColor: "#0a2540",
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
        <Preloader logo={site.logo} logoClassName={site.logoClassName} label={`Loading ${site.record.legalName}`} />
        <JsonLd data={[organizationJsonLd(site), websiteJsonLd(site)]} />
        <SkipLink href="#main" />
        <SiteHeader
          variant="solid"
          name={site.name}
          tagline={site.hero.eyebrow}
          logo={site.logo}
          logoClassName={site.logoClassName}
          services={site.services.items.map(({ slug, title }) => ({ slug, title }))}
          phone={{ display: group.phone.display, href: group.phone.href }}
          email={siteEmail(site)}
        />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
