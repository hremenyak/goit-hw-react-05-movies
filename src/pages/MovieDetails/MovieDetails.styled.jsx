import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  padding-top: 15px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`;
export const MovieCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 10px 0 10px 10px;
`;

export const InfoLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;

  :hover {
    color: #ab47bc;
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
  width: 270px;
`;

export const ExtraInfoSection = styled.div`
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ExtraInfoTitle = styled.h3`
  margin-bottom: 10px;
`;

export const MovieInfo = styled.div`
  width: 500px;
  text-align: justify;
`;

export const BackButton = styled.button`
  border-radius: 6px;
  padding: 7px 10px;
  border: transparent;
  outline: none;
  margin-left: 10px;
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: #ab47bc;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: #773183;
  }
`;
