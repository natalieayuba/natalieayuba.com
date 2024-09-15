import React, { forwardRef, useEffect, useRef } from 'react';
import scrollReveal from '@/utils/scrollReveal';
import SectionLayout from './SectionLayout';
import SectionHeader from './SectionHeader';

const About = forwardRef<HTMLElement>((props, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      scrollReveal(contentRef.current);
    }
  });

  return (
    <SectionLayout el={About} className='flex justify-center' ref={ref}>
      <div className='flex gap-12'>
        <div className='[&_p]:mb-4 flex-1'>
          <SectionHeader heading='A little about me' />
          <p>
            I&apos;m all about designing for a more inclusive and engaging
            digital world.
          </p>
          <p>
            I&apos;ve gained 2+ years professional experience as a{' '}
            <strong>mobile app and full-stack developer</strong>, both with a{' '}
            <strong>frontend focus</strong>. In these roles, I{' '}
            <strong>advocated for usability and accessibility</strong> and{' '}
            <strong>lead design</strong>
            sprints with the goal of{' '}
            <strong>creating user-friendly products</strong> rather than just
            developing in a technical void.
          </p>
          <p>
            My development background has equipped me with the skills to make
            <strong>functional and technically sound products</strong>, while my
            design skills allow me to create{' '}
            <strong>aesthetically pleasing and intuitive UIs</strong>. I&apos;m
            also passionate about brand design, illustration, and animation,
            which I try to incorporate into my work where possible. I hope to
            delight users and improve their experiences with the web, creating
            positivity in their day to day lives.
          </p>
          <p>
            When I&apos;m not designing or coding, you&apos;ll find me jamming
            with friends, binging horror flicks, or building intricately
            designed mansions in the Sims.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
});

export default About;

About.displayName = 'About';
