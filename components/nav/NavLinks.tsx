'use client';
import Socials from './Socials';
import Link from 'next/link';
import { useEffect, useState, type MutableRefObject } from 'react';
import { colors, navLinks, underlines } from '@/config';

const NavLinks = ({
  sectionsRef,
  activeLink
}: {
  sectionsRef?: MutableRefObject<HTMLElement[]>;
  activeLink?: string
}) => {
  const [active, setActive] = useState(activeLink || '');
  const [hovered, setHovered] = useState('');

  useEffect(() => {
    if (sectionsRef !== undefined) {
      const handleScroll = () => {
        const sections = sectionsRef.current;
        let index = sections.length;
        while (--index && window.scrollY + 700 < sections[index].offsetTop) {}
        setActive(navLinks[index].name);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div className='hidden md:flex'>
      <ul className={`font-semibold flex gap-10 mr-8`}>
        {navLinks.map(({ url, name, underline }) => (
          <li key={url} className={'relative'}>
            <Link
              href={url}
              className={`transition-all duration-50 ${
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
                d={underlines[underline as keyof typeof underlines]}
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
