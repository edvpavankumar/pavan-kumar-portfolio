import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://pavankumar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — ${personal.headline}`,
    template: `%s — ${personal.shortName}`,
  },
  description: personal.summary,
  keywords: [
    "Pavan Kumar",
    "AI Developer",
    "Software Developer",
    "Java Developer",
    "Portfolio",
    "Hyderabad",
  ],
  authors: [{ name: personal.name, url: personal.github }],
  openGraph: {
    title: `${personal.name} — ${personal.headline}`,
    description: personal.summary,
    url: siteUrl,
    siteName: personal.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.headline}`,
    description: personal.summary,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-base text-ivory antialiased selection:bg-gold/30 selection:text-ivory`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personal.name,
              jobTitle: personal.headline,
              url: siteUrl,
              email: personal.email,
              address: personal.location,
              sameAs: [personal.github, personal.linkedin, personal.leetcode, personal.hackerrank],
            }),
          }}
        />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
