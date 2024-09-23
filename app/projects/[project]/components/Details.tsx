import React from 'react';
import ExternalLinks from '../../components/ExternalLinks';
import moment from 'moment';
import type { ProjectProps } from '@/data/projects';

const Details = ({ project }: { project: ProjectProps }) => {
  const duration = (startDate: string, endDate: string) => {
    const months = moment(endDate).diff(moment(startDate), 'months');
    if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else {
      const weeks = moment(endDate).diff(moment(startDate), 'weeks');
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    }
  };

  const details = [
    { heading: 'Role', data: project.role.join(', ') },
    {
      heading: 'Tech stack',
      data: project.technologies?.join(', '),
    },
    {
      heading: 'Tools',
      data: project.tools?.join(', '),
    },
    {
      heading: 'Duration',
      data: duration(project.startDate, project.endDate),
    },
    { heading: 'Links', data: <ExternalLinks links={project.links} /> },
  ];

  return (
    <div className='md:mb-12 md:flex gap-12 justify-center'>
      {details.map(
        ({ heading, data }) =>
          data && (
            <div key={heading} className='mb-4 md:w-40'>
              <p className='font-semibold mb-1'>{heading}</p>
              <p className='flex gap-4'>{data}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Details;
