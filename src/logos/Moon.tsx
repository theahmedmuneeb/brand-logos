import type { SVGProps } from "react";
const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <circle id="a" cx={128} cy={128} r={128} />
      <radialGradient
        cx="50%"
        cy="50%"
        fx="50%"
        fy="50%"
        r="49.7893875%"
        id="b"
      >
        <stop stopColor="#4600D1" offset="0%" />
        <stop stopColor="#4600D1" offset="49.2852329%" />
        <stop stopColor="#35009F" offset="100%" />
      </radialGradient>
      <radialGradient
        cx="50%"
        cy="50%"
        fx="50%"
        fy="50%"
        r="49.6030859%"
        id="d"
      >
        <stop stopColor="#35019E" offset="0%" />
        <stop stopColor="#320194" offset="18.7296056%" />
        <stop stopColor="#220066" offset="100%" />
      </radialGradient>
    </defs>
    <g>
      <g>
        <circle fill="#5805FF" cx={128} cy={128} r={128} />
        <mask id="c" fill="white">
          <use href="#a" />
        </mask>
        <circle
          fill="url(#b)"
          mask="url(#c)"
          cx={199.694484}
          cy={105.369165}
          r={128}
        />
        <circle
          fill="url(#d)"
          mask="url(#c)"
          cx={275.371994}
          cy={82.3762376}
          r={128}
        />
      </g>
    </g>
  </svg>
);
export { Moon };
