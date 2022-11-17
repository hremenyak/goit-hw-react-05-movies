import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Section = styled.section`
  padding: 15px 0;
`;
