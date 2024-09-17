'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Avatar = () => {
  const avatarFrames = [
    { src: '/images/robo-nat/robo-nat-eyes-open.svg', interval: 80 },
    { src: '/images/robo-nat/robo-nat-eyes-half-open.svg', interval: 30 },
    { src: '/images/robo-nat/robo-nat-eyes-half-closed.svg', interval: 30 },
    { src: '/images/robo-nat/robo-nat-eyes-closed.svg', interval: 60 },
    { src: '/images/robo-nat/robo-nat-eyes-half-closed.svg', interval: 30 },
    { src: '/images/robo-nat/robo-nat-eyes-half-open.svg', interval: 30 },
    { src: '/images/robo-nat/robo-nat-eyes-open.svg', interval: 250 },
    { src: '/images/robo-nat/robo-nat-eyes-half-open.svg', interval: 20 },
    { src: '/images/robo-nat/robo-nat-eyes-half-closed.svg', interval: 20 },
    { src: '/images/robo-nat/robo-nat-eyes-closed.svg', interval: 40 },
    { src: '/images/robo-nat/robo-nat-eyes-half-closed.svg', interval: 20 },
    { src: '/images/robo-nat/robo-nat-eyes-half-open.svg', interval: 20 },
    { src: '/images/robo-nat/robo-nat-eyes-open.svg', interval: 150 },
  ];
  const [animating, setAnimating] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [pokeCount, setPokeCount] = useState(0);
  const [poke, setPoke] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

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
    <Link
      href='/'
      onMouseOver={() => {
        if (!animating) animate();
      }}
      className=' animate-pop'
    >
      <Image
        src='/images/robo-nat/ouch.svg'
        alt='ouch!'
        width={0}
        height={0}
        sizes='100vw'
        className={`absolute cursor-default h-11 w-auto top-6 transition-all duration-200 ${
          poke ? 'scale-1 left-[86px]' : 'scale-0 left-5'
        }`}
      />
      <Image
        src={avatarFrames[frameIndex].src}
        alt='Robo-Nat logo'
        width={0}
        height={0}
        className='h-12 w-auto relative'
      />
    </Link>
  );
};

export default Avatar;
