import React from 'react';
import styled from 'styled-components';
import IconModal from './ModalIcon';

const Container = styled.div`
  background-color: var(--background-2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: var(--box-shadow-1);
  }
`;

const Projects = styled.div`
  margin: 1rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  justify-content: space-between;
`;

const Image = styled.img`
  border-radius: 4px 4px 0 0;
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  font-size: 1.25rem;
  justify-content: space-between;
  font-family: var(--type-first);
  color: var(--text-2);
  padding-top: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--gray-3);
  font-family: var(--type-first);
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MyProjects = ({
  src,
  title,
  description,
  icons,
  alt,
  openModal,
  closeModal,
}) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
      <Projects>
        <Title>
          <h4>{title}</h4>
          <IconModal openModal={openModal} closeModal={closeModal} />
        </Title>
        <Description>{description}</Description>
        <Icons>
          {icons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </Icons>
      </Projects>
    </Container>
  );
};

export default MyProjects;
