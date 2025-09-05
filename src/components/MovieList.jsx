import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies);
    
    // Add null check to prevent error
    if (!movies) return null;
    
    return (
        <div className='px-6'>
            <h1 className='text-3xl text-white font-bold py-4'>{title}</h1>
            <div className='overflow-x-scroll overflow-y-hidden flex space-x-3'>
                <div className='flex space-x-3'>
                    {movies?.map(movie=>
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    )}
                </div>
            </div>
        </div>
    )
};

export default MovieList;