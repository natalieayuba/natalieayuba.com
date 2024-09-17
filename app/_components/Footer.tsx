import Image from 'next/image';
import Socials from './nav/Socials';
import { usePathname } from 'next/navigation';

const Footer = () => (
  <footer className='mt-24 py-8 text-sm w-full relative'>
    <div className=' container flex flex-col justify-end items-center gap-3 text-center'>
      <Socials />
      Designed and Developed by Yours Truly
      <br />
      &copy; 2024 Natalie Ayuba
    </div>
    {usePathname() === '/' && (
      <div className='absolute right-4 -bottom-0 z-0'>
        <Image
          alt='Available for work'
          src='images/decals/sign2.svg'
          width={0}
          height={0}
          className='h-32 sm:h-40 w-auto'
        />
      </div>
    )}
  </footer>
);

export default Footer;
