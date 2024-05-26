'use client';
import { useRef } from 'react';
import Banner from '@/components/sections/Banner';
import Projects from '@/components/sections/Projects';
import PageLayout from '@/components/PageLayout';
import Designs from '@/components/sections/Designs';

const App = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  return (
    <PageLayout sectionsRef={sectionsRef} activeLink='Home'>
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
      <Designs
        ref={(el: HTMLElement) => {
          sectionsRef.current[2] = el;
        }}
      />
    </PageLayout>
  );
};

export default App;
