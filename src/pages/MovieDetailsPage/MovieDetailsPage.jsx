import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import apiService from '../../services/apiService';
import Status from '../../services/status';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Loader/Loader';
import noPhoto from '../../images/No_image_available.jpg';
import css from './MovieDetailsPage.module.css';
import Container from 'pages/Container/Container';

export default function MovieDetailsPage() {

    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    const { movieId} = useParams();

    useEffect(() => {
        setStatus(Status.PENDING);
        apiService
        .getMovieById(movieId)
        .then((data) => {
            setMovie(data);
            setStatus(Status.RESOLVED);
        })
        .catch(error => {
            console.log(error);
            setError('Something went wrong. Please try again later.');
            setStatus(Status.REJECTED);
        })
    }, [movieId, error]);

    const onGoBack = () => navigate(location?.state?.from ?? '/');

    return (
        <Container>
        <button type="button" onClick={onGoBack} className={css.button}>
            Go back
        </button>

        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <Error message={error.message} />}
        {status === Status.RESOLVED && (
            <div className={css.movies}>
              <img 
                src={
                    movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : noPhoto
                  } 
                alt={movie.title}
                width="270"
              />
              <div className={css.about}>
                  <h1 className={css.mainTitle}>{movie.title} </h1>
                  <p className={css.score}>
                    User Score: {movie.vote_average * 10}%
                  </p>
                  <h3 className={css.title}>
                      Overview
                      <span className={css.description}>{movie.overview}</span>
                  </h3>
                  {movie.genres && (
                    <>
                      <h3 className={css.title}>Genres</h3>
                      <ul className={css.genre}>
                        {movie.genres.map(genre => (
                          <li key={genre.id}>{genre.name}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
            </div>
            
        )}
        
        <div className={css.navigation}>
          <h2 className={css.information}>Additional Information</h2>
          <NavLink
            to={`cast`} state={{ from: location }}
            className={css.link}
            activeclassname={css.activeLink}
          >
            <p className={css.cast}>Cast</p>
          </NavLink>

          <NavLink
            to={`reviews`} state={{ from: location }}
            className={css.link}
            activeclassname={css.activeLink}
          >
            <p className={css.reviews}>Reviews</p>
          </NavLink>
          
          <Outlet />
        </div>
      </Container>
    )
}