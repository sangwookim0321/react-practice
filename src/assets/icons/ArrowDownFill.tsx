import { SVGProps } from 'react';

const ArrowDownFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m2.551 5.516 2.905 2.905a.745.745 0 0 0 1.06 0l2.925-2.92c.475-.475.135-1.28-.53-1.28l-5.825.015c-.665 0-1 .81-.53 1.28h-.005Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowDownFill;
