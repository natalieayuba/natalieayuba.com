import React from 'react';
import projects from './config';
import { notFound } from 'next/navigation';
import ProjectTemplate from '@/components/projects/ProjectTemplate';
import { toUrlParam } from '@/utils/urlUtils';

const Project = ({ params }: { params: { projectName: string } }) => {
  const project = projects.find(
    (project) => toUrlParam(project.name) === params.projectName
  );

  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
};

export default Project;
