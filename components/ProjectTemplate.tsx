'use client';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import PageLayout from './PageLayout';
import ExternalLinks from './projects/ExternalLinks';
import type { ProjectProps } from '@/app/[projectName]/config';
import Image from 'next/image';
import scrollReveal from '@/utils/scrollReveal';

const ProjectTemplate = ({ project }: { project: ProjectProps }) => {
  const projectRef = useRef<HTMLElement[]>([]);
  let i = 0;

  useEffect(() => {
    if (projectRef.current) {
      Array.from(projectRef.current).forEach((ref, i) =>
        scrollReveal(ref as HTMLElement)
      );
    }
  }, []);

  const section = (
    heading: string,
    content: JSX.Element,
    className?: string,
    index?: number
  ) => (
    <section
      key={heading}
      className={`mb-12 flex flex-col items-center gap-3 ${className}`}
      ref={(el: HTMLElement) => {
        if (index) {
          projectRef.current[(i += index)] = el;
        }
      }}
    >
      <h2 className='heading-md self-start'>{heading}</h2>
      {content}
    </section>
  );

  const duration = (startDate: string, endDate: string) => {
    const months = moment(endDate).diff(moment(startDate), 'months');

    if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else {
      const weeks = moment(endDate).diff(moment(startDate), 'weeks');
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    }
  };

  const summary = [
    { heading: 'Sector', data: project.sector },
    { heading: 'Roles', data: project.roles.join(', ') },
    {
      heading: 'Technologies',
      data: project.technologies ? project.technologies.join(', ') : '',
    },
    {
      heading: 'Project duration',
      data: duration(project.startDate, project.endDate),
    },
  ];

  return (
    <PageLayout activeLink='Projects'>
      <header className='flex flex-col items-center mt-10 md:mt-20'>
        <h1
          className='heading-lg'
          ref={(el: HTMLHeadingElement) => {
            projectRef.current[i] = el;
          }}
        >
          {project.name}
        </h1>
        <div
          className='w-full my-10 md:mt-20 md:mb-32 flex gap-[6%] justify-center'
          ref={(el: HTMLDivElement) => {
            projectRef.current[(i += 1)] = el;
          }}
        >
          {project.headerImage.map((image) => (
            <Image
              key={image}
              src={image}
              alt={`${project.name} header image`}
              width='0'
              height='0'
              sizes='100vw'
              className={`h-auto rounded-2xl ${
                project.headerImage.length > 1 ? 'w-1/4' : 'w-full max-w-3xl'
              }`}
            />
          ))}
        </div>
      </header>
      <div className='mx-auto max-w-4xl'>
        <div
          className='flex flex-wrap md:flex-row-reverse gap-12'
          ref={(el: HTMLDivElement) => {
            projectRef.current[(i += 1)] = el;
          }}
        >
          <section>
            <ul className='w-full md:w-[300px]'>
              {summary.map(
                ({ heading, data }) =>
                  data && (
                    <li key={heading} className='mb-3'>
                      <span className='font-bold text-sm block'>{heading}</span>
                      <span>{data}</span>
                    </li>
                  )
              )}
              <li className='flex gap-4'>
                <ExternalLinks links={project.links} />
              </li>
            </ul>
          </section>
          {section('Overview', <p>{project.overview}</p>, 'mt-0 md:flex-1')}
        </div>
        {project.content &&
          project.content.map(({ heading, paragraphs }, index) =>
            section(heading, paragraphs, '', index)
          )}
      </div>
    </PageLayout>
  );
};

export default ProjectTemplate;
