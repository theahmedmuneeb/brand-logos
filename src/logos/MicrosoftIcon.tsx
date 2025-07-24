import type { SVGProps } from "react";
const MicrosoftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <polygon
        fill="#F1511B"
        points="121.666095 121.666095 0 121.666095 0 0 121.666095 0"
      />
      <polygon
        fill="#80CC28"
        points="256 121.666095 134.335356 121.666095 134.335356 0 256 0"
      />
      <polygon
        fill="#00ADEF"
        points="121.663194 256.002188 0 256.002188 0 134.336095 121.663194 134.336095"
      />
      <polygon
        fill="#FBBC09"
        points="256 256.002188 134.335356 256.002188 134.335356 134.336095 256 134.336095"
      />
    </g>
  </svg>
);
export { MicrosoftIcon };
