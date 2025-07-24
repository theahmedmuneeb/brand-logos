import type { SVGProps } from "react";
const Scaledrone = (props: SVGProps<SVGSVGElement>) => (
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
        x1="75.09375%"
        y1="93.380625%"
        x2="26.26375%"
        y2="8.970625%"
        id="a"
      >
        <stop stopColor="#FFFFFF" stopOpacity={0} offset="0%" />
        <stop stopColor="#6466BB" offset="47.52%" />
        <stop stopColor="#FFFFFF" stopOpacity={0} offset="100%" />
      </linearGradient>
    </defs>
    <g>
      <g>
        <circle fill="url(#a)" opacity={0.5} cx={128} cy={128} r={128} />
        <path
          d="M205.6,83.2 L238.9,64 C208.9,12 142.3,-5.9 90.3,24.2 C38.3,54.2 20.4,120.8 50.5,172.8 L17.1,192 C47.1,244 113.7,261.9 165.7,231.8 C217.8,201.8 235.6,135.2 205.6,83.2 L205.6,83.2 Z"
          fill="#6466BB"
        />
      </g>
    </g>
  </svg>
);
export { Scaledrone };
