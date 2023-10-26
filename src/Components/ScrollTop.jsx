import React from 'react';
import styled from 'styled-components';

const ScrollButton = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 3rem;
  cursor: pointer;
  z-index: 100;
  transition: 0.3s;

  @media (max-width: 55rem) {
    right: 1rem;

    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 30rem) {
    right: 0.5rem;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const ScrollTop = ({ width, height }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton onClick={scrollToTop}>
      <svg
        width={width || '30'}
        height={height || '30'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1.2268C6.05013 1.2268 1.2268 6.05013 1.2268 12C1.2268 17.9499 6.05013 22.7732 12 22.7732C17.9499 22.7732 22.7732 17.9499 22.7732 12C22.7732 6.05013 17.9499 1.2268 12 1.2268ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
          stroke="url(#paint0_linear_311_110)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9198 7.38373C11.9641 7.33944 12.0359 7.33944 12.0802 7.38373L15.7091 11.0126C15.7533 11.0569 15.7533 11.1287 15.7091 11.173C15.6648 11.2173 15.593 11.2173 15.5487 11.173L12 7.62429L8.45132 11.173C8.40704 11.2173 8.33523 11.2173 8.29095 11.173C8.24666 11.1287 8.24666 11.0569 8.29095 11.0126L11.9198 7.38373Z"
          stroke="url(#paint1_linear_311_110)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7.35052C12.0626 7.35052 12.1134 7.40129 12.1134 7.46392V16.5361C12.1134 16.5987 12.0626 16.6495 12 16.6495C11.9374 16.6495 11.8866 16.5987 11.8866 16.5361V7.46392C11.8866 7.40129 11.9374 7.35052 12 7.35052Z"
          stroke="url(#paint2_linear_311_110)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_311_110"
            x1="4.90654"
            y1="12"
            x2="23"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--primary-1)" />
            <stop offset="1" stopColor="var(--primary-2)" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_311_110"
            x1="4.90654"
            y1="12"
            x2="23"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--primary-1)" />
            <stop offset="1" stopColor="var(--primary-2)" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_311_110"
            x1="4.90654"
            y1="12"
            x2="23"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--primary-1)" />
            <stop offset="1" stopColor="var(--primary-2)" />
          </linearGradient>
        </defs>
      </svg>
    </ScrollButton>
  );
};

export default ScrollTop;
