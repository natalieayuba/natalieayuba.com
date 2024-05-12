const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-gradient-to-b from-blue to-white flex justify-center'>
      <main className='w-full max-w-[1200px] margin transition-all duration-300'>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
