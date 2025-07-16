import { formatClassNames } from "@/utils/utils";
import { type ComponentProps } from "react";

export const Hyperlink = ({
  children,
  className,
  ...rest
}: ComponentProps<"a">) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className={formatClassNames([
      "font-medium text-purple transition-all duration-150 hover:brightness-[80%]",
      className,
    ])}
    {...rest}
  >
    {children}
  </a>
);
