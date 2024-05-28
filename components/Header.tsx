'use client';
import Avatar from './nav/Avatar';
import NavMenu from './nav/NavMenu';
import NavLinks, { type NavLinksProps } from './nav/NavLinks';
import { headerHeight } from '@/config';
import { useEffect, useState } from 'react';

const Header = ({ sectionsRef, activeLink }: NavLinksProps) => {
  const [position, setPosition] = useState(
    typeof window !== 'undefined' && window.scrollY
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = typeof window !== 'undefined' && window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header
      className='bg-blue sticky flex flex-col justify-between transition-all duration-300 ease-out'
      style={{ height: headerHeight, top: visible ? 0 : `-${headerHeight}` }}
    >
      <nav className='flex justify-between h-full items-center transition-all duration-300 margin'>
        <Avatar />
        <NavLinks sectionsRef={sectionsRef} activeLink={activeLink} />
        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
