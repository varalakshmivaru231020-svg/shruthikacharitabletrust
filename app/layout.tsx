import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import SiteEffects from "@/components/SiteEffects";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// Self-hosted at build time — no render-blocking request to Google.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

// Used only for the trust's name in the home-page About block, which the trust
// sets in a serif on its own site.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// TODO: replace with the trust's real domain before launch. Social previews
// (WhatsApp, Facebook, LinkedIn) need absolute image URLs, which this resolves.
const SITE_URL = "https://shruthikacharitabletrust.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "The Shruthika Women's and Children's Welfare Trust, Bengaluru — uplifting abandoned orphans, underprivileged children and women in need through food, shelter, education and moral support.",
  icons: { icon: "/assets/img/logo.png" },
  // TODO: set metadataBase to the production domain so og:image resolves absolutely.
};

export const viewport: Viewport = {
  themeColor: "#6d2311",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${playfair.variable}`}>
      <body>
        {/* Preloader — the interactions module adds .is-loaded to <html> on load. */}
        <div className="preloader" aria-hidden="true">
          <img className="preloader__mark" src="/assets/img/logo.png" alt="" />
          <div className="preloader__bar">
            <span></span>
          </div>
        </div>

        <div className="progress" id="progress" aria-hidden="true"></div>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <SiteChrome>
          <main id="main">{children}</main>
        </SiteChrome>

        <Footer />

        <a className="to-top" id="toTop" href="#main" aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>

        <SiteEffects />
      </body>
    </html>
  );
}
