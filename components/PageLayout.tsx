import { headerHeight } from '@/config';
import Footer from './Footer';

const PageLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div
      className='bg-gradient-to-b from-blue to-white flex flex-col justify-between items-center'
      style={{ minHeight: `calc(100vh - ${headerHeight}` }}
    >
      <main className='max-w-[1200px] margin transition-all duration-300'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
