'use client';
import { avatarFrames } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Avatar = () => {
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [src, setSrc] = useState(avatarFrames[0].src);
  const [pokeCount, setPokeCount] = useState(0);
  const [poke, setPoke] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (hovered) {
      const animate = async () => {
        setAnimate(true);

        if (pokeCount === 3) {
          setPoke(true);
          setTimeout(() => setPoke(false), 3000);
          setPokeCount(0);
        } else {
          setPokeCount((p) => p + 1);
        }

        if (pokeCount === 0) {
          setTimeout(() => setPokeCount(0), 5000);
        }

        for (const frame of avatarFrames) {
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
      className='relative animate-pop'
    >
      <div
        className={`absolute cursor-default top-2  w-16 h-10 transition-all duration-200 ${
          poke ? 'scale-1 -right-16' : 'scale-0 -right-0'
        }`}
      >
        <Image src='/images/robo-nat/ouch.svg' alt='ouch!' fill />
      </div>
      <Image
        src={src}
        alt='Robo-Nat logo'
        width={0}
        height={0}
        className='h-12 w-auto relative'
      />
    </Link>
  );
};

export default Avatar;
