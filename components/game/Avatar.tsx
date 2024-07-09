import React, { forwardRef } from 'react';
import Image from 'next/image';
import { images } from '@/config';

const Avatar = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-8`}
      style={{ top: '75%', left: '50%' }}
    >
      <Image src='images/robo-nat/robo-nat-eyes-open.svg' alt='Robo-Nat' fill />
      <div className='relative h-full w-full'>
        <Image
          src={images.wings}
          alt='wings'
          className='w-32 h-auto absolute -translate-x-1/2 -translate-y-1/2 -z-10'
          style={{
            maxWidth: 'inherit',
            top: 'calc(50% - 6px)',
            left: 'calc(50% + 4px)',
          }}
          width={0}
          height={0}
          sizes='100vw'
        />
      </div>
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
