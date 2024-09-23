import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CentredLayout from '../components/CentredLayout';

const title = 'Under Construction';

export const metadata: Metadata = {
  title,
};

const UnderConstruction = () => {
  if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'false') {
    notFound();
  }

  return (
    <CentredLayout
      heading={title}
      subheading='My website is currently undergoing some changes.
          Please come back soon :)'
    />
  );
};

export default UnderConstruction;
