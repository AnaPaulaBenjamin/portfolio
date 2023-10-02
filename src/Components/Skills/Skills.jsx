import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section>
      <div className={`${styles.skills} container`}>
        <h2></h2>
        <div className={styles.mySkills}>
          <h3>Habilidades básicas em Front-end</h3>
          <ul className={styles.list}>
            <li>html5</li>
            <li>css3</li>
            <li>react</li>
            <li>figma</li>
          </ul>
        </div>
        <div className={styles.mySkills}>
          <h3>Conhecimento básico em UI Design</h3>
          <ul className={styles.list}>
            <li>tipografia</li>
            <li>design responsivo</li>
            <li>design de layout</li>
            <li>wireframing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
