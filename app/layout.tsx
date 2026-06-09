import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.foshestate.com"),
  title: {
    default: "Fosh Estate | Secure Land Investment in Nigeria",
    template: "%s | Fosh Estate",
  },
  description:
    "Fosh Estate helps families and investors secure prime estate land across Lagos, Port Harcourt, and Abuja.",
  openGraph: {
    title: "Fosh Estate | Building Dreams. Creating Legacy.",
    description:
      "Explore secure, prime, and profitable estate land opportunities from Fosh Estate.",
    url: "https://www.foshestate.com",
    siteName: "Fosh Estate",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
