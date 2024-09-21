import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { colors, description, title, url } from '@/config';
import type { ReactNode } from 'react';
import Header from './_components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description,
  openGraph: {
    title: `${title} | Frontend Developer and UI/UX Designer Portfolio`,
    description,
    type: 'website',
    url,
  },
};

export const viewport: Viewport = {
  themeColor: colors.blue,
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en-GB' className='scroll-smooth'>
    <body
      className={`${poppins.className} leading-relaxed bg-gradient-to-b from-blue to-white text-black selection:bg-purple selection:bg-opacity-60`}
    >
      {process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'false' && <Header />}
      {children}
    </body>
  </html>
);

export default RootLayout;
