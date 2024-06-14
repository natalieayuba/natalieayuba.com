import React, { forwardRef, useEffect, useRef } from 'react';
import SectionLayout from './SectionLayout';
import scrollReveal from '@/utils/scrollReveal';

const About = forwardRef<HTMLElement>((props, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollReveal(contentRef.current as HTMLElement);
  }, []);

  return (
    <SectionLayout
      name={About.displayName}
      ref={ref}
      className='flex justify-center'
    >
      <div ref={contentRef}>
        My addiction to computer screens started at about age five when we got
        our first family computer. I&apos;d click every button and link I saw
        just to see what would happen and where I&apos;d be navigated to. Fast
        forward to today, I get to be the one who designs what those buttons do
        and where they take others. Since starting my career in software
        development, I&apos;ve gained experience in mobile app and full-stack
        web development, but have focused on designing and building interfaces
        that enhance the user experience. In my personal time, I enjoy creating
        engaging web and mobile apps for fun. This portfolio is a collection of
        random personal work, from coursework to passion projects.
      </div>
    </SectionLayout>
  );
});

export default About;

About.displayName = 'About';
