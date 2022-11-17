import { useEffect, useState } from 'react';
import { getCredits } from 'services/api';
import { useParams } from 'react-router-dom';
import blankImage from '../../images/blank_profile.png';
import { ListItem, Section } from './Cast.styled';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await getCredits(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e, 'There has been a mistake');
      }
    };
    fetchData();
  }, [movieId]);
  if (!cast) {
    return;
  }

  return (
    <Section>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => {
          const imageSRC = profile_path ? IMAGEURL + profile_path : blankImage;
          return (
            <ListItem key={id}>
              <img src={imageSRC} alt={name} width={200} />
              <div>
                {' '}
                <p>
                  <span>{name}</span>
                </p>
                <p>
                  <b>Character:</b>
                  <span> {character}</span>
                </p>
              </div>
            </ListItem>
          );
        })}
      </ul>
    </Section>
  );
};

export default Cast;
