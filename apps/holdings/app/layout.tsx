import { SkipLink } from "@arismile/ui";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { revealBootScript } from "@/lib/reveal";
import { siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arismile Holdings | Power, Oil & Gas, Mining and Infrastructure",
    template: "%s | Arismile Holdings",
  },
  description: siteDescription,
  applicationName: "Arismile Holdings",
  openGraph: {
    type: "website",
    siteName: "Arismile Holdings",
    locale: "en_NG",
    url: "/",
    title: "Arismile Holdings",
    description: siteDescription,
    images: [{ url: "/images/hero/datu-kalinga.jpg", width: 2400, height: 1800, alt: "Arismile Holdings" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#323333",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The boot script adds a class to <html> before hydration.
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <ScrollReveal />
        <SkipLink href="#main" />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
