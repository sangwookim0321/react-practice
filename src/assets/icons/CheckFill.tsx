import React from 'react';

const CheckFill: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      fill={props.fill || 'currentColor'}
      fillRule="evenodd"
      d="M15.3 9A6.3 6.3 0 1 1 2.7 9a6.3 6.3 0 0 1 12.6 0Zm-6.394 2.105 3.562-3.958-.78-.702-3.562 3.957-1.802-2.164-.807.672 1.802 2.164a1.05 1.05 0 0 0 1.587.03Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CheckFill;
