import React from 'react';
import Modal from 'react-modal';
import IconModal from '../StyledComponents/IconModal';

function ProjectModal({ isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>Seu Conteúdo Modal</h2>
      <p>Aqui está o conteúdo do seu modal.</p>
      <span onClick={closeModal}>
        <IconModal />
      </span>
    </Modal>
  );
}

export default ProjectModal;
