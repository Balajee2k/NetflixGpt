import MovieList from './MovieList';
import {useSelector} from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector((state)=>state.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />

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