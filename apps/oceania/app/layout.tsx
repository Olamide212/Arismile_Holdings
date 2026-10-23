import { SkipLink } from "@arismile/ui";
import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteUrl, subsidiary, summary } from "@/lib/site";
import "./globals.css";

const display = Lora({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body-face", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${subsidiary.legalName} | ${subsidiary.tagline}`,
    template: `%s | ${subsidiary.legalName}`,
  },
  description: summary,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: subsidiary.legalName,
    title: subsidiary.legalName,
    description: summary,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <SkipLink href="#main" />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
