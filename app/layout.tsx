import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { BRAND } from "@/data/product";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Playfair_Display({
  variable: "--font-geist-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baseUrl = BRAND.baseUrl;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${BRAND.name} — Handcrafted Shawls, Stoles & Knitted Wear`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Ganesh Shawl Emporium — handcrafted shawls, stoles, and knitted stoles from the Ludhiana looms. Wholesale & bulk orders. Call +91 9872531240 for a quote.",
  openGraph: {
    title: `${BRAND.name} — Handcrafted Shawls & Stoles, Ludhiana`,
    description:
      "Handcrafted shawls, stoles, and knitted wear from the Ludhiana looms. Wholesale and bulk orders, call +91 9872531240.",
    url: baseUrl,
    siteName: BRAND.name,
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/hero/feature-1.jpg`,
        width: 1086,
        height: 1448,
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: BRAND.name,
    description:
      "Handcrafted shawls, stoles, and knitted wear from the Ludhiana looms. Wholesale and bulk orders.",
    telephone: "+919872531240",
    email: "info@ganeshshawls.com",
    url: baseUrl,
    image: `${baseUrl}/images/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Street No.8, Mochpura Bazar, Chaura Bazar, Old Ludhiana",
      addressLocality: "Ludhiana",
      addressRegion: "Punjab",
      postalCode: "141008",
      addressCountry: "IN",
    },
    sameAs: ["https://www.instagram.com/ganeshshawlemp.in/"],
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} flex flex-col min-h-screen antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}