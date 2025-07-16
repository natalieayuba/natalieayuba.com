'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const avatarFrames = [
  { src: '/avatar/avatar-eyes-open.svg', interval: 80 },
  { src: '/avatar/avatar-eyes-half-open.svg', interval: 30 },
  { src: '/avatar/avatar-eyes-half-closed.svg', interval: 30 },
  { src: '/avatar/avatar-eyes-closed.svg', interval: 60 },
  { src: '/avatar/avatar-eyes-half-closed.svg', interval: 30 },
  { src: '/avatar/avatar-eyes-half-open.svg', interval: 30 },
  { src: '/avatar/avatar-eyes-open.svg', interval: 250 },
  { src: '/avatar/avatar-eyes-half-open.svg', interval: 20 },
  { src: '/avatar/avatar-eyes-half-closed.svg', interval: 20 },
  { src: '/avatar/avatar-eyes-closed.svg', interval: 40 },
  { src: '/avatar/avatar-eyes-half-closed.svg', interval: 20 },
  { src: '/avatar/avatar-eyes-half-open.svg', interval: 20 },
  { src: '/avatar/avatar-eyes-open.svg', interval: 150 },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Avatar = () => {
  const [animating, setAnimating] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [pokeCount, setPokeCount] = useState(0);
  const [poke, setPoke] = useState(false);

  const animate = async () => {
    setAnimating(true);
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
    for (let i = 0; i < avatarFrames.length; i++) {
      setFrameIndex(i);
      await delay(avatarFrames[i].interval);
    }
    setAnimating(false);
  };

  return (
    <div className='flex-1 flex items-start'>
      <Link
        href='/'
        onMouseOver={() => {
          if (!animating) {
            animate();
          }
        }}
      >
        <Image
          src='/avatar/ouch.svg'
          alt='ouch!'
          width={0}
          height={0}
          sizes='100vw'
          className={`absolute cursor-default h-11 w-auto top-6 transition-[transform,left] duration-200 ${
            poke ? 'scale-1 left-[86px]' : 'scale-0 left-5'
          }`}
        />
        <Image
          src={avatarFrames[frameIndex].src}
          alt='Robo-Nat logo'
          width={0}
          height={0}
          className='h-12 w-auto relative animate-pop'
          priority
        />
      </Link>
    </div>
  );
};

export default Avatar;
