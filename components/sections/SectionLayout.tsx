import { headerHeight } from '@/config';
import {
  forwardRef,
  useEffect,
  useRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from 'react';
import scrollReveal from '@/utils/scrollReveal';

interface SectionProps {
  el: ForwardRefExoticComponent<RefAttributes<HTMLElement>>;
  children: ReactNode;
  className?: string;
}

const SectionLayout = forwardRef<HTMLElement, SectionProps>(
  ({ el, children, className }, ref) => {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if (headingRef.current) {
        scrollReveal(headingRef.current);
      }
    });

    return (
      <section
        id={el.displayName?.toLowerCase()}
        ref={ref}
        className={`pt-28 ${className ? ` ${className}` : ''}`}
      >
        {children}
      </section>
    );
  }
);

SectionLayout.displayName = 'SectionLayout';

export default SectionLayout;
