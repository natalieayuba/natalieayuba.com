'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisible = () => {
    window.scrollY > 400 ? setVisible(true) : setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      title='Scroll to top'
      onClick={scrollToTop}
      className={`${
        visible ? 'md:opacity-100' : 'md:opacity-0'
      } scroll-button fixed bottom-10 right-10 transition-opacity duration-150`}
    >
      <Image
        src='/images/scroll-up.svg'
        alt='Scroll to top'
        width={48}
        height={48}
      />
    </button>
  );
};

export default ScrollToTopButton;
