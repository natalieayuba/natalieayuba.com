import { projectLinks } from '@/config';
import Link from 'next/link';
import Icon from '../Icon';

export interface ExternalLinks {
  demoUrl?: string;
  presentationUrl?: string;
  codeUrl?: string;
}

const ExternalLinks = ({ links }: { links: ExternalLinks }) => {
  return projectLinks.map((link: any) => {
    const key = `${link.name.toLowerCase()}Url`;
    link.href = links[key as keyof ExternalLinks];

    return (
      link.href != undefined && (
        <Link
          key={link.name}
          href={link.href}
          className='text-purple font-medium flex gap-2 items-center w-fit transition-all duration-150 hover:brightness-[80%]'
          title={link.title}
        >
          <span className='text-xl'>
            <Icon iconName={link.icon} />
          </span>
          {link.name}
        </Link>
      )
    );
  });
};
export default ExternalLinks;
