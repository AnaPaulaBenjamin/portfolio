import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  font-family: var(--type-first);
  gap: 1rem;

  @media (max-width: 30rem) {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`;

const ListItem = styled.li`
  background-color: var(--background-2);
  color: var(--text-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  border-radius: 4px;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: var(--box-shadow-1);
  }
`;

const SkillsList = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          {item.icon}
          {item.text}
        </ListItem>
      ))}
    </List>
  );
};

export default SkillsList;
