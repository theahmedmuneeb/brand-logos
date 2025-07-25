import type { SVGProps } from "react";
const KotlinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        x1="99.9909179%"
        y1="-0.0107311249%"
        x2="0.00995772309%"
        y2="100.010253%"
        id="_ambl_KotlinIcon__a"
      >
        <stop stopColor="#E44857" offset="0.3435144%" />
        <stop stopColor="#C711E1" offset="46.89%" />
        <stop stopColor="#7F52FF" offset="100%" />
      </linearGradient>
    </defs>
    <g>
      <polygon
        fill="url(#_ambl_KotlinIcon__a)"
        fillRule="nonzero"
        points="256 256 0 256 0 0 256 0 128 127.948759"
      />
    </g>
  </svg>
);
export { KotlinIcon };
