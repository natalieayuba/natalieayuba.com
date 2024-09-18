import React from 'react';
import Image from 'next/image';

const HeaderImage = ({ projectName }: { projectName: string }) => (
  <Image
    key={projectName}
    src={`/images/projects/${projectName}/${projectName}-header-image.png`}
    alt={`${projectName} header image`}
    width={0}
    height={0}
    className=' my-12 md:my-28 w-full h-auto'
  />
);

export default HeaderImage;
