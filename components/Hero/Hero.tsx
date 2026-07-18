import { Container } from "@/components/Container/Container";
import Image from "next/image";
import styles from "./Hero.module.css";
import hero from "./hero.svg?url";
import whimsical from "./whimsical.svg?url";

export const Hero = () => (
  <Container as="section" className={styles.container}>
    <h1 className={styles.heading}>
      <span className={styles.forename}>Natalie</span>{" "}
      <span className={styles.surname}>Ayuba</span>
      <Image src={hero} alt="Hero image" className={styles.image} aria-hidden />
    </h1>
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
  </Container>
);
