import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  margin: 15px 0;
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const MovieLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: #ab47bc;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;
