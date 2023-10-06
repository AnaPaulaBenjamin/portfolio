import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
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

  @media (max-width: 30rem) {
    display: none;
  }
`;

const Gradient = styled.span`
  background-image: linear-gradient(to right, #a839ff, #800add);
  -webkit-background-clip: text;
  color: transparent;
`;

const SubTitle = ({ text }) => {
  return (
    <Title>
      {text}
      <Gradient>.</Gradient>
    </Title>
  );
};

export default SubTitle;
