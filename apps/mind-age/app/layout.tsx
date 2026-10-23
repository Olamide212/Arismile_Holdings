import { group } from "@arismile/brand";
import { rootMetadata, SiteFooter, SiteHeader, siteEmail } from "@arismile/site-kit";
import { SkipLink } from "@arismile/ui";
import type { Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body-face", display: "swap" });

export const metadata = rootMetadata(site);

export const viewport: Viewport = {
  themeColor: "#1b1726",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh overflow-x-clip bg-bg text-fg">
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
