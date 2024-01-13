import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Backup from "../assets/logo.png";
import Button from '../components/Button'
const MovieDetails = () => {
    const params = useParams()
    console.log(params);
    const [movie,setMovie] = useState({})
    useEffect(()=>{
        async function fetchMovie(){
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0a3cc439e1d25e446ff2bf55d6b36b89`)
            const json = await response.json()
            setMovie(json)
        }
        fetchMovie()
    },[params]);

    useEffect(()=>{
        document.title =`${movie?.title}/cineDore`
    },[movie.title])
   
    const img =movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`:Backup
    return (
        <main>
           <section className='flex justify-around flex-wrap py-5'> 
            <div className='max-w-sm'>
                <img className='rounded' src={img} alt={movie.title} />

            </div>
            <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
                <h1 className='text-4xl text-center lg:text-left font-bold my-3'>{movie.title}</h1>
                <p className='my-4'>{movie.overview}</p>
                <p className='flex '>
                    {movie.genres?.map((genre)=>(
                        <span key={genre.id} className='mr-2 border rounded border-gray-200 dark:border-gray-600 p-2'>
                       {genre.name}
                    </span>
                        
                    ))}
                    
                </p>


                <div className="flex items-center my-4">
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="ms-2  text-gray-900 dark:text-white">{movie.vote_average}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <span className=" text-gray-900  dark:text-white">{movie.vote_count} reviews</span>
                </div>

                <p className='my-3'><span className='mr-2 font-bold'>Runtime : </span> {movie?.runtime} min</p>
                <p className='my-3'><span className='mr-2 font-bold'>Budget : </span> ${movie?.budget} </p>
                <p className='my-3'><span className='mr-2 font-bold'>Revenue : </span> ${movie?.revenue} </p>
                <p className='my-3'><span className='mr-2 font-bold'>Release Date : </span> {movie?.release_date} </p>
                <p className='my-3'><span className='mr-2 font-bold'>Imdb Code : </span> {movie?.imdb_id} </p>
                <Button className='my-2'><a href={`https://www.imdb.com/title/${movie?.imdb_id}`} target="_blank" rel="noreferrer" >get it</a></Button>

                
            </div>
           </section>
        </main>
    );
};

export default MovieDetails;