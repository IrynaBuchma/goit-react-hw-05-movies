import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from './Loader/Loader';

const Layout = lazy(() => import('./Layout/Layout'));

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));

const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));


const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='movies' element={<MoviesPage />} />
              <Route path='movies/:movieId' element={<MovieDetailsPage />} >
                <Route path='cast' element={<Cast />} />
                <Route path='reviews' element={<Reviews />} />
              </Route>
          </Route>
          <Route path="*" element={<Navigate to={'/'}/>} />
      </Routes>
    </Suspense>
  );
};

export default App;