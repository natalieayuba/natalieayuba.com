import Image from "next/image";
import { forwardRef, useRef, type RefObject } from "react";
import { navLinks } from "../nav/NavLinks";
import TransitionCurve from "../TransitionCurve";

const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"];

const About = forwardRef<
  HTMLHeadingElement,
  { projectsHeadingRef: RefObject<HTMLHeadingElement> }
>(({ projectsHeadingRef }, headingRef) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id={navLinks[1].name.toLowerCase()}
      className="container flex items-center justify-center pt-28 min-doodles:h-screen min-doodles:pt-0"
    >
      <div className="relative gap-8 lg:flex" ref={containerRef}>
        <div className="mb-4 max-w-prose flex-1 lg:max-w-none">
          <h2 className="heading-md" ref={headingRef}>
            About me
          </h2>
          <div className="leading-relaxed [&_p]:mb-[1rem]">
            <p>
              With a strong foundation in both software development and art &
              design, I create interfaces that are not only performant and
              functional, but also pleasing to the eye. I bring brand identities
              to life using visual design, illustration, and animation where it
              adds meaning and impact. If you&apos;re lookin for something
              on-brand and full of personality — I&apos;ve got you.
            </p>
            <p>
              I&apos;m also a big advocate for design thinking. I ensure every
              product I create not only meets client needs, but is intuitive and
              thoughtfully-crafted for your users, delivering the best user
              experience possible.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me jamming with
              friends, watching horror flicks, or building intricately designed
              mansions in the Sims.
            </p>
          </div>
          <div title="My tech stack">
            <Image
              src="/decals/my-tech-stack.svg"
              alt="My tech stack"
              width={0}
              height={0}
              className="mx-auto mt-6 w-auto"
            />
          </div>
          <div className="mt-2 flex justify-center">
            {techStack.map((name) => (
              <div title={name} key={name}>
                <Image
                  src={`/icons/${name.split(/[ .]+/)[0].toLowerCase()}-icon.svg`}
                  alt={`${name} icon`}
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src="/decals/self-portrait.svg"
            alt="An illustrted self portrait"
            width={0}
            height={0}
            className="w-full -rotate-3"
            priority
          />
        </div>
        <TransitionCurve
          from={containerRef}
          to={projectsHeadingRef}
          curve="about-line.svg"
          delta={0.6}
          position={{ left: "50%", right: "25%", top: "88%" }}
        />
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
