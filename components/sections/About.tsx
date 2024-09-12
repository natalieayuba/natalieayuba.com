import React, { forwardRef, useEffect, useRef, type RefObject } from 'react';
import SectionLayout from './SectionLayout';
import scrollReveal from '@/utils/scrollReveal';
import { InlineLink } from '../Links';
import Image from 'next/image';

const About = forwardRef<HTMLElement>((props, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      scrollReveal(contentRef.current);
    }
  });

  return (
    <div
      id='about'
      ref={ref as RefObject<HTMLDivElement>}
      className='flex justify-center'
    >
      <div ref={contentRef} className='flex gap-12 pt-24'>
        <div className='[&_p]:mb-4 flex-1 mr-10'>
          <h2 className='heading-lg mb-8'>About me.</h2>
          <p>
            I first gained interest in user interfaces when I ventured into the
            world of{' '}
            <InlineLink href='https://www.youtube.com'>YouTube</InlineLink>
            {', '}
            <InlineLink href='https://www.poptropica.com'>
              Poptropica
            </InlineLink>
            {', and '}
            <InlineLink href='https://www.girlsgogames.com'>
              GirlsGoGames
            </InlineLink>
            {' as'} a child. I loved seeing how the interfaces would be updated
            over time, noticing the improvements in layout, styling, and
            branding as the apps grew more popular and UX standards became
            established. I went on to study Computer Graphics, Imaging and
            Multimedia at university to further explore my interest in interface
            design and web development.
          </p>
          <p>
            Fast-forward to today, I&apos;ve gained professional experience in
            mobile and full-stack development with a focus on designing and
            building user interfaces. My aim now is to continue to grow as a
            front-end developer and create products to make life easier and more
            enjoyable for humans.
          </p>
          <p>
            When I&apos;m not coding or designing, I&apos;m usually jamming with
            friends, binging horror flicks, or building intricately designed
            mansions on the Sims.
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;

About.displayName = 'About';
