import Link from 'next/link';
import React from 'react';

export const Button = ({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`text-purple border rounded font-medium py-3 px-4 block w-fit transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0] ${className}`}
    >
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
