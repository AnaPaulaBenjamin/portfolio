import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  position: absolute;
  bottom: -1px;
  z-index: 10;

  @media (max-width: 30rem) {
    display: none;
  }
`;

const BgHome = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="divisor"
      viewBox="0 0 1430 320"
    >
      <path
        fill="var(--background-1)"
        fillOpacity="1"
        d="M0,256L120,266.7C240,277,480,299,720,298.7C960,299,1200,277,1320,266.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </Svg>
  );
};

export default BgHome;
