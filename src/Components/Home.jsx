import React from 'react';
import styles from './Home.module.css';
import Gradient from '../Gradient';

const Home = () => {
  return (
    <section>
      <div className={`${styles.home} container`}>
        <p>
          <span className={styles.icone}>👋🏻</span>
          <Gradient> Olá, meu nome é</Gradient>
        </p>
        <h1>
          Ana Paula
          <br />
          Benjamin<Gradient>.</Gradient>
        </h1>
        <p>Desenvolvedora Front-end & UI Design</p>
      </div>
    </section>
  );
};

export default Home;
