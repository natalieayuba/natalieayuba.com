import React from 'react';

interface SectionHeaderProps {
  heading: string;
  caption?: string;
  className?: string;
}

const SectionHeader = ({ heading, caption, className }: SectionHeaderProps) => (
  <header {...{ className }}>
    <h2 className='heading-md'>{heading}</h2>
    {caption && <p className='mx-auto max-w-md'>{caption}</p>}
  </header>
);

export default SectionHeader;
