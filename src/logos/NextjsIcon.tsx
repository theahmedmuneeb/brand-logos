import type { SVGProps } from "react";
const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <circle id="_ambl_NextjsIcon__a" cx={128} cy={128} r={128} />
      <linearGradient
        x1="55.6325605%"
        y1="56.3850422%"
        x2="83.2279093%"
        y2="96.0801119%"
        id="_ambl_NextjsIcon__c"
      >
        <stop stopColor="#FFFFFF" offset="0%" />
        <stop stopColor="#FFFFFF" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="49.9534722%"
        y2="73.4375%"
        id="_ambl_NextjsIcon__d"
      >
        <stop stopColor="#FFFFFF" offset="0%" />
        <stop stopColor="#FFFFFF" stopOpacity={0} offset="100%" />
      </linearGradient>
    </defs>
    <g>
      <mask id="_ambl_NextjsIcon__b" fill="white">
        <use href="#_ambl_NextjsIcon__a" />
      </mask>
      <g mask="url(#_ambl_NextjsIcon__b)">
        <circle fill="#000000" cx={128} cy={128} r={128} />
        <path
          d="M212.6336,224.028444 L98.3352889,76.8 L76.8,76.8 L76.8,179.157333 L94.0282311,179.157333 L94.0282311,98.6788978 L199.109689,234.446222 C203.851378,231.273244 208.368356,227.790222 212.6336,224.028444 Z"
          fill="url(#_ambl_NextjsIcon__c)"
        />
        <rect
          fill="url(#_ambl_NextjsIcon__d)"
          x={163.555556}
          y={76.8}
          width={17.0666667}
          height={102.4}
        />
      </g>
    </g>
  </svg>
);
export { NextjsIcon };
