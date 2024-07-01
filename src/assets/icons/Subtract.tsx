import React from 'react';

const Subtract: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path fill={props.fill || 'currentColor'} fillRule="evenodd" d="M3.914 12.775v-1.5h16.17v1.5H3.914Z" clipRule="evenodd" />
    </svg>
  );
};

export default Subtract;
