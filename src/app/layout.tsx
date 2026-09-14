import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const instrument = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: { default: "Sharan Teja Medikar — AI Engineer", template: "%s — Sharan Teja Medikar" },
  description: "AI Engineer specialising in LLM systems, machine learning, computer vision and applied AI.",
  keywords: ["AI Engineer", "LLM systems", "Machine Learning", "Computer Vision"],
  authors: [{ name: "Sharan Teja Medikar" }],
  openGraph: { title: "Sharan Teja Medikar — AI Engineer", description: "Reliable AI systems, from models to deployment.", type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image", title: "Sharan Teja Medikar — AI Engineer", description: "Reliable AI systems, from models to deployment." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full"><a className="skip-link" href="#top">Skip to content</a><Nav/>{children}</body>
    </html>
  );
}
