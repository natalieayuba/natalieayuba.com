import {
  Container,
  type ContainerProps,
} from "@/components/Container/Container";
import clsx from "clsx";
import styles from "./Section.module.css";

export const Section = ({ children, className, ...rest }: ContainerProps) => (
  <Container
    {...rest}
    as="section"
    className={clsx(className, styles.container)}
  >
    {children}
  </Container>
);
