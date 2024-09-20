'use client';
import { useRef } from 'react';
import Banner from './_components/sections/Banner';
import Projects from './_components/sections/Projects';
import PageLayout from './_components/PageLayout';
import About from './_components/sections/About';
import Playground from './_components/sections/Playground';
import { navLinks } from '@/config';

const App = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const components = [Banner, Projects, About, Playground];

  return (
    <PageLayout sectionsRef={sectionsRef} activeLink='Home'>
      {navLinks.map((navLink, index) => {
        const Section =
          navLink === 'Home'
            ? Banner
            : components.find(
                (component) => component.displayName === navLink
              )!;
        return (
          <Section
            key={`${Section}${index}`}
            ref={(el: HTMLElement) => {
              sectionsRef.current[index] = el;
            }}
          />
        );
      })}
    </PageLayout>
  );
};

export default App;
