import React from 'react';

const Close: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0669 3.64026L12.3603 2.93359L8.00026 7.29359L3.64026 2.93359L2.93359 3.64026L7.29359 8.00026L2.93359 12.3603L3.64026 13.0669L8.00026 8.70693L12.3603 13.0669L13.0669 12.3603L8.70693 8.00026L13.0669 3.64026Z"
        fill={props.fill || 'currentColor'}
      />
    </svg>
  );
};

export default Close;
