import React from 'react';
import Styles from '../Contact/Contact.module.css';
import StyledGradient from '../StyledComponents/Gradient';
import StyledContactList from '../StyledComponents/ContactList';
import IconEmail from '../../assets/Contact/Email';
import IconGithub from '../../assets/Contact/Github';
import IconLinkedin from '../../assets/Contact/Linkedin';
import IconWhatsapp from '../../assets/Contact/Whatsapp';

const Contact = () => {
  return (
    <section id="contato" className="background">
      <div className={`${Styles.contact} container`}>
        <h2 className="title paddingTitle">
          contato<StyledGradient>.</StyledGradient>{' '}
        </h2>
        <h3 className="subTitle">como me encontrar</h3>
        <div className={Styles.contactList}>
          <StyledContactList
            href="mailto:anabenjamin.dev@gmail.com"
            icon={<IconEmail />}
            title="E-mail"
            content="anabenjamin.dev@gmail.com"
          />
          <StyledContactList
            href="https://github.com/AnaPaulaBenjamin"
            icon={<IconGithub />}
            title="GitHub"
            content="@anapaulabenjamin"
          />
          <StyledContactList
            href="https://www.linkedin.com/in/ana-paula-benjamin/"
            icon={<IconLinkedin />}
            title="Linkedin"
            content="@anapaulabenjamin"
          />
          <StyledContactList
            href="tel:+55479997233267"
            icon={<IconWhatsapp />}
            title="Whatsapp"
            content="55 (47) 99723-3267"
          />
        </div>
        <p className={Styles.call}>
          Se você está interessado em meu trabalho, deseja discutir
          oportunidades de colaboração ou simplesmente deseja trocar ideias, não
          hesite em entrar em contato. Estou sempre aberta a novas conexões e
          oportunidades emocionantes.
        </p>
      </div>
    </section>
  );
};

export default Contact;
