import type { SVGProps } from "react";
const KtorIcon = (props: SVGProps<SVGSVGElement>) => (
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
        x1="23.9648148%"
        y1="23.9648148%"
        x2="74.6407407%"
        y2="74.6407407%"
        id="a"
      >
        <stop stopColor="#00AFFF" offset="29.6%" />
        <stop stopColor="#5282FF" offset="69.4%" />
        <stop stopColor="#945DFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="26.2055556%"
        y1="26.2055556%"
        x2="74.1166667%"
        y2="74.1166667%"
        id="b"
      >
        <stop stopColor="#C757BC" offset="10.8%" />
        <stop stopColor="#CD5CA9" offset="17.3%" />
        <stop stopColor="#E8744F" offset="49.2%" />
        <stop stopColor="#F88316" offset="71.6%" />
        <stop stopColor="#FF8900" offset="82.3%" />
      </linearGradient>
    </defs>
    <g>
      <polygon
        fill="url(#a)"
        points="170.666667 85.3333333 128.176988 42.8436543 85.3333333 0 40.2773333 45.056 0 85.3333333 85.3333333 170.666667"
      />
      <polygon
        fill="url(#b)"
        points="85.3333333 170.666667 127.823012 213.156346 170.666667 256 215.722667 210.944 256 170.666667 170.666667 85.3333333"
      />
      <polygon
        fill="#000000"
        points="170.666667 85.3333333 85.3333333 85.3333333 85.3333333 170.666667 170.666667 170.666667"
      />
    </g>
  </svg>
);
export { KtorIcon };
