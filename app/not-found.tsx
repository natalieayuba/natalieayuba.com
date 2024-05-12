'use client';
import Header from '@/components/Header';
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Found | Natalie Ayuba',
};

const NotFound = () => {
  return (
    <>
      <Header />
      <PageLayout>
        <h1></h1>
        <p>Not found</p>
        <Link href='/'>Go back home</Link>
      </PageLayout>
    </>
  );
};

export default NotFound;
