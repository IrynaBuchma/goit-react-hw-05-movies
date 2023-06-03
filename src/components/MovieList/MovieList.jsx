import { Link } from 'react-router-dom';
import css from './MovieList.module.css';
import noPhoto from '../../images/No_image_available.jpg'

const MovieList = ({ movies, state }) => {
    return (
        <>
        {<ul className={css.moviesList}>
              {movies.map(movie => (
                <li key={movie.id} className={css.moviesItem}>
                  <Link
                    to={`/movies/${movie.id}`} state={state}
                    className={css.link}
                  >
                    <img 
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                          : noPhoto
                          } 
                      alt={movie.title}
                      className={css.poster}
                    />
                  </Link>
                  <span className={css.movieTitle}>{movie.title}</span>
                </li>
              ))}
            </ul>}
        </>
    )
}

export default MovieList;