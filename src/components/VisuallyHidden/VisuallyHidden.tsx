import clsx from "clsx";
import { type ElementType, type ReactNode } from "react";
import styles from "./VisuallyHidden.module.css";

interface VisuallyHiddenProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const VisuallyHidden = ({
  children,
  className,
  as: Component = "div",
}: VisuallyHiddenProps) => (
  <Component className={clsx(styles.container, className)}>
    {children}
  </Component>
);
