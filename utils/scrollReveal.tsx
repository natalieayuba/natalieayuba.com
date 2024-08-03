const scrollReveal = async (element: HTMLDivElement) => {
  const options = {
    distance: '20px',
    viewFactor: 0.25,
  };
  const sr = (await import('scrollreveal')).default;
  sr(options).reveal(element);
};

export default scrollReveal;
