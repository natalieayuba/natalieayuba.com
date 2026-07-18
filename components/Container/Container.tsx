import clsx from "clsx";
import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const Container = ({
  children,
  className,
  as: Component = "div",
}: ContainerProps) => (
  <Component className={clsx(styles.container, className)}>
    {children}
  </Component>
);
