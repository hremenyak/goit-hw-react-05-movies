import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'fb0f8889c4de169f6f8eba7a95a6c733';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`);
  console.log(data.results);
  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
  return data;
};

export const getCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  console.log(data.cast);
  return data.cast;
};
export const getReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  console.log(data.results, 'reviews'); // ARRAY OF OBJECTS
  return data.results;
};
