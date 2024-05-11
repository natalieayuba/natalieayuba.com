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
      white: colors.white,
      'purple-alpha-60': colors['purple-alpha-60'],
      'black-alpha-90': colors['black-alpha-90'],
      'black-alpha-60': colors['black-alpha-60'],
    },
  },
  plugins: [],
};
export default config;
