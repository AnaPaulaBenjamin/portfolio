import React from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.css';
import IconLogo from '../assets/logo.jsx';
import Moon from '../assets/Mode/moon.jsx';
import Sun from '../assets/Mode/Sun.jsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link
          className={`${styles.logo}`}
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          aria-label="Logo - Home"
        >
          <IconLogo />
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link
                className={`${styles.list}`}
                to="sobre"
                spy={true}
                smooth={true}
                duration={500}
                aria-label="sobre"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.list}`}
                to="habilidades"
                spy={true}
                smooth={true}
                duration={500}
                aria-label="habilidades"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.list}`}
                to="projetos"
                spy={true}
                smooth={true}
                duration={500}
                aria-label="projetos"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.list}`}
                to="contato"
                spy={true}
                smooth={true}
                duration={500}
                aria-label="contato"
              >
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
