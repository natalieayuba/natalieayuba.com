import Image from 'next/image';
import React from 'react';

const ScrollDownButton = ({ animationDelay }: { animationDelay: number }) => {
  return (
    <a
      href='#about'
      className='scroll-button absolute bottom-20 left-1/2 -translate-x-1/2 animate-fadeIn'
      title='Scroll down'
      style={{
        animationDuration: '300ms',
        animationDelay: `${animationDelay}ms`,
      }}
    >
      <Image
        src='/images/scroll-down.svg'
        alt='Scroll down'
        width={48}
        height={48}
      />
    </a>
  );
};

export default ScrollDownButton;
