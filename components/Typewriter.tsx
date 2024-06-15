import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}
const Typewriter = ({
  text,
  speed = 150,
  delay = 0,
  className,
}: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delayed, setDelayed] = useState(true);
  setTimeout(() => setDelayed(false), delay);

  useEffect(() => {
    if (!delayed && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, delay, delayed]);

  return (
    <span className={className}>
      {currentText}
      {currentText && currentIndex < text.length && '|'}
    </span>
  );
};

export default Typewriter;
