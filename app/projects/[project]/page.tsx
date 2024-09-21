import React from 'react';
import projects from '../projects';
import { notFound } from 'next/navigation';
import { toUrlParam } from '@/utils/urlUtils';
import Breadcrumbs from './_components/Breadcrumbs';
import HeaderImage from './_components/HeaderImage';
import Details from './_components/Details';
import Content from './_components/Content';
import OtherProject from './_components/OtherProject';

const Project = ({ params }: { params: { project: string } }) => {
  const project = projects.find(
    (project) => toUrlParam(project.name) === params.project
  );

  if (!project) {
    notFound();
  }

  return (
    <div className='animate-glide pt-28'>
      <header>
        <Breadcrumbs />
        <h1 className='heading-lg text-center mt-10 md:mt-20 max-w-3xl mx-auto'>
          {project.heading}
        </h1>
        <HeaderImage projectName={project.name} />
      </header>
      <Details project={project} />
      <Content content={project.content} />
      <OtherProject otherProject={project.otherProject} />
    </div>
  );
};

export default Project;
