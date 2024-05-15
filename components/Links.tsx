import Link from 'next/link';
import React from 'react';

export const Button = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className='text-purple border rounded font-medium py-3 px-4 block w-fit transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0]'
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
      className='text-purple font-medium flex gap-2 items-center w-fit transition-all duration-150 hover:brightness-[80%]'
    >
      <span className='text-xl'>{icon}</span>
      {text}
    </Link>
  );
};

export const InlineLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className='text-purple font-medium w-fit transition-all duration-150 hover:brightness-[80%]'
    >
      {text}
    </Link>
  );
};
