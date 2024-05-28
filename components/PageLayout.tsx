'use client';
import { headerHeight } from '@/config';
import Footer from './Footer';
import Header from './Header';
import { type MutableRefObject, type ReactNode } from 'react';
import { permanentRedirect, usePathname } from 'next/navigation';

const PageLayout = ({
  children,
  hideHeader,
  fullHeight,
  sectionsRef,
  activeLink,
}: {
  children: ReactNode;
  hideHeader?: boolean;
  fullHeight?: boolean;
  sectionsRef?: MutableRefObject<HTMLElement[]>;
  activeLink?: string;
}) => {
  const pathname = usePathname();

  if (
    pathname !== '/under-construction' &&
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true'
  ) {
    permanentRedirect('/under-construction');
  }

  return (
    <>
      {!hideHeader && (
        <Header sectionsRef={sectionsRef} activeLink={activeLink} />
      )}
      <div
        className='bg-gradient-to-b from-blue to-white flex flex-col justify-between items-center'
        style={{
          minHeight: hideHeader ? '100vh' : `calc(100vh - ${headerHeight}`,
        }}
      >
        <main
          className={`max-w-[1200px] margin transition-all duration-300 ${
            fullHeight ? 'flex-1 flex' : ''
          }`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
