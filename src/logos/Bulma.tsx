import type { SVGProps } from "react";
const Bulma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 373"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <polygon
        fill="#00D1B2"
        fillRule="nonzero"
        points="0 256 23.2727273 93.0909091 116.363636 0 232.727273 116.363636 162.909091 186.181818 256 279.272727 116.363636 372.363636"
      />
    </g>
  </svg>
);
export { Bulma };
