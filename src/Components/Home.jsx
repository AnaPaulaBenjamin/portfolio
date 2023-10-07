import React from 'react';
import styles from './Home.module.css';
import BgHome from './StyledComponents/BgHome';

const Home = () => {
  return (
    <section>
      <div className="background">
        <div className={`${styles.home} container`}>
          <div className={styles.iconHello}>
            <span>👋🏻</span>
            <p>Olá, meu nome é</p>
          </div>
          <h1>
            Ana Paula
            <br />
            Benjamin<span className="gradient">.</span>
          </h1>
          <h2 className="subTitle">Desenvolvedora Front-end & UI Design</h2>
        </div>
        <BgHome />
      </div>
    </section>
  );
};

export default Home;
