'use client';
import config from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Avatar = () => {
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [src, setSrc] = useState(config.avatarFrames[0].src);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (hovered) {
      const animate = async () => {
        setAnimate(true);
        for (const frame of config.avatarFrames) {
          setSrc(frame.src);
          await delay(frame.interval);
        }
        setAnimate(false);
      };

      animate();
    }
  }, [hovered]);

  return (
    <Link
      href='/'
      onMouseOver={() => {
        if (!animate) setHovered(true);
      }}
      onMouseOut={() => setHovered(false)}
    >
      <Image
        src={src}
        alt='Robo-Nat logo'
        width={0}
        height={0}
        className='h-12 w-auto'
      />
    </Link>
  );
};

export default Avatar;
