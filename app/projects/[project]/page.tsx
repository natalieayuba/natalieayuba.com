import React from 'react';
import projects from '../projects';
import { notFound } from 'next/navigation';
import { toUrlParam } from '@/utils/urlUtils';
import PageLayout from '@/app/_components/PageLayout';
import Breadcrumbs from './_components/Breadcrumbs';
import HeaderImage from './_components/HeaderImage';
import Details from './_components/Details';

const Project = ({ params }: { params: { project: string } }) => {
  const project = projects.find(
    (project) => toUrlParam(project.name) === params.project
  );

  if (!project) {
    notFound();
  }

  return (
    <PageLayout
      activeLink='Projects'
      className='animate-glide ease-out'
      style={{ animationDuration: '300ms' }}
    >
      <header className='pt-24 md:pt-32'>
        <Breadcrumbs />
        <h1 className='heading-lg text-center mt-10 md:mt-20 max-w-3xl mx-auto'>
          {project.heading}
        </h1>
        <HeaderImage projectName={project.name} />
      </header>
      <Details project={project} />
      <div className='mx-auto max-w-xl mt-24 leading-loose'>
        {project.content.map(({ heading, paragraphs }) => (
          <section
            key={heading}
            className='mb-16 flex flex-col items-center gap-3'
          >
            <h2 className='heading-md self-start mb-3'>{heading}</h2>
            {paragraphs.map((p) => p)}
          </section>
        ))}
      </div>
    </PageLayout>
  );
};

export default Project;
