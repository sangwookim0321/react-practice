import React from 'react';

const Bullet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="7.99935" cy="7.99984" r="3.33333" fill="black" />
  </svg>
);

export default Bullet;
