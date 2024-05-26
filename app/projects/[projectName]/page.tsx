import PageLayout from '@/components/PageLayout';
import React from 'react';
import projects from '../config';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ExternalLinks from '@/components/projects/ExternalLinks';

export async function generateStaticParams() {
  return projects.map((project) => ({ projectName: project.name }));
}

const ProjectPage = ({ params }: { params: { projectName: string } }) => {
  const project = projects.find(
    (project) => project.name.toLowerCase() === params.projectName
  );

  if (!project) notFound();

  const section = (
    heading: string,
    content: JSX.Element,
    className?: string
  ) => (
    <section className={`mb-12 flex flex-col items-center gap-3 ${className}`}>
      <h2 className='heading-md self-start'>{heading}</h2>
      {content}
    </section>
  );

  const duration = (startDate: Date, endDate: Date) => {
    let months = (startDate.getFullYear() - endDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  };

  const summary = [
    { heading: 'Sector', data: project.sector },
    { heading: 'Roles', data: project.roles.join(', ') },
    {
      heading: 'Technologies',
      data: project.technologies.join(', '),
    },
    {
      heading: 'Project duration',
      data: duration(new Date(project.startDate), new Date(project.endDate)),
    },
  ];

  return (
    <PageLayout activeLink='Projects'>
      <header className='flex flex-col items-center mt-4 md:mt-20'>
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
      <div className='flex flex-wrap md:flex-row-reverse gap-12 '>
        <section>
          <ul className='w-full md:w-[300px]'>
            {summary.map(({ heading, data }) => (
              <li key={heading} className='mb-3'>
                <span className='font-bold text-sm block'>{heading}</span>
                <span>{data || 'N/A'}</span>
              </li>
            ))}
            <li className='flex gap-4'>
              <ExternalLinks links={project.links} />
            </li>
          </ul>
        </section>
        {section('Overview', <p>{project.overview}</p>, 'mt-0 md:flex-1')}
      </div>
      {project.content &&
        project.content.map(({ heading, paragraphs }) =>
          section(heading, paragraphs)
        )}
    </PageLayout>
  );
};

export default ProjectPage;
