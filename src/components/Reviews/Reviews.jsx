import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { Item, Wrapper } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (e) {
        console.log(e, 'There has been a mistake');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Wrapper>
          {reviews.length > 0 &&
            reviews.map(({ id, author, content }) => (
              <Item key={id}>
                <p>
                  <b>Author: {author}</b>
                </p>
                <p>"{content}"</p>
              </Item>
            ))}
        </Wrapper>
      )}
      {!reviews.length && <p>There are no reviews for this film yet.</p>}
    </div>
  );
};

export default Reviews;
