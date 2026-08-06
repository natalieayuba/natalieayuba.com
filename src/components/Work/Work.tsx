import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Section } from "@/components/Section/Section";
import Image from "next/image";
import styles from "./Work.module.css";
import workNat from "./work-nat.svg?url";

const projects = [
  "barclaycard",
  "wys-uea",
  "past",
  "uea-natural-hair-society",
  "yondur",
  "luxe",
  "patch-and-play",
  "tapestry",
  "stripped-sets",
  "faux-genie",
  "qpoc-jam",
];

export const Work = () => (
  <Section className={styles.container} id="work">
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>Selected work</h1>
    </div>
    <Paragraph className={styles.subheading}>
      Here lies a random collection of personal projects, commissions, and
      collaborations that I really enjoyed working on.
    </Paragraph>
    <div className={styles.grid}>
      {projects.map((project) => (
        <a key={project} className={styles.gridCell}>
          <img
            src={`/projects/${project}/${project}-thumbnail.png`}
            alt={project}
            className={styles.thumbnail}
          />
        </a>
      ))}
    </div>
    <Image
      className={styles.critic}
      src={workNat}
      alt="Illustrated me dressed as an art critic"
    />
  </Section>
);
