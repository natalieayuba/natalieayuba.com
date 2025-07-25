import projects, { type ProjectProps } from "@/app/_configs/projects";
import ExternalLinks from "@/app/work/components/ExternalLinks";
import PreviewImage from "@/app/work/components/PreviewImage";
import useObserver from "@/hooks/useObserver";
import Image from "next/image";
import { forwardRef, useRef, type RefObject } from "react";
import Button from "../Button";
import { navLinks } from "../nav/NavLinks";
import TransitionCurve from "../TransitionCurve";
import SectionHeader from "./SectionHeader";

const Work = forwardRef<
  HTMLHeadingElement,
  { designsHeadingRef: RefObject<HTMLHeadingElement> }
>(({ designsHeadingRef }, headingRef) => {
  const containerRef = useRef<HTMLElement>(null);

  const list = (list: string[]) => (
    <ul className="secondary-text">
      {list.map((item) => (
        <li
          key={item}
          className={`inline after:mx-2 after:content-['•'] last:after:content-none`}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  const Project = ({ project }: { project: ProjectProps }) => {
    const ref = useRef<HTMLDivElement>(null);
    const visible = useObserver(ref, "-300px");

    return (
      <div
        ref={ref}
        key={project.name}
        className="animate-glideUp items-center gap-x-16 gap-y-8 md:flex"
        style={{
          animationPlayState: visible ? "running" : "paused",
        }}
      >
        <PreviewImage projectName={project.name} />
        <div className="flex w-full max-w-lg flex-1 flex-col gap-2">
          <div className="relative mb-3 h-8" title={project.name}>
            <Image
              alt={`${project.name} logo`}
              src={`/projects/${project.name.toLowerCase()}/${project.name.toLowerCase()}-logo${project.name === "PAST" ? "-simple" : ""}.png`}
              fill
              className="object-contain object-left"
            />
          </div>
          {list(project.role)}
          <p>{project.description}</p>
          {project.technologies && list(project.technologies)}
          <div className="md:4 mt-4 flex flex-wrap gap-4">
            <Button href={`/work/${project.name.toLowerCase()}`}>
              Read case study
            </Button>
            <ExternalLinks links={project.links} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id={navLinks[2].name.toLowerCase()}
      className="container relative pt-28 md:pt-48"
      ref={containerRef}
    >
      <SectionHeader
        ref={headingRef}
        className="mb-24 text-center"
        heading={navLinks[2].name}
        caption="Here lies a collection of solo passion projects, coursework, and internship work."
      />
      <div className="flex flex-col gap-16 md:[&>*:nth-child(even)]:flex-row-reverse">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
      <TransitionCurve
        from={containerRef}
        to={designsHeadingRef}
        curve="projects-line.svg"
        position={{ left: "15%", right: "50%", top: "99.4%" }}
        delta={0.8}
      />
    </section>
  );
});

Work.displayName = "Work";

export default Work;
