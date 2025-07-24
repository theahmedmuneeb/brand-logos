import type { SVGProps } from "react";
const Framer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 384"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <path
        d="M0,0 L256,0 L256,128 L128,128 L0,0 Z M0,128 L128,128 L256,256 L128,256 L128,384 L0,256 L0,128 Z"
        fill="#000000"
      />
    </g>
  </svg>
);
export { Framer };
