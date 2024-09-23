import React from 'react';
import { notFound } from 'next/navigation';
import { toUrlParam } from '@/utils/urlUtils';
import Breadcrumbs from './components/Breadcrumbs';
import HeaderImage from './components/HeaderImage';
import Details from './components/Details';
import Content from './components/Content';
import OtherProject from './components/OtherProject';
import projects from '@/data/projects';

const Project = ({ params }: { params: { project: string } }) => {
  const project = projects.find(
    (project) => toUrlParam(project.name) === params.project
  );

  if (!project) {
    notFound();
  }

  return (
    <div className='animate-glide pt-28 container'>
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
