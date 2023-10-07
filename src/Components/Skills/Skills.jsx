import React from 'react';
import styles from './Skills.module.css';
import SkillsList from '../StyledComponents/SkillsList';
import Title from '../StyledComponents/Title';
import IconHtml from '../../assets/Skills/Html';
import IconCss from '../../assets/Skills/Css';
import IconReact from '../../assets/Skills/React';
import IconStyled from '../../assets/Skills/Styled';
import IconJavaScript from '../../assets/Skills/JavaScript';
import IconFigma from '../../assets/Skills/Figma';
import IconGit from '../../assets/Skills/Git';
import IconType from '../../assets/Skills/Type';
import IconResponsive from '../../assets/Skills/Responsive';
import IconLayout from '../../assets/Skills/Layout';
import IconWireframing from '../../assets/Skills/Wireframing';

const Skills = () => {
  const languagesAndTechnologies = [
    { icon: <IconHtml />, text: 'html5' },
    { icon: <IconCss />, text: 'css3' },
    { icon: <IconReact />, text: 'react' },
    { icon: <IconJavaScript />, text: 'javascript' },
    { icon: <IconGit />, text: 'git' },
    { icon: <IconFigma />, text: 'figma' },
    { icon: <IconStyled />, text: 'styled components' },
  ];

  const knowledge = [
    { icon: <IconType />, text: 'tipografia' },
    { icon: <IconResponsive />, text: 'design responsivo' },
    { icon: <IconLayout />, text: 'design de layout' },
    { icon: <IconWireframing />, text: 'wireframing' },
  ];

  return (
    <section>
      <div className={`${styles.skills} container`}>
        <Title text="habilidades" />
        <div className={styles.listSkills}>
          <h3 className="subTitle">linguagens e tecnologias</h3>
          <ul className={styles.list}>
            <SkillsList items={languagesAndTechnologies} />
          </ul>
          <h3 className="subTitle">conhecimentos</h3>
          <ul className={styles.list}>
            <SkillsList items={knowledge} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
