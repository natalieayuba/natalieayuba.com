import { forwardRef } from 'react';

const SectionLayout = forwardRef<
  HTMLElement,
  { title: string | undefined; children: React.ReactNode }
>(({ title, children }, ref) => {
  return (
    <section
      id={title?.toLowerCase()}
      className='flex flex-col py-12 md:py-24'
      ref={ref}
    >
      <h2 className='heading-lg text-center md:mb-6'>
        {title}.
      </h2>
      <div className='my-2 md:my-16'>{children}</div>
    </section>
  );
});

SectionLayout.displayName = 'SectionLayout';

export default SectionLayout;
