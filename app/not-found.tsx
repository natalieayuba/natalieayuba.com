import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Found | Natalie Ayuba',
};

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Not found</p>
      <Link href='/'>Go back home</Link>
    </div>
  );
};

export default NotFound;
