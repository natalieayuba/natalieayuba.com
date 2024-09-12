import React, { forwardRef } from 'react';
import SectionLayout from './SectionLayout';
import Image from 'next/image';

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
    <SectionLayout name={Playground.displayName} heading='Playground' ref={ref}>
      <div className='mt-12 grid grid-cols-3 gap-24'>
        {logos.map(({ alt, src }) => (
          <div
            key={src}
            className='relative h-40 hover:scale-[115%] transition-all duration-200'
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
