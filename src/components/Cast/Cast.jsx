import { useEffect, useState } from 'react';
import { getCredits } from 'services/api';
import { useParams } from 'react-router-dom';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cast = await getCredits(movieId);
      setCast(cast);
    };
    fetchData();
  }, [movieId]);
  if (!cast) {
    return;
  }

  return (
    <div>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img src={`${IMAGEURL + profile_path}`} alt={name} width={200} />
            <p>
              <b>Name:</b> {name}
            </p>
            <p>
              <b>Character:</b> {character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
