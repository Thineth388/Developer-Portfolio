import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { fullName, title, subtitle } = portfolioData.personalInfo;

export const metadata: Metadata = {
  title: `${fullName} | ${title}`,
  description: `Portfolio of ${fullName} — ${title} & ${subtitle}`,
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans text-zinc-100 antialiased">
        <div className="pointer-events-none fixed inset-0 grid-bg" aria-hidden />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
