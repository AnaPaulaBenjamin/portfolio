import React, { useState } from 'react';
import { Link } from './SharedComponents';
import { useLocation } from 'react-router-dom';
import styles from './MobileMenu.module.css';
import stylesHeader from './Header.module.css';
import Moon from './Assets/moon';
import Sun from './Assets/Sun';

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
