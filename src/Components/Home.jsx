import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section>
      <div className={`${styles.home} container`}>
        <div className={styles.hello}>
          <span className={styles.icone}>👋🏻</span>
          <p>Olá, meu nome é</p>
        </div>
        <h1>
          Ana Paula
          <br />
          Benjamin
        </h1>
        <p className={styles.work}>Desenvolvedora Front-end & UI Design</p>
      </div>
    </section>
  );
};

export default Home;
