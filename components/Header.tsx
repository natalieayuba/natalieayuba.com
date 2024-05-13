'use client';
import Avatar from './navbar/Avatar';
import NavMenu from './navbar/NavMenu';
import NavLinks from './navbar/NavLinks';
import { headerHeight } from '@/config';
import { useEffect, useState, type MutableRefObject } from 'react';

const Header = ({
  sectionsRef,
}: {
  sectionsRef?: MutableRefObject<HTMLElement[]>;
}) => {
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
        <NavLinks sectionsRef={sectionsRef} />
        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
