import Icon from '@/app/_components/Icon';

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
        <a
          target='_blank'
          rel='noreferrer noopener'
          key={link.name}
          href={link.href}
          className='text-purple font-medium flex gap-2 items-center w-fit transition-all duration-150 hover:brightness-[80%]'
          title={link.title}
        >
          <span className='text-xl'>
            <Icon
              name={link.name === 'Code' ? 'github' : link.name.toLowerCase()}
            />
          </span>
          {link.name}
        </a>
      )
    );
  });
};
export default ExternalLinks;
