import Cart from '../components/Cart';
import useFetch from '../hooks/useFetch';


const MovieList = () => {

 const {data:movies} = useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
    return (
        <main>
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

export default MovieList;