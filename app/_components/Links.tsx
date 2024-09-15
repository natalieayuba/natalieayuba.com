import Link from 'next/link';
import React from 'react';

interface LinkProps {
  children: string;
  href: string;
  className?: string;
}

export const ButtonStyleLink = ({ children, href, className }: LinkProps) => {
  return (
    <Link href={href} className={`button ${className}`}>
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
