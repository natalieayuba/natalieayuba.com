import React from 'react';
import Image from 'next/image';
import type { ProjectProps } from '../projects';

interface HeaderImageProps {
  project: ProjectProps;
  className?: string;
}

const HeaderImage = ({ project, className }: HeaderImageProps) => {
  const path = `/images/projects/${project.name.toLowerCase()}`;
  return (
    <div className={`mx-auto relative ${className ? ` ${className}` : ''}`}>
      <Image
        key={project.name}
        src={`${path}/${project.headerImage}`}
        alt={`${project.name} header image`}
        width={0}
        height={0}
        className='w-full h-auto max-w-lg max-h-[450px] relative z-[1]'
      />
    </div>
  );
};

export default HeaderImage;
