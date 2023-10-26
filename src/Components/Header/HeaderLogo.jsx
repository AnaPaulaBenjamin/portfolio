import React from 'react';
import styles from './HeaderLogo.module.css';
import { Link } from 'react-scroll';
import IconLogo1 from '../../assets/Logo/Logo1';
import IconLogo2 from '../../assets/Logo/Logo2';

const HeaderLogo = () => {
  return (
    <Link
      className={styles.logo}
      to="home"
      spy={true}
      smooth={true}
      duration={500}
      aria-label="Logo - Home"
    >
      <IconLogo1 />
      <div className={styles.listLogo}>
        <span className={styles.list}>a</span>
        <span className={styles.list}>.</span>
        <span className={styles.list}>p</span>
        <span className={styles.list}>.</span>
        <span className={styles.list}>b</span>
        <span className={styles.list}>e</span>
        <span className={styles.list}>n</span>
        <span className={styles.list}>j</span>
        <span className={styles.list}>a</span>
        <span className={styles.list}>m</span>
        <span className={styles.list}>i</span>
        <span className={styles.list}>n</span>
      </div>
      <IconLogo2 />
    </Link>
  );
};

export default HeaderLogo;
