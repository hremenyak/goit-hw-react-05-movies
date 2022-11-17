// import { Outlet } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { InfoLink } from './MovieDetails.styled';
import { getMovieById } from 'services/api';
import { MovieCard } from './MovieDetails.styled';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';
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

  const imageSRC = IMAGEURL + movie.poster_path;
  const userScore = Math.round((Number(movie.vote_average) * 100) / 10);
  const genres = movie.genres.map(genre => genre.name).join(' ');
  return (
    <div>
      <MovieCard>
        <div style={{ width: '600px' }}>
          {' '}
          <img src={`${imageSRC}`} alt={movie.title} width={360} height={200} />
        </div>

        <div>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>
            <b>User score:</b> {userScore}%
          </p>
          <p>
            <b>Overview:</b> <span>{movie.overview}</span>
          </p>
          <p>
            <b>
              Genres: <span>{genres}</span>
            </b>
          </p>
        </div>
      </MovieCard>
      <h3> Additional information</h3>
      <div>
        <ul>
          <li>
            <InfoLink to="cast">Cast</InfoLink>
          </li>

          <li>
            <InfoLink to="reviews"> Reviews</InfoLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

// add try catch !! to take care of errors hte english has no movie details
