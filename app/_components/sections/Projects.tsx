'use client';
import { ButtonStyleLink } from '../Links';
import { forwardRef, useEffect, useRef } from 'react';
import scrollReveal from '@/utils/scrollReveal';
import { toUrlParam } from '@/utils/urlUtils';
import SectionLayout from './SectionLayout';
import SectionHeader from './SectionHeader';
import projects from '@/app/projects/projects';
import PreviewImage from '@/app/projects/_components/PreviewImage';
import ExternalLinks from '@/app/projects/_components/ExternalLinks';

const Projects = forwardRef<HTMLElement>((props, ref) => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectsRef.current) {
      Array.from(projectsRef.current.children).forEach((ref, i) =>
        scrollReveal(ref as HTMLDivElement)
      );
    }
  });

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

  return (
    <SectionLayout el={Projects} ref={ref}>
      <SectionHeader
        className='text-center mb-24'
        heading={Projects.displayName!}
        caption='Here lies a selection of my favourite projects,
          from solo passion projects to internship work.'
      />
      <div className='[&>*:nth-child(even)]:flex-row-reverse'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='flex flex-wrap gap-x-16 gap-y-8 items-center mt-4 mb-16 md:mt-12 md:mb-32'
          >
            <PreviewImage project={project} />
            <div className='flex flex-col gap-2 w-full md:flex-1'>
              <h3 className='heading text-2xl md:text-3xl'>{project.name}</h3>
              {list(project.role)}
              <p>{project.description}</p>
              {project.technologies && list(project.technologies)}
              <div className='mt-4 flex gap-4 md:4 flex-wrap'>
                <ButtonStyleLink
                  href={`/projects/${project.name.toLowerCase()}`}
                >
                  View case study
                </ButtonStyleLink>
                <ExternalLinks links={project.links} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
});

Projects.displayName = 'Projects';

export default Projects;
