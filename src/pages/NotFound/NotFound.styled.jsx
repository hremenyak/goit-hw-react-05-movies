import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const InfoLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;

  :hover {
    color: #d2042d;
  }
`;
