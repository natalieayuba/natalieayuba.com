import Avatar from './nav/Avatar';
import NavMenu from './nav/NavMenu';
import NavLinks from './nav/NavLinks';
import { headerHeight } from '../config';

const Nav = () => {
  return (
    <header
      className={`bg-blue sticky flex flex-col justify-between`}
      style={{ height: headerHeight }}
    >
      <nav className={'flex justify-between h-full items-center transition-all duration-300 margin'}>
        <Avatar />
        <NavLinks />
        <NavMenu />
      </nav>
    </header>
  );
};

export default Nav;
