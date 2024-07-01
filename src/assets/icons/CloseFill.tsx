import React from 'react';

const CloseFill: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        fill={props.fill || 'currentColor'}
        fillRule="evenodd"
        d="M9 15.3A6.3 6.3 0 1 0 9 2.7a6.3 6.3 0 0 0 0 12.6Zm0-5.557-2.105 2.103-.742-.742L8.257 9 6.153 6.896l.742-.742L9 8.258l2.104-2.104.742.743L9.742 9l2.103 2.104-.742.742-2.104-2.103Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CloseFill;
