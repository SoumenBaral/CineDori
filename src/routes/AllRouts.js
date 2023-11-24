import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';
import PageNotFound from '../Pages/PageNotFound';
import Search from '../Pages/Search';

const AllRouts = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MovieList/>}/>
                <Route path='movie/:id' element={<MovieDetails/>} />
                <Route path='movies/popular' element={<MovieList/>}/>
                <Route path='movies/top' element={<MovieList/>}/>
                <Route path='movies/upcoming ' element={<MovieList/>}/>
                <Route path='*' element ={<PageNotFound />} />
                <Route path='search' element={<Search />} />

            </Routes>
        </>
    );
};

export default AllRouts;