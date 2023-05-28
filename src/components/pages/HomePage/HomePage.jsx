import { useState, useEffect } from 'react';
import Status from '../../../services/status';
import { Link } from 'react-router-dom';
import apiService from '../../../services/apiService';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/Loader/Loader';
import css from './HomePage.module.css';
import noPhoto from '../../../images/No_image_available.jpg';
import ResponsivePagination from 'react-responsive-pagination';
import '../../../services/pagination.css';


export default function HomePage() {

  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  

useEffect(() => {
    setStatus(Status.PENDING);
    apiService
    .getTrendingMovies(currentPage)
    .then(({ results, total_pages}) => {
        setMovies(results);
        setTotalPages(total_pages);
        setStatus(Status.RESOLVED);
    })
    .catch(error => {
        console.log(error);
        setError('Something went wrong. Please try again later.');
        setStatus(Status.REJECTED);
    })
}, [currentPage])


function handlePageChange(page) {
    setCurrentPage(page);
  };

    return (
      <main className={css.main}>
        <h1 className={css.title}>Trending today</h1>
          {status === Status.PENDING && <Loader />}
          {status === Status.REJECTED && <Error message={error.message} />}
          {status === Status.RESOLVED && (
            <div>
              <ul className={css.moviesList}>
                {movies.map(movie => (
                  <li key={movie.id} className={css.moviesItem}>
                    <Link
                      to={{
                        pathname: `movies/${movie.id}`,
                      }}
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
                </ul>
                  {totalPages > 1 && (
                    <ResponsivePagination
                        total={totalPages}
                        onPageChange={(page) => handlePageChange(page)}
                        current={currentPage}
                        previousLabel="Previous" 
                        nextLabel="Next"
                    />
                    )}
              </div>
            )}
        </main>
    )
}