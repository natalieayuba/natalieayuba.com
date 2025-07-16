import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { colors } from '@/config';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'arial'],
});

const author = 'Natalie Ayuba';
const defaultTitle = `${author} | Frontend Developer & Designer`;
const description =
  'Natalie Ayuba is a frontend developer and designer based in Bristol.';

export const metadata: Metadata = {
  title: {
    template: `${author} | %s`,
    default: defaultTitle,
  },
  description,
  openGraph: {
    title: defaultTitle,
    description,
    type: 'website',
    url: 'natalieayuba.com',
  },
};

export const viewport: Viewport = {
  themeColor: colors.blue,
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en-GB' className='scroll-smooth overscroll-x-none'>
    <body
      className={`${poppins.className} bg-gradient-to-b from-blue to-white text-black text-opacity-90 selection:bg-purple selection:bg-opacity-60`}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
