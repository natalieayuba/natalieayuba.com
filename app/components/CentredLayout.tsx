import { type ReactNode } from "react";

interface CentredLayoutProps {
  heading: string;
  subheading: string;
  children?: ReactNode;
}

const CentredLayout = ({
  heading,
  subheading,
  children,
}: CentredLayoutProps) => (
  <div className="container flex flex-1 flex-col items-center justify-center pt-48 text-center">
    <h1 className="heading-lg mb-2">{heading}</h1>
    <p className="max-w-md">{subheading}</p>
    {children}
  </div>
);

export default CentredLayout;
