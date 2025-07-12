import { appendClassName } from '@/utils/formatting';
import Icon from '../Icon';
import { ExternalLink } from '../Links';

interface SocialsProps {
  animationDelay?: number;
  className?: string;
}

const socials = [
  {
    icon: 'email',
    title: 'Send me an email',
    url: 'mailto:natalieayuba@hotmail.com',
  },
  {
    icon: 'github',
    title: 'Github',
    url: 'https://github.com/natalieayuba',
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/natalieayuba/',
  },
];

const Socials = ({ animationDelay = 0, className }: SocialsProps) => (
  <div
    className={`flex gap-4 items-center text-purple${appendClassName(
      className
    )}`}
  >
    {socials.map(({ icon, title, url }) => (
      <ExternalLink
        key={icon}
        {...(animationDelay && {
          style: { animationDelay: `${(animationDelay += 100)}ms` },
        })}
        href={url}
        className='hover:brightness-100 hover:scale-110 transition-none animate-pop'
        title={title}
      >
        <Icon name={icon} />
      </ExternalLink>
    ))}
  </div>
);

export default Socials;
