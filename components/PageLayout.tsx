'use client';
import { headerHeight } from '@/config';
import Footer from './Footer';
import Header from './Header';
import { type CSSProperties, type ReactNode } from 'react';
import { permanentRedirect, usePathname } from 'next/navigation';
import type { NavLinksProps } from './nav/NavLinks';

interface PageLayoutProps extends NavLinksProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hideHeader?: boolean;
  fullHeight?: boolean;
}

const PageLayout = ({
  children,
  className,
  style,
  hideHeader,
  fullHeight,
  sectionsRef,
  activeLink,
}: PageLayoutProps) => {
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
        className={`bg-gradient-to-b from-blue to-white flex flex-col justify-between items-center
        }`}
        style={{
          minHeight: hideHeader ? '100dvh' : `calc(100dvh - ${headerHeight}px`,
        }}
      >
        <main
          style={style}
          className={`max-w-[1000px] margin transition-all duration-300 ${
            fullHeight ? 'flex-1 flex' : ''
          }${className ? ` ${className}` : ''}`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
