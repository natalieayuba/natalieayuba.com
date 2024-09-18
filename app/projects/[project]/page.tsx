import React from 'react';
import projects from '../projects';
import { notFound } from 'next/navigation';
import { toUrlParam } from '@/utils/urlUtils';
import PageLayout from '@/app/_components/PageLayout';
import Breadcrumbs from './_components/Breadcrumbs';
import HeaderImage from './_components/HeaderImage';
import Details from './_components/Details';
import OtherProject from './_components/OtherProject';

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
      <div className='mt-24 leading-loose'>
        {project.content.map(({ heading, paragraphs }) => (
          <div
            key={heading}
            className='mb-16 flex flex-col items-center gap-3 [&>*]:max-w-xl [&>*]:mx-auto'
          >
            <h2 className='heading-md self-start mb-3 w-full'>{heading}</h2>
            {paragraphs.map((p) => p)}
          </div>
        ))}
        <OtherProject otherProject={project.otherProject} />
      </div>
    </PageLayout>
  );
};

export default Project;
