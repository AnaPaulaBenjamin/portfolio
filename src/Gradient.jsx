import React from 'react';
import styled from 'styled-components';

const GradientText = styled.span`
  background-image: linear-gradient(to right, #a839ff, #800add);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Gradient = ({ children }) => {
  return <GradientText>{children}</GradientText>;
};

export default Gradient;
