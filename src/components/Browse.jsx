
import Header from './Header';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';
import useTrendingAll from '../../hooks/useTrendinAll';

const Browse = () => {
  //these hooks just fetching the data from api and store data to redux store so we can usefrom here directly
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingAll();

  return (
    <div>

      <Header />
      <MainContainer />
      <SecondaryContainer />
      
      {/*
        MainContainer
         - VideoBG
         - Video Title
        
        SecondaryContainer
         - Movielist*n
          - Cards*n
        
      */}

    </div>
    
  )
}

export default Browse;