import React from 'react';
import Styles from '../Projects/Projects.module.css';
import Title from '../StyledComponents/Title';
import { Link } from 'react-router-dom';
import IconHtml from '../../assets/Icons/Html';
import IconCss from '../../assets/Icons/Css';
import IconReact from '../../assets/Icons/React';
import IconJavaScrip from '../../assets/Icons/JavaScript';
import ArrowText from '../StyledComponents/ArrowText';
import IconModal from '../StyledComponents/IconModal';

const Projects = () => {
  return (
    <section>
      <div className={`${Styles.projects} container`}>
        <Title text="projetos" />
        <h3>alguns dos meus projetos</h3>
        <div className={Styles.container}>
          <div className={Styles.project}>
            <img src="../../src/assets/image.jpg" alt="Imagem do Projeto" />
            <div className={Styles.prod}>
              <div className={Styles.title}>
                <h4>Projetos</h4>
              </div>
              <p>
                Estou ansiosa para aplicar essas habilidades e conhecimentos no
                universo fascinante da criação digital.
              </p>
              <div className={Styles.icons}>
                <IconHtml />
                <IconCss />
                <IconJavaScrip />
                <IconReact />
              </div>
            </div>
          </div>
          <div className={Styles.project}>
            <img src="../../src/assets/image.jpg" alt="Imagem do Projeto" />
            <div className={Styles.prod}>
              <div className={Styles.title}>
                <h4>Projetos</h4>
                <Link to="/" aria-label="Tela maior">
                  <IconModal />
                </Link>
              </div>
              <p>
                Estou ansiosa para aplicar essas habilidades e conhecimentos no
                universo fascinante da criação digital.
              </p>
              <div className={Styles.icons}>
                {/* <IconHtml />
                <IconCss />
                <IconJavaScrip />
                <IconReact /> */}
              </div>
            </div>
          </div>
          <div className={Styles.project}>
            <img src="../../src/assets/image.jpg" alt="Imagem do Projeto" />
            <div className={Styles.prod}>
              <div className={Styles.title}>
                <h4>Projetos</h4>
                <Link to="/" aria-label="Tela maior">
                  <IconModal />
                </Link>
              </div>
              <p>
                Estou ansiosa para aplicar essas habilidades e conhecimentos no
                universo fascinante da criação digital.
              </p>
              <div className={Styles.icons}>
                {/* <IconHtml />
                <IconCss />
                <IconJavaScrip />
                <IconReact /> */}
              </div>
            </div>
          </div>
        </div>
        <ArrowText text="Ver mais " />
      </div>
    </section>
  );
};

export default Projects;
