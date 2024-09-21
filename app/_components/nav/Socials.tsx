import { appendClassName } from '@/utils/formatting';
import Icon from '../Icon';
import { ExternalLink } from '../Links';

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
        <ExternalLink
          key={name}
          {...(animationDelay && {
            style: { animationDelay: `${(animationDelay += 100)}ms` },
          })}
          href={url}
          className='hover:brightness-100 hover:scale-110 animate-pop'
          title={name}
        >
          <Icon name={name} />
        </ExternalLink>
      ))}
    </div>
  );
};

export default Socials;
