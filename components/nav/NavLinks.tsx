import { NavLinksUl, SocialsUl } from './links';

const NavLinks = () => {
  return (
    <div className='hidden md:flex'>
      <NavLinksUl className='flex gap-10 mr-8' />
      <SocialsUl />
    </div>
  );
};

export default NavLinks;
