import Banner from '@/components/Banner';
import Projects from '@/components/Projects';

const App = () => {
  return (
    <main className='w-full max-w-[1200px] margin transition-all duration-300'>
      <Banner />
      <Projects />
    </main>
  );
};

export default App;
