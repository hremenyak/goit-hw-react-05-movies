import { Outlet } from 'react-router-dom';
import { TrendingMovieLink, List, ListItem } from './Home.styled';
const Home = ({ trending }) => {
  return (
    <main>
      <h1> Trending today</h1>
      <List>
        {trending.map(movie => (
          <ListItem key={movie.id}>
            <TrendingMovieLink to={`movies/${movie.id}`}>
              {movie.title || movie.name}
            </TrendingMovieLink>
          </ListItem>
        ))}
      </List>
      <Outlet />
    </main>
  );
};

export default Home;