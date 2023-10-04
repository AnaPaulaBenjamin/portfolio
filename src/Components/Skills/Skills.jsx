import React from 'react';
import styles from './Skills.module.css';
import SubTitle from '../StyledComponents/SubTitle';
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
  return (
    <section>
      <div className={`${styles.skills} container`}>
        <SubTitle text="habilidades" />
        <div>
          <h3>linguagens e tecnologias</h3>
          <ul className={styles.list}>
            <li>
              <IconHtml />
              html5
            </li>
            <li>
              <IconCss />
              css3
            </li>
            <li>
              <IconReact />
              react
            </li>
            <li>
              <IconJavaScript />
              javascript
            </li>
            <li>
              <IconGit />
              git
            </li>
            <li>
              <IconFigma />
              figma
            </li>
            <li>
              <IconStyled />
              styled components
            </li>
            <li>
              <IconResponsive />
              design responsivo
            </li>
          </ul>
          <h3>conhecimentos</h3>
          <ul className={styles.list}>
            <li>
              <IconType />
              tipografia
            </li>
            <li>
              <IconLayout />
              design de layout
            </li>
            <li>
              <IconWireframing />
              wireframing
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
