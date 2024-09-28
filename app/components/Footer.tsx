import Image from 'next/image';
import Socials from './nav/Socials';
import { usePathname } from 'next/navigation';

const Footer = () => (
  <footer className='mt-28 py-6 text-sm w-full relative'>
    <div className='container flex flex-col justify-end items-center gap-2.5 text-center'>
      <Socials />
      <p>
        Designed and Developed by yours truly
        <br />
        &copy; 2024 Natalie Ayuba
      </p>
    </div>
    {usePathname() === '/' && (
      <div className='hidden sm:block absolute right-4 -bottom-0 z-0'>
        <Image
          alt='Available for work'
          src='/decals/sign.svg'
          width={0}
          height={0}
          className='h-32 sm:h-40 w-auto'
        />
      </div>
    )}
  </footer>
);

export default Footer;
