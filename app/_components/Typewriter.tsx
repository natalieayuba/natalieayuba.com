import { IBM_Plex_Mono } from 'next/font/google';
import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Typewriter = ({ text, speed = 150, delay = 0 }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        },
        currentIndex === 0 ? delay : speed
      );

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, delay]);

  return (
    <span
      className={`${ibmPlexMono.className} text-purple leading-[1.7] md:leading-[1.75]`}
    >
      {currentText}
      {currentText && currentIndex < text.length && '|'}
    </span>
  );
};

export default Typewriter;
