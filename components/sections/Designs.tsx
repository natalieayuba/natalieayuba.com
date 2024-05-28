import { forwardRef } from 'react';
import SectionLayout from './SectionLayout';
import Image from 'next/image';
import { logos } from '@/config';

const Designs = forwardRef<HTMLElement>((props, ref) => {
  return (
    <SectionLayout name={Designs.displayName} ref={ref}>
      <div className='grid grid-cols-2 lg:grid-cols-3 mt-2'>
        {logos.map(({ name, src }) => (
          <div
            key={name}
            className='sm:min-h-60 p-10 sm:p-[20%] flex items-center justify-center'
          >
            <div className='hover:scale-110 transition-all duration-200 cursor-pointer'>
              <Image
                src={src}
                alt={`${name} logo`}
                width={0}
                height={0}
                sizes='100vw'
                className='w-auto h-auto'
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
});

Designs.displayName = 'Designs';

export default Designs;
