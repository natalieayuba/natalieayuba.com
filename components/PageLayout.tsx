import { headerHeight } from '@/config';
import Footer from './Footer';

const PageLayout = ({
  children,
  hideHeader,
  fullHeight
}: {
  children: React.ReactNode;
  hideHeader?: boolean;
  fullHeight?: boolean;
}) => {
  return (
    <div
      className='bg-gradient-to-b from-blue to-white flex flex-col justify-between items-center'
      style={{
        minHeight: hideHeader ? '100vh' : `calc(100vh - ${headerHeight}`,
      }}
    >
      <main className={`max-w-[1200px] margin transition-all duration-300 ${fullHeight ? 'flex-1 flex' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
