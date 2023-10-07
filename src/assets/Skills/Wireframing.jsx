import React from 'react';

const Wireframing = ({ width, height, fill }) => {
  return (
    <svg
      width={width || '27'}
      height={height || '24'}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6667 23H9.33333M3.62686 4.68829L12.4948 9.42634M14.6354 4.68829L23.5034 9.42634M14.4825 10.907L23.5034 15.6451M3.62686 10.907L12.4948 15.6451M12.4948 4.68829L3.62685 9.42634M23.5033 4.68829L14.6354 9.42634M23.5033 10.907L14.4825 15.6451M12.4948 10.907L3.62685 15.6451M23.9167 19.2069H3.08333C1.93274 19.2069 1 18.3012 1 17.1839V3.02299C1 1.90572 1.93274 1 3.08333 1H23.9167C25.0673 1 26 1.90572 26 3.02299V17.1839C26 18.3012 25.0673 19.2069 23.9167 19.2069ZM3.47396 4.54023H12.7187V9.5977H3.47396V4.54023ZM14.4115 4.54023H23.6562V9.5977H14.4115V4.54023ZM14.4115 10.7356H23.6562V15.7931H14.4115V10.7356ZM3.47396 10.7356H12.7187V15.7931H3.47396V10.7356Z"
        stroke="url(#paint0_linear_227_293)"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_227_293"
          x1="5.43925"
          y1="12"
          x2="26"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fill || 'var(--purple-1)'} />
          <stop offset="1" stopColor={fill || 'var(--purple-2)'} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Wireframing;
