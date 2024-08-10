import ScrollReveal from 'scrollreveal';

const scrollReveal = (element: HTMLElement) => {
  const options = {
    distance: '20px',
    viewFactor: 0.25,
  };

  ScrollReveal(options).reveal(element);
};

export default scrollReveal;
