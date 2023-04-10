import React from "react";
import { SVGProps } from "react";
type ArrowProps = {};

const DownArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill}
      stroke="currentColor"
      strokeWidth={1.5}
      className={props.className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default DownArrow;
