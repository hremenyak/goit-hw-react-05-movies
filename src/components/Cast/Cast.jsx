import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/api';
import blankImage from '../../images/blank_profile.png';
import { ListItem, Section, List } from './Cast.styled';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const cast = await getCredits(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  if (!cast) {
    return;
  }

  return (
    <Section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List>
          {cast.map(({ id, profile_path, name, character }) => {
            const imageSRC = profile_path
              ? IMAGEURL + profile_path
              : blankImage;
            return (
              <ListItem key={id}>
                <img src={imageSRC} alt={name} width={200} height={300} />
                <div>
                  <p>
                    <span>{name}</span>
                  </p>
                  {character ? (
                    <p>
                      <b>Character:</b>
                      <span> {character}</span>
                    </p>
                  ) : (
                    <p>
                      <b>Character:</b>
                      <span> Unknown</span>
                    </p>
                  )}
                </div>
              </ListItem>
            );
          })}
        </List>
      )}
      {!cast.length && (
        <p>There is no information about the cast of this film yet. Sorry...</p>
      )}
    </Section>
  );
};

export default Cast;
