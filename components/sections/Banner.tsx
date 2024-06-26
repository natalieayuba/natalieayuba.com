import { colors, headerHeight } from '@/config';
import { interval, duration } from '@/utils/navlinkAnimation';
import { forwardRef } from 'react';
import Typewriter from '../Typewriter';
import Handwriter from '../Handwriter';
import useWindowWidth from '@/hooks/useWindowWidth';
import Game from '../Game';

const Banner = forwardRef<HTMLElement>((props, ref) => {
  const { width } = useWindowWidth();
  const developerStr = 'developer';
  const designerStr = 'designer';
  const typewriterSpeed = 150;
  const handwriterDuration = 1000;
  let animationDelay = duration;

  return (
    <section
      id='home'
      className='flex items-center justify-between'
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
            style={{ animationDelay: `${(animationDelay += 300)}ms` }}
          >
            Hi there,{' '}
          </span>
          <span
            className='animate-glide block heading-xl'
            style={{
              animationDelay: `${(animationDelay += 600)}ms`,
              animationDuration: '300ms',
            }}
          >
            I&#8217;m Natalie.
          </span>
        </h1>
        <p className='text-[22px] md:text-[44px] -mt-2 font-bold flex gap-[1.5%]'>
          <span
            className='animate-fadeIn'
            style={{ animationDelay: `${(animationDelay += 700)}ms` }}
          >
            A
          </span>
          <Typewriter
            text={developerStr}
            speed={typewriterSpeed}
            delay={(animationDelay += interval)}
            className='text-purple font-mono'
          />
          <span
            className='animate-fadeIn'
            style={{
              animationDelay: `${(animationDelay +=
                developerStr.length * typewriterSpeed + 200)}ms`,
              animationDuration: '300ms',
            }}
          >
            and
          </span>
          {/* <Handwriter
            text={designerStr}
            delay={(animationDelay += 200)}
            duration={handwriterDuration}
            color={colors.purple}
            letterSpacing={3}
            fontSize={width > 768 ? 24 : 12}
          /> */}
          <span
            className='animate-fadeIn -ml-4'
            style={{
              animationDelay: `${(animationDelay +=
                handwriterDuration + interval)}ms`,
              animationDuration: '300ms',
            }}
          >
            .
          </span>
        </p>
        <p
          className='text-base md:text-xl max-w-lg animate-glide -mt-2'
          style={{
            animationDelay: `${(animationDelay += 400)}ms`,
          }}
        >
          I&#8217;m all about creating fun, engaging, and user-friendly web and
          mobile experiences.
        </p>
      </div>
      <Game animationDelay={animationDelay + 300} />
    </section>
  );
});

Banner.displayName = 'Banner';

export default Banner;
