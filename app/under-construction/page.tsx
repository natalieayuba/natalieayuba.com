import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Under Construction | Natalie Ayuba',
};

const UnderConstruction = () => {
  if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'false') {
    notFound();
  }

  return (
    <PageLayout hideHeader fullHeight>
      <div className='my-auto flex flex-col items-center text-center'>
        <h1 className='font-bold text-6xl mb-6 max-w-sm'>Under Construction</h1>
        <div className='text-lg'>
          <p>My website is currently undergoing some changes.</p>
          <p>Please come back soon :)</p>
          <p>{process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION}</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default UnderConstruction;
