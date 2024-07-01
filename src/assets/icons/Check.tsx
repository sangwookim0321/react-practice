import React from 'react';

const Check: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="white"
      fillRule="evenodd"
      d="M15.708 6.326c.402.42.387 1.087-.034 1.49l-6.692 6.392a1.054 1.054 0 0 1-1.462-.005l-3.2-3.097a1.053 1.053 0 1 1 1.467-1.514l2.471 2.393 5.96-5.693a1.054 1.054 0 0 1 1.49.034Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Check;
