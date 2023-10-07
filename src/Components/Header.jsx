import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jsx';
import Moon from '../assets/Mode/moon.jsx';
import Sun from '../assets/Mode/Sun.jsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link className={styles.logo} to="/" aria-label="Logo - Home">
          <Logo />
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link className={styles.list} to="#sobre" aria-label="sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className={styles.list}
                to="#habilidades"
                aria-label="habilidades"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                className={styles.list}
                to="#projetos"
                aria-label="projetos"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link className={styles.list} to="#contato" aria-label="contato">
                Contato
              </Link>
            </li>
            <li className={styles.mode}>
              <Moon />
              <Sun />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
