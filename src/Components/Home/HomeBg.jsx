import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  position: absolute;
  bottom: -1px;
  z-index: 0;

  // @media (max-width: 30rem) {
  //   display: none;
  // }
`;

const BgHome = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1430 320"
    >
      <path
        fill="var(--background-1)"
        fillOpacity="1"
        d="M 0 256 L 120 266.7 C 240 277 480 299 720 298.7 C 960 299 1200 277 1320 266.7 L 1440 256 L 1440 320 L 1320 320 C 1200 320 960 320 720 320 C 480 320 240 320 120 320 L 0 320 Z"
      ></path>
    </Svg>
  );
};

export default BgHome;
