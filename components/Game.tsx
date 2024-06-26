import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { Silkscreen } from 'next/font/google';
import Icon from './Icon';
import Image from 'next/image';
import { images, audio } from '@/config';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  fallback: ['system-ui', 'arial'],
});

interface BoundingBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

const Game = ({ animationDelay }: { animationDelay: number }) => {
  const [playing, setPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [muted, setMuted] = useState(false);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const avatarRef = useRef<HTMLImageElement>(null);
  const [avatarBox, setAvatarBox] = useState<BoundingBox>();
  const gameRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(100);
  const animationDuration = 500;
  const coins = [
    [100, 200],
    [100, 100],
    [300, 300],
    [300, 200],
  ];
  const coinSize = 12;
  const gameSize = 450;
  const [currentCoin, setCurrentCoin] = useState(coins[0]);

  // setTimeout(() => setLoading(false), animationDuration + animationDelay);

  const restart = () => {
    setCurrentCoin(coins[0]);
    setScore(0);
    if (avatarRef.current) {
      avatarRef.current.style.left = '50%';
      avatarRef.current.style.top = '50%';
    }
  };

  const Coin = (x: number, y: number) => (
    <div
      className='absolute bg-purple rounded-full'
      style={{ left: x, top: y, width: coinSize, height: coinSize }}
    ></div>
  );

  const avatar = () => (
    <div
      ref={avatarRef}
      className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-8`}
      style={{ top: '50%', left: '50%' }}
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

  const handleMouseMove = (event: MouseEvent) => {
    if (gameRef.current && avatarRef.current) {
      const gameRect = gameRef.current.getBoundingClientRect();
      const avatarRect = avatarRef.current.getBoundingClientRect();

      const xPosInGame = event.clientX - gameRect.x;
      const yPosInGame = event.clientY - gameRect.y;

      avatarRef.current.style.left = `${xPosInGame}px`;
      avatarRef.current.style.top = `${yPosInGame}px`;

      setAvatarBox({
        minX: avatarRect.x - gameRect.x,
        minY: avatarRect.y - gameRect.y,
        maxX: avatarRect.x - gameRect.x + avatarRect.width,
        maxY: avatarRect.y - gameRect.y + avatarRect.height,
      });
    }
  };

  useEffect(() => {
    // if (!loading && !playing && !won && !lost) {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        setPlaying(true);
      }
    };

    window.addEventListener('keydown', handleEnter);

    return () => window.removeEventListener('keydown', handleEnter);
    // }
    // }, [loading, playing, won, lost]);
  }, []);

  useEffect(() => {
    const playSound = (src: string) => {
      if (!muted) {
        new Audio(src).play();
      }
    };

    const areOverlapping = (box1: BoundingBox, box2: BoundingBox) =>
      box1.maxX >= box2.minX &&
      box2.maxX >= box1.minX &&
      box1.maxY >= box2.minY &&
      box2.maxY >= box1.minY;

    const nextCoinIndex =
      coins.findIndex(
        (coin) => coin[0] === currentCoin[0] && coin[1] === currentCoin[1]
      ) + 1;

    if (nextCoinIndex >= coins.length) {
      setWon(true);
      // play victory sound!
      // show restart menu!
    } else {
      const coinPos = {
        minX: currentCoin[0],
        minY: currentCoin[1],
        maxX: currentCoin[0] + coinSize,
        maxY: currentCoin[1] + coinSize,
      };

      // console.log(avatarBox);

      console.log(avatarBox);

      if (avatarBox && areOverlapping(coinPos, avatarBox)) {
        setCurrentCoin(coins[nextCoinIndex]);
        setScore((prevScore) => prevScore + 100);
        playSound(audio.coin);
      }
    }
  }, [avatarRef.current, coins, currentCoin, muted]);

  // useEffect(() => {
  //   setTailLengthClass(`after:h-[${tailLength}px]`);
  // }, [tailLength]);

  return (
    <div
      className={`animate-fadeIn border-2 border-black-alpha-90 bg-white bg-opacity-50 font-bold cursor-none ${silkscreen.className}`}
      ref={gameRef}
      style={{
        width: gameSize,
        height: gameSize,
        //   animationDuration: `${animationDuration}ms`,
        //   animationDelay: `${animationDelay}ms`,
      }}
      onMouseMove={handleMouseMove}
    >
      {playing ? (
        <div className='relative w-full h-full overflow-hidden'>
          {Coin(currentCoin[0], currentCoin[1])}
          {avatar()}
          <header className='absolute flex justify-between w-full z-[2] p-3 pb-0'>
            <p>Score: {score}</p>
            <button
              className='text-2xl game-button-hover'
              onClick={() => setMuted(!muted)}
            >
              <Icon name={muted ? 'mute' : 'volume'} />
            </button>
          </header>
          <footer className='absolute flex justify-between w-full bottom-0 z-[2] p-3 pt-0'>
            <button className='text-2xl game-button-hover' onClick={restart}>
              <Icon name='resize' />
            </button>
            <button
              onClick={() => {
                setPlaying(false);
                restart();
              }}
              className='game-button-hover'
            >
              Exit game
            </button>
          </footer>
        </div>
      ) : (
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <h2 className='text-4xl mb-4'>The Snake Game</h2>
          <p className={`animate-blinker text-lg`}>Press Enter to play...</p>
        </div>
      )}
    </div>
  );
};

export default Game;
