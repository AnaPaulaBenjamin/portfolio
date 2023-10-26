import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export const Link = ({ to, label, customClass }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    className={customClass}
    aria-label={label}
  >
    {label}
  </ScrollLink>
);
