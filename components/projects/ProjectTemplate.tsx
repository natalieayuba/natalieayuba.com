'use client';
import moment from 'moment';
import React from 'react';
import PageLayout from '../PageLayout';
import ExternalLinks from './ExternalLinks';
import type { ProjectProps } from '@/app/[projectName]/config';
import Image from 'next/image';
import { navLinks } from '@/config';
import { InlineLink } from '../Links';

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

  const breadcrumbs = (
    <div className='mb-12'>
      {[
        navLinks.find(({ name }) => name === 'Home') as {
          name: string;
          url: string;
        },
        navLinks.find(({ name }) => name === 'Projects') as {
          name: string;
          url: string;
        },
      ].map(({ name, url }) => (
        <span key={name} className={`after:content-['>'] after:mx-2`}>
          <InlineLink href={url}>{name}</InlineLink>
        </span>
      ))}
      <span>{project.name}</span>
    </div>
  );

  return (
    <PageLayout
      activeLink='Projects'
      className='animate-glide duration-700 ease-out'
    >
      <header className='flex flex-col items-center mt-10 md:mt-20'>
        {breadcrumbs}
        <h1 className='heading-lg'>{project.name}</h1>
        <div className='w-full my-10 md:mt-20 md:mb-32 flex gap-[6%] justify-center'>
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
      <div className='mx-auto max-w-4xl mb-24'>
        <div className='flex flex-wrap md:flex-row-reverse gap-12'>
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
          project.content.map(({ heading, paragraphs }) =>
            section(heading, paragraphs, '')
          )}
      </div>
    </PageLayout>
  );
};

export default ProjectTemplate;
