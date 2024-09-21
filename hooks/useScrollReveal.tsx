'use client';
import { useEffect } from 'react';

const useScrollReveal = () =>
  useEffect(() => {
    const elements = document.getElementsByClassName('scroll-reveal');
    Array.from(elements).forEach((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            (el as HTMLElement).style.opacity = '1';
            (el as HTMLElement).style.transform = 'translateY(0)';
          }
        },
        { rootMargin: '-300px' }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  });

export default useScrollReveal;
