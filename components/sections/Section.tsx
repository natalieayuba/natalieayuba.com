import { forwardRef } from 'react';

const Section = forwardRef<
  HTMLElement,
  { title: string | undefined; children: React.ReactNode }
>(({ title, children }, ref) => {
  return (
    <section
      id={title?.toLowerCase()}
      className='flex flex-col py-12 md:py-24'
      ref={ref}
    >
      <h2 className='text-4xl md:text-6xl font-bold text-center md:mb-6'>
        {title}.
      </h2>
      <div className='my-16'>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
