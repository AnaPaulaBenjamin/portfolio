import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
    stop-color: var(--primary-1); 
  }
  100% {
    opacity: 0.5;
    stop-color: var(--primary-2); 
  }
`;

const Border = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 240px;
  animation: ${blink} 3s ease-in-out infinite;

  @media (max-width: 55rem) {
    display: none;
  }
`;

const Gradient = styled.linearGradient`
  stop:nth-child(1) {
    stop-color: var(--primary-1);
  }
  stop:nth-child(2) {
    stop-color: var(--primary-2);
  }
`;

const ImageBorder = () => {
  return (
    <Border
      width="258"
      height="258"
      viewBox="0 0 258 258"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <Gradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" />
          <stop offset="100%" />
        </Gradient>
      </defs>
      <path
        d="M254 4C166.459 4 35.6792 4.32583 8.89557 4.39501C6.13939 4.40213 4 6.54725 4 9.30343C4 36.0896 4 166.876 4 254"
        stroke="url(#gradient)"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </Border>
  );
};

export default ImageBorder;
