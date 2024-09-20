import React, { forwardRef, useEffect, useRef } from 'react';
import scrollReveal from '@/utils/scrollReveal';
import SectionLayout from './SectionLayout';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const About = forwardRef<HTMLElement>((props, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      scrollReveal(contentRef.current);
    }
  });

  return (
    <SectionLayout el={About} className='flex justify-center' ref={ref}>
      <div className='lg:flex gap-7'>
        <div className='[&_p]:mb-4 flex-1'>
          <SectionHeader heading='About me' />
          <p>
            I&apos;m all about designing for a more inclusive and engaging
            digital world.
          </p>
          <p>
            So far, I&apos;ve gained 2+ years professional experience as a{' '}
            <strong>mobile app and full-stack developer</strong>, both with a{' '}
            <strong>frontend focus</strong>. In these roles I{' '}
            <strong>advocated for usability and accessibility</strong> and{' '}
            <strong>led design sprints</strong> with the goal of{' '}
            <strong>creating products that addressed user needs</strong> rather
            than just developing in a technical void.
          </p>
          <p>
            I believe the combination of my development background and design
            skills have given me the ability to know if certain design choices
            are doable from a technical standpoint, and if they&apos;re
            beneficial to the user. I&apos;m also passionate about brand design,
            illustration, and animation, as I believe adding a bit of character
            can bring any design to life.
          </p>
          <p>
            When I&apos;m not designing or coding, you&apos;ll find me jamming
            with friends, binging horror flicks, or building intricately
            designed mansions in the Sims.
          </p>
        </div>
        <div className='lg:aspect-[1888.8/2,453.54] lg:w-[40%] relative'>
          <Image
            src='/images/decals/self-portrait.svg'
            alt='A self portrait'
            width={0}
            height={0}
            priority
            className='w-full h-auto max-w-md mx-auto lg:absolute -right-14'
          />
        </div>
      </div>
    </SectionLayout>
  );
});

export default About;

About.displayName = 'About';
