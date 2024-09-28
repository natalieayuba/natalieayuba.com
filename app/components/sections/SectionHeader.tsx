import React, { forwardRef } from 'react';

interface SectionHeaderProps {
  heading: string;
  caption?: string;
  className?: string;
}

const SectionHeader = forwardRef<HTMLHeadingElement, SectionHeaderProps>(
  ({ heading, caption, className }, ref) => (
    <header {...{ className }}>
      <h2 ref={ref} className='heading-md'>
        {heading}
      </h2>
      {caption && <p className='mx-auto max-w-md'>{caption}</p>}
    </header>
  )
);

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
