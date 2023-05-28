// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailPage/MovieDetailPage';
import Cast from '../components/pages/Cast/Cast';
import Reviews from '../components/pages/Reviews/Reviews';
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:movieId/' element={<MovieDetailsPage />} />
              <Route path='/movies/:movieId/cast' element={<Cast />} />
              <Route path='/movies/:movieId/reviews' element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;