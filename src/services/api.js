import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'fb0f8889c4de169f6f8eba7a95a6c733';

// export const getTrendingMovies = async () => {
//   const response = await axios.get(`/trending/all/day?api_key=${KEY}`);
//   console.log(response.data.results);
//   return response;
// };
