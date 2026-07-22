import { type ReactNode } from "react";
import styles from "./Paragraph.module.css";

interface ParagraphProps {
  children: ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => (
  <p className={styles.paragraph}>{children}</p>
);
