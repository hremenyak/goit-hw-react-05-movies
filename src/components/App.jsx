import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { GlobalStyle } from './GlobalStyle';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import SharedLayout from './SharedLayout/SharedLayout';
import MovieDetails from 'pages/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trendingMovies = await getTrendingMovies();
      setTrendingMovies(trendingMovies);
    };
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home trending={trendingMovies} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
          {/* <Route path="cast" element={<Cast />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
