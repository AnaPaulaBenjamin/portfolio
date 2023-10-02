import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  padding-top: 4rem;
  padding-left: 3rem;
  padding-bottom: 3rem;
  font-family: var(--type-first);
  color: var(--white);
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 2rem;

  @media (max-width: 50rem) {
    padding-top: 2rem;
    padding-left: 2rem;
    padding-bottom: 1.5rem;
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
