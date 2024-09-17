import React from 'react';
import projects from '../projects';
import { notFound } from 'next/navigation';
import ProjectTemplate from '../_components/ProjectTemplate';
import { toUrlParam } from '@/utils/urlUtils';

const Project = ({ params }: { params: { project: string } }) => {
  const project = projects.find(
    (project) => toUrlParam(project.name) === params.project
  );

  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
};

export default Project;
