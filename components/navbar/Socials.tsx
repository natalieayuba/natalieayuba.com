import Link from 'next/link';
import { socials } from '@/config';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Socials = ({ large }: { large?: boolean }) => {
  const icons = {
    Github: <FiGithub />,
    LinkedIn: <FiLinkedin />,
  };

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
            {icons[name as keyof typeof icons]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
