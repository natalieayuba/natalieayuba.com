import { socials } from '@/config';
import Icon from '../Icon';

interface SocialsProps {
  large?: boolean;
  animationDelay?: number;
}

const Socials = ({ large, animationDelay = 0 }: SocialsProps) => (
  <ul className={`flex gap-4 text-purple ${large ? 'text-3xl' : 'text-2xl'}`}>
    {socials.map(({ name, url }) => (
      <li
        key={name}
        className='animate-pop'
        style={{ animationDelay: `${(animationDelay += 100)}ms` }}
      >
        <a
          href={url}
          aria-label={name}
          target='_blank'
          rel='noreferrer noopener'
          className='block hover:scale-110'
          title={name}
        >
          <Icon name={name.toLowerCase()} />
        </a>
      </li>
    ))}
  </ul>
);

export default Socials;
