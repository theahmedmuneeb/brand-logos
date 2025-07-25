import type { SVGProps } from "react";
const Trello = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="_ambl_Trello__a">
        <stop stopColor="#0091E6" offset="0%" />
        <stop stopColor="#0079BF" offset="100%" />
      </linearGradient>
    </defs>
    <g>
      <g>
        <rect
          fill="url(#_ambl_Trello__a)"
          x={0}
          y={0}
          width={256}
          height={256}
          rx={25}
        />
        <rect
          fill="#FFFFFF"
          x={144.64}
          y={33.28}
          width={78.08}
          height={112}
          rx={12}
        />
        <rect
          fill="#FFFFFF"
          x={33.28}
          y={33.28}
          width={78.08}
          height={176}
          rx={12}
        />
      </g>
    </g>
  </svg>
);
export { Trello };
