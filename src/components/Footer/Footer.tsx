import { Container } from "@/components/Container/Container";
import Image from "next/image";
import styles from "./Footer.module.css";
import border from "./border.svg?url";
import chillinNat from "./chillin-nat.svg?url";

const socials = [
  { name: "Email", href: "mailto:natalieayuba@hotmail.com" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/natalieayuba/",
  },
  {
    name: "GitHub",
    href: "https://github.com/natalieayuba",
  },
  {
    name: "Buy Me a Coffee",
  },
];

export const Footer = () => (
  <Container as="footer" className={styles.container}>
    <p>© 2024-{new Date().getFullYear()} Natalie Ayuba. All rights reserved.</p>
    {socials.map(({ name, href }) => (
      <a key={name} title={name} href={href} className={styles.social}>
        {name}
      </a>
    ))}
    <Image src={border} alt="Hand-drawn border" className={styles.border} />
    <Image
      src={chillinNat}
      alt="Illustrated me chillin on the footer border"
      className={styles.avatar}
    />
  </Container>
);
