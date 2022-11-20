import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { TiChevronLeft } from 'react-icons/ti';
import { getMovieById } from 'services/api';
import blankImage from '../../images/white_image.png';
import {
  MovieCard,
  InfoItem,
  InfoLink,
  Title,
  Wrapper,
  ImageWrapper,
  ExtraInfoSection,
  ListItem,
  ExtraInfoTitle,
  MovieInfo,
  BackButton,
} from './MovieDetails.styled';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const handleGoBackButton = () => {
    navigate(location.state.from);
  };
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
        {location.state?.from && (
          <BackButton onClick={handleGoBackButton}>
            <TiChevronLeft />
            <span>Go back</span>
          </BackButton>
        )}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <MovieCard>
            <ImageWrapper>
              <img src={`${imageSRC}`} alt={title} />
            </ImageWrapper>
            <MovieInfo>
              <Title>
                {title} {releaseDate && `(${releaseDate})`}
              </Title>
              <ul>
                <InfoItem>
                  {userScore > 0 && <p>User Score: {userScore}%</p>}
                </InfoItem>
                <InfoItem>
                  <b>Overview</b>

                  <p>{overview}</p>
                </InfoItem>
                <InfoItem>
                  <b>Genres</b>

                  <p>{movieGenres || ' - '}</p>
                </InfoItem>
              </ul>
            </MovieInfo>
          </MovieCard>
        )}
      </Wrapper>
      <ExtraInfoSection>
        <ExtraInfoTitle> Additional information</ExtraInfoTitle>
        <div>
          <ul>
            <ListItem>
              <InfoLink to="cast" state={location.state}>
                Cast
              </InfoLink>
            </ListItem>

            <ListItem>
              <InfoLink to="reviews" state={location.state}>
                Reviews
              </InfoLink>
            </ListItem>
          </ul>
        </div>
      </ExtraInfoSection>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
