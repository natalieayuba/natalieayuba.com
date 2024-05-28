import Link from 'next/link';
import React from 'react';

interface LinkProps {
  children: string;
  href: string;
  className?: string;
}

export const Button = ({ children, href, className }: LinkProps) => {
  return (
    <Link
      href={href}
      className={`text-purple border rounded font-medium py-3 px-4 block w-fit transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0] ${className}`}
    >
      {children}
    </Link>
  );
};

export const InlineLink = ({ children, href }: LinkProps) => {
  return (
    <Link
      href={href}
      className='text-purple font-medium w-fit transition-all duration-150 hover:brightness-[80%]'
    >
      {children}
    </Link>
  );
};
