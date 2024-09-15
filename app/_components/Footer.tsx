import Image from 'next/image';
import Socials from './nav/Socials';

const Footer = () => (
  <footer className='mt-24 py-8 w-full text-sm'>
    <div className='relative container flex flex-col justify-end items-center gap-3'>
      <Socials />
      &copy; 2024 Natalie Ayuba
      <Image
        alt='Available for work'
        src='images/decals/sign.svg'
        width={0}
        height={0}
        className='h-40 w-auto absolute left-4 md:left-1/4 -bottom-10'
      />
    </div>
  </footer>
);

export default Footer;
