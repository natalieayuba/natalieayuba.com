'use client';
import Avatar from './nav/Avatar';
import NavMenu from './nav/NavMenu';
import NavLinks from './nav/NavLinks';
import { headerHeight } from '../config';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;
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
        <NavLinks />
        <NavMenu />
      </nav>
    </header>
  );
};

export default Nav;
