import React from 'react';
import Image from 'next/image';

interface PreviewImageProps {
  projectName: string;
  className?: string;
}

const PreviewImage = ({ projectName, className }: PreviewImageProps) => (
  <div
    className={`flex-1 max-w-lg mx-auto relative ${
      className ? ` ${className}` : ''
    }`}
  >
    <Image
      key={projectName}
      src={`/projects/${projectName}/${projectName}-preview-image.png`}
      alt={`${projectName} preview image`}
      width={0}
      height={0}
      priority
      className='w-full h-auto'
    />
  </div>
);

export default PreviewImage;
