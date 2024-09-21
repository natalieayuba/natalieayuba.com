import React from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const Playground = () => {
  const logos = [
    {
      src: '/images/playground/stripped-sets-logo.png',
      alt: 'Stripped Sets logo',
    },
    {
      src: '/images/playground/wys-uea-logo.png',
      alt: "What You Sayin' UEA logo",
    },
    {
      src: '/images/projects/past/past-logo.png',
      alt: 'PAST app logo',
    },
    {
      src: '/images/playground/faux-genie-logo.png',
      alt: 'Faux Genie logo',
    },
    {
      src: '/images/playground/nhs-logo.png',
      alt: 'UEA Natural Hair Society logo',
    },
    {
      src: '/images/playground/kookie-ko-logo.png',
      alt: 'Kookie Ko logo',
    },
  ];

  return (
    <section id='playground' className='pt-28'>
      <SectionHeader
        className='text-center mb-16'
        heading={Playground.displayName!}
        caption="Branding and logo design I've done in my free time."
      />
      <div className='grid grid-cols-2 sm:grid-cols-3'>
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

Playground.displayName = 'Playground';

export default Playground;
