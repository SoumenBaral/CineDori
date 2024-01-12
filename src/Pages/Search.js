import React from 'react';
import {useSearchParams} from 'react-router-dom'
import Cart from '../components/Cart';
import useFetch from '../hooks/useFetch';

const Search = ({apiPath}) => {
    const[searchParams] =useSearchParams()
    const queryTerm = searchParams.get('q')
    const {data:movies} = useFetch(`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`)
    return (
        <main>
            <section>
                <p className='text-xl text-gray-600 dark:text-white text-center mt-7'>
                    {movies.length===0?`No Result Found For ${queryTerm}`:`Total Found  ${movies.length}  for ${queryTerm}`}
                </p>
            </section>
            <section className='max-w-7xl mx-auto py-4'>
            <div className='flex justify-start flex-wrap'> 
                {
                    movies.map(movie=>(
                        <Cart key={movie.id} movie={movie}></Cart>
                    ))
                }
                
            </div>
 
            </section>
            
     </main>
    );
};

export default Search;