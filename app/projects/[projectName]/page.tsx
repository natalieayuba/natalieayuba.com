import Header from '@/components/Header';
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
    <section className={`mb-16 flex flex-col items-center gap-3 ${className}`}>
      <h2 className='heading-md self-start'>{heading}</h2>
      {content}
    </section>
  );

  const duration = (startDate: Date, endDate: Date) => {
    let months = (startDate.getFullYear() - endDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    return `${months <= 0 ? 0 : months} months`;
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
    <>
      <Header activeLink='Projects' />
      <PageLayout>
        <header className='flex flex-col items-center mt-12'>
          <h1 className='heading-lg'>{project.name}</h1>
          <div className='h-80 relative w-full my-12'>
            {project.images.map((image) => (
              <Image key={image} src={image} alt={project.name} fill />
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
              <li>
                <ExternalLinks links={project.links} />
              </li>
            </ul>
          </section>
          {section('Overview', <p>{project.overview}</p>, 'mt-0 md:flex-1')}
        </div>
        {project.content &&
          project.content.map(({ heading, content }) =>
            section(heading, content)
          )}
      </PageLayout>
    </>
  );
};

export default ProjectPage;
