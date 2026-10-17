import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { MovieDetail, MoviesList, PageNotFound, Search } from '../pages';
export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MoviesList apiPath="movie/now_playing" />} />
                <Route path="movies/top" element={<MoviesList apiPath="movie/top_rated" />} />
                <Route path="movies/popular" element={<MoviesList apiPath="movie/popular" />} />
                <Route path="movies/upcoming" element={<MoviesList apiPath="movie/upcoming" />} />
                <Route path="search" element={<Search apiPath="search/movie" />} />
                <Route path="movie/:id" element={<MovieDetail />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
