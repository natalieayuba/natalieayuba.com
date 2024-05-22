import Link from 'next/link';
import { socials } from '@/config';
import Icon from '../Icon';

const Socials = ({ large }: { large?: boolean }) => {
  return (
    <ul className={`flex gap-4 text-purple ${large ? 'text-3xl' : 'text-2xl'}`}>
      {socials.map(({ name, url }) => (
        <li key={name}>
          <Link
            href={url}
            aria-label={name}
            className='block hover:scale-110'
            title={name}
          >
            <Icon iconName={name.toLowerCase()} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
