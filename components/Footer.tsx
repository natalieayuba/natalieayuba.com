import { darkMode } from '@/config';
import Socials from './nav/Socials';

const Footer = () => {
  return (
    <footer
      className={`margin py-8 w-full relative flex flex-col justify-end items-center gap-3${
        !darkMode ? ' h-[744px]' : ''
      }`}
      style={{
        background: !darkMode ? 'no-repeat bottom url("/images/sun.svg")' : '',
      }}
    >
      <Socials />
      <p className='secondary-text'>Designed and Developed by Natalie Ayuba</p>
    </footer>
  );
};

export default Footer;
