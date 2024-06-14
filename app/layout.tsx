import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { colors, description, name } from '@/config';
import type { ReactNode } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${name}`,
    default: name,
  },
  description,
};

export const viewport: Viewport = {
  themeColor: colors.blue,
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en-GB' className='scroll-smooth'>
      <body
        className={`${poppins.className} leading-relaxed text-black-alpha-90 selection:bg-purple-alpha-60 selection:text-black-alpha-90`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
