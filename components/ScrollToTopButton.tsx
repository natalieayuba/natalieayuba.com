'use client';
import React, { useEffect, useState } from 'react';
import Icon from './Icon';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisible = () => {
    window.scrollY > 1000 ? setVisible(true) : setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      title='Scroll to top'
      onClick={scrollToTop}
      className={`${
        visible ? 'md:opacity-100' : ''
      } opacity-0 scroll-button fixed bottom-10 right-10 transition-opacity duration-150`}
    >
      <Icon name='scrollUp' />
    </button>
  );
};

export default ScrollToTopButton;
