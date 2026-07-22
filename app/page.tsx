"use client";
import { About } from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import { useRef } from "react";
import Work from "./components/sections/Work";

const Home = () => {
  const projectsHeadingRef = useRef<HTMLHeadingElement>(null);
  const designsHeadingRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <Hero />
      <Work ref={projectsHeadingRef} designsHeadingRef={designsHeadingRef} />
      <About />
    </>
  );
};

export default Home;
