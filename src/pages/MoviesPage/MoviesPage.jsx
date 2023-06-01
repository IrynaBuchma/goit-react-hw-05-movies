import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import apiService from '../../services/apiService';
import ResponsivePagination from 'react-responsive-pagination';
import Status from '../../services/status';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import noPhoto from '../../images/No_image_available.jpg';
import Container from 'pages/Container/Container';
import Searchbar from 'components/Searchbar/Searchbar';
import css from './MoviesPage.module.css';
import '../../services/pagination.css';

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    const location = useLocation();
    
   
      useEffect(() => {
        if(!query) return;
        setStatus(Status.PENDING);
        apiService
            .getMoviesByKeyWord(query, currentPage)
            .then(({ results, total_pages }) =>{
                if(results.length === 0) {
                    setError(`No results found for "${query}!"`);
                    setStatus(Status.REJECTED);
                    return;
                }
                setMovies(results);
                setTotalPages(total_pages);
                setStatus(Status.RESOLVED);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setStatus(Status.REJECTED);
            })
      }, [query, currentPage]);

      const searchImages = newSearch => {
        if(query === newSearch) return;
            setQuery(newSearch);
            setMovies(null);
            setError(null);
            setStatus(Status.IDLE);
      }

      function handlePageChange(page) {
        setCurrentPage(page);
      };

      return (
        <Container>
            <Searchbar onHandleSubmit={searchImages}/>
            {status === Status.PENDING && <Loader />}
            {status === Status.REJECTED && <Error message={error.message} />}
            {status === Status.RESOLVED && (
              <>
                <ul className={css.moviesList}>
                {movies.map(movie => (
                    <li key={movie.id} className={css.moviesItem}>
                    <Link
                      to={`${movie.id}`} state={{ from: location }}
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
              </>  
            )}
        </Container>
      )
    }