import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Section } from "@/components/Section/Section";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import Image from "next/image";
import heading from "./about-heading.svg?url";
import styles from "./About.module.css";
import portrait from "./portrait.svg?url";
import pronouns from "./pronouns.svg?url";

export const About = () => (
  <Section className={styles.container} id="about">
    <div className={styles.content}>
      <div className={styles.headingContainer}>
        <VisuallyHidden as="h2">Hi, I&apos;m Nat!</VisuallyHidden>
        <VisuallyHidden as="p">My pronouns are she/her.</VisuallyHidden>
        <Image
          src={heading}
          className={styles.heading}
          alt="Hi, I'm Nat!"
          aria-hidden
        />
        <Image
          src={pronouns}
          className={styles.pronouns}
          alt="My pronouns are she/her"
          aria-hidden
        />
      </div>
      <div className={styles.text}>
        <Paragraph>
          I&apos;m just a girl who loves visual storytelling. Growing up, I was
          fascinated by the cartoons, illustrated poetry books, and flash games
          I loved (RIP Poptropica), and by the developers, designers, and
          artists whose love for their craft shone through the playfulness and
          whimsy of their art. People who go that extra mile, adding a little
          sprinkle sprinkle of pizzazz, no matter how small, just to create fun,
          engaging experiences, have inspired me to create and tell stories too.
        </Paragraph>
        <Paragraph>
          One BSc in Computer Graphics, Imaging and Multimedia, and several
          software development roles later, I now create and collaborate on fun
          projects across web, design, illustration, and more, that center the
          things I love - community, intersectionality, music, and pop culture -
          with hopes of putting a smile on someone&apos;s face, just like other
          artists have done for me.
        </Paragraph>
      </div>
      <Image src={portrait} alt="Self-portrait" className={styles.portrait} />
    </div>
  </Section>
);
