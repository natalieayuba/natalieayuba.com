import React, { type ReactNode } from 'react';

interface CentredLayoutProps {
  heading: string;
  subheading: string;
  children?: ReactNode;
}

const CentredLayout = ({
  heading,
  subheading,
  children,
}: CentredLayoutProps) => (
  <div className='flex flex-col items-center flex-1 justify-center text-center'>
    <h1 className='heading-lg'>{heading}</h1>
    <p className='max-w-md'>{subheading}</p>
    {children}
  </div>
);

export default CentredLayout;
