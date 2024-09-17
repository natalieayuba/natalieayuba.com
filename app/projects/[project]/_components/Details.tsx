import React from 'react';
import type { ProjectProps } from '../../projects';
import ExternalLinks from '../../_components/ExternalLinks';
import moment from 'moment';

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
      heading: 'Duration',
      data: duration(project.startDate, project.endDate),
    },
    { heading: 'Links', data: <ExternalLinks links={project.links} /> },
  ];

  return (
    <div className='mb-12 md:-mt-8 md:flex gap-20 justify-center'>
      {details.map(({ heading, data }) => (
        <div key={heading} className='mb-4 md:max-w-52'>
          <p className='font-semibold mb-1'>{heading}</p>
          <p className='flex gap-4'>{data}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
