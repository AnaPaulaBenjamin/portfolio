import React from 'react';
import styles from './Skills.module.css';
import { useInView } from 'react-intersection-observer';
import SkillsList from './SkillsList';
import IconHtml from './Assets/Html';
import IconCss from './Assets/Css';
import IconReact from './Assets/React';
import IconStyled from './Assets/Styled';
import IconJavaScript from './Assets/JavaScript';
import IconFigma from './Assets/Figma';
import IconGit from './Assets/Git';
import IconResponsive from './Assets/Responsive';
import IconLayout from './Assets/Layout';
import IconWireframing from './Assets/Wireframing';
import BodySvg from '../SVGBody/Svg1';

const Skills = () => {
  const Technologies = [
    { icon: <IconHtml />, text: 'html5', delay: 0 },
    { icon: <IconCss />, text: 'css3', delay: 200 },
    { icon: <IconJavaScript />, text: 'javascript', delay: 400 },
    { icon: <IconReact />, text: 'react', delay: 600 },
    { icon: <IconGit />, text: 'git', delay: 800 },
    { icon: <IconFigma />, text: 'figma', delay: 1000 },
    { icon: <IconStyled />, text: 'styled components', delay: 1200 },
    { icon: <IconResponsive />, text: 'design responsivo', delay: 1400 },
    { icon: <IconLayout />, text: 'design de layout', delay: 1600 },
    { icon: <IconWireframing />, text: 'wireframing', delay: 1800 },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="habilidades" className="background">
      <div
        ref={ref}
        className={`${styles.skills} container ${inView ? 'visible' : ''}`}
      >
        <BodySvg />
        <h2 className="title paddingTitle animeLeft">
          habilidades<span className="gradient">.</span>
        </h2>
        <div className={styles.listSkills}>
          <h3 className="subTitle animeLeft">linguagens e tecnologias</h3>
          <div className={styles.list}>
            <SkillsList items={Technologies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
