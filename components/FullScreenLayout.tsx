import React, {
  Children,
  cloneElement,
  type ReactElement,
  type ReactNode,
} from 'react';

interface FullScreenLayoutProps {
  heading: string;
  children: ReactNode;
}

const FullScreenLayout = ({ heading, children }: FullScreenLayoutProps) => {
  return (
    <div className='my-auto flex flex-col items-center text-center'>
      <h1 className='font-bold text-5xl mb-6 max-w-lg'>{heading}</h1>
      {Children.map(children as ReactElement, (child) => {
        return cloneElement(child, {
          className: `${child.type === 'p' ? 'text-xl mb-2' : ''} ${
            child.props.className
          }`,
        });
      })}
    </div>
  );
};

export default FullScreenLayout;
