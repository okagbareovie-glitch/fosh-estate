import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import {
  defaultOgImage,
  defaultSeo,
  organizationJsonLd,
  seoKeywords,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";

const manrope = localFont({
  src: "../public/fonts/Manrope-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
});

const fraunces = localFont({
  src: "../public/fonts/Fraunces-Variable.ttf",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Fosh Estate",
  authors: [{ name: "Fosh Estate", url: siteUrl }],
  creator: "Fosh Estate",
  publisher: "Fosh Estate",
  category: "Real Estate",
  keywords: seoKeywords,
  title: {
    default: defaultSeo.title,
    template: "%s | Fosh Estate",
  },
  description: defaultSeo.description,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    url: siteUrl,
    siteName: "Fosh Estate",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Fosh Estate secure land investment in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [organizationJsonLd(), websiteJsonLd()];

  return (
    <html lang="en" className={cn("font-sans", manrope.variable, fraunces.variable)}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
