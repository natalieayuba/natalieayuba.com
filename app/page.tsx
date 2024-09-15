'use client';
import {
  useRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from 'react';
import Banner from './_components/sections/Banner';
import Projects from './_components/sections/Projects';
import PageLayout from './_components/PageLayout';
import About from './_components/sections/About';
import Playground from './_components/sections/Playground';

const App = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  type SectionType = ForwardRefExoticComponent<RefAttributes<HTMLElement>>;

  return (
    <PageLayout sectionsRef={sectionsRef} activeLink='Home'>
      {[Banner, About, Projects, Playground].map(
        (Section: SectionType, index) => (
          <Section
            key={`${Section}${index}`}
            ref={(el: HTMLElement) => {
              sectionsRef.current[index] = el;
            }}
          />
        )
      )}
    </PageLayout>
  );
};

export default App;
