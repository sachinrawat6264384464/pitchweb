import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PitchWeb — Premium UTM Tracking & Multi-Touch Marketing Attribution",
  description: "Standardize campaign URLs, track visitor touchpoints across every channel, and attribute real revenue with precision marketing telemetry.",
  keywords: ["UTM builder", "marketing attribution", "campaign tracking", "multi-touch attribution", "analytics platform", "pitchweb"],
  authors: [{ name: "PitchWeb Engineering" }],
  openGraph: {
    title: "PitchWeb — Precision UTM Tracking & Attribution Platform",
    description: "Create campaign links, enforce taxonomy, track visitor sources, and make confident marketing decisions from one unified telemetry dashboard.",
    type: "website",
    locale: "en_US",
    siteName: "PitchWeb",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchWeb — Premium UTM Tracking & Marketing Attribution",
    description: "Standardize campaign URLs and map multi-touch visitor attribution to revenue.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06090e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#06090E] text-slate-100 antialiased font-sans selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
