import type { SVGProps } from "react";
const Dropmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 256 348"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <path
        d="M128,0 C128,0 0,91.0671937 0,219.067194 C0,289.770751 57.2964427,347.067194 128,347.067194 C198.703557,347.067194 256,289.770751 256,219.067194 C256,91.0671937 128,0 128,0 Z M128,293.312253 L128,293.312253 L59.3201581,214.26087 L89.9288538,214.26087 L89.9288538,123.952569 L166.071146,123.952569 L166.071146,214.26087 L196.679842,214.26087 L128,293.312253 Z"
        id="a"
      />
    </defs>
    <g>
      <mask fill="white">
        <use href="#a" />
      </mask>
      <use fill="#38DEDF" href="#a" />
    </g>
  </svg>
);
export { Dropmark };
