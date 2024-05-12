import Image from 'next/image';
import { technologies, roles } from '@/config';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { LuPresentation } from 'react-icons/lu';
import { Button, ExternalLink } from '../Links';
import { forwardRef } from 'react';

const Projects = forwardRef<HTMLElement>((props, ref) => {
  const projects = [
    {
      name: 'Colourify',
      description:
        'Colourify is a web application that generates a colour palette from the art of your top albums on Spotify.',
      images: ['/colourify.png'],
      roles: [roles.frontend],
      technologies: [
        technologies.react,
        technologies.javaScript,
        technologies.express,
        technologies.spotifyAPI,
        technologies.tailwindCSS,
      ],
      projectUrl: '#',
      codeUrl: 'https://github.com/natalieayuba/colourify',
      demoUrl: '#',
    },
    {
      name: 'PAST',
      description:
        'PAST is a Graded Exercise Therapy (GET) mobile app for people with post-stroke fatigue that allows users to log their daily physical activity and resulting fatigue levels throughout the 6-step therapy programme.',
      images: ['/past-1.png', '/past-2.png'],
      roles: [
        roles.frontend,
        roles.prototyping,
        roles.visualDesign,
        roles.logoDesign,
      ],
      technologies: [technologies.reactNative, technologies.javaScript],
      projectUrl: '#',
      presentationUrl:
        'https://docs.google.com/presentation/d/1hIhJQrXa5Qd5Lhggceuda70YpJB00HhdpQeEzL4tc2w/edit#slide=id.p',
    },
  ];

  return (
    <section id='projects' className='flex flex-col py-12 md:py-24' ref={ref}>
      <h2 className='text-4xl md:text-6xl font-bold text-center md:mb-6'>
        Projects.
      </h2>
      <div className='my-16'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='flex flex-wrap gap-12 items-center mb-24 md:mt-12 md:mb-24'
          >
            <div className='flex-1 flex flex-row gap-10 md:flex-none md:w-1/2 md:max-w-md'>
              {project.images.map((image) => (
                <div key={image} className='flex-1'>
                  <Image
                    src={image}
                    alt={`${project.name} Preview`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-auto rounded-2xl pointer-events-none shadow-[0px_4px_24px_rgba(0,0,0,0.02)]'
                    priority
                  />
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-2 w-full md:flex-1'>
              <h3 className='text-2xl md:text-3xl font-bold'>{project.name}</h3>
              <ul className='text-sm text-black-alpha-60 flex flex-wrap'>
                {project.roles.map((role) => (
                  <li
                    key={role}
                    className={`after:content-['•'] after:mx-3 last:after:content-none`}
                  >
                    {role}
                  </li>
                ))}
              </ul>
              <p>{project.description}</p>
              <ul className='text-sm text-black-alpha-60 flex flex-wrap'>
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className={`after:content-['•'] after:mx-3 last:after:content-none`}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <div className='mt-4 flex gap-4 flex-wrap'>
                <Button href={project.projectUrl} text='Read more' />
                {project.demoUrl && (
                  <ExternalLink
                    href={project.demoUrl}
                    text='Demo'
                    icon={<FiExternalLink />}
                  />
                )}
                {project.codeUrl && (
                  <ExternalLink
                    href={project.codeUrl}
                    text='Code'
                    icon={<FiGithub />}
                  />
                )}
                {project.presentationUrl && (
                  <ExternalLink
                    href={project.presentationUrl}
                    text='Presentation'
                    icon={<LuPresentation />}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
