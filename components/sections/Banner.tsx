import { headerHeight } from '@/config';
import { interval, duration } from '@/utils/navlinkAnimation';
import { Reenie_Beanie } from 'next/font/google';
import { forwardRef } from 'react';
import Typewriter from '../Typewriter';

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
});

const Banner = forwardRef<HTMLElement>((props, ref) => {
  const developerStr = 'developer';
  const longInterval = interval * 2;
  let animationDelay = duration;

  return (
    <section
      id='home'
      className='flex items-center'
      style={{ height: `calc(100vh - ${headerHeight})` }}
      ref={ref}
    >
      <div
        className='max-w-[600px] h-screen flex flex-col justify-center py-40'
        style={{ height: `calc(100vh - ${headerHeight * 2}px` }}
      >
        <h1>
          <span
            className='text-lg md:text-2xl mb-2 pl-1 font-semibold animate-glide block'
            style={{ animationDelay: `${(animationDelay += interval)}ms` }}
          >
            Hi there,{' '}
          </span>
          <span
            className='animate-glide block heading-xl'
            style={{ animationDelay: `${(animationDelay += interval)}ms` }}
          >
            I&#8217;m Natalie.
          </span>
        </h1>
        <p
          className='text-[22px] md:text-[44px] -mt-3 font-bold animate-glide'
          style={{ animationDelay: `${(animationDelay += interval)}ms` }}
        >
          A{' '}
          <Typewriter
            text={developerStr}
            delay={(animationDelay += interval)}
            className='text-purple font-mono'
          />
          <span
            className='animate-glide'
            style={{
              animationDelay: `${(animationDelay +=
                developerStr.length * longInterval)}ms`,
            }}
          >
            {' '}
            and{' '}
          </span>
          <span
            className={`${reenieBeanie.className} text-purple text-7xl inline-block translate-y-1 animate-glide`}
            style={{
              animationDelay: `${(animationDelay += longInterval)}ms`,
            }}
          >
            designer
          </span>
          .
        </p>
        <p
          className='text-base md:text-xl max-w-lg animate-glide'
          style={{ animationDelay: `${(animationDelay += longInterval)}ms` }}
        >
          I&#8217;m all about creating fun, engaging, and user-friendly web and
          mobile experiences.
        </p>
      </div>
    </section>
  );
});

Banner.displayName = 'Banner';

export default Banner;
