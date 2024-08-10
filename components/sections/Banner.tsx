import { headerHeight } from '@/config';
import { duration } from '@/utils/navlinkAnimation';
import { forwardRef, useEffect, useState } from 'react';
import Typewriter from '../Typewriter';
import Handwriter from '../Handwriter';
import useWindowWidth from '@/hooks/useWindowWidth';
import ScrollDownButton from '../ScrollDownButton';

const Banner = forwardRef<HTMLElement>((props, ref) => {
  const { width } = useWindowWidth();
  const developerStr = 'developer';
  const designerStr = 'designer';
  const typewriterSpeed = 150;
  const handwriterDuration = 1000;
  const [fontSize, setFontSize] = useState(0);
  let animationDelay = duration;

  useEffect(() => (width > 768 ? setFontSize(28) : setFontSize(14)), [width]);

  return (
    <section
      id='home'
      className='flex flex-col justify-center items-start'
      style={{ minHeight: `calc(100svh - ${headerHeight}px)` }}
      ref={ref}
    >
      <div className='pb-20'>
        <h1 className=''>
          <span
            className='heading text-md md:text-2xl font-semibold animate-glide block ml-[1px]'
            style={{ animationDelay: `${(animationDelay += 300)}ms` }}
          >
            Hi there,{' '}
          </span>
          <span
            className='animate-glide block heading-xl'
            style={{
              animationDelay: `${(animationDelay += 700)}ms`,
              animationDuration: '300ms',
            }}
          >
            I&#8217;m Natalie.
          </span>
        </h1>
        <p className='heading text-2xl leading-[1.75] md:text-5xl flex gap-2 relative'>
          <span
            className='animate-fadeIn'
            style={{ animationDelay: `${(animationDelay += 900)}ms` }}
          >
            A
          </span>
          <Typewriter
            text={developerStr}
            speed={typewriterSpeed}
            delay={(animationDelay += 300)}
          />
          <span
            className='animate-fadeIn'
            style={{
              animationDelay: `${(animationDelay +=
                (developerStr.length + 1) * typewriterSpeed)}ms`,
              animationDuration: '300ms',
            }}
          >
            and
          </span>
          <Handwriter
            text={designerStr}
            delay={(animationDelay += 400)}
            duration={handwriterDuration}
            fontSize={fontSize}
          />
          <span
            className={`animate-fadeIn absolute ${
              fontSize === 24 ? 'right-5' : 'left-[310px]'
            }`}
            style={{
              animationDelay: `${(animationDelay +=
                handwriterDuration + 200)}ms`,
              animationDuration: '500ms',
            }}
          >
            .
          </span>
        </p>
        <p
          className='md:text-xl max-w-sm md:max-w-lg animate-glide -mt-2'
          style={{
            animationDelay: `${(animationDelay += 600)}ms`,
            animationDuration: '300ms',
          }}
        >
          I enjoy creating fun, engaging, and user-friendly digital experiences.
        </p>
      </div>
      <ScrollDownButton animationDelay={(animationDelay += 3000)} />
    </section>
  );
});

Banner.displayName = 'Banner';

export default Banner;
