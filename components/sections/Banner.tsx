import { headerHeight } from '@/config';
import { forwardRef } from 'react';

const Banner = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      id='home'
      className='flex items-center'
      style={{ height: `calc(100vh - ${headerHeight})` }}
      ref={ref}
    >
      <div className='-mt-20'>
        <div className='max-w-[600px]'>
          <h1 className='heading-xl flex flex-col'>
            <span className='text-lg md:text-4xl font-semibold'>
              Hi there,{' '}
            </span>
            I&#8217;m Natalie.
          </h1>
          <p className='text-[22px] md:text-[44px] font-bold mb-3'>
            A developer and designer.
          </p>
          <p className='text-base md:text-2xl'>
            I&#8217;m all about creating fun, engaging, and user-friendly web and
            mobile experiences.
          </p>
        </div>
      </div>
    </section>
  );
});

Banner.displayName = 'Banner';

export default Banner;
