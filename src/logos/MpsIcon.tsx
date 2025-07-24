import type { SVGProps } from "react";
const MpsIcon = (props: SVGProps<SVGSVGElement>) => (
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
        x1="75.7%"
        y1="132.916667%"
        x2="-19.4666667%"
        y2="11.0333333%"
        id="a"
      >
        <stop stopColor="#087CFA" offset="6%" />
        <stop stopColor="#21D789" offset="87%" />
      </linearGradient>
      <linearGradient
        x1="76.4645944%"
        y1="92.4166667%"
        x2="28.6675778%"
        y2="-29.4666667%"
        id="b"
      >
        <stop stopColor="#087CFA" offset="5%" />
        <stop stopColor="#0A84F0" offset="18%" />
        <stop stopColor="#1099D6" offset="39%" />
        <stop stopColor="#19BAAD" offset="67%" />
        <stop stopColor="#21D789" offset="87%" />
      </linearGradient>
      <linearGradient
        x1="33.8010666%"
        y1="103.028279%"
        x2="64.8540035%"
        y2="-21.3983523%"
        id="c"
      >
        <stop stopColor="#21D789" offset="12%" />
        <stop stopColor="#6AE274" offset="36%" />
        <stop stopColor="#A9EB62" offset="58%" />
        <stop stopColor="#D6F255" offset="77%" />
        <stop stopColor="#F2F64D" offset="92%" />
        <stop stopColor="#FCF84A" offset="100%" />
      </linearGradient>
    </defs>
    <g>
      <polygon
        fill="url(#a)"
        points="0 256 256 256 127.402667 127.658667 1.5158245e-14 0"
      />
      <polygon fill="url(#b)" points="256 256 127.402667 127.658667 256 0" />
      <polygon
        fill="url(#c)"
        points="191.573333 191.616 127.402667 127.658667 256 0"
      />
    </g>
  </svg>
);
export { MpsIcon };
