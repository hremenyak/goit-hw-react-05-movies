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
    color: #d2042d;
  }
`;

export const Button = styled.button`
  border-radius: 6px;
  padding: 5px 10px;
  border: transparent;
  outline: none;
  margin-left: 8px;
  font-weight: 500;
  :hover {
    background-color: #eb1c45;
    color: white;
  }
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 10px;
`;
