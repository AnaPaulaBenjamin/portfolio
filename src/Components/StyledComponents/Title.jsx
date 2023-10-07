import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.h2`
  padding: 3rem 0 3rem 4rem;
  font-family: var(--type-first);
  color: var(--text-2);
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 2rem;

  @media (max-width: 50rem) {
    padding: 2rem 0 2rem 2rem;
    font-size: 1.5rem;
  }
`;

const Gradient = styled.span`
  background-image: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Title = ({ text }) => {
  return (
    <SubTitle>
      {text}
      <Gradient>.</Gradient>
    </SubTitle>
  );
};

export default Title;
