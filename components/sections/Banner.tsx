import { forwardRef } from 'react';

const Banner = forwardRef<HTMLElement>((props, ref) => (
  <section
    id='home'
    className='h-screen max-h-[700px] flex flex-col justify-center'
    ref={ref}
  >
    <h1 className='heading text-5xl md:text-7xl mb-2'>
      Hi, I&#8217;m Natalie.
    </h1>
    <p className='font-medium text-xl md:text-2xl mb-2'>
      UI/UX designer &bull; Frontend developer &bull; Sims 4 enthusiast
    </p>
    <p className='md:text-lg max-w-md'>
      I&#8217;m all about creating fun, dynamic, and user-centred digital
      experiences.
    </p>
  </section>
));

Banner.displayName = 'Banner';

export default Banner;
