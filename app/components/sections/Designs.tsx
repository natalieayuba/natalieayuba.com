import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import Lightbox from '../Lightbox';
import designs, { type DesignProps } from '@/app/_data/designs';
import useObserver from '@/hooks/useObserver';

const Designs = forwardRef<HTMLHeadingElement>((props, headingRef) => {
  const ref = useRef<HTMLElement>(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    document.body.style.overflow = showLightbox ? 'hidden' : 'auto';
    document.body.style.overscrollBehavior = showLightbox ? 'none' : 'auto';
    document.body.style.touchAction = showLightbox ? 'none' : 'auto';
  }, [showLightbox]);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (showLightbox) {
        e.preventDefault();
      }
    };
    document.addEventListener('touchmove', handleTouchMove);
    return () => document.removeEventListener('touchmove', handleTouchMove);
  });

  const handleClick = (index: number) => {
    setShowLightbox(true);
    setSelectedIndex(index);
  };

  const Design = ({
    design,
    index,
  }: {
    design: DesignProps;
    index: number;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const visible = useObserver(ref, '0px');

    return (
      <div
        ref={ref}
        key={design.src}
        title={design.title}
        className={`w-full flex cursor-pointer transition-all duration-200 animate-fadeIn ${
          design.src.includes('web')
            ? 'aspect-video shadow-sm h-auto hover:scale-110 overflow-hidden rounded-sm items-start my-1'
            : 'h-full hover:scale-[115%] items-center px-[10%]'
        }`}
        style={{
          animationDuration: '500ms',
          animationDelay: `${(index + 1) * 100}ms`,
          animationPlayState: visible ? 'running' : 'paused',
        }}
        onClick={() => handleClick(index)}
      >
        <Image
          alt={design.title}
          src={design.src}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full max-w-64'
        />
      </div>
    );
  };

  return (
    <>
      <section
        id='designs'
        className='container pt-28 xl:pt-0 xl:pb-60 xl:h-screen flex flex-col justify-end'
        ref={ref}
      >
        <SectionHeader
          ref={headingRef}
          className='text-center mb-12'
          heading='Designs'
          caption="Logo and web designs I've done for fun."
        />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
          {designs.map((design, index) => (
            <Design key={design.src} design={design} index={index} />
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
});

Designs.displayName = 'Designs';

export default Designs;
