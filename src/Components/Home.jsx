import React from 'react';
import styles from '../Components/Home.module.css';
import StyledBgHome from './StyledComponents/BgHome';
import StyledGradient from './StyledComponents/Gradient';

const Home = () => {
  return (
    <section id="home" className="background-home">
      <div className={`${styles.home} container`}>
        <div className={styles.iconHello}>
          <span>👋🏻</span>
          <p className="gradient">Olá, meu nome é</p>
        </div>
        <h1>
          Ana Paula
          <br />
          Benjamin<StyledGradient>.</StyledGradient>
        </h1>
        <h2 className="subTitle">Desenvolvedora Front-end & UI Design</h2>
      </div>
      <StyledBgHome />
    </section>
  );
};

export default Home;
