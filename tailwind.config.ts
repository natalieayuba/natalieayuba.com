import type { Config } from 'tailwindcss';
import { colors } from './config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      blue: colors.blue,
      purple: colors.purple,
      white: '#fff',
    },
    extend: {
      keyframes: {
        drawUnderline: {
          '0%': { 'stroke-dashoffset': '80' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        undrawUnderline: {
          '0%': { 'stroke-dashoffset': '0' },
          '100%': { 'stroke-dashoffset': '80' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
