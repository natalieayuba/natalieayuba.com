import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { colors, darkMode, description, name } from '@/config';
import type { ReactNode } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';

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
  themeColor: darkMode ? colors.navy : colors.blue,
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en-GB' className={`scroll-smooth ${darkMode && 'dark'}`}>
      <body
        className={`${poppins.className} leading-relaxed bg-blue dark:bg-navy text-black-alpha-90 dark:text-white-alpha-75 selection:bg-purple-alpha-60 selection:text-black-alpha-90  dark:selection:text-white-alpha-90`}
      >
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
};

export default RootLayout;
