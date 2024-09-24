import React from 'react';
import Image from 'next/image';

const About = () => (
  <section
    id='about'
    className='container flex justify-center pt-28 scroll-reveal'
  >
    <div className='lg:flex gap-0'>
      <div className='[&_p]:mb-4 flex-1 leading-loose'>
        <h2 className='heading-md leading-normal'>
          I&apos;m all about designing for a more inclusive and engaging digital
          world.
        </h2>
        <p>
          So far, I&apos;ve gained 2+ years professional experience as a{' '}
          <strong>mobile app and full-stack developer</strong>, both with a{' '}
          <strong>frontend focus</strong>. In these roles I{' '}
          <strong>advocated for usability and accessibility</strong> and{' '}
          <strong>led design sprints</strong> aiming to create products that put
          the user first rather than developing in a technical void.
        </p>
        <p>
          Aside from dev and design, I&apos;m also passionate about{' '}
          <strong>branding</strong>, <strong>illustration</strong>, and{' '}
          <strong>animation</strong>. I believe adding a bit of character to a
          design can really bring it to life and create a more enriching
          experience for users.
        </p>
        <p>
          When I&apos;m not designing or coding, you&apos;ll find me jamming
          with friends, binging horror flicks, or building intricately designed
          mansions in the Sims.
        </p>
      </div>
      <div className='lg:aspect-[1888.8/2,453.54] lg:w-[42%] relative'>
        <Image
          src='/decals/self-portrait.svg'
          alt='A self portrait'
          width={0}
          height={0}
          priority
          className='w-full h-auto max-w-md mx-auto lg:absolute -right-14'
        />
      </div>
    </div>
  </section>
);

export default About;
