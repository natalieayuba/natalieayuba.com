import { defaultAnimationInterval } from "@/config";
import Button from "../Button";
import { navLinks } from "./NavLinks";
import Socials, { socials } from "./Socials";

interface UtilitiesProps {
  className?: string;
}

const Utilities = ({ className }: UtilitiesProps) => (
  <div className={className}>
    <Socials animationDelay={defaultAnimationInterval * navLinks.length} />
    <Button
      href="mailto:natalieayuba@hotmail.com"
      title="Send me an email"
      className="animate-pop cursor-mailto"
      style={{
        animationDelay: `${defaultAnimationInterval * (navLinks.length + socials.length)}ms`,
      }}
    >
      Get in touch
    </Button>
  </div>
);

export default Utilities;
