import React from 'react';
import Icon from './Icon';

const ScrollDownButton = ({ animationDelay }: { animationDelay: number }) => {
  return (
    <a
      href='#about'
      className='scroll-button absolute bottom-10 left-1/2 -translate-x-1/2 animate-fadeIn'
      title='Scroll down'
      style={{
        animationDuration: '500ms',
        animationDelay: `${animationDelay}ms`,
      }}
    >
      <Icon name='scrollDown' />
    </a>
  );
};

export default ScrollDownButton;
