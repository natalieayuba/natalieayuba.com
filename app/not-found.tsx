import FullScreenLayout from '@/app/_components/FullScreenLayout';
import { ButtonStyleLink } from '@/app/_components/Links';
import PageLayout from '@/app/_components/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

const NotFound = () => {
  return (
    <PageLayout fullHeight>
      <FullScreenLayout heading='404'>
        <p>Page Not Found</p>
        <ButtonStyleLink href='/' className='mt-6'>
          Go to home
        </ButtonStyleLink>
      </FullScreenLayout>
    </PageLayout>
  );
};

export default NotFound;
