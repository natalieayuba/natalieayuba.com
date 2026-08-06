import type { Metadata } from "next";
import Button from "./components/Button";
import CentredLayout from "./components/CentredLayout";

const title = "Page Not Found";
export const metadata: Metadata = { title };

const NotFound = () => (
  <CentredLayout heading="404" subheading={title}>
    <Button href="/" className="mt-12">
      Return to home
    </Button>
  </CentredLayout>
);

export default NotFound;
