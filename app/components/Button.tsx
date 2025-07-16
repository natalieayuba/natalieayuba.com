import { formatClassNames } from "@/utils/utils";
import Link from "next/link";

interface ButtonProps {
  children: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => (
  <Link
    className={formatClassNames([
      "flex h-12 items-center justify-center rounded-md border-2 px-4 font-medium text-purple transition-[colors,transform,box-shadow] duration-150 hover:shadow-[-3px_4px_0_0] active:translate-y-0.5 active:shadow-[-1px_1px_0_0]",
      className,
    ])}
    {...rest}
  >
    {children}
  </Link>
);

export default Button;
