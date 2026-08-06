import clsx from "clsx";
import { type ReactNode } from "react";
import styles from "./Paragraph.module.css";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={clsx(styles.paragraph, className)}>{children}</p>
);
