import React, { useEffect, useRef, useState } from 'react';
import Vara from 'vara';

interface HandWriterProps {
  text: string;
  color?: string;
  delay?: number;
  duration?: number;
  fontSize?: number;
  letterSpacing?: number;
  strokeWidth?: number;
}

const Handwriter = ({
  text,
  color = 'black',
  delay = 0,
  duration = 1000,
  fontSize = 24,
  letterSpacing = 0,
  strokeWidth = 1.5,
}: HandWriterProps) => {
  const [writing, setWriting] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (ref.current && writing) {
      ref.current.innerHTML = '';
      new Vara(
        '#handwriter',
        'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json',
        [
          {
            text,
            fontSize,
            strokeWidth,
            color,
            letterSpacing,
            duration: count > 2 ? 0 : duration,
            delay: count > 2 ? 0 : delay,
            y: fontSize === 24 ? 4 : 1.5,
          },
        ]
      );
    }
    setWriting(true);
    setCount((count) => count + 1);
  }, [
    writing,
    text,
    fontSize,
    strokeWidth,
    delay,
    duration,
    color,
    letterSpacing,
  ]);

  return (
    <span
      id='handwriter'
      ref={ref}
      className={`relative overflow-hidden ${
        fontSize === 24 ? 'w-[184px]' : 'w-[110px]'
      }`}
    ></span>
  );
};

export default Handwriter;
