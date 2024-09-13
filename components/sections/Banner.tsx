import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

const Banner = forwardRef<HTMLElement>((props, ref) => (
  <section
    id='home'
    className='h-screen pt-24 max-h-[700px] flex items-center relative flex-wrap'
    ref={ref}
  >
    <div>
      <h1 className='font-semibold text-xl pl-2 mb-3'>
        Hi, I&#8217;m Natalie :)
      </h1>
      <p className='font-bold text-5xl mb-2 [&&]:leading-[120%]'>
        A Frontend Developer <br /> & UI/UX Designer.
      </p>
      <p className='text-2xl max-w-md mt-3 leading-snug'>
        I create fun, dynamic, and user-centred digital experiences.
      </p>
    </div>
    <div className='flex-1 h-80 w-auto relative left-20'>
      <Image
        src='images/headfirst-preview.png'
        alt='Headirst Bristol sneak peak mockup'
        fill
        className='object-contain absolute'
      />
      <Image
        src='images/big-sparkle.svg'
        alt='Big sparkle'
        width={0}
        height={0}
        className='w-10 h-auto absolute right-16 -top-8'
      />
      <Image
        src='images/little-sparkle.svg'
        alt='Little sparkle'
        width={0}
        height={0}
        className='w-5 h-auto absolute right-24 -top-12'
      />

      <div
        title="A sneak peak of what I'm currently working on"
        className='absolute -right-32'
      >
        <Image
          src='images/sneak-peak.svg'
          alt="A sneak peak of what I'm currently working on"
          width={0}
          height={0}
          className='h-28 w-auto'
        />
      </div>
      <Link
        href='#projects'
        className=' absolute -right-20 top-28 group'
        title='Check out my other projects below'
      >
        <Image
          src='images/other-projects.svg'
          alt='Check out my other projects below'
          width={0}
          height={0}
          className='h-20 w-auto'
        />
        <Image
          src='images/arrow.svg'
          alt='Down arrow'
          width={0}
          height={0}
          className='h-20 w-auto ml-24 group-hover:mt-1'
        />
      </Link>
    </div>
  </section>
));

Banner.displayName = 'Banner';

export default Banner;
