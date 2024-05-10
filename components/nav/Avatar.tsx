import Image from 'next/image';
import Link from 'next/link';

const Avatar = () => {
  return (
    <Link href='/'>
      <Image
        src='/robo-nat.svg'
        alt='Robo-Nat logo'
        width={0}
        height={0}
        className='h-12 w-auto'
      />
    </Link>
  );
};

export default Avatar;
