import Image from 'next/image';
import React from 'react';

const Figure = ({
  images,
  caption,
  type,
}: Readonly<{
  images: string[];
  caption: string;
  type: string;
}>) => {
  return (
    <div className='py-16 flex flex-col items-center w-full'>
      <div className='flex-1 flex gap-10 w-full justify-center'>
        {images.map((image, index) => (
          <div key={image} className='flex-1 max-w-[285px] max-h-[600px]'>
            <Image
              src={image}
              alt={`Past wireframe ${index + 1}`}
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto rounded-3xl shadow-[0px_4px_24px_rgba(0,0,0,0.02)]'
              priority
            />
          </div>
        ))}
      </div>
      <caption className='text-sm text-black-alpha-60 mt-8'>{caption}</caption>
    </div>
  );
};

export default Figure;
