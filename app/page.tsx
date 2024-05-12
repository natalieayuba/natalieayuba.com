'use client';
import { useRef } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/sections/Banner';
import Projects from '@/components/sections/Projects';
import PageLayout from '@/components/PageLayout';

const Page = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  return (
    <>
      <Header sectionsRef={sectionsRef} />
      <PageLayout>
        <Banner
          ref={(el: HTMLElement) => {
            sectionsRef.current[0] = el;
          }}
        />
        <Projects
          ref={(el: HTMLElement) => {
            sectionsRef.current[1] = el;
          }}
        />
      </PageLayout>
    </>
  );
};

export default Page;
