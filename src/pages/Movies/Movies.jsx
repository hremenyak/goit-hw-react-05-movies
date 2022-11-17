import { useEffect, useState } from 'react';
import { getMoviesByName } from 'services/api';
import { List, ListItem, MovieLink, Button } from './Movies.styled';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const movieName = e.target.movie.value;
    setMovieName(movieName);
    // console.log('submit', movieName);
  };

  useEffect(() => {
    const fetchdata = async () => {
      if (!movieName) {
        return;
      }
      try {
        const movies = await getMoviesByName(movieName);
        console.log(movies.results, 'useEffect results after submit');
        setMovies(movies.results);
      } catch (e) {
        console.log(e, 'There has been a mistake');
      }
    };
    fetchdata();
  }, [movieName]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" placeholder="Enter the movie..." />
        <Button type="submit">Search</Button>
      </form>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            {' '}
            <MovieLink to={`${movie.id}`}>
              {movie.title || movie.name}
            </MovieLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Movies;

//LOADER

//
