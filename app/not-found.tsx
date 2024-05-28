import FullScreenLayout from '@/components/FullScreenLayout';
import { Button } from '@/components/Links';
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

const NotFound = () => {
  return (
    <PageLayout fullHeight>
      <FullScreenLayout heading='404'>
        <h2 className='text-2xl'>Page Not Found</h2>
        <Button href='/' text='Go to home' className='mt-6' />
      </FullScreenLayout>
    </PageLayout>
  );
};

export default NotFound;
