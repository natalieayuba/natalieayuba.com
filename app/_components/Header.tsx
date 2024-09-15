'use client';
import Avatar from './nav/Avatar';
import NavMenu from './nav/NavMenu';
import NavLinks, { type NavLinksProps } from './nav/NavLinks';
import { headerHeight } from '@/config';

const Header = ({ sectionsRef, activeLink }: NavLinksProps) => (
  <header
    className='bg-blue bg-opacity-95 backdrop-blur-sm rounded-b-xl container dark:bg-navy fixed left-0 right-0 z-10'
    style={{
      height: headerHeight,
      WebkitBackdropFilter: 'blur(4px)',
    }}
  >
    <nav className='flex justify-between h-full items-center'>
      <Avatar />
      <NavLinks sectionsRef={sectionsRef} activeLink={activeLink} />
      <NavMenu />
    </nav>
  </header>
);

export default Header;
