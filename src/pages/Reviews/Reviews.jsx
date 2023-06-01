import { useState, useEffect } from 'react';
import Status from '../../services/status';
import { useParams } from 'react-router-dom';
import apiService from '../../services/apiService';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import css from './Reviews.module.css';

export default function HomePage() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);
    
  
  useEffect(() => {
     
      apiService
      .getMovieReview(movieId)
      .then(results => {
        if(results.length === 0) {
            setStatus(Status.IDLE);
            return;
        }
          setReviews(results);
          setStatus(Status.RESOLVED);
      })
      .catch(error => {
          console.log(error);
          setError(error);
          setStatus(Status.REJECTED);
      })
  }, [movieId, error]);

  return (
    <>
        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <Error message={error} />}
        {status === Status.RESOLVED && (
            <ul className={css.review}>
                {reviews.map(review => (
                  <li key={review.id} className={css.item}>
                    <h2 className={css.author}>{review.author}</h2>
                        <p length={700}>
                        {review.content}
                        </p>
                  </li>
                ))}
            </ul>
        )}
         {status === Status.IDLE && (
            <p>We do not have any review for this movie</p>
         )}
        {status === Status.REJECTED && <p>{error.message}</p>}
    </>
  )
}