import React, { cloneElement } from 'react';
import Figure from './Figure';
import type { ContentProps } from '../../projects';

const Content = ({ content }: { content: ContentProps[] }) => (
  <div className='mt-24 leading-loose'>
    {content.map(({ heading, paragraphs }) => (
      <div className='mb-12 [&>*]:mx-auto'>
        {paragraphs.map((p, index) =>
          index === 0 ? (
            <div className='max-w-prose [&>p]:mb-3'>
              <h2 className='heading-md self-start'>{heading}</h2>
              {p}
            </div>
          ) : p.type === Figure ? (
            p
          ) : (
            cloneElement(p, { className: 'mb-3 max-w-prose' })
          )
        )}
      </div>
    ))}
  </div>
);

export default Content;
