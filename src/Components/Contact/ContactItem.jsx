import React from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Icon = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  background-color: var(--background-2);
  border-radius: 50%;

  @media (max-width: 30rem) {
    margin-bottom: 0.5rem;
  }
`;

const Paragraph = styled.p`
  font-family: var(--type-first);
  color: var(--text-2);
  font-size: 1rem;

  @media (max-width: 30rem) {
    font-size: 0.75rem;
  }
`;

const Span = styled.span`
  font-family: var(--type-first);
  color: var(--gray-1);
  font-size: 1rem;

  @media (max-width: 50rem) {
    display: none;
  }
`;

const ContactItem = ({ href, icon, title, content }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <ListItem>
        <Icon>{icon}</Icon>
        <Paragraph>{title}</Paragraph>
        <Span>{content}</Span>
      </ListItem>
    </a>
  );
};

export default ContactItem;
