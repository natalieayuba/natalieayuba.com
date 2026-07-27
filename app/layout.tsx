import { colors } from "@/config";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
    className={`${poppins.variable} ${rocketRaccoon.variable} overscroll-x-none scroll-smooth antialiased`}
    suppressHydrationWarning
  >
    <body>
      <ThemeProvider>{children}</ThemeProvider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
