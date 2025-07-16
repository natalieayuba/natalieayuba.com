"use client";
import { useRef } from "react";
import About from "./components/sections/About";
import Banner from "./components/sections/Banner";
import Play from "./components/sections/Play";
import Work from "./components/sections/Work";

const Home = () => {
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const projectsHeadingRef = useRef<HTMLHeadingElement>(null);
  const designsHeadingRef = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Banner aboutHeadingRef={aboutHeadingRef} />
      <About ref={aboutHeadingRef} projectsHeadingRef={projectsHeadingRef} />
      <Work ref={projectsHeadingRef} designsHeadingRef={designsHeadingRef} />
      <Play ref={designsHeadingRef} />
    </>
  );
};

export default Home;
