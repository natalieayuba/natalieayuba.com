import React, { createRef, useEffect, useState } from 'react';
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
  const ref = createRef<HTMLSpanElement>();
  const id = 'vara-text';

  useEffect(() => {
    if (writing) {
      const vara = new Vara(
        '#vara-container',
        'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json',
        [
          {
            text,
            fontSize,
            strokeWidth,
            delay,
            color,
            duration,
            letterSpacing,
            id,
          },
        ]
      );
      vara.ready(() => {
        const gOuter = (vara.get(id) as any).container;
        const gOuterTranslateY = gOuter.transform.animVal[0].matrix.f;
        gOuter.setAttribute(
          'transform',
          `translate(0, ${gOuterTranslateY + 2})`
        );
        if (ref.current?.firstChild) {
          const svg = ref.current.firstChild as HTMLElement;
          svg.setAttribute('width', gOuter.getBoundingClientRect().width + 10);
        }
      });
    }
    setWriting(true);
  }, [
    writing,
    ref,
    color,
    delay,
    text,
    fontSize,
    strokeWidth,
    duration,
    letterSpacing,
  ]);

  return <span id='vara-container' ref={ref}></span>;
};

export default Handwriter;
