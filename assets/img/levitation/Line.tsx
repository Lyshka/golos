import { SVGProps } from "react";

export const Line = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      {...props}
    >
      <path fill="white" d="M0,6V0h1000v100L0,6z"></path>
    </svg>
  );
};
