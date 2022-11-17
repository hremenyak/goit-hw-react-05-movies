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
  const { genres, title, release_date, overview, vote_average, poster_path } =
    movie;
  const imageSRC = IMAGEURL + poster_path;
  const userScore = Math.round((Number(vote_average) * 100) / 10);
  const movieGenres = genres.map(genre => genre.name).join(' ');
  return (
    <div>
      <MovieCard>
        <div style={{ width: '600px' }}>
          {' '}
          <img src={`${imageSRC}`} alt={title} width={360} height={200} />
        </div>

        <div>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>
            <b>User score:</b> {userScore}%
          </p>
          <p>
            <b>Overview:</b> <span>{overview}</span>
          </p>
          <p>
            <b>
              Genres: <span>{movieGenres}</span>
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
