import React from 'react';
import Image from 'next/image';
import type { ProjectProps } from '../projects';

interface PreviewImageProps {
  project: ProjectProps;
  className?: string;
}

const PreviewImage = ({ project, className }: PreviewImageProps) => {
  const path = `/images/projects/${project.name.toLowerCase()}`;
  return (
    <div className={`mx-auto relative ${className ? ` ${className}` : ''}`}>
      <Image
        key={project.name}
        src={`${path}/${project.previewImage}`}
        alt={`${project.name} preview image`}
        width={0}
        height={0}
        className='w-full h-auto max-w-lg max-h-[450px] relative z-[1]'
      />
    </div>
  );
};

export default PreviewImage;
