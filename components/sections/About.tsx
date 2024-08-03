import React, { forwardRef, useEffect, useRef } from 'react';
import SectionLayout from './SectionLayout';
import scrollReveal from '@/utils/scrollReveal';
import { InlineLink } from '../Links';
import Image from 'next/image';

const About = forwardRef<HTMLElement>((props, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const angles = [
    {
      name: 'Top',
      position: 'top-0 left-0',
    },
    {
      name: 'Bottom',
      position: 'bottom-0 right-0',
    },
  ];

  useEffect(() => {
    if (contentRef.current) {
      scrollReveal(contentRef.current);
    }
  });

  return (
    <SectionLayout
      name={About.displayName}
      ref={ref}
      className='flex justify-center'
    >
      <div
        ref={contentRef}
        className='relative flex flex-col gap-4 py-12 px-16'
      >
        <p>
          Hi, I&apos;m Natalie and I enjoy creating digital experiences to make
          lives a little bit easier or more whimsical. I fell in love with
          interfaces when I ventured into the world of{' '}
          <InlineLink href='https://www.youtube.com'>YouTube</InlineLink>
          {', '}
          <InlineLink href='https://www.poptropica.com'>Poptropica</InlineLink>
          {', and '}
          <InlineLink href='https://www.girlsgogames.com'>
            GirlsGoGames
          </InlineLink>
          {' as'} a child. I loved seeing how interfaces would be updated over
          time, noticing the improvements in layout, styling, and branding as
          the apps grew more popular and the study of user experience expanded
          (YouTube moving the video description from the right of the video
          player to underneath it was mind-blowing to my 7 year old self). I
          went on to study Computer Graphics, Imaging and Multimedia at
          university to further explore my interest in interface design and web
          development.
        </p>
        <p>
          Fast-forward to today, I&apos;ve gained professional experience in
          mobile and full-stack development with a focus on designing and
          building digital interfaces. My main focus now is to continue to grow
          as a front-end developer and bring user experience to the forefront of
          my work.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m usually jamming with some friends,
          binging horror flicks, or building intricately designed mansions on
          the Sims.
        </p>
        {angles.map(({ name, position }) => (
          <Image
            key={name}
            alt={`${name} of frame`}
            src={`/images/${name.toLowerCase()}-angle.svg`}
            width={0}
            height={0}
            sizes='100vw'
            className={`absolute h-12 w-auto ${position}`}
          />
        ))}
      </div>
    </SectionLayout>
  );
});

export default About;

About.displayName = 'About';
