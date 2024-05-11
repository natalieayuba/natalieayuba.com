import Link from 'next/link';
import React from 'react';

export const Button = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className='text-purple border rounded font-medium py-3 px-4 block w-fit transition-all duration-150 hover:bg-purple hover:text-white'
    >
      {text}
    </Link>
  );
};

export const ExternalLink = ({
  text,
  icon,
  href,
}: {
  text: string;
  icon?: JSX.Element;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className='text-purple font-medium flex gap-2 items-center'
    >
      <span className='text-xl'>{icon}</span>
      {text}
    </Link>
  );
};
