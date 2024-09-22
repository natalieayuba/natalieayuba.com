import React from 'react';
import Image from 'next/image';

interface PreviewImageProps {
  projectName: string;
  className?: string;
}

const PreviewImage = ({ projectName, className }: PreviewImageProps) => (
  <div className={`mx-auto relative ${className ? ` ${className}` : ''}`}>
    <Image
      key={projectName}
      src={`/projects/${projectName}/${projectName}-preview-image.png`}
      alt={`${projectName} preview image`}
      width={0}
      height={0}
      className='w-full h-auto max-w-lg max-h-[450px] relative z-[1]'
    />
  </div>
);

export default PreviewImage;
