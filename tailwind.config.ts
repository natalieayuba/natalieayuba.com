import type { Config } from 'tailwindcss';
import { colors } from './config.ts';
import { fontSize } from 'tailwindcss/defaultTheme';

const minViewportWidth = 375;
const maxViewportWidth = 1156;

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    keyframes: {
      pop: {
        from: {
          opacity: '0',
          scale: '0',
        },
      },
      glide: {
        from: {
          opacity: '0',
          transform: 'translateY(-8px)',
        },
      },
      poke: {
        to: {
          scale: '1',
          right: '-64px',
        },
      },
      fadeIn: {
        from: {
          opacity: '0',
        },
      },
    },
    animation: {
      pop: 'pop 200ms ease-in-out backwards',
      glide: 'glide 200ms ease-in backwards',
      poke: 'poke 200ms ease-in-out',
      fadeIn: 'fadeIn 200ms ease-in-out backwards',
      blinker: 'blinker 1.25s linear infinite',
      fall: 'fall ease-in infinite',
    },
    cursor: {
      default: 'url(/images/cursors/default.svg), default',
      text: 'url(/images/cursors/text.svg), text',
      pointer: 'url(/images/cursors/pointer.svg), pointer',
    },
    boxShadow: {
      image: '0px 4px 8px rgba(0,0,0,0.02)',
    },
    fontSize: {
      sm: fontSize.sm,
      base: fontSize.base,
      ...Object.fromEntries(
        Object.entries(fontSize)
          .slice(3, 9)
          .map(([key, [value]]) => {
            const min = Number(value.replace('rem', ''));
            const max = Number(
              Object.values(fontSize)[
                Object.keys(fontSize).findIndex((k) => k === key) + 1
              ][0].replace('rem', '')
            );
            const fluid =
              (100 * (max - min) * 16) / (maxViewportWidth - minViewportWidth);
            const relative =
              (minViewportWidth * max - maxViewportWidth * min) /
              (minViewportWidth - maxViewportWidth);
            const val = `${fluid}vw + ${relative}rem`;
            return [key, `clamp(${min}rem, ${val}, ${max}rem)`];
          })
      ),
    },
  },
  plugins: [],
};

export default config;
