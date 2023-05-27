// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailPage/MovieDetailsPage';
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='moviedetails' element={<MovieDetailsPage />} />
        </Route>
    </Routes>
  );
};

export default App;