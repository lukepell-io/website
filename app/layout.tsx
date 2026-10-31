import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Headlines: Fraunces, a soft serif. SOFT and WONK stay at 0 so it reads calm;
// opsz lets it tune itself from small titles up to the hero.
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

// Body, nav and buttons: General Sans (Fontshare, free for commercial use), self-hosted.
const generalSans = localFont({
  variable: "--font-body",
  src: [
    { path: "./fonts/GeneralSans-Variable.woff2", weight: "200 700", style: "normal" },
    { path: "./fonts/GeneralSans-VariableItalic.woff2", weight: "200 700", style: "italic" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luke Pelletier · Video Editing, Motion Design & Video Systems",
    template: "%s · Luke Pelletier",
  },
  description:
    "Digital Video Producer and Motion Designer in Sydney. Video Editing and Motion Design for agencies, and video systems and in-house teams for brands.",
  // PRE-LAUNCH: keeps search engines out. Delete this line on launch day.
  robots: { index: false, follow: false, nocache: true },
};

// Night (lagoon) is the default for every visitor. A saved choice from the
// toggle wins, and is applied before the page paints so there's no flash.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=(t==="day"||t==="lagoon")?t:"lagoon"}catch(e){document.documentElement.dataset.theme="lagoon"}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="lagoon" className={`${fraunces.variable} ${generalSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
