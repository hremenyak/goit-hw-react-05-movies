import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
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

export const InfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const ImageWrapper = styled.div`
  margin: 0 0 10px 10px;
`;

export const ExtraInfoSection = styled.div`
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ExtraInfoTitle = styled.h3`
  margin-bottom: 10px;
`;
