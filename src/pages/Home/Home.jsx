import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TrendingMovieLink, List, ListItem } from './Home.styled';

const Home = ({ trending }) => {
  const location = useLocation();
  return (
    <main>
      <h1> Trending today</h1>
      <List>
        {trending.map(({ id, title, name }) => (
          <ListItem key={id}>
            <TrendingMovieLink
              to={`movies/${id}`}
              state={{ from: location.pathname }}
            >
              {title || name}
            </TrendingMovieLink>
          </ListItem>
        ))}
      </List>
      <Outlet />
    </main>
  );
};

export default Home;

Home.propTypes = {
  trending: PropTypes.arrayOf(PropTypes.object),
};
