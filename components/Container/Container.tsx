import clsx from "clsx";
import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

export const Container = ({
  children,
  className,
  as: Component = "div",
  id,
}: ContainerProps) => (
  <Component className={clsx(styles.container, className)} id={id}>
    {children}
  </Component>
);
