import { ListItem, InfoLink } from './NotFound.styled';
const NotFound = () => {
  return (
    <div>
      <h1>{"Oops seems like we can't find the page you were looking for."}</h1>
      <p>Here are some helpful links:</p>
      <ul>
        <ListItem>
          <InfoLink to="/">Home</InfoLink>
        </ListItem>

        <ListItem>
          <InfoLink to="/movies">Movies</InfoLink>{' '}
        </ListItem>
      </ul>
    </div>
  );
};

export default NotFound;
