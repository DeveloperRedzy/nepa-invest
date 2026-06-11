import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nepa Invest | Investicije i razvoj nekretnina",
    template: "%s | Nepa Invest",
  },
  description:
    "Nepa Invest je investicijska kompanija specijalizovana za akviziciju, razvoj i prodaju stambenih i poslovnih nekretnina, s fokusom na lokacije visokog potencijala i dugoročnu vrijednost.",
  applicationName: "Nepa Invest",
  keywords: [
    "Nepa Invest",
    "nekretnine",
    "investicije",
    "razvoj nekretnina",
    "stambene nekretnine",
    "poslovne nekretnine",
    "akvizicija zemljišta",
    "real estate Bosna i Hercegovina",
  ],
  authors: [{ name: "Nepa Invest" }],
  creator: "Nepa Invest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bs_BA",
    url: siteUrl,
    siteName: "Nepa Invest",
    title: "Nepa Invest | Investicije i razvoj nekretnina",
    description:
      "Investicijska kompanija usmjerena na akviziciju, razvoj i prodaju stambenih i poslovnih nekretnina na lokacijama s visokim potencijalom rasta.",
    images: [
      {
        url: "/logo/nepa-invest-logo.png",
        width: 1254,
        height: 1254,
        alt: "Nepa Invest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepa Invest | Investicije i razvoj nekretnina",
    description:
      "Strateški razvoj stambenih i poslovnih nekretnina s fokusom na dugoročnu vrijednost.",
    images: ["/logo/nepa-invest-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${inter.variable} ${cormorant.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
