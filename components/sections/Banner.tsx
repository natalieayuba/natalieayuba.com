import { headerHeight } from '@/config';
import { animationDuration } from '@/utils/navlinkAnimation';
import { Reenie_Beanie } from 'next/font/google';
import { forwardRef } from 'react';

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
});

const Banner = forwardRef<HTMLElement>((props, ref) => {
  let animationDelay = animationDuration;

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
            style={{ animationDelay: `${(animationDelay += 100)}ms` }}
          >
            Hi there,{' '}
          </span>
          <span
            className='animate-glide block heading-xl'
            style={{ animationDelay: `${(animationDelay += 100)}ms` }}
          >
            I&#8217;m Natalie.
          </span>
        </h1>
        <p
          className='text-[22px] md:text-[44px] -mt-3 font-bold animate-glide'
          style={{ animationDelay: `${(animationDelay += 100)}ms` }}
        >
          A <span className='text-purple font-mono'>developer</span> and{' '}
          <span
            className={`${reenieBeanie.className} text-purple text-7xl inline-block translate-y-1`}
          >
            designer
          </span>
          .
        </p>
        <p
          className='text-base md:text-xl max-w-lg animate-glide'
          style={{ animationDelay: `${(animationDelay += 100)}ms` }}
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
