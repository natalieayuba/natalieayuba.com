import { Container } from "@/components/Container/Container";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroNat from "./hero-nat.svg?url";
import name from "./name.svg?url";
import whimsical from "./whimsical.svg?url";

export const Hero = () => (
  <Container as="section" className={styles.container}>
    <div className={styles.content}>
      <div className={styles.headingWrapper}>
        <VisuallyHidden as="h1">Natalie Ayuba</VisuallyHidden>
        <Image
          src={name}
          alt="Natalie Ayuba"
          className={styles.heading}
          loading="eager"
          aria-hidden
          preload
        />
        <Image
          src={heroNat}
          alt="A cute little illustrated portrait of me"
          className={styles.image}
          loading="eager"
          preload
        />
      </div>
      <p className={styles.subheading}>
        Creative developer & designer with a{" "}
        <span className={styles.whimsicalContainer}>
          <span className={styles.whimsicalText}>whimsical</span>
          <Image
            className={styles.whimsicalHandwritten}
            src={whimsical}
            alt="Whimsical"
            aria-hidden
          />
        </span>{" "}
        touch
      </p>
    </div>
  </Container>
);
