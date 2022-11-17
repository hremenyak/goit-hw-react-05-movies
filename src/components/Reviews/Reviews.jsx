import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  console.log(movieId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (e) {
        console.log(e, 'There has been a mistake');
      }
    };
    fetchData();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      <div>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
      </div>
      {!reviews.length && <p>There are no reviews for this film yet.</p>}
    </>
  );
};

export default Reviews;
