import React from "react";
export default function Circle(props) {
  const size = props.size || 100;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="79.1918"
        y1="7.05367"
        x2="7.05368"
        y2="90.0964"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M14.2377 8L70.6135 90.9806"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
