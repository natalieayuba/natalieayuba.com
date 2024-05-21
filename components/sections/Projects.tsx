import Image from 'next/image';
import { Button } from '../Links';
import { forwardRef } from 'react';
import SectionLayout from './SectionLayout';
import projects from '@/app/projects/config';
import ExternalLinks from '../projects/ExternalLinks';

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <SectionLayout title={Projects.displayName} ref={ref}>
      <div className='my-16'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='flex flex-wrap gap-12 items-center mb-24 md:mt-12 md:mb-24'
          >
            <div className='flex-1 flex flex-row gap-10 md:flex-none md:w-1/2 md:max-w-md'>
              {project.images.map((image) => (
                <div key={image} className='flex-1'>
                  <Image
                    src={image}
                    alt={`${project.name} Preview`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-auto rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.02)]'
                    priority
                  />
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-2 w-full md:flex-1'>
              <h3 className='text-2xl md:text-3xl font-bold'>{project.name}</h3>
              <ul className='text-sm text-black-alpha-60 flex flex-wrap'>
                {project.roles.map((role) => (
                  <li
                    key={role}
                    className={`after:content-['•'] after:mx-3 last:after:content-none`}
                  >
                    {role}
                  </li>
                ))}
              </ul>
              <p>{project.description}</p>
              <ul className='text-sm text-black-alpha-60 flex flex-wrap'>
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className={`after:content-['•'] after:mx-3 last:after:content-none`}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <div className='mt-4 flex gap-4 flex-wrap'>
                <Button
                  href={`/projects/${project.name.toLowerCase()}`}
                  text='Read more'
                />
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
