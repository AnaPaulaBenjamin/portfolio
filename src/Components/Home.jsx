import React from 'react';
import styles from './Home.module.css';
import Background from '../assets/Background';

const Home = () => {
  return (
    <section>
      <div className={styles.bg}>
        <div className={`${styles.home} container`}>
          <div className={styles.iconHello}>
            <span className={styles.icon}>👋🏻</span>
            <p>Olá, meu nome é</p>
          </div>
          <h1>
            Ana Paula
            <br />
            Benjamin
          </h1>
          <p className={styles.work}>Desenvolvedora Front-end & UI Design</p>
        </div>
        <Background />
      </div>
    </section>
  );
};

export default Home;
