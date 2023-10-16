import React from 'react';
import styles from './About.module.css';
import Foto from '../../assets/foto.jpg';
import StyledGradient from '../StyledComponents/Gradient';
import StyledImageBorder from '../StyledComponents/ImageBorder';

const About = () => {
  return (
    <section id="sobre">
      <div className={`${styles.about} container`}>
        <h2 className="title paddingTitle">
          sobre<StyledGradient>.</StyledGradient>
        </h2>
        <div className={styles.image}>
          <StyledImageBorder />
          <img src={Foto} alt="Foto - Ana Paula Benjamin" />
        </div>
        <div className={styles.aboutMe}>
          <h3 className="subTitle">um pouco sobre mim</h3>
          <p>
            Sou uma entusiasta que descobriu a paixão pelo mundo da tecnologia e
            do design, buscando oportunidades em desenvolvimento front-end e
            design de experiência do usuário (UX/UI).
          </p>
          <p>
            Minha jornada profissional anterior como empreendedora me ensinou a
            importância da criatividade, empatia e trabalho em equipe. Estou
            comprometida em aplicar essas habilidades para criar experiências
            digitais impactantes e intuitivas.
          </p>
          <p>
            Estou em constante busca por oportunidades de aprimoramento
            contínuo, pois acredito que a evolução é a essência da excelência.
            Cada projeto é uma oportunidade de aprendizado. Estou ansiosa para
            aplicar essas habilidades e conhecimentos no universo fascinante da
            criação digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
