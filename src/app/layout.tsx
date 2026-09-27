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
  metadataBase: new URL("https://thineth-portfolio.pages.dev"),
  title: `${fullName} | ${title}`,
  description: `Portfolio of ${fullName} — ${title} & ${subtitle}. Software Engineering undergraduate at ICBT Colombo specializing in full-stack web and systems development.`,
  keywords: [
    "Thineth Shalinda",
    "Thineth",
    "R.M. Thineth Shalinda",
    "Full Stack Developer Sri Lanka",
    "Software Engineer Portfolio",
    "ICBT Colombo",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [{ name: fullName }],
  creator: fullName,
  openGraph: {
    title: `${fullName} | ${title}`,
    description: `Portfolio of ${fullName} — ${title} & ${subtitle}`,
    url: "https://thineth-portfolio.pages.dev",
    siteName: `${fullName} Portfolio`,
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 1000,
        alt: fullName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
