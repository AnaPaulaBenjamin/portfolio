import React from 'react';

const CSS = ({ width, height, fill }) => {
  return (
    <svg
      width={width || '25'}
      height={height || '28'}
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_221_239)">
        <path
          d="M12.5923 27.434L2.5625 24.6772L0.543672 0.548092L24.4538 0.596179L22.3189 24.6796L12.5923 27.434Z"
          stroke="url(#paint0_linear_221_239)"
        />
        <path
          d="M20.3329 5.3833H4.49561L4.92464 8.40362H12.44L5.0448 11.5081L5.47363 14.4279H16.3694L15.9746 18.5054L12.2855 19.2103L8.93976 18.3714L8.6823 16.0556H5.61093L6.02262 20.8717L12.6115 22.6672L18.926 20.7039L19.7325 11.2899H13.0575L20.3327 8.33658L20.3329 5.3833Z"
          fill="url(#paint1_linear_221_239)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_221_239"
          x1="4.43925"
          y1="14"
          x2="25"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fill || 'var(--purple-1)'} />
          <stop offset="1" stopColor={fill || 'var(--purple-2)'} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_221_239"
          x1="7.30784"
          y1="14.0252"
          x2="20.3329"
          y2="14.0252"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fill || 'var(--purple-1)'} />
          <stop offset="1" stopColor={fill || 'var(--purple-2)'} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CSS;
