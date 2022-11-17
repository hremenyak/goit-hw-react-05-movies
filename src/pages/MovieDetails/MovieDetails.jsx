import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { InfoLink } from './MovieDetails.styled';
import { getMovieById } from 'services/api';
import { MovieCard } from './MovieDetails.styled';
import blankImage from '../../images/white_image.png';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getMovieById(movieId);

        setMovie(movieData);
      } catch (e) {
        console.log(e, 'There has been a mistake.');
      }
    };
    fetchData();
  }, [movieId]);

  if (!movie) {
    return;
  }
  const { genres, title, release_date, overview, vote_average, poster_path } =
    movie;
  const imageSRC = poster_path ? IMAGEURL + poster_path : blankImage;
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
          <ul>
            <li>
              <b>User score:</b>
              <p>{userScore}%</p>
            </li>
            <li>
              <b>Overview:</b>

              <p>{overview}</p>
            </li>
            <li>
              <b>Genres:</b>

              <p>{movieGenres}</p>
            </li>
          </ul>
        </div>
      </MovieCard>
      <div>
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
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetails;

// add try catch !! to take care of errors hte english has no movie details
