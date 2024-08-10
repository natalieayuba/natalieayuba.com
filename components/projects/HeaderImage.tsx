import React from 'react';
import Image from 'next/image';
import type { ProjectProps } from '@/app/[projectName]/config';

interface HeaderImageProps {
  project: ProjectProps;
  className?: string;
}

const HeaderImage = ({ project, className }: HeaderImageProps) => {
  return (
    <div
      className={`w-full aspect-video rounded-lg flex justify-center items-center gap-2${
        className ? ` ${className}` : ''
      }`}
      style={{
        backgroundColor: `color-mix(in srgb, ${project.bgColor}, ${
          project.name === 'Luxe' ? '#ddd 80%' : 'white 82%'
        })`,
      }}
    >
      {project.headerImage.map((image) => (
        <Image
          key={image}
          src={image}
          alt={`${project.name} header image`}
          width='0'
          height='0'
          className='h-[80%] w-auto rounded-lg shadow-image'
        />
      ))}
    </div>
  );
};

export default HeaderImage;
