import type { SVGProps } from "react";
const JetbrainsSpaceIcon = (props: SVGProps<SVGSVGElement>) => (
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
        x1="45.0824163%"
        y1="-1.34304614%"
        x2="55.5220482%"
        y2="97.6099761%"
        id="a"
      >
        <stop stopColor="#FCF84A" offset="0%" />
        <stop stopColor="#ABE682" offset="32%" />
        <stop stopColor="#36CDD2" offset="79%" />
        <stop stopColor="#07C3F2" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-2.94159918%"
        y1="38.9923346%"
        x2="100.445236%"
        y2="62.1053821%"
        id="b"
      >
        <stop stopColor="#3BEA62" offset="0%" />
        <stop stopColor="#087CFA" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-3.30779496%"
        y1="71.8068763%"
        x2="111.745094%"
        y2="15.4620075%"
        id="c"
      >
        <stop stopColor="#009AE5" offset="0%" />
        <stop stopColor="#0490DD" offset="18%" />
        <stop stopColor="#1073C6" offset="49%" />
        <stop stopColor="#2346A1" offset="89%" />
        <stop stopColor="#293896" offset="100%" />
      </linearGradient>
    </defs>
    <g>
      <path
        d="M46.360458,255.99099 C137.434811,248.012902 217.341572,192.070363 256,109.222831 C208.119528,40.7992121 129.872913,0.0324961365 46.360458,1.54095168e-05 C38.9196537,1.54095168e-05 31.4447173,0.329959332 23.9356487,0.989847177 C-14.6764568,83.8934929 -6.12822306,181.09875 46.360458,255.99099 L46.360458,255.99099 Z"
        fill="url(#a)"
      />
      <path
        d="M24.2087057,1.02397931 C78.7004741,23.174229 125.519479,60.7860504 158.89409,109.222831 L256,109.222831 C208.262655,40.7605274 130.061592,-0.0289436035 46.599383,0 C39.1585786,0 31.6950196,0.341336709 24.2087057,1.02397931 L24.2087057,1.02397931 Z"
        fill="url(#b)"
      />
      <path
        d="M158.89409,109.222831 C147.18677,186.60037 46.2580617,255.99099 46.2580617,255.99099 C138.039359,247.321429 218.488789,192.3687 256,109.222831 L158.89409,109.222831 Z"
        fill="url(#c)"
      />
    </g>
  </svg>
);
export { JetbrainsSpaceIcon };
