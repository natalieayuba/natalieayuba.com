import Image from 'next/image';
import React from 'react';

interface FigureProps {
  images: { image: string; width?: string; height?: string }[];
  caption: string;
  type?: string;
}

const Figure = ({ images, caption, type }: FigureProps) => {
  return (
    <figure className='py-16 flex flex-col items-center w-full'>
      <div
        className={`flex-1 flex w-full justify-center ${
          type === 'mobile' ? 'gap-4 md:gap-10' : 'gap-x-32 gap-y-6 flex-wrap'
        }`}
      >
        {images.map(({ image, width, height }, index) => (
          <div
            key={image}
            className={
              type === 'mobile' ? 'flex-1 max-w-[285px] max-h-[600px]' : ''
            }
          >
            <Image
              src={image}
              alt={`Past wireframe ${index + 1}`}
              width={0}
              height={0}
              sizes='100vw'
              className={
                type === 'mobile'
                  ? 'w-full h-auto rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.02)]'
                  : `${width ?? 'w-auto'} ${height ?? 'h-auto'}`
              }
              priority
            />
          </div>
        ))}
      </div>
      <figcaption className='text-sm text-black-alpha-60 dark:text-white-alpha-60 mt-10'>
        {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
