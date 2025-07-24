import type { SVGProps } from "react";
const Turret = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 384"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <polygon
        fill="#195DE6"
        points="208 288 192 160 224 160 240 144 240 0 192 0 192 48 160 48 160 0 96 0 96 48 64 48 64 0 16 0 16 144 32 160 64 160 48 288 16 288 0 304 0 384 256 384 256 304 240 288"
      />
    </g>
  </svg>
);
export { Turret };
