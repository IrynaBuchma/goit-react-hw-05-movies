// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='movies/:movieId' element={<MovieDetailsPage />} />
              <Route path='cast' element={<Cast />} />
              <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;