import React from 'react';

const Type = ({ width, height, fill }) => {
  return (
    <svg
      width={width || '27'}
      height={height || '17'}
      viewBox="0 0 27 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8148 16L8.40741 1L1 16M26 16V9.38235C26 7.67721 24.3414 6.29412 22.2963 6.29412C21.1898 6.29412 20.1968 6.53456 19.5185 7.17647M13.6366 11.5882H3.17824M26 12.9118C26 14.6174 24.3418 16 22.2963 16C20.2508 16 18.5926 14.6174 18.5926 12.9118C18.5926 11.2062 20.2508 9.82353 22.2963 9.82353C24.3418 9.82353 26 11.2062 26 12.9118Z"
        stroke="url(#paint0_linear_94_915)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_94_915"
          x1="5.43925"
          y1="8.49999"
          x2="26"
          y2="8.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fill || 'var(--purple-1)'} />
          <stop offset="1" stopColor={fill || 'var(--purple-2)'} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Type;
