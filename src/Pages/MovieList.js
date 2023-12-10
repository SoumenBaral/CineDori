import React from 'react';
import Cart from '../components/Cart';


const MovieList = () => {
    return (
        <main>
           <section className='max-w-7xl mx-auto py-4'>
            <div className='flex justify-start flex-wrap'> 
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                

            </div>

           </section>
            
        </main>
    );
};

export default MovieList;