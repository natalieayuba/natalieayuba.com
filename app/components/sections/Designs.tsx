import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import Lightbox from '../Lightbox';
import designs from '@/data/designs';

const Designs = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    document.body.style.overflow = showLightbox ? 'hidden' : 'auto';
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
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-4'>
          {designs.map(({ src, title }, index) => (
            <div
              key={src}
              title={title}
              className={`w-full flex cursor-pointer hover:scale-[115%] transition-all duration-200 ${
                src.includes('web')
                  ? 'aspect-video shadow-sm h-auto overflow-hidden rounded-sm items-start'
                  : 'h-full items-center p-[10%]'
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
          index={selectedIndex}
          setSlide={setSelectedIndex}
          close={() => setShowLightbox(false)}
        />
      )}
    </>
  );
};

export default Designs;
