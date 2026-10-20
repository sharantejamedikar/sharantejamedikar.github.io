import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const siteUrl = "https://sharantejamedikar.github.io";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Sharan Teja Medikar — AI Engineer", template: "%s — Sharan Teja Medikar" },
  description: "AI Engineer building evaluated LLM, machine-learning, computer-vision and human-in-the-loop systems.",
  keywords: ["AI Engineer", "Machine Learning Engineer", "Applied AI", "LLM systems", "Computer Vision"],
  authors: [{ name: "Sharan Teja Medikar" }],
  alternates: { canonical: "/" },
  openGraph: { title: "Sharan Teja Medikar — AI Engineer", description: "Evaluated AI systems, from models to dependable software.", url: "/", siteName: "Sharan Teja Medikar", type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image", title: "Sharan Teja Medikar — AI Engineer", description: "Evaluated AI systems, from models to dependable software." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full"><a className="skip-link" href="#top">Skip to content</a><Nav/>{children}</body>
    </html>
  );
}
