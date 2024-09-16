import React from 'react';
import Image from 'next/image';
import type { ProjectProps } from '@/app/[projectName]/projects';

interface HeaderImageProps {
  project: ProjectProps;
  className?: string;
}

const HeaderImage = ({ project, className }: HeaderImageProps) => (
  <div className={`mx-auto ${className ? ` ${className}` : ''}`}>
    {project.headerImage.map((image) => (
      <Image
        key={image}
        src={image}
        alt={`${project.name} header image`}
        width={0}
        height={0}
        className='w-full h-auto max-w-lg max-h-[450px]'
      />
    ))}
  </div>
);

export default HeaderImage;
