import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  console.log(movieId);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviews(movieId);
      setReviews(data);
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
          reviews.map(review => (
            <li key={review.id}>
              <p>
                <b>Author:</b> {review.author}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
      </div>
      {!reviews.length && <p>There are no reviews for this film yet.</p>}
    </>
  );
};

export default Reviews;
