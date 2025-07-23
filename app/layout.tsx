import { colors } from "@/config";
import type { Metadata, Viewport } from "next";
import { Merriweather_Sans, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const merriweather_sans = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather-sans",
});

const title = "Natalie Ayuba";
const description =
  "Natalie Ayuba is a frontend developer, designer, and multidisciplinary creative based in Bristol.";

export const metadata: Metadata = {
  title: {
    template: `${title} | %s`,
    default: title,
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "natalieayuba.com",
  },
};

export const viewport: Viewport = {
  themeColor: colors.blue,
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html
    lang="en-GB"
    className={`${poppins.variable} ${merriweather_sans.variable} overscroll-x-none scroll-smooth antialiased`}
  >
    <body className="bg-gradient-to-b from-blue to-white text-black text-opacity-90 selection:bg-purple selection:bg-opacity-60">
      {children}
    </body>
  </html>
);

export default RootLayout;
