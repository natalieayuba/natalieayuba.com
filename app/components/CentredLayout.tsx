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
  <div className='flex flex-col pt-28 items-center flex-1 justify-center text-center'>
    <h1 className='heading-lg mb-2'>{heading}</h1>
    <p className='max-w-md'>{subheading}</p>
    {children}
  </div>
);

export default CentredLayout;
