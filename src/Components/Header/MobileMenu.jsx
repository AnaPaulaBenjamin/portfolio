import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import styles from './MobileMenu.module.css';
import stylesHeader from './Header.module.css';
import Moon from '../../assets/Mode/moon';
import Sun from '../../assets/Mode/Sun';

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

const MobileMenu = ({ isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div>
      <button
        className={`${styles.mobileButton} ${
          menuOpen && styles.mobileButtonActive
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></button>

      <ul
        className={`${menuOpen ? styles.navMobile : styles.menu} ${
          menuOpen && styles.navMobileActive
        }`}
      >
        <div className={styles.mode}>
          <li className={stylesHeader.mode}>
            <div
              className={stylesHeader.themeToggle}
              onClick={toggleDarkMode}
            ></div>
            <div className={stylesHeader.iconContainer}>
              {isDarkMode ? <Moon /> : <Sun />}
            </div>
          </li>
        </div>
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
          <Link to="projetos" label="Projetos" customClass={styles.list} />
        </li>
        <li>
          <Link to="contato" label="Contato" customClass={styles.list} />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
