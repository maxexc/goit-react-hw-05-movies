import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { List } from './Reviews.styled';
import Loader from 'components/Loader/Loader';
import { getMovieReviews } from 'services/movieApi';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);

    async function fetchReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        if (reviews.length === 0) {
          setError(true);
          return toast('Sorry, there are no reviews');
        }
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <List>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </List>
      {error && <p>We don't have reviews for this movie</p>}
      {loader && <Loader />}
    </>
  );
}