'use client';
import { InlineLink } from '@/app/_components/Links';
import { usePathname } from 'next/navigation';
import React from 'react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const path = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
  ];

  return (
    <nav>
      <ul className='flex justify-center'>
        {path.map(({ name, url }) => (
          <li
            key={name}
            className='after:content-[">"] after:text-black after:text-opacity-60 after:mx-2'
          >
            <InlineLink href={url}>{name}</InlineLink>
          </li>
        ))}
        <li className='capitalize'>{pathname.split('/')[2]}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
