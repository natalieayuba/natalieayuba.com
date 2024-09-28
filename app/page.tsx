'use client';
import Banner from './components/sections/Banner';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Designs from './components/sections/Designs';
import { useRef } from 'react';

const Home = () => {
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const projectsHeadingRef = useRef<HTMLHeadingElement>(null);
  const designsHeadingRef = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Banner aboutHeadingRef={aboutHeadingRef} />
      <About ref={aboutHeadingRef} projectsHeadingRef={projectsHeadingRef} />
      <Projects
        ref={projectsHeadingRef}
        designsHeadingRef={designsHeadingRef}
      />
      <Designs ref={designsHeadingRef} />
    </>
  );
};

export default Home;
