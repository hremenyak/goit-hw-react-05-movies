import { useEffect, useState } from 'react';
import { getMoviesByName } from 'services/api';

const Movies = () => {
  const [value, setValue] = useState('love');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  useEffect(() => {
    const fetchdata = async () => {
      const movie = await getMoviesByName(value);
      console.log(movie);
    };
    fetchdata();
  }, [value]);

  if (!value) {
    return;
  }
  return (
    <div>
      <div>MOVIES</div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;

//LOADER

//fix when the value is an empty string  and when handle change or handle submit??
