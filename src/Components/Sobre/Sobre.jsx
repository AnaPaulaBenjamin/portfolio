import React from 'react';
import { Link } from 'react-router-dom';
import style from './Sobre.module.css';
import Gradient from '../../Gradient';
import Seta from '../../assets/seta';

const Sobre = () => {
  return (
    <section className={style.about}>
      <div className={`${style.mainContainer} container`}>
        <h2>
          sobre<Gradient>.</Gradient>
        </h2>
        <div className={style.image}>
          <img src="../src/assets/foto.jpg" alt="Foto - Ana Paula Benjamin" />
        </div>
        <div className={style.aboutMe}>
          <h3>um pouco sobre mim</h3>
          <p>
            Sou uma entusiasta que descobriu a paixão pelo mundo da tecnologia e
            do design, buscando oportunidades em desenvolvimento front-end e
            design de experiência do usuário (UX/UI).
          </p>
          <br />
          <p>
            Minha jornada profissional anterior como empreendedora me ensinou a
            importância da criatividade, empatia e trabalho em equipe. Estou
            comprometida em aplicar essas habilidades para criar experiências
            digitais impactantes e intuitivas.
          </p>
          <br />
          <p>
            Estou em constante busca por oportunidades de aprimoramento
            contínuo, pois acredito que a evolução é a essência da excelência.
            Cada projeto é uma oportunidade de aprendizado.
            <br />
            Estou ansiosa para aplicar essas habilidades e conhecimentos no
            universo fascinante da criação digital.
          </p>
          <p className={style.more}>
            <Link to="/sobre" aria-label="sobre">
              <Gradient>
                ver mais <Seta />
              </Gradient>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
