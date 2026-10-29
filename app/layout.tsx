import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luke Pelletier · Video, content & motion",
    template: "%s · Luke Pelletier",
  },
  description:
    "Video editor and motion designer in Sydney. Editing, finishing, motion design and content operations.",
  // PRE-LAUNCH: keeps search engines out. Delete this line on launch day.
  robots: { index: false, follow: false, nocache: true },
};

// Applies the saved theme before the page paints, so there's no flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="day"||t==="lagoon")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
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
