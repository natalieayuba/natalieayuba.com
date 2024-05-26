import PageLayout from '@/components/PageLayout';

const UnderConstruction = () => {
  return (
    <PageLayout hideHeader fullHeight>
      <div className='my-auto flex flex-col items-center text-center'>
        <h1 className='font-bold text-6xl mb-6 max-w-sm'>Under Construction</h1>
        <p>My website is currently undergoing some changes.</p>
        <p>Please come back soon :)</p>
      </div>
    </PageLayout>
  );
};

export default UnderConstruction;
