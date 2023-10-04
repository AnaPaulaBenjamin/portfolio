import React from 'react';
import Styles from '../Components/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={`${Styles.footer} container`}>
        <p>
          Se você está interessado em meu trabalho, deseja discutir
          oportunidades de colaboração ou simplesmente deseja trocar ideias, não
          hesite em entrar em contato. Estou sempre aberta a novas conexões e
          oportunidades emocionantes.
        </p>
        <span>© 2023 | Ana Paula Benjamin</span>
      </div>
    </footer>
  );
};

export default Footer;
