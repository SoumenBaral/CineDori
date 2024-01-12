import Cart from '../components/Cart';
import useFetch from '../hooks/useFetch';


const MovieList = ({apiPath}) => {

 const {data:movies} = useFetch(`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`)
 console.log(apiPath);
    return (
        <main>
           <section className='max-w-7xl mx-auto py-4'>
            <div className='flex justify-start flex-wrap other:justify-evenly'> 
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