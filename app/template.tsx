'use client';
import React, { type ReactNode } from 'react';
import Footer from './_components/Footer';
import { permanentRedirect, usePathname } from 'next/navigation';
import useScrollReveal from '@/hooks/useScrollReveal';

const Template = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  useScrollReveal();

  if (
    pathname !== '/under-construction' &&
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true'
  ) {
    permanentRedirect('/under-construction');
  }

  return (
    <div
      className={`flex flex-col justify-between items-center min-h-dvh pt-24 md:pt-32
    }`}
    >
      <main className='container flex-1 flex flex-col'>{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
