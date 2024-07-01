import React from 'react';

const Device: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M4.66663 7.33331V18.6666C4.66663 19.7733 5.55996 20.6666 6.66663 20.6666H18V22.6666H12.44L12.1333 24.2933H18V26.2933H6.66663V24.2933H10.0933L10.4 22.6666H6.66663C4.45329 22.6666 2.66663 20.88 2.66663 18.6666V7.19998C2.66663 6.17331 3.50663 5.33331 4.53329 5.33331H24.8C25.8266 5.33331 26.6666 6.17331 26.6666 7.19998V11.3333H24.6666V7.33331H4.66663Z"
        fill={props.fill || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 15.3333C20 14.2266 20.8933 13.3333 22 13.3333H27.3333C28.44 13.3333 29.3333 14.2266 29.3333 15.3333V26C29.3333 27.1066 28.44 28 27.3333 28H22C20.8933 28 20 27.1066 20 26V15.3333ZM22 26H27.3333V15.3333H22V26Z"
        fill={props.fill || 'currentColor'}
      />
    </svg>
  );
};

export default Device;
