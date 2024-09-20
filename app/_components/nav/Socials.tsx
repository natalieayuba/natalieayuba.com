import { appendClassName } from '@/utils/formatting';
import Icon from '../Icon';

interface SocialsProps {
  animationDelay?: number;
  className?: string;
}

const Socials = ({ animationDelay = 0, className }: SocialsProps) => {
  const socials = [
    {
      name: 'Github',
      url: 'https://github.com/natalieayuba',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/natalieayuba/',
    },
  ];

  return (
    <div
      className={`flex gap-3 items-center text-purple${appendClassName(
        className
      )}`}
    >
      {socials.map(({ name, url }) => (
        <a
          key={name}
          style={{ animationDelay: `${(animationDelay += 100)}ms` }}
          href={url}
          aria-label={name}
          target='_blank'
          rel='noreferrer noopener'
          className='hover:scale-110 animate-pop'
          title={name}
        >
          <Icon name={name} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
