import { colors } from "@/config";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Merriweather_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";
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

const chunkyPlayful = localFont({
  src: "../assets/fonts/ChunkyPlayful.otf",
  variable: "--font-chunky",
  display: "swap",
});

const rocketRaccoon = localFont({
  src: "../assets/fonts/RocketRaccoon.ttf",
  variable: "--font-raccoon",
  display: "swap",
});

const title = "Natalie Ayuba";
const description =
  "Natalie Ayuba is a developer, designer, and multidisciplinary creative based in Bristol.";

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
    className={`${poppins.variable} ${merriweather_sans.variable} ${chunkyPlayful.variable} ${rocketRaccoon.variable} overscroll-x-none scroll-smooth antialiased`}
    suppressHydrationWarning
  >
    <body>
      <ThemeProvider attribute="data-theme">{children}</ThemeProvider>
      {/* <Analytics /> */}
    </body>
  </html>
);

export default RootLayout;
