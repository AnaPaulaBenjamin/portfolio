import React from 'react';
import styles from './About.module.css';
import ArrowText from '../StyledComponents/ArrowText';
import Title from '../StyledComponents/Title';
import ImageBorder from '../StyledComponents/ImageBorder';

const About = () => {
  return (
    <section>
      <div className={`${styles.about} container`}>
        <Title text="sobre" />
        <div className={styles.image}>
          <ImageBorder />
          <img src="../src/assets/foto.jpg" alt="Foto - Ana Paula Benjamin" />
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
            Cada projeto é uma oportunidade de aprendizado.
            <br />
            Estou ansiosa para aplicar essas habilidades e conhecimentos no
            universo fascinante da criação digital.
          </p>
          <ArrowText text="Ver mais " />
        </div>
      </div>
    </section>
  );
};

export default About;
