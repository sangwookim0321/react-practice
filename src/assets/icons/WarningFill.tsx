import React from 'react';

const WarningFill: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      fill={props.fill || 'currentColor'}
      fillRule="evenodd"
      d="M9.91 3.411a1.05 1.05 0 0 0-1.82 0l-5.758 9.975a1.05 1.05 0 0 0 .909 1.575h11.518a1.05 1.05 0 0 0 .91-1.575l-5.76-9.975ZM8.474 6.672v4.55h1.05v-4.55h-1.05Zm0 6.3v-1.05h1.05v1.05h-1.05Z"
      clipRule="evenodd"
    />
  </svg>
);
export default WarningFill;
