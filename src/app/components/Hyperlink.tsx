import { formatClassNames } from "@/utils/utils";
import { type ComponentProps } from "react";

interface HyperlinkProps extends ComponentProps<"a"> {
  external?: boolean;
}

export const Hyperlink = ({
  children,
  className,
  external = true,
  ...rest
}: HyperlinkProps) => (
  <a
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    className={formatClassNames(
      "font-medium text-purple transition-all duration-150 hover:brightness-[80%]",
      className,
    )}
    {...rest}
  >
    {children}
  </a>
);
