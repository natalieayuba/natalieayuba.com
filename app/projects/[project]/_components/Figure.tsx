'use client';
import { appendClassName } from '@/utils/formatting';
import Image from 'next/image';
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from 'react';

interface FigureProps {
  caption: string;
  children: React.ReactNode;
}

interface FigureImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface FigureVideoProps {
  src: string;
  poster?: string;
}

export const FigureImage = ({ src, alt, className }: FigureImageProps) => (
  <Image
    key={src}
    src={src}
    alt={alt}
    width={0}
    height={0}
    sizes='100vw'
    className={`rounded-3xl flex-1 h-auto${appendClassName(className)}`}
  />
);

export const MockupVideo = ({ src, poster }: FigureVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (video) {
      const handleScroll = () => {
        const rect = video.getBoundingClientRect();
        setVisible(rect.top < window.innerHeight && rect.bottom > 0);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (video) {
      visible ? video.play() : video.pause();
    }
  }, [visible, ref]);

  return (
    <>
      <div className='absolute z-0 w-[80%] top-[5%] h-[76%] overflow-hidden border-2'>
        <video
          loop
          playsInline
          muted
          ref={ref}
          poster={poster}
          className='scale-125 relative top-10'
        >
          <source src={src} />
        </video>
      </div>
      <FigureImage
        src='/images/projects/desktop-mockup.png'
        alt='Desktop mockup'
        className='z-0'
      />
    </>
  );
};

MockupVideo.displayName = 'MockupVideo';

const Figure = ({ caption, children }: FigureProps) => (
  <figure className='mt-12 mb-4 w-full [&&]:max-w-none relative'>
    <div className='flex justify-center gap-[5%] w-full'>{children}</div>
    <figcaption className='secondary-text mt-12 text-center mx-auto max-w-xl'>
      {caption}
    </figcaption>
  </figure>
);

export default Figure;
