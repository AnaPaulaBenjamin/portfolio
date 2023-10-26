import React from 'react';

const Instagran = ({ width, height }) => {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6.53465C8.08614 6.53465 6.53465 8.08614 6.53465 10C6.53465 11.9139 8.08614 13.4653 10 13.4653C11.9139 13.4653 13.4653 11.9139 13.4653 10C13.4653 8.08614 11.9139 6.53465 10 6.53465ZM5.54455 10C5.54455 7.53933 7.53933 5.54455 10 5.54455C12.4607 5.54455 14.4554 7.53933 14.4554 10C14.4554 12.4607 12.4607 14.4554 10 14.4554C7.53933 14.4554 5.54455 12.4607 5.54455 10Z"
        fill="url(#paint0_linear_326_274)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.24752 0.990099C2.89621 0.990099 0.990099 2.89621 0.990099 5.24752V14.7525C0.990099 17.1038 2.89621 19.0099 5.24752 19.0099H14.7525C17.1038 19.0099 19.0099 17.1038 19.0099 14.7525V5.24752C19.0099 2.89621 17.1038 0.990099 14.7525 0.990099H5.24752ZM0 5.24752C0 2.3494 2.3494 0 5.24752 0H14.7525C17.6506 0 20 2.3494 20 5.24752V14.7525C20 17.6506 17.6506 20 14.7525 20H5.24752C2.3494 20 0 17.6506 0 14.7525V5.24752Z"
        fill="url(#paint1_linear_326_274)"
      />
      <path
        d="M15.1485 6.0396C15.8047 6.0396 16.3366 5.50767 16.3366 4.85149C16.3366 4.19531 15.8047 3.66337 15.1485 3.66337C14.4923 3.66337 13.9604 4.19531 13.9604 4.85149C13.9604 5.50767 14.4923 6.0396 15.1485 6.0396Z"
        fill="url(#paint2_linear_326_274)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_326_274"
          x1="3.5514"
          y1="9.99999"
          x2="20"
          y2="9.99999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary-1)" />
          <stop offset="1" stopColor="var(--primary-2)" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_326_274"
          x1="3.5514"
          y1="9.99999"
          x2="20"
          y2="9.99999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary-1)" />
          <stop offset="1" stopColor="var(--primary-2)" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_326_274"
          x1="3.5514"
          y1="9.99999"
          x2="20"
          y2="9.99999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary-1)" />
          <stop offset="1" stopColor="var(--primary-2)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Instagran;
