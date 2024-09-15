import FullScreenLayout from '@/app/_components/FullScreenLayout';
import PageLayout from '@/app/_components/PageLayout';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Under Construction',
};

const UnderConstruction = () => {
  if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'false') {
    notFound();
  }

  return (
    <PageLayout hideHeader fullHeight>
      <FullScreenLayout heading='Under Construction'>
        <p>
          My website is currently undergoing some changes. <br />
          Please come back soon :)
        </p>
      </FullScreenLayout>
    </PageLayout>
  );
};

export default UnderConstruction;
