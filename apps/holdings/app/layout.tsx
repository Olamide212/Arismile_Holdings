import { SkipLink } from "@arismile/ui";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { revealBootScript } from "@/lib/reveal";
import { JsonLd, keywords } from "@/lib/seo";
import { Preloader } from "@/components/layout/Preloader";
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
  keywords,
  publisher: "Arismile Holdings",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "Arismile Holdings",
    locale: "en_NG",
    url: "/",
    title: "Arismile Holdings",
    description: siteDescription,
    images: [{ url: "/images/hero/datu-kalinga.jpg", width: 2400, height: 1800, alt: "Arismile Holdings" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/hero/datu-kalinga.jpg"] },
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
        <Preloader />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Arismile Holdings",
            url: siteUrl,
            inLanguage: "en-NG",
            publisher: { "@type": "Organization", name: "Arismile Holdings", url: siteUrl },
          }}
        />
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
