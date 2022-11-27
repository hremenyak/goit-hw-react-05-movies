import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMoviesByName } from 'services/api';
import { List, ListItem, MovieLink, Form } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const movieName = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    if (!query) {
      toast('Enter please a movie name.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
    setSearchParams(query !== '' ? { query } : {});
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
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [movieName]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          placeholder="Enter the movie..."
          autoComplete="off"
          color="secondary"
          defaultValue={movieName}
        />
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          size="small"
          endIcon={<AiOutlineSearch />}
        >
          Search
        </Button>
      </Form>
      <ToastContainer />
      <>
        {isLoading && <p>Loading...</p>}
        {movieName && (
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
      </>
    </div>
  );
};

export default Movies;
