import React, { useState } from 'react';
import Styles from '../Projects/Projects.module.css';
import { useInView } from 'react-intersection-observer';
import MyProjects from './MyProjects';
import ImageDogs from './Assets/dogs.png';
import ImageDogsModal from './Assets/dogs-modal.png';
import ImageBikcraft from './Assets/bikcraft.webp';
import ImageBikcraftModal from './Assets/bikcraft-modal.png';
import ImageShortsSummary from './Assets/shorts-summary.jpeg';
import ImageShortsSummaryModal from './Assets/shorts-summary-modal.png';
import IconHtml from './Assets/Html';
import IconCss from './Assets/Css';
import IconReact from './Assets/React';
import IconJavaScrip from './Assets/JavaScript';
import IconFigma from './Assets/Figma';
import ProjectsModal from '../Projects/ProjectsModal';
import { useTrail, animated } from 'react-spring';
import BodySvg from '../SVGBody/Svg2';

const projectsData = [
  {
    id: 1,
    src: ImageDogs,
    modalImage: ImageDogsModal,
    alt: 'Dogs - Rede Social para Pets',
    title: 'Rede Social Dogs',
    description:
      'Criação da aplicação Dogs, rede social para cachorros. A tela inicial apresenta o feed de postagens e é possível navegar através de fotos e autor. Logado como usuário, é possível comentar as postagens.',
    icons: [<IconHtml />, <IconCss />, <IconJavaScrip />, <IconReact />],
    externalLink: 'https://dogs-origamid.vercel.app/',
    paragraphs1: [
      'Projeto do curso React Completo da Origamid, utilizando a tecnologia React, uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Possui a capacidade de ser declarativa, eficiente, flexível e extremamente componentizável. Neste projeto, a integração com o back-end se deu totalmente através de API (Application Programming Interface).',
    ],
    paragraphs2: [
      'Na página do usuário, é possível visualizar o seu feed, postar fotos e acessar as estatísticas de visualizações. O site está totalmente funcional.',
    ],
  },
  {
    id: 2,
    src: ImageBikcraft,
    modalImage: ImageBikcraftModal,
    alt: 'Bikcraft - Bicicletas Elétricas',
    title: 'Bikcraft',
    description:
      'Bikcraf é um site de vendas de bicicletas fictício. O projeto foi desenvolvido por completo, desde a prototipagem no Figma, a codificação do HTML, a estilização no CSS e as animações em JavaScript.',
    icons: [<IconHtml />, <IconCss />, <IconJavaScrip />, <IconFigma />],
    externalLink: 'https://anapaulabenjamin.github.io/bikcraft/',
    paragraphs1: [
      'É um projeto que simula uma loja de venda de biciletas costumizadas e seguros, confeccionado com HTML, CSS e JavaScript, com o PHP para o envio de e-mail na página de contatos.',
    ],
    paragraphs2: [
      'Este é um projeto desenvolvido através do curso de HTML e CSS Completo da Origamid. Foram realizados poucos ajustes entre o projeto do curso e a subida no servidor.',
    ],
  },
  {
    id: 3,
    src: ImageShortsSummary,
    modalImage: ImageShortsSummaryModal,
    alt: 'Shorts Summary- Resumo de Shorts',
    title: 'Shorts Summary',
    description:
      'Shorts Summary é uma aplicação web para criar resumo de vídeos shorts do Youtube utilizando Inteligência Artificial para transcrever o conteúdo do vídeo e realizar o resumo do conteúdo.',
    icons: [<IconHtml />, <IconCss />, <IconJavaScrip />],
    externalLink: 'https://shorts-summary-nine.vercel.app/',
    paragraphs1: [
      'Esse projeto é desenvolvido na trilha Foundations na edição NLW IA da Rocketseat. Construído com marcação HTML5 semântica, propriedades personalizadas CSS.',
    ],
    paragraphs2: [
      'Tecnologias e Bibliotecas utilizadas: Vite - Express - Cors - Axios - ydtl-core: Usado para extrair e baixar vídeos do YouTube - whisper: Sistema de reconhecimento automático de fala (ASR) treinado - node-wav: Fornece funcionalidades para ler e escrever arquivos de áudio no formato WAVE da Microsoft - FFmpeg: Solução de código aberto que permite gravar, converter e transmitir áudio e vídeo - @xenova/transformers: Aprendizado de máquina para a web.',
    ],
  },
];

const Projects = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const trail = useTrail(projectsData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(25px)',
    config: { duration: 800 },
  });

  return (
    <section id="projetos" className="background">
      <div
        ref={ref}
        className={`${Styles.projects} container ${inView ? 'visible' : ''}`}
      >
        <BodySvg />
        <h2 className="title paddingTitle animeLeft">
          projetos<span className="gradient">.</span>
        </h2>
        <h3 className="subTitle animeLeft">alguns dos meus projetos</h3>
        <div className={Styles.myProjects}>
          {trail.map((style, index) => (
            <animated.div style={style} key={projectsData[index].id}>
              <MyProjects
                openModal={() => openModal(projectsData[index])}
                {...projectsData[index]}
              />
            </animated.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectsModal
          isOpen={selectedProject !== null}
          closeModal={closeModal}
          selectedProject={selectedProject}
          isDarkMode={isDarkMode}
        />
      )}
    </section>
  );
};

export default Projects;
