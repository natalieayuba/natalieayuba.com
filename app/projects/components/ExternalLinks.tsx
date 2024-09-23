import Icon from '@/app/components/Icon';
import { ExternalLink } from '@/app/components/Links';

export interface ExternalLinksProps {
  siteUrl?: string;
  presentationUrl?: string;
  codeUrl?: string;
  prototypeUrl?: string;
}

const ExternalLinks = ({ links }: { links: ExternalLinksProps }) => {
  const externalLinks = [
    {
      name: 'Site',
      title: 'View live site',
    },
    {
      name: 'Code',
      title: 'View source code',
    },
    {
      name: 'Presentation',
      title: 'View presentation',
    },
    {
      name: 'Prototype',
      title: 'View prototype',
    },
  ];

  return externalLinks.map((link: any) => {
    const key = `${link.name.toLowerCase()}Url`;
    link.href = links[key as keyof ExternalLinksProps];

    return (
      link.href != undefined && (
        <ExternalLink
          key={link.name}
          href={link.href}
          className='flex gap-1.5 items-center'
          title={link.title}
        >
          <span className='text-xl'>
            <Icon
              size={22}
              name={link.name === 'Code' ? 'github' : link.name.toLowerCase()}
            />
          </span>
          {link.name}
        </ExternalLink>
      )
    );
  });
};
export default ExternalLinks;
