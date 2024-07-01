import React from 'react';

const MobileAppCreator: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1901 27.9998L19.9694 25.9072C19.4701 25.7058 19.0069 25.4369 18.5884 25.1088L16.6647 25.9651L14.7917 22.7232L16.4995 21.4821C16.4573 21.1866 16.438 20.9346 16.438 20.6885C16.438 20.4401 16.4573 20.1868 16.4995 19.8937L14.7917 18.6503L16.6647 15.4083L18.5896 16.2659C19.0118 15.9342 19.4749 15.6652 19.9694 15.4674L20.1901 13.3713H23.9338L24.1569 15.4662C24.6538 15.6664 25.1169 15.9354 25.5366 16.2646L27.4615 15.4071L29.3334 18.6491L27.6256 19.8901C27.669 20.1892 27.6907 20.4437 27.6907 20.6861C27.6907 20.9249 27.669 21.1782 27.6256 21.4797L29.3334 22.7208L27.4603 25.9627L25.5342 25.1076C25.1193 25.4345 24.655 25.7034 24.1533 25.9048L23.9326 27.9974L20.1901 27.9998ZM22.0625 22.8531C23.2595 22.8531 24.2298 21.8828 24.2298 20.6858C24.2298 19.4889 23.2595 18.5186 22.0625 18.5186C20.8656 18.5186 19.8953 19.4889 19.8953 20.6858C19.8953 21.8828 20.8656 22.8531 22.0625 22.8531Z"
        fill={props.fill || 'currentColor'}
      />
      <path
        d="M9.33337 28C7.12424 28 5.33337 26.2091 5.33337 24V6.66663C5.33337 4.45749 7.12424 2.66663 9.33337 2.66663H20C22.2092 2.66663 24 4.45749 24 6.66663V11.3334H22V6.66663C22 5.56206 21.1046 4.66663 20 4.66663H9.33337C8.2288 4.66663 7.33337 5.56206 7.33337 6.66663V24C7.33337 25.1045 8.2288 26 9.33337 26H14.1734L15.3334 28.0001L9.33337 28Z"
        fill={props.fill || 'currentColor'}
      />
      <path d="M10.6667 6.66663H18.6667V8.66663H10.6667V6.66663Z" fill={props.fill || 'currentColor'} />
    </svg>
  );
};

export default MobileAppCreator;