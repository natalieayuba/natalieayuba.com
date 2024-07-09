import React, { forwardRef } from 'react';

interface CoinProps {
  speed: number;
}

const Coin = forwardRef<HTMLDivElement, CoinProps>(({ speed }, ref) => {
  const size = 12;
  return (
    <div
      className='absolute bg-purple rounded-full animate-fall z-20'
      ref={ref}
      style={{
        top: size * -1,
        width: size,
        height: size,
        animationDuration: `${speed}ms`,
      }}
    ></div>
  );
});

Coin.displayName = 'Coin';

export default Coin;
