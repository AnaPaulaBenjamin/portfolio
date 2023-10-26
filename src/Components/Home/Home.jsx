import React from 'react';
import styles from './Home.module.css';
import { HeroPattern } from '../HeroPattern';
import HomeBg from './HomeBg';

const Home = () => {
  return (
    <section id="home" className="background-home">
      <HeroPattern />
      <div className={`${styles.home} container animeLeft`}>
        <div className={styles.iconHello}>
          <span>👋🏻</span>
          <p className="gradient">Olá, meu nome é</p>
        </div>
        <h1>
          Ana Paula
          <br />
          Benjamin<span className="gradient">.</span>
        </h1>
        <h2 className="subTitle">Desenvolvedora Front-end & UI Designer</h2>
      </div>
      <HomeBg />
    </section>
  );
};

export default Home;
