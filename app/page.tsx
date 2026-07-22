"use client";
import { About } from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import { useRef } from "react";
import Play from "./components/sections/Play";
import Work from "./components/sections/Work";

const Home = () => {
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const projectsHeadingRef = useRef<HTMLHeadingElement>(null);
  const designsHeadingRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <Hero />
      <Work ref={projectsHeadingRef} designsHeadingRef={designsHeadingRef} />
      <About />
      <Play ref={designsHeadingRef} />
    </>
  );
};

export default Home;
