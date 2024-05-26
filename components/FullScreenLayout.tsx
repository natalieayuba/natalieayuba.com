import React from 'react';

const FullScreenLayout = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div className='my-auto flex flex-col items-center text-center'>
      <h1 className='font-bold text-7xl mb-6 max-w-lg'>{heading}</h1>
      {children}
    </div>
  );
};

export default FullScreenLayout;
