import React, { forwardRef } from 'react';
import SectionLayout from './SectionLayout';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const Playground = forwardRef<HTMLElement>((props, ref) => {
  const logos = [
    {
      src: 'images/stripped-sets-logo.png',
      alt: 'Stripped Sets logo',
    },
    {
      src: 'images/wys-uea-logo.png',
      alt: "What You Sayin' UEA logo",
    },
    {
      src: 'images/past/past-logo.png',
      alt: 'PAST app logo',
    },
    {
      src: 'images/faux-genie-logo.png',
      alt: 'Faux Genie logo',
    },
    {
      src: 'images/nhs-logo.png',
      alt: 'UEA Natural Hair Society logo',
    },
    {
      src: 'images/kookie-ko-logo.png',
      alt: 'Kookie Ko logo',
    },
  ];

  return (
    <SectionLayout el={Playground} ref={ref}>
      <SectionHeader
        className='text-center mb-16'
        heading={Playground.displayName!}
        caption="Branding and logo design I've done in my free time."
      />
      <div className='grid grid-cols-2 gap-12'>
        {logos.map(({ alt, src }) => (
          <div
            key={src}
            className='relative min-h-20 w-auto hover:scale-[115%] transition-all duration-200'
          >
            <Image alt={alt} src={src} fill className='object-contain' />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
});

Playground.displayName = 'Playground';

export default Playground;
