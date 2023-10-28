import React from 'react';
import { Link } from './SharedComponents';
import styles from './MobileMenu.module.css';
import stylesHeader from './Header.module.css';
import Moon from './Assets/Moon';
import Sun from './Assets/Sun';

const MobileMenu = ({ isDarkMode, toggleDarkMode, navItems }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className={styles.button}>
      <div
        className={`${styles.mobileButton} ${
          menuOpen ? styles.mobileButtonActive : ''
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>

      {menuOpen && (
        <ul className={`${styles.navMobile} ${styles.navMobileActive}`}>
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
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} label={item.label} customClass={styles.list} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
