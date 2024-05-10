import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Home',
    url: '/#home',
  },
  {
    name: 'Projects',
    url: '/#projects',
  },
  {
    name: 'Designs',
    url: '/#designs',
  },
];

const socials = [
  {
    icon: <FiGithub />,
    url: 'https://github.com/natalieayuba',
    ariaLabel: 'Visit Natalie Ayuba\'s Github profile'
  },
  {
    icon: <AiOutlineLinkedin />,
    url: 'https://www.linkedin.com/in/natalieayuba/',
    ariaLabel: 'Visit Natalie Ayuba\'s LinkedIn profile'
  },
];

export const NavLinksUl = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <ul className={`font-semibold ${className}`}>
    {navLinks.map(({ name, url }) => (
      <li key={url}>
        <Link href={url} onClick={onClick}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

export const SocialsUl = ({ large }: { large?: boolean }) => (
  <ul className={`flex gap-4 text-purple ${large ? 'text-3xl' : 'text-2xl'}`}>
    {socials.map(({ icon, url, ariaLabel }) => (
      <li key={url}>
        <Link href={url} aria-label={ariaLabel}>{icon}</Link>
      </li>
    ))}
  </ul>
);
