import { appendClassName } from '@/utils/formatting';
import Image from 'next/image';
import React from 'react';

interface FigureProps {
  caption: string;
  children: React.ReactNode;
}

interface FigureImageProps {
  src: string;
  alt: string;
  className?: string;
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

const Figure = ({ caption, children }: FigureProps) => (
  <figure className='mt-12 mb-4 w-full [&&]:max-w-none relative'>
    <div className='flex justify-center gap-[5%] w-full'>{children}</div>
    <figcaption className='secondary-text mt-12 text-center mx-auto max-w-xl'>
      {caption}
    </figcaption>
  </figure>
);

export default Figure;
