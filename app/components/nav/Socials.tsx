import { defaultAnimationInterval } from "@/config";
import { Hyperlink } from "../Hyperlink";
import Icon from "../Icon";

interface SocialsProps {
  animationDelay?: number;
}

export const socials = [
  {
    icon: "github",
    title: "Github",
    url: "https://github.com/natalieayuba",
  },
  {
    icon: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/natalieayuba/",
  },
];

const Socials = ({ animationDelay }: SocialsProps) => (
  <div className="flex items-center gap-4 text-purple">
    {socials.map(({ icon, title, url }, index) => (
      <Hyperlink
        key={icon}
        {...(animationDelay && {
          style: {
            animationDelay: `${
              animationDelay + defaultAnimationInterval * index
            }ms`,
          },
        })}
        href={url}
        className="animate-pop transition-none hover:scale-110 hover:brightness-100"
        title={title}
      >
        <Icon name={icon} />
      </Hyperlink>
    ))}
  </div>
);

export default Socials;
