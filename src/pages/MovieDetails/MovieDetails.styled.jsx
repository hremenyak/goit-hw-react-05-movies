import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const InfoLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: #d2042d;
  }
`;
