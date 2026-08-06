'use client';
import { useEffect, useState, type RefObject } from 'react';
import useIsMobile from './useIsMobile';

const useScrollReveal = (ref: RefObject<HTMLElement>, rootMargin: string) => {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(entry.isIntersecting);
        },
        { ...(!isMobile && { rootMargin }) }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  });

  return visible;
};

export default useScrollReveal;
