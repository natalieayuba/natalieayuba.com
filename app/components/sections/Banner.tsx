import Image from 'next/image';
import Link from 'next/link';
import { useRef, type RefObject } from 'react';
import TransitionCurve from '../TransitionCurve';

const Banner = ({
  aboutHeadingRef,
}: {
  aboutHeadingRef: RefObject<HTMLHeadingElement>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const sneakPeakRef = useRef<HTMLDivElement>(null);
  let animationDelay = 700;

  return (
    <section
      id='home'
      ref={ref}
      className='container pt-28 min-h-[90vh] gap-x-4 gap-y-16 flex items-center flex-wrap animate-glideDown relative'
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className='flex-1'>
        <h1 className='font-semibold text-lg pl-1 mb-1.5'>
          Hi, I&#8217;m Natalie :)
        </h1>
        <p className='heading-lg mb-2.5'>
          A Frontend Developer & UI/UX Designer
        </p>
        <p className='text-xl max-w-lg'>
          I create fun, dynamic, and user-centred digital experiences.
        </p>
      </div>
      <div
        ref={sneakPeakRef}
        className='md:flex-1 md:max-w-[465px] px-6 md:px-0 relative'
      >
        <Image
          src='/projects/headfirst/headfirst-preview-image.png'
          alt='Headirst Bristol sneak peak mockup'
          width={0}
          height={0}
          className='w-full relative md:left-6 animate-pop'
          style={{
            animationDuration: '400ms',
            animationDelay: `${(animationDelay += 500)}ms`,
          }}
          priority
        />
        <TransitionCurve
          from={sneakPeakRef}
          to={aboutHeadingRef}
          curve='banner-line.svg'
          className='right-[43%]'
          width={750}
          delta={0}
        />
        <div className='absolute -top-12 right-0 md:-right-8'>
          <Image
            src='/decals/little-sparkle.svg'
            alt='Little sparkle'
            width={0}
            height={0}
            unoptimized
            className='w-5 h-auto -ml-6 animate-pop'
            style={{
              animationDelay: `${(animationDelay += 700)}ms`,
              animationDuration: '200ms',
            }}
          />
          <Image
            src='/decals/big-sparkle.svg'
            alt='Big sparkle'
            width={0}
            height={0}
            className='w-10 -mt-6 h-auto animate-pop'
            style={{
              animationDelay: `${(animationDelay += 300)}ms`,
              animationDuration: '200ms',
            }}
          />
        </div>
        <div className='flex mt-5 items-start justify-center gap-6 md:absolute min-doodles:top-0 right-0'>
          <div
            title="A sneak peak of what I'm currently working on"
            className=' min-doodles:absolute -right-[250px] animate-pop'
            style={{
              animationDelay: `${(animationDelay += 400)}ms`,
              animationDuration: '300ms',
            }}
          >
            <Image
              src='/decals/sneak-peak.svg'
              alt="A sneak peak of what I'm currently working on"
              width={0}
              height={0}
              className='h-24 w-auto'
              priority
            />
          </div>
          <div
            className='mt-4 min-doodles:absolute top-24 -right-48 animate-pop'
            style={{
              animationDelay: `${(animationDelay += 400)}ms`,
              animationDuration: '300ms',
            }}
          >
            <div title='Check out my other projects below'>
              <Image
                src='/decals/other-projects.svg'
                alt='Check out my other projects below'
                width={0}
                height={0}
                className='h-20 w-auto'
              />
            </div>
            <Link
              href='#projects'
              title='Click to scroll to projects'
              className='w-full flex hover:mt-1 '
            >
              <Image
                src='/decals/arrow.svg'
                alt='Down arrow'
                width={0}
                height={0}
                className='ml-auto w-auto'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
