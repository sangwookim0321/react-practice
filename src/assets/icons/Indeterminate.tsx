import React from 'react';

const Indeterminate: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path fill="white" fillRule="evenodd" d="M4.45 10c0-.58.47-1.05 1.05-1.05h9a1.05 1.05 0 1 1 0 2.1h-9c-.58 0-1.05-.47-1.05-1.05Z" clipRule="evenodd" />
  </svg>
);

export default Indeterminate;
