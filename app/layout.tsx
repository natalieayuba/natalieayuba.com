import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { colors, description, title, url } from '@/config';
import type { ReactNode } from 'react';
import Header from './components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    template: `${title} | %s`,
    default: `${title} | Frontend Developer & UI/UX Designer`,
  },
  description,
  openGraph: {
    title: `${title} | Frontend Developer & UI/UX Designer`,
    description,
    type: 'website',
    url,
  },
};

export const viewport: Viewport = {
  themeColor: colors.blue,
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en-GB' className='scroll-smooth overscroll-x-none'>
    <body
      className={`${poppins.className} bg-gradient-to-b from-blue to-white text-black selection:bg-purple selection:bg-opacity-60`}
    >
      {process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'false' && <Header />}
      {children}
    </body>
  </html>
);

export default RootLayout;
