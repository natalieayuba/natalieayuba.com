import React, { forwardRef, useRef, type RefObject } from 'react';
import Image from 'next/image';
import TransitionCurve from '../TransitionCurve';
import useObserver from '@/hooks/useObserver';

const About = forwardRef<
  HTMLHeadingElement,
  { projectsHeadingRef: RefObject<HTMLHeadingElement> }
>(({ projectsHeadingRef }, headingRef) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visible = useObserver(containerRef, '-500px');
  const animationStyles = {
    animationPlayState: visible ? 'running' : 'paused',
    animationDelay: '1000ms',
  };

  return (
    <section
      id='about'
      className='container flex justify-center pt-28 min-doodles:pt-0 min-doodles:h-screen items-center'
    >
      <div className='flex flex-wrap relative' ref={containerRef}>
        <div className='flex-1 min-w-[300px] max-w-prose'>
          <h2 className='heading-md' ref={headingRef}>
            I&apos;m all about designing for a more engaging digital world.
          </h2>
          <div
            className='leading-relaxed [&_p]:mb-[1rem] animate-fadeIn'
            style={animationStyles}
          >
            <p>
              I fell in love with UIs during the golden age of YouTube and
              Tumblr. I&apos;ve seen almost every iteration of these sites since
              their birth and it was fascinating to watch their UIs adapt and
              change with the times. This fascination led me to the world of{' '}
              <strong>software development</strong> where I&apos;ve{' '}
              <strong>gained 2+ years of professional experience</strong>.
            </p>
            <p>
              At work I have always been a big{' '}
              <strong>advocate for design thinking</strong> and{' '}
              <strong>led design sprints</strong> to ensure we were{' '}
              <strong>
                developing with usability and accessibility in mind
              </strong>
              , not just functionality. I&apos;m also passionate about{' '}
              <strong>branding</strong>, <strong>illustration</strong>, and{' '}
              <strong>animation</strong>. I love to add a bit of character to a
              design to bring it to life.
            </p>
            <p>
              Outside work, you&apos;ll find me jamming with friends, binging
              horror flicks, or building intricately designed mansions in the
              Sims.
            </p>
          </div>
        </div>
        <div className='flex-1 relative animate-fadeIn' style={animationStyles}>
          <Image
            src='/decals/self-portrait.svg'
            alt='A self portrait'
            width={0}
            height={0}
            priority
            className='w-full h-auto min-w-96'
          />
        </div>
        <TransitionCurve
          from={containerRef}
          to={projectsHeadingRef}
          curve='about-line.svg'
          delta={0.6}
          width={400}
          className='right-40'
        />
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
