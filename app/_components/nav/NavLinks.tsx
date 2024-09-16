'use client';
import Socials from './Socials';
import Link from 'next/link';
import { useEffect, useState, type MutableRefObject } from 'react';
import { colors, navLinks, underlines } from '@/config';
import { interval } from '@/utils/navlinkAnimation';
export interface NavLinksProps {
  sectionsRef?: MutableRefObject<HTMLElement[]>;
  activeLink?: string;
}

const NavLinks = ({ sectionsRef, activeLink }: NavLinksProps) => {
  const [active, setActive] = useState(activeLink || '');
  const [hovered, setHovered] = useState('');
  let animationDelay = 0;

  useEffect(() => {
    if (sectionsRef) {
      const handleScroll = () => {
        sectionsRef.current.forEach((section, index) => {
          if (section !== null && section.getBoundingClientRect().top < 500) {
            setActive(navLinks[index]);
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div className='hidden md:flex'>
      <ul className={`font-semibold flex mr-8`}>
        {navLinks.map((navLink, index) => {
          return (
            <li
              key={navLink}
              className={'relative animate-pop'}
              style={{
                animationDelay: `${(animationDelay += interval)}ms`,
              }}
            >
              <Link
                href={`/#${navLink.toLowerCase()}`}
                className={`p-4 transition-all duration-50 z-[1] relative ${
                  active === navLink ? 'text-purple' : ''
                }`}
                onMouseOver={() => setHovered(navLink)}
                onMouseOut={() => setHovered('')}
                onClick={() => setActive(navLink)}
              >
                {navLink}
              </Link>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='82'
                height='14'
                viewBox='0 0 82 16'
                fill='none'
                className='absolute -bottom-3 left-1/2 -translate-x-1/2'
              >
                <path
                  d={Object.values(underlines)[index]}
                  stroke={colors.purple}
                  strokeWidth={3}
                  strokeLinecap='round'
                  strokeDasharray={80}
                  strokeDashoffset={
                    active === navLink || hovered === navLink ? 0 : 80
                  }
                  className='transition-all duration-150'
                />
              </svg>
            </li>
          );
        })}
      </ul>
      <Socials animationDelay={animationDelay} />
    </div>
  );
};

export default NavLinks;
