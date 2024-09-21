import { ButtonStyleLink } from '@/app/_components/Links';
import type { Metadata } from 'next';
import CentredLayout from './_components/CentredLayout';

const title = 'Page Not Found';
export const metadata: Metadata = { title };

const NotFound = () => (
  <CentredLayout heading='404' subheading={title}>
    <ButtonStyleLink href='/' className='mt-10'>
      Go to home
    </ButtonStyleLink>
  </CentredLayout>
);

export default NotFound;
