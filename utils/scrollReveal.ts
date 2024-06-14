import ScrollReveal from 'scrollreveal';

const scrollReveal = (
  element: HTMLElement,
  delay: number = 0,
  viewFactor = 0.25
) => {
  const options = {
    origin: 'bottom',
    distance: '20px',
    delay,
    viewFactor,
  };

  ScrollReveal(options).reveal(element);
};

export default scrollReveal;
