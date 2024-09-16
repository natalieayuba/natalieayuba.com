'use client';
import moment from 'moment';
import React from 'react';
import PageLayout from '../../_components/PageLayout';
import ExternalLinks from './ExternalLinks';
import type { ProjectProps } from '@/app/[projectName]/projects';
import HeaderImage from './HeaderImage';

const ProjectTemplate = ({ project }: { project: ProjectProps }) => {
  const section = (
    heading: string,
    content: JSX.Element,
    className?: string
  ) => (
    <section
      key={heading}
      className={`mb-12 flex flex-col items-center gap-3 ${className}`}
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
    <PageLayout
      activeLink='Projects'
      className='animate-glide ease-out'
      style={{ animationDuration: '300ms' }}
    >
      <header className='mt-4 md:mt-20'>
        <h1 className='heading-lg text-center'>{project.name}</h1>
        <HeaderImage project={project} className='my-10' />
      </header>
      <div className='mx-auto max-w-4xl mb-24'>
        <div className='flex flex-wrap md:flex-row-reverse gap-12'>
          <section>
            <ul className='w-full md:w-[300px]'>
              {summary.map(
                ({ heading, data }) =>
                  data && (
                    <li key={heading} className='mb-3'>
                      <span className='secondary-text block'>{heading}</span>
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
          project.content.map(({ heading, paragraphs }) =>
            section(heading, paragraphs, '')
          )}
      </div>
    </PageLayout>
  );
};

export default ProjectTemplate;
