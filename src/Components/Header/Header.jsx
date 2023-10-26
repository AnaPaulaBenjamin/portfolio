import React, { useState, useEffect } from 'react';
import { Link } from './SharedComponents';
import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo';
import Moon from './Assets/moon.jsx';
import Sun from './Assets/Sun.jsx';
import MobileMenu from './MobileMenu';
import { useTrail, animated } from 'react-spring';

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

  const navItems = [
    { label: 'Sobre', to: 'sobre' },
    { label: 'Habilidades', to: 'habilidades' },
    { label: 'Projetos', to: 'projetos' },
    { label: 'Contato', to: 'contato' },
  ];

  const trail = useTrail(navItems.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 600 },
  });

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
              {trail.map((style, index) => (
                <animated.li key={index} style={style}>
                  <Link
                    to={navItems[index].to}
                    label={navItems[index].label}
                    customClass={styles.list}
                  />
                </animated.li>
              ))}
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
