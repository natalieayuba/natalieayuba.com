'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Avatar = () => {
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [src, setSrc] = useState('/robo-nat-eyes-open.svg');

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (hovered) {
      const frames = [
        { src: '/robo-nat-eyes-open.svg', interval: 150 },
        { src: '/robo-nat-eyes-half-open.svg', interval: 30 },
        { src: '/robo-nat-eyes-half-closed.svg', interval: 30 },
        { src: '/robo-nat-eyes-closed.svg', interval: 60 },
        { src: '/robo-nat-eyes-half-closed.svg', interval: 30 },
        { src: '/robo-nat-eyes-half-open.svg', interval: 30 },
        { src: '/robo-nat-eyes-open.svg', interval: 400 },
        { src: '/robo-nat-eyes-half-open.svg', interval: 20 },
        { src: '/robo-nat-eyes-half-closed.svg', interval: 20 },
        { src: '/robo-nat-eyes-closed.svg', interval: 40 },
        { src: '/robo-nat-eyes-half-closed.svg', interval: 20 },
        { src: '/robo-nat-eyes-half-open.svg', interval: 20 },
        { src: '/robo-nat-eyes-open.svg', interval: 150 },
      ];

      const animate = async () => {
        setAnimate(true);
        for (const frame of frames) {
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
      onMouseEnter={() => {
        if (!animate) {
          setHovered(true);
        }
      }}
      onMouseLeave={() => setHovered(false)}
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
