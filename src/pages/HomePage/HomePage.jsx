import { useState, useEffect } from 'react';
import Status from '../../services/status';
import apiService from '../../services/apiService';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Loader/Loader';
import css from './HomePage.module.css';
import ResponsivePagination from 'react-responsive-pagination';
import '../../services/pagination.css';
import Container from 'pages/Container/Container';
import MovieList from 'components/MovieList/MovieList';


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
  <Container>
    <main className={css.main}>
      <h1 className={css.title}>Trending today</h1>
        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <Error message={error.message} />}
        {status === Status.RESOLVED && (
          <div>
            <MovieList movies={movies}/>
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
  </Container>
)
}