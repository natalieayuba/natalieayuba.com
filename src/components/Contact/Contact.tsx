import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Section } from "@/components/Section/Section";
import styles from "./Contact.module.css";

export const Contact = () => (
  <Section className={styles.container} id="contact">
    <h2 className={styles.heading}>
      Like what you see? <br /> Let&apos;s work together!
    </h2>
    <Paragraph className={styles.subheading}>
      I&apos;m always on the lookout for new opportunities and collaborations,
      so if you&apos;ve got a project in mind please get in touch at{" "}
      <a href="mailto:natalieayuba@hotmail.com" className={styles.button}>
        natalieayuba@hotmail.com
      </a>
    </Paragraph>
  </Section>
);
