import type { SVGProps } from "react";
const NpmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <polygon fill="#C12127" points="0 256 0 0 256 0 256 256" />
      <polygon
        fill="#FFFFFF"
        points="48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208"
      />
    </g>
  </svg>
);
export { NpmIcon };
