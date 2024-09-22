import React from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const Designs = () => {
  const logos = [
    {
      src: '/designs/stripped-sets-logo.png',
      alt: 'Stripped Sets logo',
    },
    {
      src: '/designs/wys-uea-logo.png',
      alt: "What You Sayin' UEA logo",
    },
    {
      src: '/designs/faux-genie-logo.png',
      alt: 'Faux Genie logo',
    },
    {
      src: '/designs/natural-hair-society-uea-logo.png',
      alt: 'UEA Natural Hair Society logo',
    },
  ];

  return (
    <section id='designs' className='pt-28 scroll-reveal'>
      <SectionHeader
        className='text-center mb-16'
        heading='Designs'
        caption="Other logo and web designs I've done in my free time."
      />
      <div className='grid grid-cols-2 sm:grid-cols-4'>
        {logos.map(({ alt, src }) => (
          <div key={src} className='size-full p-[15%] flex items-center'>
            <Image
              alt={alt}
              src={src}
              width={0}
              height={0}
              className='w-full max-w-64 h-auto'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Designs;
