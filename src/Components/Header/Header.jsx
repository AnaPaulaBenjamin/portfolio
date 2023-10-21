import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo';
import Moon from '../../assets/Mode/moon.jsx';
import Sun from '../../assets/Mode/Sun.jsx';
import MobileMenu from './MobileMenu';

const Link = ({ to, label, customClass }) => (
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

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <
      45 * parseFloat(getComputedStyle(document.documentElement).fontSize),
  );

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile =
        window.innerWidth <
        45 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      setIsMobile(newIsMobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isDarkMode ? styles.dark : styles.light}`}
    >
      <div className={`${styles.container} container`}>
        <HeaderLogo />
        {isMobile && (
          <MobileMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        )}
        <nav
          className={isMobile ? `${styles.nav} ${styles.menuOpen}` : styles.nav}
        >
          {!isMobile && (
            <ul className={styles.nav}>
              <li>
                <Link to="sobre" label="Sobre" customClass={styles.list} />
              </li>
              <li>
                <Link
                  to="habilidades"
                  label="Habilidades"
                  customClass={styles.list}
                />
              </li>
              <li>
                <Link
                  to="projetos"
                  label="Projetos"
                  customClass={styles.list}
                />
              </li>
              <li>
                <Link to="contato" label="Contato" customClass={styles.list} />
              </li>
              <li className={styles.mode}>
                <div
                  className={styles.themeToggle}
                  onClick={toggleDarkMode}
                ></div>
                <div className={styles.iconContainer}>
                  {isDarkMode ? <Moon /> : <Sun />}
                </div>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
