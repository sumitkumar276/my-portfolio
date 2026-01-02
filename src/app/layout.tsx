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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Premium Portfolio | Full-Stack Developer",
  description:
    "Showcase of innovative web projects and professional experience. Built with Next.js, React, and modern web technologies.",
  keywords: [
    "portfolio",
    "web developer",
    "full-stack",
    "next.js",
    "react",
    "typescript",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Premium Portfolio | Full-Stack Developer",
    description:
      "Showcase of innovative web projects and professional experience.",
    siteName: "Your Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Portfolio | Full-Stack Developer",
    description:
      "Showcase of innovative web projects and professional experience.",
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grain bg-black text-white`}
      >
        <div role="status" aria-live="polite" className="sr-only">
          Page loading
        </div>
        {children}
      </body>
    </html>
  );
}
