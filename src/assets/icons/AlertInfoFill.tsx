import * as React from 'react';

const InfoFill: React.FC<React.SVGProps<SVGSVGElement>> = ({ color = '#354056' }) => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="9.33333" fill="#EBEBF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 42C35.732 42 42 35.732 42 28C42 20.268 35.732 14 28 14C20.268 14 14 20.268 14 28C14 35.732 20.268 42 28 42ZM26.8333 34.9992V24.8881H29.1667V34.9992H26.8333ZM26.8333 20.9992V23.3326H29.1667V20.9992H26.8333Z"
      fill={color}
    />
  </svg>
);
export default InfoFill;
