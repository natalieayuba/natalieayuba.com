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
          <SectionHeader heading='A little about me' />
          <p>
            I&apos;m all about designing for a more inclusive and engaging
            digital world.
          </p>
          <p>
            I&apos;ve gained 2+ years professional experience as a{' '}
            <strong>mobile app and full-stack developer</strong>, both with a{' '}
            <strong>frontend focus</strong>. In these roles I{' '}
            <strong>advocated for usability and accessibility</strong> and{' '}
            <strong>lead design</strong> sprints with the goal of{' '}
            <strong>creating user-friendly products</strong> rather than just
            developing in a technical void.
          </p>
          <p>
            I love to use both my development background and design skills to
            craft{' '}
            <strong>
              technically sound but also aesthetically pleasing products
            </strong>
            , creating an easy and enjoyable experience for users. I&apos;m also
            passionate about brand design, illustration, and animation, which I
            try to incorporate into my work where possible.
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
            className='w-full h-auto max-w-md mx-auto lg:absolute -right-14'
          />
        </div>
      </div>
    </SectionLayout>
  );
});

export default About;

About.displayName = 'About';
