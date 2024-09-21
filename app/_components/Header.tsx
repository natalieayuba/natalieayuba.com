import Avatar from './nav/Avatar';
import NavLinks from './nav/NavLinks';
import NavMenu from './nav/NavMenu';
import { headerHeight } from '@/config';

const Header = () => (
  <header
    className='bg-blue bg-opacity-95 backdrop-blur-sm rounded-b-xl container fixed left-0 right-0 z-10'
    style={{
      height: headerHeight,
      WebkitBackdropFilter: 'blur(4px)',
    }}
  >
    <nav className='flex justify-between h-full items-center'>
      <Avatar />
      <NavLinks />
      <NavMenu />
    </nav>
  </header>
);

export default Header;
