import React from 'react';

interface SectionHeaderProps {
  heading: string;
  caption?: string;
  className?: string;
}

const SectionHeader = ({ heading, caption, className }: SectionHeaderProps) => (
  <header {...{ className }}>
    <h2 className='text-4xl font-bold mb-6'>{heading}.</h2>
    {caption && <p className='mx-auto max-w-lg'>{caption}</p>}
  </header>
);

export default SectionHeader;
