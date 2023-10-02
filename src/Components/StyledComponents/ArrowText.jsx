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
  background-image: linear-gradient(to right, #a839ff, #800add);
  -webkit-background-clip: text;
  color: transparent;
  font-family: var(--type-first);
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;

  &:hover {
    background-image: none;
    background-color: var(--gray);
  }

  &:hover {
    path {
      stroke: var(--gray);
    }
  }

  @media (max-width: 50rem) {
    font-size: 0.8rem;
  }

  @media (max-width: 25rem) {
    font-size: 0.5rem;
  }
`;

const Arrow = styled.svg`
  width: 16px;
  height: 10px;
  animation: ${AnimeArrow} 2s linear infinite;
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
            stroke="#800ADD"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Arrow>
      </StyledLink>
    </Container>
  );
};

export default ArrowText;
