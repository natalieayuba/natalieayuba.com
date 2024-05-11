'use client';
import config, { colors, navLinks } from '@/config';
import Link from 'next/link';
import { useState } from 'react';
import Socials from './Socials';

const NavLinks = () => {
  const [active, setActive] = useState(location.pathname === '/' ? 'Home' : '');
  const [hovered, setHovered] = useState('');

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
                if (active !== name) setActive(name);
              }}
              onMouseOver={() => {
                if (active !== name) setHovered(name);
              }}
              onMouseOut={() => {
                if (active !== name) setHovered('');
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
              className='absolute -bottom-3 left-1/2 -translate-x-1/2'
            >
              <path
                d={
                  config.underlines[underline as keyof typeof config.underlines]
                }
                stroke={colors.purple}
                strokeWidth={3}
                strokeLinecap='round'
                strokeDasharray={80}
                strokeDashoffset={active === name || hovered === name ? 0 : 80}
                className='transition-all duration-150'
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
