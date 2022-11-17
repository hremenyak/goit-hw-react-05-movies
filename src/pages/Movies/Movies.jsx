import { useEffect, useState } from 'react';
import { getMoviesByName } from 'services/api';

const Movies = () => {
  const [movieName, setMovieName] = useState('love');
  const [movies, setMovies] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const movieName = e.target.movie.value;
    setMovieName(movieName);
  };
  useEffect(() => {
    const fetchdata = async () => {
      const movies = await getMoviesByName(movieName);
      console.log(movies.results, 'useEffect results');
      setMovies(movies.results);
    };
    fetchdata();
  }, [movieName]);

  if (!movieName) {
    return;
  }
  if (!movies) {
    return;
  }
  return (
    <div>
      <div>MOVIES</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;

//LOADER

//
