import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px 10px;
  gap: 10px;
  margin: auto;
`;
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
    color: #ab47bc;
  }
`;
