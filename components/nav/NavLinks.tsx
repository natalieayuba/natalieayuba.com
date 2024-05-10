'use client';
import { colors, navLinks } from '@/config';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Socials from './Socials';

const NavLinks = () => {
  const [active, setActive] = useState('Home');
  const [lastActive, setLastActive] = useState('');
  const [hovered, setHovered] = useState('');
  const [unHovered, setUnHovered] = useState('');

  const underlines = {
    straight:
      'M6.74023 5.47959C11.8102 5.17959 16.8302 6.01959 21.9002 6.36959C27.7502 6.76959 34.3102 7.02959 39.4602 7.36959C50.7202 8.10959 61.9902 8.89959 73.2602 8.46959',
    lessStraight:
      'M6.2998 12.1508C7.0498 10.9108 15.7698 9.65084 17.3998 9.37084C25.2798 8.00084 32.9498 6.89084 40.7598 5.13084C51.3298 2.75084 62.8298 1.20084 73.6998 2.10084',
    wonky:
      'M1.5 6.46911C11.71 4.98911 26.84 -0.220894 35.68 5.64911C48.82 14.3691 64.98 10.4991 79.57 8.37911',
    veryWonky:
      'M7.3501 9.33977C10.8901 5.20977 19.1201 4.29977 22.2701 4.42977C28.4701 4.66977 36.5701 10.9998 42.3201 12.2098C44.3401 12.5698 49.0601 13.8898 56.3201 13.8598C63.4901 13.1398 69.5601 8.82977 72.6401 1.50977',
  };

  useEffect(() => setLastActive(''), [active]);

  return (
    <div className='hidden md:flex'>
      <ul className={`font-semibold flex gap-10 mr-8`}>
        {navLinks.map(({ url, name, underline }) => (
          <li key={url} className={'relative'}>
            <Link
              href={url}
              className={`transition-all duration-100 ${
                active === name ? 'text-purple' : ''
              }`}
              onClick={() => {
                if (active !== name) {
                  setLastActive(active);
                  setActive(name);
                }
              }}
              onMouseOver={() => {
                if (active !== name) {
                  setHovered(name);
                  setUnHovered('');
                }
              }}
              onMouseOut={() => {
                if (active !== name) {
                  setUnHovered(name);
                  setHovered('');
                }
              }}
            >
              {name}
            </Link>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='80'
              height='14'
              viewBox='0 0 80 14'
              fill='none'
              className='absolute -bottom-5 left-1/2 -translate-x-1/2'
            >
              <path
                d={underlines[underline as keyof typeof underlines]}
                stroke={colors.purple}
                strokeWidth={3}
                strokeLinecap='round'
                strokeDasharray={80}
                strokeDashoffset={80}
                className={
                  active === name || hovered === name
                    ? 'animate-[drawUnderline_200ms_forwards]'
                    : lastActive === name || unHovered === name
                    ? 'animate-[undrawUnderline_200ms_forwards]'
                    : ''
                }
              />
            </svg>
          </li>
        ))}
      </ul>
      <Socials />
    </div>
  );
};

export default NavLinks;
