import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import apiService from '../../services/apiService';
import ResponsivePagination from 'react-responsive-pagination';
import Status from '../../services/status';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import Container from 'pages/Container/Container';
import Searchbar from 'components/Searchbar/Searchbar';
import '../../services/pagination.css';
import MovieList from 'components/MovieList/MovieList';

export default function MoviesPage() {
    // const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const searchRequest = searchParams.get('query');
    
      useEffect(() => {
        if(!searchRequest) return;
        setStatus(Status.PENDING);
        apiService
            .getMoviesByKeyWord(searchRequest, currentPage)
            .then(({ results, total_pages }) =>{
                if(results.length === 0) {
                    setError(`No results found for "${searchRequest}!"`);
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
      }, [searchRequest, currentPage]);

      const searchImages = value => {
        if(searchRequest === value) return;
            setSearchParams({ query: `${value}` });
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
              <div>
                <MovieList movies={movies} state={{ from: location }}/>
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
        </Container>
      )
    }