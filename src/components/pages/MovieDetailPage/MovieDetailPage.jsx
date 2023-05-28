import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import apiService from '../../../services/apiService';
import Status from '../../../services/status';
import Container from '../../../components/Loader/Loader';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/Loader/Loader';
import noPhoto from '../../../images/No_image_available.jpg';
import css from './MovieDetailPage.module.css';


export default function MovieDetailsPage() {

    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    const onGoBack = () => navigate(location?.state?.from ?? '/');

    useEffect(() => {
        setStatus(Status.PENDING);
        apiService
        .getMovieById(movie.id)
        .then(({ data }) => {
            setMovie(data);
            setStatus(Status.RESOLVED);
        })
        .catch(error => {
            console.log(error);
            setError('Something went wrong. Please try again later.');
            setStatus(Status.REJECTED);
        })
    }, [movie.id, error])

    return (
      <>
       <Container>

        <button type="button" onClick={onGoBack} className={css.button}>
            Go back
        </button>

        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <Error message={error.message} />}
        {status === Status.RESOLVED && (
            <div>
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
            to={`/movies/${movie.id}/cast`}
            className={css.link}
            activeclassname={css.activeLink}
            state={location.state}
          >
            <p className={css.cast}>Cast</p>
          </NavLink>

          <NavLink
            to={`/movies/${movie.id}/reviews`}
            className={css.link}
            activeclassname={css.activeLink}
            state={location.state}
          >
            <p className={css.reviews}>Reviews</p>
          </NavLink>
          
          <Outlet />
        </div>
       </Container>
      </>
    )
}