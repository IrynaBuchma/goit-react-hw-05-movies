import { useState, useEffect } from 'react';
import Status from '../../../services/status';
import { useParams } from 'react-router-dom';
import apiService from '../../../services/apiService';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import noPhoto from '../../../images/No_image_available.jpg';
import css from './Cast.module.css';

export default function HomePage() {

    const [movieId] = useParams();
    const [actors, setActors] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);
    
  
  useEffect(() => {
     
      apiService
      .getCastInfo(movieId)
      .then(cast => {
        if(cast.length === 0) {
            setStatus(Status.IDLE);
            return;
        }
          setActors(cast);
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
        {status === Status.REJECTED && <Error message={error.message} />}
        {status === Status.RESOLVED && (
            <ul className={css.cast}>
                {actors.map(actor => (
                  <li key={actor.id} className={css.castItem}>
                    <img 
                        src={
                         actor.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                          : noPhoto
                        }
                        alt={actor.original_name}
                        className={css.castImg}
                    />
                     <h4 className={css.name}>{actor.original_name}</h4>
                     <span className={css.character}>{actor.character}</span>
                  </li>
                ))}
            </ul>
        )}
         {status === Status.IDLE && (
            <p>We do not have any cast for this movie</p>
         )}
    </>
  )
}