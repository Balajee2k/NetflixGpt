import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className='bg-black' >
      <div className='-mt-60 relative z-20 '>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Trending"} movies={movies.trendingAll} />
      </div>

      {/*
       Movie List- Popular Movies
        Movie Cards*n
       Movie List- Top Rated Movies
       Movie List-Trending
       Movie List- All genres 
       */
      }

    </div>
  )
};

export default SecondaryContainer;