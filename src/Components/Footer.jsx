import React from 'react';
import Styles from '../Components/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={`${Styles.footer} container`}>
        <p>© 2023 | Ana Paula Benjamin</p>
      </div>
    </footer>
  );
};

export default Footer;
