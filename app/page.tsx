'use client';
import { useRef } from 'react';
import Banner from '@/components/sections/Banner';
import Projects from '@/components/sections/Projects';
import PageLayout from '@/components/PageLayout';
import About from '@/components/sections/About';

const App = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  return (
    <PageLayout sectionsRef={sectionsRef} activeLink='Home'>
      <Banner
        ref={(el: HTMLElement) => {
          sectionsRef.current[0] = el;
        }}
      />
      <About
        ref={(el: HTMLElement) => {
          sectionsRef.current[1] = el;
        }}
      />
      <Projects
        ref={(el: HTMLElement) => {
          sectionsRef.current[2] = el;
        }}
      />
    </PageLayout>
  );
};

export default App;
