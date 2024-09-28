import { ButtonStyleLink } from '../Links';
import SectionHeader from './SectionHeader';
import PreviewImage from '@/app/projects/components/PreviewImage';
import ExternalLinks from '@/app/projects/components/ExternalLinks';
import projects, { type ProjectProps } from '@/app/_data/projects';
import { forwardRef, useRef, type RefObject } from 'react';
import TransitionCurve from '../TransitionCurve';
import useObserver from '@/hooks/useObserver';

const Projects = forwardRef<
  HTMLHeadingElement,
  { designsHeadingRef: RefObject<HTMLHeadingElement> }
>(({ designsHeadingRef }, headingRef) => {
  const containerRef = useRef<HTMLElement>(null);

  const list = (list: string[]) => (
    <ul className='secondary-text'>
      {list.map((item) => (
        <li
          key={item}
          className={`inline after:content-['•'] after:mx-2 last:after:content-none`}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  const Project = ({ project }: { project: ProjectProps }) => {
    const ref = useRef<HTMLDivElement>(null);
    const visible = useObserver(ref, '-300px');

    return (
      <div
        ref={ref}
        key={project.name}
        className='md:flex gap-x-16 gap-y-8 items-center animate-glideUp'
        style={{
          animationPlayState: visible ? 'running' : 'paused',
        }}
      >
        <PreviewImage projectName={project.name} />
        <div className='flex flex-col w-full flex-1 max-w-lg gap-2'>
          <h3 className='heading-sm mb-[0.25em]'>{project.name}</h3>
          {list(project.role)}
          <p>{project.description}</p>
          {project.technologies && list(project.technologies)}
          <div className='mt-4 flex gap-4 md:4 flex-wrap'>
            <ButtonStyleLink href={`/projects/${project.name.toLowerCase()}`}>
              View case study
            </ButtonStyleLink>
            <ExternalLinks links={project.links} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id='projects'
      className='container pt-28 md:pt-48 relative'
      ref={containerRef}
    >
      <SectionHeader
        ref={headingRef}
        className='text-center mb-24'
        heading='Projects'
        caption='Here lies a collection of solo passion projects, coursework, and internship work.'
      />
      <div className='md:[&>*:nth-child(even)]:flex-row-reverse flex flex-col gap-16'>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
      <TransitionCurve
        from={containerRef}
        to={designsHeadingRef}
        curve='projects-line.svg'
        width={250}
        className='left-80'
        delta={0.8}
      />
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
