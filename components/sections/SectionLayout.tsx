import { headerHeight } from '@/config';
import { forwardRef, useEffect, useRef, type ReactNode } from 'react';
import scrollReveal from '@/utils/scrollReveal';

interface SectionProps {
  name: string | undefined;
  children: ReactNode;
  className?: string;
}

const SectionLayout = forwardRef<HTMLElement, SectionProps>(
  ({ name, children, className }, ref) => {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if (headingRef.current) {
        scrollReveal(headingRef.current);
      }
    });

    return (
      <section
        id={name?.toLowerCase()}
        className={`flex flex-col py-12 md:py-24${
          className ? ` ${className}` : ''
        }`}
        style={{ minHeight: `calc(100svh - ${headerHeight}px)` }}
        ref={ref}
      >
        <h2 className='heading-lg text-center mb-6' ref={headingRef}>
          {name}.
        </h2>
        <div className='my-2 md:my-10'>{children}</div>
      </section>
    );
  }
);

SectionLayout.displayName = 'SectionLayout';

export default SectionLayout;
