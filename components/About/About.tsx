import { Container } from "@/components/Container/Container";
import Image from "next/image";
import styles from "./About.module.css";
import portrait from "./portrait.svg?url";

export const About = () => {
  return (
    <Container as="section" className={styles.container} id="about">
      <div className={styles.right}>
        <h2 className={styles.heading}>Hi, I&apos;m Nat!</h2>
        <p className={styles.paragraph}>
          I&apos;m a Bristol-based freelance creative using the web as the
          ultimate multimedia medium, combining illustration, animation, music,
          storytelling and code into one big smorgasbord of digital playfulness.
        </p>
        <p className={styles.paragraph}>
          Growing up, the web was a place where all my creative interests could
          coexist. I could spend hours playing flash games (RIP Poptropica),
          creating YouTube videos, discovering new music, or getting lost on
          Tumblr. I&apos;ve always seen the web as a creative, playful, and
          interactive multi-medium, which has heavily shaped my creative
          practice today.
        </p>
        <p className={styles.paragraph}>
          One BSc in Computer Graphics, Imaging and Multimedia, and several
          software development roles later, I now help local businesses and
          community organisations express their brands with personality, charm,
          and integrity. I also create fun little niche projects on the side
          inspired by music, film and pop culture.
        </p>
      </div>
      <div className={styles.left}>
        <Image src={portrait} alt="Self-portrait" className={styles.portrait} />
      </div>
    </Container>
  );
};
