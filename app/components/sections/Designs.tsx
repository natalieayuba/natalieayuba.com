import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import Lightbox from '../Lightbox';
import designs from '@/app/_data/designs';

const Designs = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    document.body.style.overflow = showLightbox ? 'hidden' : 'auto';
    document.body.style.overscrollBehavior = showLightbox ? 'none' : 'auto';
    document.body.style.touchAction = showLightbox ? 'none' : 'auto';

    showLightbox
      ? document.addEventListener('touchmove', (e) => e.preventDefault())
      : document.addEventListener('touchmove', (e) => e.preventDefault());
  }, [showLightbox]);

  const handleClick = (index: number) => {
    setShowLightbox(true);
    setSelectedIndex(index);
  };

  return (
    <>
      <section id='designs' className='container pt-28 scroll-reveal'>
        <SectionHeader
          className='text-center mb-12'
          heading='Designs'
          caption="Other logo and web designs I've done in my free time."
        />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
          {designs.map(({ src, title }, index) => (
            <div
              key={src}
              title={title}
              className={`w-full flex cursor-pointer transition-all duration-200 ${
                src.includes('web')
                  ? 'aspect-video shadow-sm h-auto hover:scale-110 overflow-hidden rounded-sm items-start my-1'
                  : 'h-full hover:scale-[115%] items-center px-[10%]'
              }`}
              onClick={() => handleClick(index)}
            >
              <Image
                alt={title}
                src={src}
                width={0}
                height={0}
                className='w-full max-w-64'
              />
            </div>
          ))}
        </div>
      </section>
      {showLightbox && (
        <Lightbox
          content={Object.values(designs)}
          selectedIndex={selectedIndex}
          setSlide={setSelectedIndex}
          close={() => setShowLightbox(false)}
        />
      )}
    </>
  );
};

export default Designs;
