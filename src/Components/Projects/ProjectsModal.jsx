import React from 'react';
import Modal from 'react-modal';
import Styles from '../Projects/ProjectsModal.module.css';
import IconModal from '../StyledComponents/IconModal';

Modal.setAppElement('#root');

function ProjectsModal({ isOpen, closeModal, selectedProject }) {
  return (
    <Modal
      className={Styles.modal}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <div className={Styles.container}>
        <div>
          <img src={selectedProject.src} alt={selectedProject.alt} />
        </div>
        <div className={Styles.project}>
          <h2 className={Styles.title}>
            <div>
              {selectedProject.title}
              <span className="gradient">.</span>
            </div>
            <IconModal
              className={Styles.iconModal}
              isOpen={isOpen}
              openModal={selectedProject ? () => {} : closeModal}
              closeModal={closeModal}
            />
          </h2>
          <p>{selectedProject.description}</p>
          <p>
            Estou ansiosa para aplicar essas habilidades e conhecimentos no
            universo fascinante da criação digital.Estou ansiosa para aplicar
            essas habilidades e conhecimentos no universo fascinante da criação
            digital.Estou ansiosa para aplicar essas habilidades e conhecimentos
            no universo fascinante da criação digital.
          </p>
          <p>
            Estou ansiosa para aplicar essas habilidades e conhecimentos no
            universo fascinante da criação digital.Estou ansiosa para aplicar
            essas habilidades e conhecimentos no universo fascinante da criação
            digital.
          </p>
          <div className={Styles.technologies}>
            <div className={Styles.icons}>{selectedProject.icons}</div>
            <a
              className="subTitle gradient"
              href="https://dogs-origamid.vercel.app/"
              target="_blank"
            >
              Projeto
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectsModal;
