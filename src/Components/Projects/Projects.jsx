import React from 'react';
import Styles from '../Projects/Projects.module.css';
import SubTitle from '../StyledComponents/SubTitle';
import { Link } from 'react-router-dom';
import IconMore from '../../assets/IconMore';
import IconHtml from '../../assets/Skills/Html';
import IconCss from '../../assets/Skills/Css';
import IconReact from '../../assets/Skills/React';
import IconJavaScrip from '../../assets/Skills/JavaScript';
import ArrowText from '../StyledComponents/ArrowText';
// import StyledProjects from '../StyledComponents/Project';

const Projects = () => {
  return (
    <section>
      <div className={`${Styles.projects} container`}>
        <SubTitle text="projetos" />
        <h3>alguns dos meus projetos</h3>
        <div className={Styles.container}>
          <div className={Styles.project}>
            <img src="../../src/assets/image.jpg" alt="Imagem do Projeto" />
            <div className={Styles.prod}>
              <div className={Styles.title}>
                <h4>Projetos</h4>
                <Link to="/" aria-label="Tela maior">
                  <IconMore />
                </Link>
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
                  <IconMore />
                </Link>
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
                  <IconMore />
                </Link>
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
        </div>
        <ArrowText text="Ver mais " />
      </div>
    </section>
  );
};

export default Projects;
