"use client";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Hero } from "@/components/Hero/Hero";
import { Work } from "@/components/Work/Work";

const Home = () => (
  <>
    <Hero />
    <About />
    <Work />
    <Contact />
  </>
);

export default Home;
