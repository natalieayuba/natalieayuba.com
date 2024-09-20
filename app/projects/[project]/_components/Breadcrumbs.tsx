'use client';
import Link from 'next/link';
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
      <ul className='flex justify-center capitalize'>
        {path.map(({ name, url }) => (
          <li
            key={name}
            className='after:content-[">"] after:secondary-text after:mx-2'
          >
            <Link href={url} className='link'>
              {name}
            </Link>
          </li>
        ))}
        <li>{pathname.split('/')[2]}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
