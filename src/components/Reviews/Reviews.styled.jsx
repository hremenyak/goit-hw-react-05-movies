import styled from 'styled-components';

export const Item = styled.li`
  text-align: justify;
  list-style: none;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
`;

export const Section = styled.section`
  padding: 15px 10px;
`;
