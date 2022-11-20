import { ListItem, InfoLink, Wrapper } from './NotFound.styled';
const NotFound = () => {
  return (
    <Wrapper>
      <h1>{'Oops... Seems like something went wrong.'}</h1>
      <p>Here are some helpful links:</p>
      <ul>
        <ListItem>
          <InfoLink to="/">Home</InfoLink>
        </ListItem>

        <ListItem>
          <InfoLink to="/movies">Movies</InfoLink>{' '}
        </ListItem>
      </ul>
    </Wrapper>
  );
};

export default NotFound;
