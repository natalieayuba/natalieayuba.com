import type { Config } from 'tailwindcss';
import { colors } from './config.ts';
import { fontSize } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
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
          transform: 'translateY(-20px)',
        },
      },
      poke: {
        to: {
          scale: '1',
          right: '-64px',
        },
      },
    },
    animation: {
      pop: 'pop 200ms ease-in-out backwards',
      glide: 'glide 500ms ease-out backwards',
      poke: 'poke 200ms ease-in-out',
    },
    cursor: {
      default: 'url(/images/cursors/default.svg), default',
      text: 'url(/images/cursors/text.svg), text',
      pointer: 'url(/images/cursors/pointer.svg), pointer',
    },
    fontSize: ({ theme }) => {
      const minViewportWidth = 375;
      const maxViewportWidth =
        Number(theme('maxWidth.6xl').replace('rem', '')) * 16;

      return {
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
                (100 * (max - min) * 16) /
                (maxViewportWidth - minViewportWidth);
              const relative =
                (minViewportWidth * max - maxViewportWidth * min) /
                (minViewportWidth - maxViewportWidth);
              const val = `${fluid}vw + ${relative}rem`;
              return [key, `clamp(${min}rem, ${val}, ${max}rem)`];
            })
        ),
      };
    },
    extend: {
      boxShadow: {
        image: '0px 4px 8px rgba(0,0,0,0.02)',
      },
    },
  },
  plugins: [],
};

export default config;
