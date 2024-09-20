import { appendClassName } from '@/utils/formatting';
import Link from 'next/link';
import React, { type ComponentProps } from 'react';

interface LinkProps {
  children: string;
  href: string;
  className?: string;
}

export const ButtonStyleLink = ({ children, href, className }: LinkProps) => (
  <Link href={href} className={`button ${className}`}>
    {children}
  </Link>
);

export const ExternalLink = ({
  children,
  className,
  ...rest
}: ComponentProps<'a'>) => (
  <a
    target='_blank'
    rel='noreferrer noopener'
    className={`link${appendClassName(className)}`}
    {...rest}
  >
    {children}
  </a>
);
