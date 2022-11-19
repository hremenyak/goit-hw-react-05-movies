import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { getMoviesByName } from 'services/api';
import { List, ListItem, MovieLink, Button, Input } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const movieName = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const movieName = e.target.movie.value;
    setSearchParams({ query: movieName });
  };

  useEffect(() => {
    const fetchdata = async () => {
      if (!movieName) {
        return;
      }
      setIsLoading(true);
      try {
        const movies = await getMoviesByName(movieName);
        setMovies(movies.results);
      } catch (e) {
        console.log(e, 'There has been a mistake');
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [movieName]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="movie" placeholder="Enter the movie..." />
        <Button type="submit">
          Search
          <AiOutlineSearch />
        </Button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List>
          {movies.map(({ id, title, name }) => (
            <ListItem key={id}>
              <MovieLink to={`${id}`} state={{ from: fullPath }}>
                {title || name}
              </MovieLink>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Movies;
