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
      glideDown: {
        from: {
          opacity: '0',
          transform: 'translateY(-20px)',
        },
      },
      glideUp: {
        from: {
          opacity: '0',
          transform: 'translateY(64px)',
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
      glideDown: 'glideDown 500ms ease-out backwards',
      glideUp: 'glideUp 700ms ease-in-out backwards',
      fadeIn: 'fadeIn 1000ms ease-in-out backwards',
    },
    cursor: {
      default: 'url(/cursors/default.svg), default',
      text: 'url(/cursors/text.svg), text',
      pointer: 'url(/cursors/pointer.svg), pointer',
      'zoom-in': 'url(/cursors/zoom-in.svg), zoom-in',
      'zoom-out': 'url(/cursors/zoom-out.svg), zoom-out',
    },
    fontSize: ({ theme }) => {
      const minViewportWidth = 375;
      const maxViewportWidth =
        Number(theme('maxWidth.6xl').replace('rem', '')) * 16;
      const baseLeading = 1.5;

      return {
        sm: fontSize.sm,
        base: fontSize.base,
        ...Object.fromEntries(
          Object.entries(fontSize)
            .slice(3, 9)
            .map(([key, [value]], index) => {
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
              const size = `${fluid}vw + ${relative}rem`;
              const leading = baseLeading - 0.05 * (index + 1);
              return [key, [`clamp(${min}rem, ${size}, ${max}rem)`, leading]];
            })
        ),
      };
    },
    extend: {
      boxShadow: {
        image: '0px 4px 8px rgba(0,0,0,0.02)',
      },
      screens: {
        'min-doodles': '1572px',
      },
    },
  },
};

export default config;
