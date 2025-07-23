import projects from "@/app/_configs/projects";
import { toUrlParam } from "@/utils/urlUtils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "./components/Breadcrumbs";
import Content from "./components/Content";
import Details from "./components/Details";
import HeaderImage from "./components/HeaderImage";
import OtherProject from "./components/OtherProject";

interface ProjectParamProps {
  params: { project: string };
}

export async function generateStaticParams() {
  return projects.map(({ name }) => ({ project: name }));
}

export async function generateMetadata({
  params,
}: ProjectParamProps): Promise<Metadata> {
  const project = projects.find(
    (project) => toUrlParam(project.name) === params.project,
  );

  return { title: project ? project.name : "" };
}

const Project = ({ params }: ProjectParamProps) => {
  const project = projects.find(
    (project) => toUrlParam(project.name) === params.project,
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="container animate-glideDown pt-28">
      <header>
        <Breadcrumbs />
        <h1 className="heading-lg mx-auto mt-10 max-w-3xl text-center md:mt-20">
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
