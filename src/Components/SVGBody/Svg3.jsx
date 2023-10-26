import React from 'react';
import ComponentBody from './SVGBodyComponent';

const Detail3 = () => {
  return (
    <ComponentBody
      width="100"
      height="80"
      viewBox="0 0 110 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85.8612 5C85.8612 5 105 14.5455 105 40C105 65.4545 85.8612 75 85.8612 75M35.622 5C5 5 35.622 40 5 40C35.622 40 5 75 35.622 75"
        stroke="url(#paint0_linear_332_39)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_332_39"
          x1="22.757"
          y1="40"
          x2="105"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--opacity-1)" />
          <stop offset="1" stopColor="var(--opacity-2)" />
        </linearGradient>
      </defs>
    </ComponentBody>
  );
};

export default Detail3;
