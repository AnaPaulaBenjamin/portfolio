import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  padding-right: 5rem;
  justify-content: flex-end;

  @media (max-width: 30rem) {
    display: none;
`;

const StyledSVG = styled(animated.svg)`
  position: absolute;
  top: 20px;
`;

const ReusableComponents = ({ width, height, viewBox, children, fill }) => {
  const springProps = useSpring({
    from: {
      transform: 'translate(0px, 0px)',
    },
    to: async (next) => {
      while (1) {
        await next({ transform: 'translate(0px, 25px)' });
        await next({ transform: 'translate(0px, -25px)' });
        await next({ transform: 'translate(25px, 0px)' });
        await next({ transform: 'translate(-25px, 0px)' });
      }
    },
    config: {
      duration: 3000,
    },
  });

  return (
    <Container>
      <StyledSVG
        width={width}
        height={height}
        fill={fill}
        viewBox={viewBox}
        style={springProps}
      >
        {children}
      </StyledSVG>
    </Container>
  );
};

export default ReusableComponents;
