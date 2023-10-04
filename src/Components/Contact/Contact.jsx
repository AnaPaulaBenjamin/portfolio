import React from 'react';
import Styles from '../Contact/Contact.module.css';
import SubTitle from '../StyledComponents/SubTitle';
import Email from '../../assets/Networks/Email';
import Github from '../../assets/Networks/Github';
import Linkedin from '../../assets/Networks/Linkedin';
import Number from '../../assets/Networks/Number';

const Contact = () => {
  return (
    <section>
      <div className={`${Styles.contact} container`}>
        <SubTitle text="contato" />
        <h3>como me encontrar</h3>
        <div className={Styles.networks}>
          <div className={Styles.list}>
            <a href="mailto:anabenjamin.dev@gmail.com">
              <div className={Styles.svg}>
                <Email />
              </div>
            </a>
            <a href="mailto:anabenjamin.dev@gmail.com">
              <p>Email</p>
            </a>
            <a href="mailto:anabenjamin.dev@gmail.com">
              <span>anabenjamin.dev@gmail.com</span>
            </a>
          </div>
          <div className={Styles.list}>
            <a
              href="https://github.com/AnaPaulaBenjamin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={Styles.svg}>
                <Github />
              </div>
            </a>
            <a
              href="https://github.com/AnaPaulaBenjamin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHub</p>
            </a>
            <a
              href="https://github.com/AnaPaulaBenjamin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>@anapaulabenjamin</span>
            </a>
          </div>
          <div className={Styles.list}>
            <a
              href="https://www.linkedin.com/in/ana-paula-benjamin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={Styles.svg}>
                <Linkedin />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ana-paula-benjamin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Linkedin</p>
            </a>
            <a
              href="https://www.linkedin.com/in/ana-paula-benjamin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>@anapaulabenjamin</span>
            </a>
          </div>
          <div className={Styles.list}>
            <a href="tel:+55479997233267">
              <div className={Styles.svg}>
                <Number />
              </div>
            </a>
            <a href="tel:+55479997233267">
              <p>Telefone</p>
            </a>
            <a href="tel:+55479997233267">
              <span>55 (47) 99723-3267</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
