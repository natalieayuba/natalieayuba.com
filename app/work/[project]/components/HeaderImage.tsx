import React from 'react';
import Image from 'next/image';

const HeaderImage = ({ projectName }: { projectName: string }) => (
  <Image
    key={projectName}
    src={`/projects/${projectName.toLowerCase()}/${projectName.toLowerCase()}-header-image.png`}
    alt={`${projectName} header image`}
    width={0}
    height={0}
    priority
    className='my-12 md:my-28 w-full h-auto'
  />
);

export default HeaderImage;
