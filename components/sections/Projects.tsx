'use client';
import Image from 'next/image';
import { ButtonStyleLink } from '../Links';
import { forwardRef, useEffect, useRef } from 'react';
import SectionLayout from './SectionLayout';
import projects from '@/app/[projectName]/config';
import ExternalLinks from '../projects/ExternalLinks';
import scrollReveal from '@/utils/scrollReveal';

const Projects = forwardRef<HTMLElement>((props, ref) => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectsRef.current) {
      Array.from(projectsRef.current.children).forEach((ref, i) =>
        scrollReveal(ref as HTMLElement)
      );
    }
  }, []);

  const list = (list: string[]) => (
    <ul className='text-sm text-black-alpha-60'>
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
    <SectionLayout name={Projects.displayName} ref={ref}>
      <div
        className='my-16 mx-auto [&>*:nth-child(even)]:flex-row-reverse'
        ref={projectsRef}
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className='flex flex-wrap gap-x-16 gap-y-8 items-center mb-24 md:mt-12 md:mb-32'
          >
            <div className='flex-1 flex flex-row gap-4 md:gap-10 md:flex-none md:w-1/2 md:max-w-lg'>
              {project.headerImage.map((image) => (
                <div key={image} className='flex-1'>
                  <Image
                    src={image}
                    alt={`${project.name} Preview`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-auto rounded-3xl shadow-[0px_4px_24px_rgba(0,0,0,0.02)]'
                    priority
                  />
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-2 w-full md:flex-1'>
              <h3 className='text-2xl md:text-3xl font-bold'>{project.name}</h3>
              {list(project.roles)}
              <p>{project.description}</p>
              {project.technologies && list(project.technologies)}
              <div className='mt-4 flex gap-x-5 gap-y-3 flex-wrap'>
                <ButtonStyleLink href={`/${project.name.toLowerCase()}`}>
                  Read more
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
