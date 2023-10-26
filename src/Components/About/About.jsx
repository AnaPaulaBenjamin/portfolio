import React from 'react';
import styles from './About.module.css';
import { useInView } from 'react-intersection-observer';
import Foto from '../../assets/foto.jpg';
import IconGitHub from '../../assets/Contact/Github';
import IconLinkedin from '../../assets/Contact/Linkedin';
import IconInstagran from '../../assets/Contact/Instagran';
import ImageBorder from './ImageBorder';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="sobre" className="background">
      <div
        ref={ref}
        className={`${styles.about} container ${inView ? 'visible' : ''}`}
      >
        <h2 className={`title paddingTitle ${inView ? 'animeLeft' : ''}`}>
          sobre<span className="gradient">.</span>
        </h2>
        <div className={`${styles.image} ${inView ? 'animeLeft' : ''}`}>
          <ImageBorder />
          <img src={Foto} alt="Foto - Ana Paula Benjamin" />
        </div>
        <div className={`${styles.aboutMe} ${inView ? 'animeRight' : ''}`}>
          <h3 className="subTitle">um pouco sobre mim</h3>
          <p>
            Meu percurso é o resultado de uma paixão recentemente descoberta: o
            mundo da tecnologia e do design. Como entusiasta, estou em uma
            jornada empolgante em busca de oportunidades no desenvolvimento
            front-end e design de interface do usuário (UI).
          </p>
          <p>
            Minha trajetória anterior como empreendedora deixou-me com lições
            valiosas sobre a importância da criatividade, empatia e trabalho em
            equipe. Agora, meu foco está em aplicar essas habilidades para criar
            experiências digitais impactantes e intuitivas que ressoem com os
            usuários.
          </p>
          <p>
            Entendo que a busca pela excelência é um compromisso contínuo, e
            acredito que a evolução constante é a chave para alcançá-la. Cada
            projeto que empreendo é uma oportunidade de aprendizado, e estou
            ansiosa para aplicar minhas habilidades e conhecimentos no vasto e
            fascinante universo da criação digital.
          </p>
          <p>
            Meu portfólio é uma vitrine do que já alcancei, mas também reflete
            minha constante busca por aprimoramento. Estou animada para explorar
            novas conexões e oportunidades, e para compartilhar a jornada à
            medida que ela se desdobra.
          </p>
          <span>
            Atualmente cursando EAD em Análise e Desenvolvimento de Sistemas.
          </span>
          <div className={`${styles.icons} ${inView ? 'animeScale' : ''}`}>
            <a
              href="https://github.com/AnaPaulaBenjamin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGitHub width="18px" height="18px" />
            </a>
            <a
              href="https://www.linkedin.com/in/ana-paula-benjamin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin width="17px" height="18px" />
            </a>
            <a
              href="https://www.instagram.com/ana.benjamin0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagran width="18px" height="18px" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
