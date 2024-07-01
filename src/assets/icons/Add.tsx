import React from 'react';

const Add: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path fill={props.fill || 'currentColor'} fillRule="evenodd" d="M20.084 11.245h-7.33v-7.33h-1.5v7.33h-7.34v1.5h7.34v7.34h1.5v-7.34h7.33v-1.5Z" clipRule="evenodd" />
    </svg>
  );
};

export default Add;
