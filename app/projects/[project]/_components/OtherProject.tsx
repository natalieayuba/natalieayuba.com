'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PreviewImage from '../../_components/PreviewImage';
import { colors } from '@/config';
import useIsMobile from '@/hooks/useIsMobile';

const OtherProject = ({ otherProject }: { otherProject: string }) => {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  return (
    <div className='mt-52 text-center max-w-80 relative mx-auto'>
      <div className='absolute -top-20 -left-2'>
        <div title='You might also like'>
          <Image
            src='/decals/you-might-also-like.svg'
            alt='You might also like'
            width={0}
            height={0}
            className='w-auto h-14 -rotate-12'
          />
        </div>
        <Image
          src='/decals/arrow2.svg'
          alt='Arrow'
          width={0}
          height={0}
          className='w-auto h-16 rotate-12 relative -left-2 top-2'
        />
      </div>
      <Link
        href={`/projects/${otherProject.toLowerCase()}`}
        className='bg-purple w-fit'
        onMouseOver={() => setHovered(true && !isMobile)}
        onMouseOut={() => setHovered(false && !isMobile)}
        title={otherProject}
      >
        <div className='h-72 flex items-center px-10'>
          <PreviewImage projectName={otherProject} />
        </div>
        <div className='absolute -top-20'>
          <svg
            width='110%'
            height='110%'
            viewBox='0 0 373 466'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M335.555 88.3923C297.554 70.0703 265.062 60.3878 223.226 60.3878C172.968 60.3878 122.998 95.7263 86.9375 128.843C42.8462 169.335 2.30176 221.965 2.30176 284.268C2.30176 345.351 36.6712 376.544 83.5147 410.444C129.7 443.867 185.247 466.696 242.829 463.497C310.509 459.737 350.968 405.549 363.56 344.167C373.585 295.294 373.161 237.269 366.36 187.964C363.483 167.107 357.118 145.094 343.956 128.221C328.618 108.556 308.388 93.6438 290.437 76.5681C264.764 52.1482 239.384 27.3421 215.136 1.57837'
              stroke={colors.purple}
              strokeWidth='3'
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeDasharray={2000}
              strokeDashoffset={hovered ? 0 : 2000}
              className='transition-all ease-in-out duration-700'
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default OtherProject;
