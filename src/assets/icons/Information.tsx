import React from 'react';

const Information: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      fill={props.fill || 'currentColor'}
      fillRule="evenodd"
      d="M9 15.41a6.3 6.3 0 1 0 0-12.6 6.3 6.3 0 0 0 0 12.6Zm-.526-3.15V7.71h1.05v4.55h-1.05Zm0-6.3v1.05h1.05V5.96h-1.05Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Information;
