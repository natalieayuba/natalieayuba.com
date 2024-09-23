import React, { type ReactNode } from 'react';
import Image from 'next/image';
import Icon from '@/app/components/Icon';

interface LightboxProps {
  content: {
    title: string;
    description: ReactNode;
    src: string;
  }[];
  index: number;
  setSlide: (index: number) => void;
  close: () => void;
}

const Lightbox = ({ content, index, setSlide, close }: LightboxProps) => {
  const { title, description, src } = content[index];

  const CloseButton = () => (
    <button
      className='absolute top-0 right-0 p-6 hover:scale-110'
      title='Close'
      onClick={close}
    >
      <Icon name='close' />
    </button>
  );

  const ArrowButton = ({ direction }: { direction: 'prev' | 'next' }) => {
    const visible =
      (direction === 'prev' && index > 0) ||
      (direction === 'next' && index < content.length - 1);

    return (
      <button
        className={`transition-all duration-150 opacity-60 hover:opacity-100 hover:scale-110 h-fit ${
          visible ? 'visible' : 'invisible'
        }`}
        onClick={() => setSlide(direction === 'prev' ? index - 1 : index + 1)}
      >
        <Icon name={direction} size={40} />
      </button>
    );
  };

  return (
    <div className='bg-gradient-to-b fixed h-screen w-screen left-0 z-10 flex items-center'>
      <CloseButton />
      <div className='mx-auto flex relative items-center'>
        <ArrowButton direction='prev' />
        <div className='container flex items-center gap-20'>
          <div
            className={`relative w-[56%] ${
              src.includes('web') ? 'hover:cursor-zoom-in' : ''
            }`}
          >
            <Image
              alt={title}
              src={src}
              width={0}
              height={0}
              className='mx-auto w-auto max-h-[90vh]'
            />
          </div>
          <div className='flex-1'>
            <h3 className='heading-sm'>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <ArrowButton direction='next' />
      </div>
    </div>
  );
};

export default Lightbox;
