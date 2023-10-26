import React from 'react';
import Modal from 'react-modal';
import Styles from './ProjectsModal.module.css';
import IconModal from './ModalIcon';

Modal.setAppElement('#root');

function ProjectsModal({ isOpen, closeModal, selectedProject, isDarkMode }) {
  if (!isOpen || !selectedProject) {
    return null;
  }

  const modalClassName = isDarkMode ? 'dark-mode' : 'light-mode';

  return (
    <Modal
      className={`${Styles.modal} ${modalClassName}`}
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
          <img src={selectedProject.modalImage} alt={selectedProject.alt} />
        </div>
        <div className={Styles.project}>
          <h2 className={Styles.title}>
            <div>
              {selectedProject.title}
              <span className="gradient"> .</span>
            </div>
            <IconModal
              className={Styles.iconModal}
              isOpen={isOpen}
              openModal={closeModal}
              closeModal={closeModal}
            />
          </h2>
          <div className={Styles.description}>
            <p>{selectedProject.description}</p>
            <p>{selectedProject.paragraphs1}</p>
            <p>{selectedProject.paragraphs2}</p>
          </div>
          <div className={Styles.technologies}>
            <div className={Styles.icons}>{selectedProject.icons}</div>
            <a
              className="subTitle"
              href={selectedProject.externalLink}
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
