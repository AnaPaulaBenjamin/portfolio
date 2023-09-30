import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jsx';
import Moon from '../assets/moon.jsx';
import Sun from '../assets/Sun.jsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.mainContainer} container`}>
        <Link className={styles.logo} to="/" aria-label="Logo - Home">
          <Logo />
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link className={styles.menu} to="/sobre" aria-label="sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link className={styles.menu} to="/" aria-label="compêtencias">
                Compêtencias
              </Link>
            </li>
            <li>
              <Link
                className={styles.menu}
                to="/projetos"
                aria-label="projetos"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link className={styles.menu} to="/" aria-label="contato">
                Contato
              </Link>
            </li>
            <div className={styles.mode}>
              <Moon />
              <Sun />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
