import { forwardRef, type ReactNode } from 'react';

interface SectionProps {
  name: string | undefined;
  children: ReactNode;
}

const SectionLayout = forwardRef<HTMLElement, SectionProps>(
  ({ name, children }, ref) => {
    return (
      <section
        id={name?.toLowerCase()}
        className='flex flex-col py-12 md:py-24'
        ref={ref}
      >
        <h2 className='heading-lg text-center md:mb-6'>{name}.</h2>
        <div className='my-2 md:my-16'>{children}</div>
      </section>
    );
  }
);

SectionLayout.displayName = 'SectionLayout';

export default SectionLayout;
