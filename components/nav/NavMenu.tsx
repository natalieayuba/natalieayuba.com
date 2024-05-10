'use client';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { NavLinksUl, SocialsUl } from './links';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <div
        className='text-purple z-10 relative -mr-2'
        title={`${menuOpen ? 'Close' : 'Open'} menu`}
      >
        <Hamburger
          rounded
          toggled={menuOpen}
          toggle={() => setMenuOpen(!menuOpen)}
          size={30}
        />
      </div>
      <div
        className={`fixed bg-blue h-screen w-screen top-0 bottom-0 p-12 pt-40 right-0 transition-left duration-300 ${
          menuOpen ? 'left-0' : 'left-full'
        }`}
      >
        <NavLinksUl
          className='text-2xl flex flex-col gap-8 mb-10'
          onClick={() => setMenuOpen(false)}
        />
        <SocialsUl large />
      </div>
    </div>
  );
};

export default NavMenu;
