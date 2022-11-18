import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { GlobalStyle } from './GlobalStyle';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import SharedLayout from './SharedLayout/SharedLayout';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (e) {
        console.log(e, 'trending error');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<Home trending={trendingMovies} loading={isLoading} />}
          />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </>
  );
};

// lazy && suspense
//back link
// error handling
//loaders
//pages vs components
//images - css
