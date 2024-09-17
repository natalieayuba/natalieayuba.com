'use client';
import Socials from './Socials';
import Link from 'next/link';
import { useEffect, useState, type MutableRefObject } from 'react';
import { colors, navLinks } from '@/config';
import { interval } from '@/utils/navlinkAnimation';
export interface NavLinksProps {
  sectionsRef?: MutableRefObject<HTMLElement[]>;
  activeLink?: string;
}

const NavLinks = ({ sectionsRef, activeLink }: NavLinksProps) => {
  const [active, setActive] = useState(activeLink || '');
  const [scrollByClick, setScrollByClick] = useState(false);
  const [hovered, setHovered] = useState('');
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

  let animationDelay = 0;

  useEffect(() => {
    if (activeLink === 'Home' && sectionsRef && sectionsRef.current) {
      const handleScroll = () => {
        if (!scrollByClick) {
          sectionsRef.current.forEach((section, index) => {
            if (
              section &&
              section.getBoundingClientRect().top < window.innerHeight / 2 - 75
            ) {
              setActive(navLinks[index]);
            }
          });
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  useEffect(() => {
    if (scrollByClick) {
      setTimeout(() => setScrollByClick(false), 1000);
    }
  }, [scrollByClick]);

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
                onClick={() => {
                  setActive(navLink);
                  setScrollByClick(true);
                }}
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
