import React from 'react';

interface SectionHeaderProps {
  heading: string;
  caption?: string;
  className?: string;
}

const SectionHeader = ({ heading, caption, className }: SectionHeaderProps) => (
  <header {...{ className }}>
    <h2 className='heading-lg mb-6'>{heading}.</h2>
    {caption && <p>{caption}</p>}
  </header>
);

export default SectionHeader;
