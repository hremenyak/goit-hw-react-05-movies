import { useEffect, useState } from 'react';
import { getCredits } from 'services/api';
// import { useParams } from 'react-router-dom';

// const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  // const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cast = await getCredits(882598);
      setCast(cast);
    };
    fetchData();
  }, []);
  if (!cast) {
    return;
  }
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img src={` ${actor.profile_path}`} alt={actor.name} />
            <p>
              <b>Name:</b> {actor.name}
            </p>
            <p>
              <b>Character:</b> {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
