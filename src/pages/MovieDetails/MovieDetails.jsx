import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  InfoItem,
  InfoLink,
  Title,
  Wrapper,
  ImageWrapper,
  ExtraInfoSection,
  ListItem,
  ExtraInfoTitle,
} from './MovieDetails.styled';
import { getMovieById } from 'services/api';
import { MovieCard } from './MovieDetails.styled';
import blankImage from '../../images/white_image.png';
import BackButton from 'components/BackButton/BackButton';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movieData = await getMovieById(movieId);

        setMovie(movieData);
      } catch (e) {
        console.log(e, 'There has been a mistake.');
      } finally {
        setIsLoading(false);
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
  const releaseDate = release_date.slice(0, 4);
  return (
    <>
      <Wrapper>
        <BackButton>Go back</BackButton>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <MovieCard>
            <ImageWrapper>
              <img src={`${imageSRC}`} alt={title} width={360} height={200} />
            </ImageWrapper>
            <div>
              <Title>
                {title} {`(${releaseDate})`}
              </Title>
              <ul>
                <InfoItem>
                  <p>User Score: {userScore}%</p>
                </InfoItem>
                <InfoItem>
                  <b>Overview</b>

                  <p>{overview}</p>
                </InfoItem>
                <InfoItem>
                  <b>Genres</b>

                  <p>{movieGenres}</p>
                </InfoItem>
              </ul>
            </div>
          </MovieCard>
        )}
      </Wrapper>
      <ExtraInfoSection>
        <ExtraInfoTitle> Additional information</ExtraInfoTitle>
        <div>
          <ul>
            <ListItem>
              <InfoLink to="cast">Cast</InfoLink>
            </ListItem>

            <ListItem>
              <InfoLink to="reviews"> Reviews</InfoLink>
            </ListItem>
          </ul>
        </div>
      </ExtraInfoSection>

      <Outlet />
    </>
  );
};

export default MovieDetails;

// lazy and suspense???
