import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import { colors } from '@/config';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Natalie Ayuba',
  description: 'A developer and designer portfolio.',
};

export const viewport: Viewport = {
  themeColor: colors.blue,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en-GB' className='scroll-smooth'>
      <body className={`${poppins.className} leading-relaxed text-black-alpha-90 selection:bg-purple-alpha-60 selection:text-black-alpha-90`}>
        <Header />
        <div className='bg-gradient-to-b from-blue to-white flex justify-center'>
          {children}
        </div>
      </body>
    </html>
  );
}
