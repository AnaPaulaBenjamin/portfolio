import React, { useState } from 'react';
import Styles from '../Projects/Projects.module.css';
import StyledGradient from '../StyledComponents/Gradient';
import StyledMyProjects from '../StyledComponents/MyProjects';
import IconHtml from '../../assets/Projects/Html';
import IconCss from '../../assets/Projects/Css';
import IconReact from '../../assets/Projects/React';
import IconJavaScrip from '../../assets/Projects/JavaScript';
import IconFigma from '../../assets/Projects/Figma';
import ProjectsModal from '../Projects/ProjectsModal';

const projectsData = [
  {
    id: 1,
    src: '../../src/assets/image.jpg',
    alt: 'foto do projeto 1',
    title: 'Projeto 1',
    description:
      'Estou ansiosa para aplicar essas habilidades e conhecimentos no universo fascinante da criação digital.',
    icons: [
      <IconHtml />,
      <IconCss />,
      <IconJavaScrip />,
      <IconReact />,
      <IconFigma />,
    ],
  },
  {
    id: 2,
    src: '../../src/assets/image.jpg',
    alt: 'foto do projeto 2',
    title: 'Projeto 2',
    description:
      'Estou ansiosa para aplicar essas habilidades e conhecimentos no universo fascinante da criação digital.',
    icons: [
      <IconHtml />,
      <IconCss />,
      <IconJavaScrip />,
      <IconReact />,
      <IconFigma />,
    ],
  },
  {
    id: 3,
    src: '../../src/assets/image.jpg',
    alt: 'foto do projeto 3',
    title: 'Projeto 3',
    description:
      'Estou ansiosa para aplicar essas habilidades e conhecimentos no universo fascinante da criação digital.',
    icons: [
      <IconHtml />,
      <IconCss />,
      <IconJavaScrip />,
      <IconReact />,
      <IconFigma />,
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projetos">
      <div className={`${Styles.projects} container`}>
        <h2 className="title paddingTitle">
          projetos<StyledGradient>.</StyledGradient>
        </h2>
        <h3 className="subTitle">alguns dos meus projetos</h3>
        <div className={Styles.myProjects}>
          {projectsData.map((project) => (
            <StyledMyProjects
              key={project.id}
              openModal={() => openModal(project)}
              {...project}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectsModal
          isOpen={selectedProject !== null}
          closeModal={closeModal}
          selectedProject={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
