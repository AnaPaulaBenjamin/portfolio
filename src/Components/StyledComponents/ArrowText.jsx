import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const AnimeArrow = keyframes`
0% {transform: translateX(0);}
50% {transform: translateX(10px);}
100% {transform: translateX(0);}
`;

const Container = styled.div`
  text-align: right;
  margin-right: 1rem;
`;

const StyledLink = styled(Link)`
  background-image: var(--gradient);
  -webkit-background-clip: text;
  color: transparent;
  font-family: var(--type-first);
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;

  &:hover {
    background-image: none;
    background-color: var(--gray-1);
  }

  &:hover {
    path {
      stroke: var(--gray-1);
    }
  }

  @media (max-width: 30rem) {
    font-size: 0.875rem;
  }
`;

const Arrow = styled.svg`
  width: 16px;
  height: 10px;
  animation: ${AnimeArrow} 2s linear infinite;

  @media (max-width: 30rem) {
    width: 14px;
  }
`;

const ArrowText = ({ text }) => {
  return (
    <Container>
      <StyledLink to="/sobre" aria-label="sobre">
        {text}
        <Arrow
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5H15M15 5L11 1M15 5L11 9"
            stroke="var(--purple-3)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Arrow>
      </StyledLink>
    </Container>
  );
};

export default ArrowText;
