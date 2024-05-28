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
        <p>Page Not Found</p>
        <Button href='/' className='mt-6'>
          Go to home
        </Button>
      </FullScreenLayout>
    </PageLayout>
  );
};

export default NotFound;
