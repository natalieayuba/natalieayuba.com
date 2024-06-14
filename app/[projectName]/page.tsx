import React from 'react';
import projects from './config';
import { notFound } from 'next/navigation';
import ProjectTemplate from '@/components/projects/ProjectTemplate';

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectName: project.name.toLowerCase().replace(' ', '-'),
  }));
}

const Project = ({ params }: { params: { projectName: string } }) => {
  const project = projects.find(
    (project) =>
      project.name.toLowerCase().replace(' ', '-') === params.projectName
  );

  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
};

export default Project;
