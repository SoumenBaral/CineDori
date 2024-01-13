import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';
import PageNotFound from '../Pages/PageNotFound';
import Search from '../Pages/Search';

const AllRouts = () => {
    return (
        <div className='dark:bg-darkBg'>
            <Routes>
                <Route path='/' element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
                <Route path='movie/:id' element={<MovieDetails/>} />
                <Route path='movies/popular' element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
                <Route path='movies/top' element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}/>
                <Route path='movies/upcoming' element={<MovieList apiPath="movie/upcoming" title="upcoming"/>}/>
                <Route path='*' element ={<PageNotFound title="Page not Found"/>} />
                <Route path='search' element={<Search apiPath="search/movie"/>} />

            </Routes>
        </div>
    );
};

export default AllRouts;