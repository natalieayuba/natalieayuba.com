'use client';
import Socials from './Socials';
import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/config';
import { Squash as Hamburger } from 'hamburger-react';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <div
        className='text-purple z-10 relative -mr-2 hover:scale-110 transition-all duration-150 animate-pop'
        title={`${menuOpen ? 'Close' : 'Open'} menu`}
        style={{ animationDelay: '150ms' }}
      >
        <Hamburger
          rounded
          toggled={menuOpen}
          toggle={() => setMenuOpen(!menuOpen)}
          size={30}
        />
      </div>
      <div
        className={`fixed bg-blue dark:bg-navy h-screen w-screen top-0 bottom-0 p-12 pt-40 right-0 transition-left duration-300 ${
          menuOpen ? 'left-0' : 'left-full'
        }`}
      >
        <ul className={`font-semibold text-xl flex flex-col gap-8 mb-12`}>
          {navLinks.map(({ name, url }) => (
            <li key={url}>
              <Link
                href={name === 'Home' ? '/' : url}
                onClick={() => setMenuOpen(false)}
                className='transition-all duration-150 hover:text-purple inline-block w-full'
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <Socials large />
      </div>
    </div>
  );
};

export default NavMenu;
