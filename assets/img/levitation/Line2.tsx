import { SVGProps } from "react";

export const Line2 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2600 131.1"
      preserveAspectRatio="none"
      {...props}
    >
      <path fill="white" d="M0 0L2600 0 2600 69.1 0 0z"></path>
      <path
        fill="white"
        style={{ opacity: 0.5 }}
        d="M0 0L2600 0 2600 69.1 0 69.1z"
      ></path>
      <path
        fill="white"
        style={{ opacity: 0.25 }}
        d="M2600 0L0 0 0 130.1 2600 69.1z"
      ></path>
    </svg>
  );
};
