import { SkipLink } from "@arismile/ui";
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { brand, profile, siteUrl, subsidiary } from "@/lib/site";
import "./globals.css";

const display = Sora({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body-face", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${subsidiary.legalName} | ${subsidiary.tagline}`,
    template: `%s | ${subsidiary.legalName}`,
  },
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: subsidiary.legalName,
    title: subsidiary.legalName,
    description: profile.summary,
    images: [{ url: brand.heroImage.src, alt: brand.heroImage.alt }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d2a4a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh overflow-x-clip bg-bg text-fg">
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
