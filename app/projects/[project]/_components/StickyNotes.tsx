import React from 'react';
import colors from 'tailwindCSS/colors';

const StickyNotes = ({ notes }: { notes: string[] }) => {
  const bgColors = [colors.yellow[100], colors.cyan[200], colors.pink[200]];
  const rotations = [2, -3, 4];

  return (
    <div className='my-10 flex gap-8 flex-wrap justify-center items-center'>
      {notes.map((note, index) => (
        <div
          className='max-w-52 flex-1 aspect-square shadow-md p-4 leading-normal font-medium'
          style={{
            backgroundColor: bgColors[index],
            rotate: `${rotations[index]}deg`,
          }}
        >
          {note}
        </div>
      ))}
    </div>
  );
};

export default StickyNotes;
