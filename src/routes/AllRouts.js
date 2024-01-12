import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';
import PageNotFound from '../Pages/PageNotFound';
import Search from '../Pages/Search';

const AllRouts = () => {
    return (
        <div className='dark:bg-slate-800'>
            <Routes>
                <Route path='/' element={<MovieList apiPath="movie/now_playing"/>}/>
                <Route path='movie/:id' element={<MovieDetails/>} />
                <Route path='movies/popular' element={<MovieList apiPath="movie/popular"/>}/>
                <Route path='movies/top' element={<MovieList apiPath="movie/top_rated"/>}/>
                <Route path='movies/upcoming' element={<MovieList apiPath="movie/upcoming"/>}/>
                <Route path='*' element ={<PageNotFound />} />
                <Route path='search' element={<Search />} />

            </Routes>
        </div>
    );
};

export default AllRouts;