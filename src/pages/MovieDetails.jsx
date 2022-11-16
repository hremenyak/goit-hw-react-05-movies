// import { Outlet } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async movieId => {
      const movieData = await getMovieById(movieId);
      console.log(movieData);
      setMovie(movieData);
    };
    fetchData(movieId);
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <>
      <div>MovieDetails</div>
      <div>
        <h2>
          {movie.title} {movie.release_date}
        </h2>
        <p> Overview: {movie.overview}</p>
        <p> Genres: </p>
        <img src={`${movie.poster_path}`} alt={movie.title} />
      </div>
    </>
  );
};

export default MovieDetails;

// add try catch !! to take care of errors hte english has no movie details
