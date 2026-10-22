import type { Metadata } from "next";
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
  title: "Mayra Ethnic For Men Indore | Where Royalty Meets Affordability",
  description:
    "Designer Kurtas, Royal Jodhpuris, Nehru Jackets, Blazers & Wedding Sherwanis in Indore. Range starts from ₹600/-. Visit our Mahalaxmi Nagar store or order on WhatsApp (+91 8253004247).",
  keywords: [
    "Mayra Ethnic",
    "Mayra Ethnic For Men",
    "Indore ethnic wear",
    "Mahalaxmi Nagar Indore clothing store",
    "designer kurtas Indore",
    "Jodhpuri suit Indore",
    "Nehru jacket Indore",
    "wedding wear for men Indore",
    "groomsmen outfits Indore",
  ],
  authors: [{ name: "Mayra Ethnic For Men" }],
  openGraph: {
    title: "Mayra Ethnic For Men | Where Royalty Meets Affordability",
    description:
      "Indore's Premier Designer Ethnic Wear For Men. Kurtas, Jodhpuris, Jackets, Blazers starting at ₹600/-. Located at Mahalaxmi Nagar, Indore.",
    type: "website",
    locale: "en_IN",
    siteName: "Mayra Ethnic Indore",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning={true} className="min-h-full flex flex-col bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
