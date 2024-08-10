import { colors } from '@/config';
import React, { useEffect, useRef, useState } from 'react';
import Vara from 'vara';

interface HandWriterProps {
  text: string;
  delay?: number;
  duration?: number;
  fontSize?: number;
}

const Handwriter = ({
  text,
  delay = 0,
  duration,
  fontSize,
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
            strokeWidth: 1.5,
            color: colors.purple,
            letterSpacing: 1,
            duration: count > 2 ? 0 : duration,
            delay: count > 2 ? 0 : delay,
            y: 1,
          },
        ]
      );
    }
    setWriting(true);
    setCount((count) => count + 1);
  }, [writing, text, fontSize, delay, duration]);

  return <span id='handwriter' ref={ref}></span>;
};

export default Handwriter;
