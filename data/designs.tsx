import { ExternalLink } from '@/app/components/Links';
import React, { type ReactNode } from 'react';

export interface DesignProps {
  title: string;
  description: ReactNode;
  src: string;
}

export const designs = [
  {
    title: 'Stripped Sets',
    description: (
      <>
        A logo I designed as part of a logo contest for{' '}
        <ExternalLink href='https://www.instagram.com/stripped_sets/?hl=en'>
          Stripped Sets
        </ExternalLink>
        , an events management collective that promotes queer and POC performers
        in Norwich.
      </>
    ),
    src: '/designs/stripped-sets/stripped-sets-logo.png',
  },
  {
    title: "What You Sayin' UEA",
    description: (
      <>
        A logo I designed for the live web show What&apos;s Up, UEA? created by{' '}
        <ExternalLink href='https://www.instagram.com/ueatv/?hl=en'>
          UEATV
        </ExternalLink>
        , a broadcasting society at the University of East Anglia. The show
        tackled modern news in an accessible and entertaining manner for
        university students, highlighted in the vibrant and cartoony style of
        the logo.
      </>
    ),
    src: '/designs/wys-uea-logo.png',
  },
  {
    title: 'Faux Genie',
    description: (
      <>
        I briefly played lead guitar in a band called Faux Genie and also
        designed our logo and branding. Though we only lasted a few months and
        didn&apos;t make it to X Factor, it served as fun graphic design
        experience. I went for a playful, handwritten style and added some
        cosmic elements to match the genie/magic vibes.
      </>
    ),
    src: '/designs/faux-genie-logo.png',
  },
  {
    title: 'UEA Natural Hair Society',
    description: (
      <>
        I designed the branding for the{' '}
        <ExternalLink href='https://www.instagram.com/ueanaturalhairsoc/?hl=en'>
          Natural Hair Society at the University of East Anglia
        </ExternalLink>{' '}
        of which I was the social media manager for a few years. The colour
        scheme of salmon and pale blue were chosen to emphasise themes of
        beauty, haircare and femininity.
      </>
    ),
    src: '/designs/natural-hair-society-uea-logo.png',
  },
  {
    title: 'The BAME Collective',
    description: (
      <>
        I designed a landing page for{' '}
        <ExternalLink href='https://www.instagram.com/_bamecollective/'>
          The BAME Collective
        </ExternalLink>
        , a community for Black, Asian and Ethnic Minority STEM students in the
        UK that I briefly edited videos for. <br />
        ** Fun fact: this was the first UI design I ever created :)
      </>
    ),
    src: '/designs/bame-collective-web.png',
  },
  {
    title: 'UEA Student Union',
    description: (
      <>
        A redesign of the{' '}
        <ExternalLink href='https://www.ueasu.org/'>
          University of East Anglia&apos;s student union website
        </ExternalLink>{' '}
        to simplify the design and address some accessibility issues.
      </>
    ),
    src: '/designs/uea-su-web.png',
  },
  {
    title: 'Kookie Ko',
    description: (
      <>
        I redesigned the landing page of an online bakery called{' '}
        <ExternalLink href='https://kookiekonorwich.co.uk/'>
          Kookie Ko
        </ExternalLink>{' '}
        to address some colour contrast issues and update the branding to use
        more doughy colours in the design.
      </>
    ),
    src: '/designs/kookie-ko-web.png',
  },
  {
    title: 'Cafe Kino',
    description: (
      <>
        A redesign of{' '}
        <ExternalLink href='https://www.cafekino.coop/'>Cafe Kino</ExternalLink>
        , a vegan coffee shop and community venue in Bristol. I changed up the
        design a bit to incorporate complementary colours, address the low
        colour contrast, and improve upon the information architecture.
      </>
    ),
    src: '/designs/cafe-kino-web.png',
  },
];

export default designs;
