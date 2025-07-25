import type { SVGProps } from "react";
const EdgioIcon = (props: SVGProps<SVGSVGElement>) => (
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
        x1="3.18474651%"
        y1="2.86627895%"
        x2="57.3248613%"
        y2="58.9172635%"
        id="_ambl_EdgioIcon__a"
      >
        <stop stopColor="#793092" offset="0%" />
        <stop stopColor="#6144A1" offset="100%" />
      </linearGradient>
      <radialGradient
        cx="104.36188%"
        cy="13.087638%"
        fx="104.36188%"
        fy="13.087638%"
        r="94.5754841%"
        id="_ambl_EdgioIcon__b"
      >
        <stop stopColor="#01B07D" offset="0%" />
        <stop stopColor="#01B07D" stopOpacity={0} offset="100%" />
      </radialGradient>
      <radialGradient
        cx="68.748982%"
        cy="120.915701%"
        fx="68.748982%"
        fy="120.915701%"
        r="68.4871381%"
        id="_ambl_EdgioIcon__c"
      >
        <stop stopColor="#00AAE5" offset="0%" />
        <stop stopColor="#00AAE5" stopOpacity={0} offset="100%" />
      </radialGradient>
    </defs>
    <g>
      <rect
        fill="url(#_ambl_EdgioIcon__a)"
        x={0}
        y={0}
        width={256}
        height={256}
      />
      <rect
        fill="url(#_ambl_EdgioIcon__b)"
        x={0}
        y={0}
        width={256}
        height={256}
      />
      <rect
        fill="url(#_ambl_EdgioIcon__c)"
        x={0}
        y={0}
        width={256}
        height={256}
      />
      <polygon
        fill="#FFFFFF"
        points="170.908427 77.2014079 187.133362 47.9481495 68.8666627 47.9481495 68.8666627 208.051403 187.133362 208.051403 170.989449 178.757831 100.749379 178.757831 100.749379 141.938707 156.504312 141.938707 165.486678 112.645136 100.749379 112.645136 100.749379 77.2014079"
      />
    </g>
  </svg>
);
export { EdgioIcon };
