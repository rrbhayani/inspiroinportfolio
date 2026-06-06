import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollRefresh } from "@/components/ScrollRefresh";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "workforce solutions",
    "talent solutions",
    "background verification",
    "BGV",
    "digital solutions",
    "web app development",
    "managed IT",
    "staffing",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        {/* Fixed canvas layer whose color is shifted between sections on scroll. */}
        <div id="bg-layer" aria-hidden="true" className="pointer-events-none fixed inset-0 -z-50" />
        <SmoothScroll />
        <ScrollRefresh />
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
