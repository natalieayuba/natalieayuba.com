import Image from 'next/image';
import Socials from './nav/Socials';
import { usePathname } from 'next/navigation';
import useWindowWidth from '@/hooks/useWindowWidth';

const Footer = () => {
  const pathname = usePathname();
  const windowWidth = useWindowWidth();

  return (
    <footer className='mt-40 py-8 text-sm w-full relative'>
      <div className=' container flex flex-col justify-end items-center gap-3 text-center'>
        <Socials />
        <p>Designed and Developed by Natalie Ayuba</p>
      </div>
      {pathname === '/' && windowWidth > 500 && (
        <div className='absolute right-4 -bottom-0 z-0'>
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
};

export default Footer;
