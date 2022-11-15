import { getTrendingMovies } from 'services/api';
import { GlobalStyle } from './GlobalStyle';
export const App = () => {
  const result = async () => {
    const result = await getTrendingMovies();
    return result;
  };

  const value = result();

  return (
    <>
      <div>React homework template</div>
      <GlobalStyle />
    </>
  );
};

//basename to add
