import React, { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button type='button' className='button'>
      {children}
    </button>
  );
};
