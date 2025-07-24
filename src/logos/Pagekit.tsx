import type { SVGProps } from "react";
const Pagekit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 320"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <polygon
        fill="#212121"
        fillRule="nonzero"
        points="0 0 0 320 128 320 128 272 48 272 48 45.3333333 208 45.3333333 208 224 128 224 128 272 256 272 256 0"
      />
    </g>
  </svg>
);
export { Pagekit };
