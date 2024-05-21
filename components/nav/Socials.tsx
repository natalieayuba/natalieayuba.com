import Link from 'next/link';
import { socials } from '@/config';

const Socials = ({ large }: { large?: boolean }) => {
  return (
    <ul className={`flex gap-4 text-purple ${large ? 'text-3xl' : 'text-2xl'}`}>
      {socials.map(({ name, url, icon }) => (
        <li key={name}>
          <Link
            href={url}
            aria-label={name}
            className='block hover:scale-110'
            title={name}
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
