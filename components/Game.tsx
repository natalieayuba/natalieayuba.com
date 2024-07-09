import React, { useState, useRef, MouseEvent } from 'react';
import { Silkscreen } from 'next/font/google';
import Icon from './Icon';
import { audio } from '@/config';
import Avatar from './game/Avatar';
import Coin from './game/Coin';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  fallback: ['system-ui', 'arial'],
});

const Game = ({ animationDelay }: { animationDelay: number }) => {
  const [playing, setPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [muted, setMuted] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const defaultSpeed = 3000;
  const [speed, setSpeed] = useState(defaultSpeed);
  const avatarRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const animationDuration = 500;
  const gameSize = 450;

  // setTimeout(() => setLoading(false), animationDuration + animationDelay);

  const reset = () => {
    setScore(0);
    setSpeed(defaultSpeed);
    setGameOver(false);
    if (avatarRef.current) {
      avatarRef.current.style.left = '50%';
      avatarRef.current.style.top = '75%';
    }
  };

  const exitGame = () => {
    reset();
    setPlaying(false);
  };

  const getRandomXCoordinate = (): number => {
    const min = 20;
    const max = gameSize - 20;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  if (coinRef.current) {
    coinRef.current.style.left = `${getRandomXCoordinate()}px`;
  }

  const handleMouseMove = (event: MouseEvent) => {
    const gameRect = avatarRef.current?.parentElement?.getBoundingClientRect();
    if (avatarRef.current && gameRect) {
      avatarRef.current.style.left = `${event.clientX - gameRect.x}px`;
    }
  };

  const handleClick = (event: MouseEvent) => {
    setPlaying(true);
  };

  setInterval(() => {
    const gameRect = avatarRef.current?.parentElement?.getBoundingClientRect();
    const avatarRect = avatarRef.current?.getBoundingClientRect();
    const coinRect = coinRef.current?.getBoundingClientRect();

    const playSound = (src: string) => {
      if (!muted) {
        new Audio(src).play();
      }
    };

    if (avatarRect && coinRect && gameRect) {
      const coinFalls = coinRect.y - gameRect.y >= gameSize - coinRect.width;

      const collisionDetected =
        avatarRect.x + avatarRect.width >= coinRect.x &&
        coinRect.x + coinRect.width >= avatarRect.x &&
        avatarRect.y + avatarRect.height >= coinRect.y &&
        coinRect.y + coinRect.height >= avatarRect.y;

      if (collisionDetected && coinRef.current) {
        setSpeed((prevSpeed) => prevSpeed - 100);
        setScore((prevScore) => prevScore + 100);
        playSound(audio.coin);
        coinRef.current.classList.remove('animate-fall');
        coinRef.current.style.left = `${getRandomXCoordinate()}px`;
        setTimeout(() => coinRef.current?.classList.add('animate-fall'), 500);
      }

      if (coinFalls) {
        setGameOver(true);
        playSound(audio.gameOver);
      }
    }
  }, 10);

  return (
    <div
      className={`animate-fadeIn border-2 border-black-alpha-90 bg-white bg-opacity-50 font-bold text-center ${silkscreen.className}`}
      style={{
        width: gameSize,
        height: gameSize,
        //   animationDuration: `${animationDuration}ms`,
        //   animationDelay: `${animationDelay}ms`,
      }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      {!playing ? (
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <h2 className='text-4xl mb-4'>The Snake Game</h2>
          <p className={`animate-blinker text-lg`}>Click to play...</p>
        </div>
      ) : gameOver ? (
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <h2 className='text-4xl mb-4'>Game over :(</h2>
          <p className='text-xl'>Play again?</p>
          <div className='flex gap-5 mt-2'>
            {[
              {
                text: 'Yes',
                onClick: reset(),
              },
              {
                text: 'No',
                onClick: exitGame(),
              },
            ].map(({ text, onClick }) => (
              <button
                key={text}
                className={`relative hover:before:content-['▸'] before:absolute before:-left-3`}
                onClick={() => onClick}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className='relative w-full h-full overflow-hidden'>
          <Coin ref={coinRef} speed={speed} />
          <Avatar ref={avatarRef} />
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
            <button className='text-2xl game-button-hover' onClick={reset}>
              <Icon name='resize' />
            </button>
            <button onClick={exitGame} className='game-button-hover'>
              Exit game
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Game;
