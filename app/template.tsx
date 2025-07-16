'use client';
import React, { type ReactNode } from 'react';
import Footer from './components/Footer';
import { permanentRedirect, usePathname } from 'next/navigation';
import Header from './components/Header';

const Template = ({ children }: { children: ReactNode }) => {
  if (
    usePathname() !== '/under-construction' &&
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true'
  ) {
    permanentRedirect('/under-construction');
  }

  return (
    <>
      <Header />
      <div
        className={`flex flex-col justify-between items-center min-h-dvh
    }`}
      >
        <main className='flex-1 flex flex-col'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Template;
